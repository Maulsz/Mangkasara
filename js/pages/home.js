/**
 * ==============================================================================
 * MANGKASARA — SCRIPT HALAMAN BERANDA (HOME.JS)
 * ==============================================================================
 * Mengontrol interaksi pada halaman Beranda:
 * 1. Menampilkan kuliner unggulan (`featured: true`) dari dataset.
 * 2. Menampilkan 5 kategori kuliner dengan tampilan editorial (tanpa emoji berlebih).
 * 3. Menangani aksi tombol CTA "Jelajahi Kuliner" untuk scroll halus ke bagian kategori.
 * ==============================================================================
 */

/**
 * Inisialisasi utama untuk halaman Beranda.
 */
function initHomePage() {
  renderFeaturedFoods();
  renderCategoriesGrid();
  setupHomepageScrollCTA();
}

/**
 * Menampilkan daftar kuliner unggulan ke dalam elemen `#featured-food-list`.
 */
function renderFeaturedFoods() {
  const container = document.getElementById("featured-food-list");
  if (!container) return;

  const featuredFoods = typeof getFeaturedFoods === "function" ? getFeaturedFoods() : [];

  if (featuredFoods.length === 0) {
    container.innerHTML = `
      <p class="text-muted" style="grid-column: 1 / -1; text-align: center;">
        Belum ada kuliner unggulan yang dipilih saat ini.
      </p>
    `;
    return;
  }

  container.innerHTML = featuredFoods
    .map((food) => createFoodCardHTML(food))
    .join("");

  if (typeof attachFavoriteButtonListeners === "function") {
    attachFavoriteButtonListeners(container);
  }
}

/**
 * Menampilkan 5 kartu kategori kuliner ke dalam elemen `#category-list`
 * dengan format editorial modern.
 *
 * Perubahan Refinement:
 * - Menghilangkan wadah ikon emoji melingkar yang terlalu besar.
 * - Menampilkan penomoran editorial indeks (01 - 05).
 * - Menampilkan nama kategori dengan tipografi serif elegan dan jumlah hidangan.
 * - Mempertahankan tautan ke `explore.html?category={id}`.
 */
function renderCategoriesGrid() {
  const container = document.getElementById("category-list");
  if (!container) return;

  if (typeof categories === "undefined" || !Array.isArray(categories)) {
    return;
  }

  const categoryCardsHTML = categories.map((cat, index) => {
    const itemCount = typeof foods !== "undefined" && Array.isArray(foods)
      ? foods.filter((f) => f.categoryId === cat.id).length
      : 0;

    const formattedIndex = String(index + 1).padStart(2, "0");

    return `
      <a href="explore.html?category=${cat.id}" class="category-card" title="Jelajahi kategori ${cat.name}">
        <div class="category-card-top">
          <span class="category-index font-serif">${formattedIndex}</span>
          <span class="category-card-count">${itemCount} Hidangan</span>
        </div>
        <h3 class="category-card-name font-serif">${cat.name}</h3>
        <p class="category-card-desc">${cat.description || ""}</p>
        <div class="category-card-action">
          <span>Eksplorasi</span>
          <svg class="category-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </a>
    `;
  }).join("");

  container.innerHTML = categoryCardsHTML;
}

/**
 * Mengatur interaksi tombol CTA "Jelajahi Kuliner" pada hero section.
 *
 * Kebutuhan:
 * - Saat tombol ditekan, halaman bergulir halus (smooth scroll) ke section `#categories`.
 * - Memperhitungkan ketinggian sticky navbar (scroll-margin-top).
 * - Menghormati preferensi prefers-reduced-motion pengguna.
 */
function setupHomepageScrollCTA() {
  const heroExploreBtn = document.getElementById("hero-btn-explore");
  if (!heroExploreBtn) return;

  heroExploreBtn.addEventListener("click", (e) => {
    const targetSection = document.getElementById("categories");
    if (!targetSection) return;

    e.preventDefault();

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    targetSection.scrollIntoView({
      behavior: isReducedMotion ? "auto" : "smooth",
      block: "start"
    });

    // Perbarui URL hash secara halus tanpa meloncat mendadak
    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", "#categories");
    }
  });
}

// Jalankan skrip saat halaman siap
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHomePage);
} else {
  initHomePage();
}
