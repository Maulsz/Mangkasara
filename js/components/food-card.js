/**
 * ==============================================================================
 * MANGKASARA — KOMPONEN FOOD CARD (KARTU KULINER)
 * ==============================================================================
 * Bertanggung jawab menghasilkan template HTML kartu kuliner yang rapi, elegan,
 * dan terfokus pada keindahan fotografi makanan tanpa dekorasi visual berlebih.
 *
 * Catatan Arsitektur Semester 1:
 * Sesuai spesifikasi PRD v3.0, fitur favorit aktif (LocalStorage/Database)
 * ditangguhkan ke Semester 2. Kartu kuliner berfokus menyajikan fotografi,
 * nama, deskripsi singkat, kategori, tag rasa/bahan, dan tautan ke halaman detail.
 * ==============================================================================
 */

/**
 * Menghasilkan string HTML untuk satu kartu kuliner.
 *
 * Parameter:
 * @param {object} food - Objek data kuliner yang akan ditampilkan.
 *
 * Return:
 * @returns {string} String HTML yang merepresentasikan satu food card.
 */
function createFoodCardHTML(food) {
  if (!food) return "";

  // Ambil nama kategori pendukung
  const category = typeof getCategoryById === "function"
    ? getCategoryById(food.categoryId)
    : null;
  const categoryName = category ? category.name : "Kuliner Makassar";

  // Ambil path gambar dengan fallback placeholder yang aman
  const imageSrc = typeof getFoodImage === "function"
    ? getFoodImage(food)
    : (food.image || "assets/images/placeholder-food.svg");

  // Render tag bahan/metode jika ada (maksimal 2 tag agar tampilan tetap rapi)
  const tagsHTML = Array.isArray(food.tags)
    ? food.tags.slice(0, 2).map((tag) => `<span class="food-tag">${tag}</span>`).join("")
    : "";

  return `
    <article class="food-card" data-food-id="${food.id}">
      <div class="food-card-media">
        <a href="detail.html?id=${food.id}" class="food-card-image-link" tabindex="-1" aria-hidden="true">
          <img 
            src="${imageSrc}" 
            alt="Foto hidangan ${food.name}" 
            class="food-card-image"
            loading="lazy"
            onerror="this.onerror=null; this.src='assets/images/placeholder-food.svg';"
          />
        </a>
        <span class="food-category-badge">${categoryName}</span>
      </div>

      <div class="food-card-content">
        <div class="food-card-header">
          <h3 class="food-card-title">
            <a href="detail.html?id=${food.id}">${food.name}</a>
          </h3>
        </div>

        <p class="food-card-description">
          ${food.shortDescription || food.characteristics || ""}
        </p>

        <div class="food-card-footer">
          <div class="food-card-tags">
            ${tagsHTML}
          </div>
          <a href="detail.html?id=${food.id}" class="btn-card-detail" aria-label="Pelajari hidangan ${food.name}">
            <span>Pelajari</span>
            <svg class="arrow-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  `;
}

/**
 * Catatan Arsitektur Semester 1:
 * Fungsi ini dipertahankan sebagai no-op yang aman agar jika terdapat skrip
 * yang memanggilnya, tidak akan terjadi error fatal pada console browser.
 * Fitur interaksi favorit aktif direncanakan untuk Semester 2 (PHP & MySQL).
 *
 * Parameter:
 * @param {HTMLElement} [containerElement]
 * @param {Function} [onToggleCallback]
 */
function attachFavoriteButtonListeners(containerElement, onToggleCallback) {
  // Tidak ada operasi interaksi favorit di Semester 1 (Favorit berstatus Coming Soon)
}

// Mendukung ekspor modul jika dijalankan di Node.js / unit test
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    createFoodCardHTML,
    attachFavoriteButtonListeners
  };
}
