/**
 * ==============================================================================
 * MANGKASARA — KOMPONEN NAVBAR & NAVIGASI
 * ==============================================================================
 * File ini mengatur interaktivitas navigasi:
 * 1. Menandai link menu aktif (active state) sesuai halaman yang sedang dibuka.
 * 2. Membuka dan menutup menu navigasi mobile (hamburger drawer).
 * 3. Menghitung dan memperbarui badge jumlah kuliner favorit di navbar.
 * ==============================================================================
 */

/**
 * Menginisialisasi seluruh fungsionalitas navigasi setelah DOM siap.
 *
 * Mengapa fungsi ini diperlukan:
 * Menjamin bahwa elemen HTML navbar sudah terpasang di dokumen sebelum
 * kita mencoba menambahkan class atau event listener.
 *
 * Method yang digunakan:
 * - `DOMContentLoaded`: Event browser yang menandakan struktur HTML selesai dimuat.
 * - `querySelector()` dan `querySelectorAll()`: Mengambil elemen DOM berdasarkan CSS selector.
 */
function initNavbar() {
  highlightActiveNavLink();
  initMobileMenu();
  updateNavbarFavoritesCount();
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
 * Mengatur aksi buka-tutup menu mobile (hamburger menu).
 *
 * Method yang digunakan:
 * - `addEventListener('click')`: Mendengarkan klik pada tombol hamburger atau backdrop.
 * - `classList.toggle()`: Menambah atau menghapus class 'is-open' pada menu.
 * - `setAttribute('aria-expanded')`: Memperbarui status aksesibilitas untuk screen reader.
 */
function initMobileMenu() {
  const hamburgerBtn = document.querySelector(".btn-mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  const backdrop = document.querySelector(".nav-backdrop");

  if (!hamburgerBtn || !navMenu) return;

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle("is-open");
    hamburgerBtn.classList.toggle("is-active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");

    if (backdrop) {
      backdrop.classList.toggle("is-visible", isOpen);
    }

    // Kunci scroll halaman saat menu mobile terbuka
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  function closeMenu() {
    navMenu.classList.remove("is-open");
    hamburgerBtn.classList.remove("is-active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    if (backdrop) {
      backdrop.classList.remove("is-visible");
    }
    document.body.style.overflow = "";
  }

  hamburgerBtn.addEventListener("click", toggleMenu);

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  // Tutup menu jika salah satu link di klik
  const menuLinks = navMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Tutup menu jika pengguna menekan tombol Escape pada keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });
}

/**
 * Memperbarui angka indikator (badge) favorit yang ada di sebelah menu "Favorit".
 *
 * Mengapa fungsi ini diperlukan:
 * Memberi feedback visual langsung kepada pengguna bahwa ada kuliner yang tersimpan.
 */
function updateNavbarFavoritesCount() {
  const badgeElements = document.querySelectorAll(".favorites-count-badge");
  if (!badgeElements.length) return;

  const count = typeof getFavorites === "function" ? getFavorites().length : 0;

  badgeElements.forEach((badge) => {
    badge.textContent = count;
    // Sembunyikan badge jika 0 agar tampilan tetap bersih
    badge.style.display = count > 0 ? "inline-flex" : "none";
  });
}

// Jalankan inisialisasi navbar otomatis saat halaman selesai dimuat
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavbar);
} else {
  initNavbar();
}
