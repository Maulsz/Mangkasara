/**
 * ==============================================================================
 * MANGKASARA — KOMPONEN FOOD CARD (KARTU KULINER)
 * ==============================================================================
 * Bertanggung jawab menghasilkan template HTML kartu kuliner yang rapi, elegan,
 * dan terfokus pada keindahan fotografi makanan tanpa dekorasi visual berlebih.
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

  // Cek status favorit pengguna di LocalStorage
  const isFav = typeof isFavorite === "function" ? isFavorite(food.id) : false;
  const favActiveClass = isFav ? "is-favorite" : "";
  const favAriaLabel = isFav
    ? `Hapus ${food.name} dari favorit`
    : `Simpan ${food.name} ke favorit`;

  // Render tag bahan/metode jika ada (maksimal 2 tag agar rapi)
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
        <button 
          type="button" 
          class="btn-favorite-toggle ${favActiveClass}" 
          data-favorite-id="${food.id}" 
          aria-label="${favAriaLabel}"
          title="${isFav ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}"
        >
          <svg class="heart-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
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
          <a href="detail.html?id=${food.id}" class="btn-card-detail">
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
 * Menempelkan event listener global untuk seluruh tombol favorit di dalam container
 * menggunakan teknik Event Delegation.
 *
 * Parameter:
 * @param {HTMLElement} containerElement - Elemen induk yang menampung kartu makanan.
 * @param {Function} [onToggleCallback] - Callback yang dipanggil setelah status favorit berubah.
 */
function attachFavoriteButtonListeners(containerElement, onToggleCallback) {
  if (!containerElement) return;

  containerElement.addEventListener("click", (event) => {
    const btn = event.target.closest(".btn-favorite-toggle");
    if (!btn) return;

    event.preventDefault();
    event.stopPropagation();

    const foodId = btn.getAttribute("data-favorite-id");
    if (!foodId) return;

    // Ganti status favorit di LocalStorage
    const isNowFav = toggleFavorite(foodId);

    // Perbarui class visual dan atribut aksesibilitas tombol
    if (isNowFav) {
      btn.classList.add("is-favorite");
      btn.setAttribute("aria-label", "Hapus dari favorit");
      btn.setAttribute("title", "Hapus dari Favorit");
    } else {
      btn.classList.remove("is-favorite");
      btn.setAttribute("aria-label", "Simpan ke favorit");
      btn.setAttribute("title", "Simpan ke Favorit");
    }

    // Panggil callback jika ada (misal untuk me-refresh halaman favorites)
    if (typeof onToggleCallback === "function") {
      onToggleCallback(Number(foodId), isNowFav, btn.closest(".food-card"));
    }

    // Perbarui badge jumlah favorit di navbar
    if (typeof updateNavbarFavoritesCount === "function") {
      updateNavbarFavoritesCount();
    }
  });
}

// Mendukung ekspor modul jika dijalankan di Node.js / module bundler
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    createFoodCardHTML,
    attachFavoriteButtonListeners
  };
}
