/**
 * ==============================================================================
 * MANGKASARA — KOMPONEN NAVBAR & NAVIGASI
 * ==============================================================================
 * File ini mengatur interaktivitas navigasi:
 * 1. Menandai link menu aktif (active state) sesuai halaman yang sedang dibuka.
 * 2. Mengatur pembukaan dan penutupan dropdown menu mobile langsung di bawah navbar.
 * 3. Mendukung navigasi keyboard (Escape untuk menutup) dan deteksi klik di luar menu.
 *
 * Catatan Arsitektur Semester 1:
 * Fitur Favorit aktif (LocalStorage/Database) ditangguhkan ke Semester 2 sesuai PRD v3.0.
 * Tidak ada badge counter aktif di navbar pada Semester 1.
 * ==============================================================================
 */

/**
 * Menginisialisasi seluruh fungsionalitas navigasi setelah DOM siap.
 */
function initNavbar() {
  highlightActiveNavLink();
  initMobileMenu();
}

/**
 * Menyoroti link navigasi yang sesuai dengan halaman saat ini.
 *
 * Alur Logika:
 * 1. Ambil nama file dari `window.location.pathname` (misal: "explore.html").
 * 2. Jika path adalah "/" atau kosong atau "index.html", jadikan "index.html" sebagai default.
 * 3. Bandingkan dengan atribut `href` pada setiap link di navbar.
 * 4. Tambahkan class `active` pada link yang cocok dan beri atribut `aria-current="page"`.
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  let currentPage = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  // Jika membuka root folder atau kosong, anggap sebagai index.html
  if (!currentPage || currentPage === "") {
    currentPage = "index.html";
  }

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (!linkHref) return;

    // Bersihkan query string jika ada pada href
    const cleanHref = linkHref.split("?")[0];

    if (cleanHref === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

/**
 * Mengatur aksi buka-tutup dropdown menu mobile tepat di bawah navbar.
 *
 * Desain Bersih:
 * - Menggunakan dropdown horizontal di bawah bar navbar.
 * - Tidak menggunakan backdrop gelap layar penuh.
 * - Tidak mengunci scroll pada elemen body.
 * - Menutup otomatis ketika klik di luar, tekan Escape, atau klik tautan.
 */
function initMobileMenu() {
  const hamburgerBtn = document.querySelector(".btn-mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (!hamburgerBtn || !navMenu) return;

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle("is-open");
    hamburgerBtn.classList.toggle("is-active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  function closeMenu() {
    navMenu.classList.remove("is-open");
    hamburgerBtn.classList.remove("is-active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  // Toggle dropdown saat tombol hamburger ditekan
  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Tutup menu jika pengguna mengklik di luar area menu dan tombol hamburger
  document.addEventListener("click", (e) => {
    if (navMenu.classList.contains("is-open")) {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // Tutup menu jika salah satu link di dalam menu diklik
  const menuLinks = navMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Aksesibilitas: Tutup menu jika pengguna menekan tombol Escape pada keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
      closeMenu();
      hamburgerBtn.focus();
    }
  });
}

/**
 * Fungsi pembantu yang dipertahankan sebagai no-op yang aman untuk Semester 1.
 */
function updateNavbarFavoritesCount() {
  // Tidak ada badge favorit aktif di Semester 1
}

// Jalankan inisialisasi navbar otomatis saat halaman selesai dimuat
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavbar);
} else {
  initNavbar();
}
