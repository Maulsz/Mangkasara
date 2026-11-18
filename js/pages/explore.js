/**
 * ==============================================================================
 * MANGKASARA — SCRIPT HALAMAN EXPLORE (EXPLORE.JS)
 * ==============================================================================
 * Mengontrol seluruh interaktivitas halaman Explore Kuliner:
 * 1. Menampilkan koleksi 25 hidangan tradisional Makassar.
 * 2. Pencarian teks real-time berdasarkan nama makanan (case-insensitive & trimmed).
 * 3. Penyaringan berdasarkan tombol kategori (Pill filter).
 * 4. Kombinasi pencarian dan kategori secara simultan (keduanya harus terpenuhi).
 * 5. Tombol Reset untuk mengembalikan semua filter ke kondisi awal.
 * 6. Tampilan Empty State editorial bersih jika tidak ada kuliner yang cocok.
 * 7. Fitur Modal Random Culinary (Pilihan Acak) dengan tombol coba lagi.
 * 8. Membaca parameter URL (`?category=X`) saat berpindah dari halaman Beranda.
 * ==============================================================================
 */

// State lokal untuk menyimpan kondisi filter saat ini
let currentSearchTerm = "";
let currentSelectedCategory = "all";

/**
 * Inisialisasi utama untuk halaman Explore.
 */
function initExplorePage() {
  parseUrlParameters();
  renderCategoryPills();
  setupFilterEventListeners();
  setupRandomCulinaryModal();
  updateFoodDisplay();
}

/**
 * Membaca parameter dari query string URL browser.
 */
function parseUrlParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");
  const searchParam = urlParams.get("search");

  if (categoryParam) {
    currentSelectedCategory = categoryParam;
  }

  if (searchParam) {
    currentSearchTerm = searchParam;
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.value = searchParam;
    }
  }
}

/**
 * Menampilkan daftar tombol pill filter kategori di toolbar.
 */
function renderCategoryPills() {
  const container = document.getElementById("category-pills-list");
  if (!container) return;

  if (typeof categories === "undefined" || !Array.isArray(categories)) return;

  const isAllActive = currentSelectedCategory === "all" ? "active" : "";
  let pillsHTML = `
    <button 
      type="button" 
      class="btn-category-pill ${isAllActive}" 
      data-category-id="all"
    >
      Semua
    </button>
  `;

  categories.forEach((cat) => {
    const isActive = String(currentSelectedCategory) === String(cat.id) ? "active" : "";
    pillsHTML += `
      <button 
        type="button" 
        class="btn-category-pill ${isActive}" 
        data-category-id="${cat.id}"
      >
        ${cat.name}
      </button>
    `;
  });

  container.innerHTML = pillsHTML;
}

/**
 * Memasang event listener untuk interaksi pencarian dan filter.
 */
function setupFilterEventListeners() {
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("btn-clear-search");
  const categoryPillsContainer = document.getElementById("category-pills-list");
  const resetFilterBtn = document.getElementById("btn-reset-filter");

  // 1. Event listener input pencarian (Real-Time Search)
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchTerm = e.target.value;

      if (clearSearchBtn) {
        clearSearchBtn.style.display = currentSearchTerm.length > 0 ? "flex" : "none";
      }

      updateFoodDisplay();
    });
  }

  // 2. Event listener tombol clear search
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      currentSearchTerm = "";
      clearSearchBtn.style.display = "none";
      updateFoodDisplay();
    });
  }

  // 3. Event listener klik tombol pill kategori (Event Delegation)
  if (categoryPillsContainer) {
    categoryPillsContainer.addEventListener("click", (e) => {
      const pillBtn = e.target.closest(".btn-category-pill");
      if (!pillBtn) return;

      const catId = pillBtn.getAttribute("data-category-id");
      if (!catId) return;

      currentSelectedCategory = catId;

      const allPills = categoryPillsContainer.querySelectorAll(".btn-category-pill");
      allPills.forEach((btn) => btn.classList.remove("active"));
      pillBtn.classList.add("active");

      updateFoodDisplay();
    });
  }

  // 4. Event listener tombol reset filter
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", resetAllFilters);
  }
}

/**
 * Mengatur ulang seluruh filter pencarian dan kategori ke kondisi awal.
 */
function resetAllFilters() {
  currentSearchTerm = "";
  currentSelectedCategory = "all";

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.value = "";
  }

  const clearSearchBtn = document.getElementById("btn-clear-search");
  if (clearSearchBtn) {
    clearSearchBtn.style.display = "none";
  }

  const allPills = document.querySelectorAll(".btn-category-pill");
  allPills.forEach((btn) => {
    if (btn.getAttribute("data-category-id") === "all") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  updateFoodDisplay();
}

/**
 * Memperbarui tampilan daftar kartu kuliner berdasarkan filter saat ini.
 */
function updateFoodDisplay() {
  const container = document.getElementById("explore-food-list");
  const statusContainer = document.getElementById("explore-results-status");
  if (!container) return;

  if (typeof foods === "undefined" || !Array.isArray(foods)) {
    container.innerHTML = "<p>Data kuliner belum dapat dimuat.</p>";
    return;
  }

  const filteredResults = filterFoods(foods, currentSearchTerm, currentSelectedCategory);

  if (statusContainer) {
    const totalCount = filteredResults.length;
    let statusText = `Menampilkan <strong>${totalCount}</strong> kuliner tradisional`;

    if (currentSearchTerm.trim() !== "") {
      statusText += ` untuk kata kunci "<em>${escapeHTML(currentSearchTerm.trim())}</em>"`;
    }

    if (currentSelectedCategory !== "all") {
      const selectedCatObj = typeof getCategoryById === "function"
        ? getCategoryById(currentSelectedCategory)
        : null;
      if (selectedCatObj) {
        statusText += ` dalam kategori <strong>${selectedCatObj.name}</strong>`;
      }
    }

    statusContainer.innerHTML = `<span>${statusText}</span>`;
  }

  // Empty State bersih dan editorial (ikon SVG minimalis)
  if (filteredResults.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <h3 class="empty-state-title">Kuliner Tidak Ditemukan</h3>
        <p class="empty-state-desc">
          Tidak ada kuliner yang cocok dengan kata kunci atau kategori yang dipilih.
          Silakan coba kata kunci lain atau bersihkan filter Anda.
        </p>
        <button type="button" class="btn btn-primary" onclick="resetAllFilters()">
          <span>Kembalikan Semua Kuliner</span>
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredResults
    .map((food) => createFoodCardHTML(food))
    .join("");

  if (typeof attachFavoriteButtonListeners === "function") {
    attachFavoriteButtonListeners(container);
  }
}

/**
 * Mengatur fitur Modal Random Culinary (Pilihan Spontan).
 */
function setupRandomCulinaryModal() {
  const openBtn = document.getElementById("btn-random-culinary");
  const modalBackdrop = document.getElementById("random-modal-backdrop");
  const closeBtn = document.getElementById("btn-close-modal");
  const tryAgainBtn = document.getElementById("btn-random-try-again");

  if (!openBtn || !modalBackdrop) return;

  function showRandomCulinary() {
    if (typeof foods === "undefined" || !Array.isArray(foods) || foods.length === 0) {
      alert("Koleksi kuliner belum tersedia.");
      return;
    }

    const randomFood = getRandomFood(foods);
    if (!randomFood) return;

    const categoryObj = typeof getCategoryById === "function"
      ? getCategoryById(randomFood.categoryId)
      : null;
    const categoryName = categoryObj ? categoryObj.name : "Kuliner Tradisional";

    const imageSrc = typeof getFoodImage === "function"
      ? getFoodImage(randomFood)
      : (randomFood.image || "assets/images/placeholder-food.svg");

    const modalImage = document.getElementById("modal-food-image");
    const modalCategory = document.getElementById("modal-food-category");
    const modalTitle = document.getElementById("modal-food-title");
    const modalDesc = document.getElementById("modal-food-desc");
    const modalDetailLink = document.getElementById("modal-food-detail-link");

    if (modalImage) {
      modalImage.src = imageSrc;
      modalImage.alt = `Foto ${randomFood.name}`;
      modalImage.onerror = function() {
        this.onerror = null;
        this.src = "assets/images/placeholder-food.svg";
      };
    }
    if (modalCategory) modalCategory.textContent = categoryName;
    if (modalTitle) modalTitle.textContent = randomFood.name;
    if (modalDesc) modalDesc.textContent = randomFood.shortDescription || randomFood.characteristics;
    if (modalDetailLink) modalDetailLink.href = `detail.html?id=${randomFood.id}`;

    modalBackdrop.classList.add("is-open");
  }

  function closeModal() {
    modalBackdrop.classList.remove("is-open");
  }

  openBtn.addEventListener("click", showRandomCulinary);

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (tryAgainBtn) {
    tryAgainBtn.addEventListener("click", showRandomCulinary);
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initExplorePage);
} else {
  initExplorePage();
}
