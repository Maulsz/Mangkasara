/**
 * ==============================================================================
 * MANGKASARA — PAGE TRANSITION & PROGRESS INDICATOR
 * ==============================================================================
 * Komponen ini mengatur:
 * 1. Indikator garis progres tipis (terracotta line) di bagian paling atas viewport
 *    saat pengguna menavigasi antar-halaman internal website.
 * 2. Animasi masuk konten halaman (page entrance animation) yang halus tanpa
 *    menyebabkan layout shift.
 * 3. Menghormati pengaturan aksesibilitas sistem (prefers-reduced-motion).
 * 4. Tidak menginterupsi klik tombol pengubah (Ctrl/Cmd/Shift), pembukaan tab baru,
 *    anchor dalam halaman yang sama (#categories), maupun tautan eksternal.
 * ==============================================================================
 */

/**
 * Inisialisasi sistem transisi halaman dan indikator progres.
 */
function initPageTransitions() {
  // 1. Buat elemen garis progres tipis di atas layar jika belum ada
  let progressBar = document.getElementById("page-progress-bar");
  if (!progressBar) {
    progressBar = document.createElement("div");
    progressBar.id = "page-progress-bar";
    progressBar.setAttribute("aria-hidden", "true");
    document.body.prepend(progressBar);
  }

  // 2. Beri efek animasi masuk yang halus pada konten utama (main)
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.classList.add("page-content-enter");
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
    // Cari elemen tautan terdekat
    const anchor = event.target.closest("a");
    if (!anchor) return;

    // Abaikan jika aksi default sudah dibatalkan
    if (event.defaultPrevented) return;

    // Abaikan jika klik dengan tombol tengah / klik kanan
    if (event.button !== 0) return;

    // Abaikan jika ditekan bersama tombol modifier (membuka tab/jendela baru)
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    // Abaikan tautan dengan target _blank
    if (anchor.target === "_blank") return;

    // Abaikan atribut download
    if (anchor.hasAttribute("download")) return;

    const href = anchor.getAttribute("href");
    if (!href) return;

    // Abaikan tautan anchor di halaman yang sama (misal: #categories)
    if (href.startsWith("#")) return;

    // Abaikan tautan protokol khusus
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
      return;
    }

    // Periksa apakah tautan mengarah ke halaman internal proyek (relatif atau host sama)
    const isInternal =
      !href.startsWith("http://") &&
      !href.startsWith("https://") &&
      !href.startsWith("//");
    const isSameHost = anchor.origin === window.location.origin;

    if (isInternal || isSameHost) {
      // Periksa apakah hanya berpindah hash pada URL yang sama persis
      const targetUrl = new URL(anchor.href, window.location.href);
      if (
        targetUrl.pathname === window.location.pathname &&
        targetUrl.search === window.location.search &&
        targetUrl.hash !== ""
      ) {
        return;
      }

      // Tampilkan garis progres tipis secara halus
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
  window.addEventListener("pageshow", () => {
    if (progressBar) {
      progressBar.classList.remove("is-active");
      progressBar.style.width = "0%";
    }
  });
}

// Jalankan saat struktur dokumen telah siap
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPageTransitions);
} else {
  initPageTransitions();
}
