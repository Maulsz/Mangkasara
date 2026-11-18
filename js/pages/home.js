/**
 * ==============================================================================
 * MANGKASARA — SCRIPT HALAMAN BERANDA (HOME.JS)
 * ==============================================================================
 * File ini menangani interaksi dan rendering data khusus pada halaman Beranda:
 * 1. Mengambil dan menampilkan kuliner pilihan (`featured: true`) dari dataset.
 * 2. Mengambil dan menampilkan daftar 5 kategori kuliner ke dalam grid kartu.
 * 3. Menghubungkan tombol love/favorit pada setiap kartu makanan.
 * ==============================================================================
 */

/**
 * Inisialisasi utama untuk halaman Beranda.
 *
 * Mengapa fungsi ini diperlukan:
 * Bertindak sebagai controller utama saat halaman `index.html` dibuka.
 */
function initHomePage() {
  renderFeaturedFoods();
  renderCategoriesGrid();
}

/**
 * Menampilkan daftar kuliner unggulan ke dalam elemen `#featured-food-list`.
 *
 * Alur Logika:
 * 1. Panggil `getFeaturedFoods()` dari `js/data/foods.js` untuk menyaring makanan bertanda featured.
 * 2. Ambil elemen DOM kontainer dengan `document.getElementById('featured-food-list')`.
 * 3. Jika elemen ditemukan, petakan setiap item makanan menjadi string HTML menggunakan `createFoodCardHTML()`.
 * 4. Masukkan string HTML ke dalam kontainer melalui `innerHTML`.
 * 5. Pasang event listener untuk tombol favorit menggunakan `attachFavoriteButtonListeners()`.
 */
function renderFeaturedFoods() {
  const container = document.getElementById("featured-food-list");
  if (!container) return;

  // Ambil hanya makanan yang ditandai featured: true
  const featuredFoods = typeof getFeaturedFoods === "function" ? getFeaturedFoods() : [];

  if (featuredFoods.length === 0) {
    container.innerHTML = `
      <p class="text-muted" style="grid-column: 1 / -1; text-align: center;">
        Belum ada kuliner unggulan yang dipilih saat ini.
      </p>
    `;
    return;
  }

  // Gabungkan seluruh HTML kartu makanan
  container.innerHTML = featuredFoods
    .map((food) => createFoodCardHTML(food))
    .join("");

  // Pasang listener klik favorit
  if (typeof attachFavoriteButtonListeners === "function") {
    attachFavoriteButtonListeners(container);
  }
}

/**
 * Menampilkan 5 kartu kategori kuliner ke dalam elemen `#category-list`.
 *
 * Alur Logika:
 * 1. Ambil data master kategori dari array `categories` (`js/data/categories.js`).
 * 2. Hitung jumlah hidangan pada setiap kategori menggunakan `foods.filter()`.
 * 3. Buat kartu tautan menuju `explore.html?category={id}`.
 * 4. Masukkan ke dalam DOM.
 */
function renderCategoriesGrid() {
  const container = document.getElementById("category-list");
  if (!container) return;

  if (typeof categories === "undefined" || !Array.isArray(categories)) {
    return;
  }

  const categoryCardsHTML = categories.map((cat) => {
    // Hitung berapa banyak hidangan di kategori ini dari data foods
    const itemCount = typeof foods !== "undefined" && Array.isArray(foods)
      ? foods.filter((f) => f.categoryId === cat.id).length
      : 0;

    return `
      <a href="explore.html?category=${cat.id}" class="category-card" title="Jelajahi kategori ${cat.name}">
        <div class="category-icon-box" aria-hidden="true">
          ${cat.icon || "🍽️"}
        </div>
        <h3 class="category-card-name">${cat.name}</h3>
        <span class="category-card-count">${itemCount} Hidangan</span>
      </a>
    `;
  }).join("");

  container.innerHTML = categoryCardsHTML;
}

// Jalankan skrip saat halaman siap
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHomePage);
} else {
  initHomePage();
}
