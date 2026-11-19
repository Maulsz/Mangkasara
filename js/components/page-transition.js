/**
 * ==============================================================================
 * MANGKASARA — PAGE TRANSITION & INITIAL ENTRANCE SYSTEM
 * ==============================================================================
 * Komponen ini mengatur:
 * 1. Indikator garis progres tipis (terracotta line) di bagian paling atas viewport
 *    saat pengguna menavigasi antar-halaman internal website.
 * 2. Animasi masuk Fade-Up awal yang halus, konsisten, dan efisien HANYA pada saat
 *    halaman pertama kali dimuat (Page Load Only).
 * 3. Bebas dari IntersectionObserver: Scrolling TIDAK memicu animasi entrance.
 * 4. Setelah animasi masuk selesai, elemen dibersihkan menjadi elemen statis normal
 *    sehingga efek hover lift pada kartu dan tombol bekerja secara mulus dan instan.
 * 5. Menghormati pengaturan aksesibilitas sistem (prefers-reduced-motion: reduce).
 * ==============================================================================
 */

// Menandai fase inisialisasi pemuatan halaman awal
let isInitialPageLoad = true;
const ENTRANCE_CLEANUP_DELAY = 620; // 380ms durasi + maks 200ms stagger + 40ms buffer

/**
 * Membersihkan kelas .fade-up dan atribut data-delay dari elemen
 * agar kembali ke kondisi statis murni tanpa efek samping ke interaksi hover.
 *
 * @param {HTMLElement|Document} [root=document]
 */
function cleanStaticElements(root = document) {
  const elements = root.querySelectorAll(".fade-up");
  elements.forEach((el) => {
    el.classList.remove("fade-up");
    el.removeAttribute("data-delay");
  });
}

/**
 * Memulai animasi Fade-Up awal saat halaman pertama kali dimuat.
 */
function initPageEntrance() {
  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isReducedMotion) {
    isInitialPageLoad = false;
    cleanStaticElements(document);
    return;
  }

  // Aktifkan CSS animasi masuk awal
  document.documentElement.classList.add("page-animating");

  // Pasang listener animationend pada setiap elemen fade-up untuk pembersihan instan saat selesai
  const elements = document.querySelectorAll(".fade-up");
  elements.forEach((el) => {
    el.addEventListener(
      "animationend",
      () => {
        el.classList.remove("fade-up");
        el.removeAttribute("data-delay");
      },
      { once: true }
    );
  });

  // Master timer untuk memastikan semua elemen dan root class dibersihkan secara tuntas
  setTimeout(() => {
    document.documentElement.classList.remove("page-animating");
    cleanStaticElements(document);
    isInitialPageLoad = false;
  }, ENTRANCE_CLEANUP_DELAY);
}

/**
 * Fungsi pembantu yang dipanggil oleh modul halaman (home.js, explore.js, detail.js).
 * - Saat page load awal: memastikan elemen baru terdaftar dalam animasi masuk.
 * - Setelah page load awal selesai (misal filter/pencarian): langsung membersihkan .fade-up agar statis.
 *
 * @param {HTMLElement} [container=document]
 */
function initFadeUpAnimations(container = document) {
  if (!container || !container.querySelectorAll) return;

  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isReducedMotion || !isInitialPageLoad) {
    cleanStaticElements(container);
    return;
  }

  // Jika masih dalam jendela page load awal, pasang listener pembersih setelah animasi selesai
  const elements = container.querySelectorAll(".fade-up");
  elements.forEach((el) => {
    el.addEventListener(
      "animationend",
      () => {
        el.classList.remove("fade-up");
        el.removeAttribute("data-delay");
      },
      { once: true }
    );
  });
}

// Ekspos ke global window untuk kompatibilitas modul
window.initFadeUpAnimations = initFadeUpAnimations;

/**
 * Inisialisasi sistem transisi halaman dan indikator progres.
 */
function initPageTransitions() {
  // 1. Inisialisasi animasi masuk awal halaman (Page Load Only)
  initPageEntrance();

  // 2. Buat elemen garis progres tipis di atas layar jika belum ada
  let progressBar = document.getElementById("page-progress-bar");
  if (!progressBar) {
    progressBar = document.createElement("div");
    progressBar.id = "page-progress-bar";
    progressBar.setAttribute("aria-hidden", "true");
    document.body.prepend(progressBar);
  }

  // 3. Efek kilas progres selesai saat halaman pertama kali selesai dimuat
  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!isReducedMotion && progressBar) {
    progressBar.classList.add("is-active");
    progressBar.style.width = "100%";
    setTimeout(() => {
      progressBar.classList.remove("is-active");
      progressBar.style.width = "0%";
    }, 220);
  }

  // 4. Pasang pendengar klik pada dokumen untuk mendeteksi navigasi halaman internal
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest("a");
    if (!anchor) return;

    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (anchor.target === "_blank") return;
    if (anchor.hasAttribute("download")) return;

    const href = anchor.getAttribute("href");
    if (!href) return;
    if (href.startsWith("#")) return;
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
      return;
    }

    const isInternal =
      !href.startsWith("http://") &&
      !href.startsWith("https://") &&
      !href.startsWith("//");
    const isSameHost = anchor.origin === window.location.origin;

    if (isInternal || isSameHost) {
      const targetUrl = new URL(anchor.href, window.location.href);
      if (
        targetUrl.pathname === window.location.pathname &&
        targetUrl.search === window.location.search &&
        targetUrl.hash !== ""
      ) {
        return;
      }

      if (!isReducedMotion && progressBar) {
        progressBar.classList.add("is-active");
        progressBar.style.width = "30%";
        setTimeout(() => {
          progressBar.style.width = "75%";
        }, 100);
      }
    }
  });

  // 5. Tangani pemulihan dari BFCache saat pengguna menekan tombol Back/Forward browser
  window.addEventListener("pageshow", (event) => {
    if (progressBar) {
      progressBar.classList.remove("is-active");
      progressBar.style.width = "0%";
    }
    document.documentElement.classList.remove("page-animating");
    cleanStaticElements(document);
    isInitialPageLoad = false;
  });
}

// Jalankan saat struktur dokumen telah siap
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPageTransitions);
} else {
  initPageTransitions();
}
