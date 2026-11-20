/**
 * ==============================================================================
 * MANGKASARA — SCRIPT HALAMAN DETAIL KULINER (DETAIL.JS)
 * ==============================================================================
 * Menangani seluruh rendering informasi ensiklopedia kuliner:
 * 1. Membaca parameter query URL `?id=X`.
 * 2. Mengambil data makanan yang cocok dari dataset master `foods`.
 * 3. Menangani penanganan kesalahan jika ID tidak valid / tidak ditemukan (Error Handling).
 * 4. Merender foto, nama, deskripsi lengkap, karakteristik rasa, dan bahan utama.
 * 5. Menampilkan bagian sejarah/cerita budaya HANYA jika data `history` terverifikasi.
 * 6. Menampilkan daftar referensi sumber informasi HANYA jika data `sources` terisi.
 * 7. Menampilkan daftar kuliner terkait dalam kategori yang sama (tanpa hidangan ini).
 * 8. Mengatur fungsi tombol Simpan ke Favorit pada halaman detail.
 * ==============================================================================
 */

/**
 * Inisialisasi utama untuk halaman Detail Kuliner.
 */
function initDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const foodIdParam = urlParams.get("id");

  if (!foodIdParam) {
    renderNotFound("ID kuliner tidak ditemukan pada alamat halaman.");
    return;
  }

  const food = typeof getFoodById === "function" ? getFoodById(foodIdParam) : null;

  if (!food) {
    renderNotFound("Kuliner yang Anda cari tidak terdaftar dalam ensiklopedia Mangkasara.");
    return;
  }

  renderFoodDetail(food);
  renderRelatedFoods(food);
}

/**
 * Menampilkan pesan ramah jika makanan tidak ditemukan (Not Found State)
 * dengan icon SVG minimalis.
 */
function renderNotFound(message) {
  const contentContainer = document.getElementById("detail-content-area");
  if (!contentContainer) return;

  document.title = "Kuliner Tidak Ditemukan — Mangkasara";

  contentContainer.innerHTML = `
    <div class="empty-state" style="margin: 64px auto;">
      <div class="empty-state-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>
      <h2 class="empty-state-title">Kuliner Tidak Ditemukan</h2>
      <p class="empty-state-desc">${message}</p>
      <a href="explore.html" class="btn btn-primary">
        <span>Kembali ke Jelajah Kuliner</span>
      </a>
    </div>
  `;
}

/**
 * Merender seluruh data ensiklopedia kuliner ke dalam DOM.
 */
function renderFoodDetail(food) {
  document.title = `${food.name} — Mangkasara`;

  const category = typeof getCategoryById === "function"
    ? getCategoryById(food.categoryId)
    : null;
  const categoryName = category ? category.name : "Kuliner Tradisional";

  const breadcrumbCurrent = document.getElementById("breadcrumb-food-name");
  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent = food.name;
  }

  const imageElement = document.getElementById("detail-food-image");
  if (imageElement) {
    const imageSrc = typeof getFoodImage === "function"
      ? getFoodImage(food)
      : (food.image || "assets/images/placeholder-food.svg");

    imageElement.src = imageSrc;
    imageElement.alt = `Foto dokumentasi ${food.name}`;
    imageElement.onerror = function() {
      this.onerror = null;
      this.src = "assets/images/placeholder-food.svg";
    };
  }

  const categoryBadge = document.getElementById("detail-category-badge");
  const titleElement = document.getElementById("detail-food-title");
  const leadElement = document.getElementById("detail-food-lead");

  if (categoryBadge) {
    categoryBadge.textContent = categoryName;
    categoryBadge.href = `explore.html?category=${food.categoryId}`;
  }
  if (titleElement) titleElement.textContent = food.name;
  if (leadElement) leadElement.textContent = food.shortDescription || "";

  const charElement = document.getElementById("detail-food-characteristics");
  if (charElement) {
    charElement.textContent = food.characteristics || "Cita rasa khas kuliner tradisional Makassar.";
  }

  const descContainer = document.getElementById("detail-food-description");
  if (descContainer) {
    descContainer.innerHTML = `<p>${escapeHTML(food.description || food.shortDescription)}</p>`;
  }

  // --------------------------------------------------------------------------
  // CARA PEMBUATAN / LANGKAH PEMBUATAN TRADISIONAL
  // --------------------------------------------------------------------------
  // Merender tahapan pembuatan secara berurutan (1, 2, 3...) menggunakan
  // angka serif terracotta dan box item yang nyaman dibaca.
  // Jika preparationSteps kosong/tidak tersedia, tampilkan empty state ramah.
  const prepContainer = document.getElementById("detail-food-preparation");
  if (prepContainer) {
    if (Array.isArray(food.preparationSteps) && food.preparationSteps.length > 0) {
      prepContainer.innerHTML = `
        <ol class="preparation-steps-list">
          ${food.preparationSteps.map((step, index) => `
            <li class="preparation-step-item">
              <span class="step-number font-serif" aria-hidden="true">${index + 1}</span>
              <p class="step-text">${escapeHTML(step)}</p>
            </li>
          `).join("")}
        </ol>
      `;
    } else {
      prepContainer.innerHTML = `
        <p class="preparation-empty-note">
          Informasi cara pembuatan belum tersedia untuk kuliner ini.
        </p>
      `;
    }
  }

  const ingredientsContainer = document.getElementById("detail-ingredients-list");
  if (ingredientsContainer) {
    if (Array.isArray(food.ingredients) && food.ingredients.length > 0) {
      ingredientsContainer.innerHTML = food.ingredients.map((item) => `
        <li class="ingredient-item">
          <span class="ingredient-bullet" aria-hidden="true"></span>
          <span>${item}</span>
        </li>
      `).join("");
    } else {
      ingredientsContainer.innerHTML = `<li class="text-muted">Informasi bahan belum tercatat.</li>`;
    }
  }

  // ATURAN PENTING PRD: Tampilkan sejarah HANYA jika history ada & valid
  const historyBlock = document.getElementById("detail-history-block");
  const historyText = document.getElementById("detail-food-history");

  if (historyBlock && historyText) {
    if (food.history && typeof food.history === "string" && food.history.trim() !== "") {
      historyText.textContent = food.history;
      historyBlock.style.display = "block";
    } else {
      historyBlock.style.display = "none";
    }
  }

  // ATURAN PENTING PRD: Tampilkan referensi HANYA jika sources terisi
  const sourcesBlock = document.getElementById("detail-sources-block");
  const sourcesList = document.getElementById("detail-sources-list");

  if (sourcesBlock && sourcesList) {
    if (Array.isArray(food.sources) && food.sources.length > 0) {
      sourcesList.innerHTML = food.sources.map((src) => `
        <li class="source-item">${src}</li>
      `).join("");
      sourcesBlock.style.display = "block";
    } else {
      sourcesBlock.style.display = "none";
    }
  }
}

/**
 * Menampilkan rekomendasi makanan terkait dalam kategori yang sama.
 */
function renderRelatedFoods(currentFood) {
  const container = document.getElementById("related-foods-grid");
  if (!container) return;

  const relatedList = typeof getRelatedFoods === "function"
    ? getRelatedFoods(currentFood.id, currentFood.categoryId, 3)
    : [];

  if (relatedList.length === 0) {
    container.innerHTML = `
      <p class="text-muted" style="grid-column: 1 / -1;">
        Belum ada kuliner terkait lainnya dalam kategori ini.
      </p>
    `;
    return;
  }

  container.innerHTML = relatedList
    .map((food, index) => createFoodCardHTML(food, index))
    .join("");

  if (typeof initFadeUpAnimations === "function") {
    initFadeUpAnimations(container);
  }
}

/**
 * Sanitasi string untuk mencegah injeksi HTML sebelum dimasukkan ke DOM.
 * @param {string} str - Teks mentah yang akan disanitasi.
 * @returns {string} Teks yang aman dirender ke innerHTML.
 */
function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDetailPage);
} else {
  initDetailPage();
}
