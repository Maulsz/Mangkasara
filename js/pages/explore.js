/**
 * ==============================================================================
 * MANGKASARA — SCRIPT HALAMAN EXPLORE (EXPLORE.JS)
 * ==============================================================================
 * File ini mengontrol seluruh interaktivitas halaman Explore Kuliner:
 * 1. Menampilkan koleksi 25 hidangan tradisional Makassar.
 * 2. Pencarian teks real-time berdasarkan nama makanan (case-insensitive & trimmed).
 * 3. Penyaringan berdasarkan tombol kategori (Pill filter).
 * 4. Kombinasi pencarian dan kategori secara simultan (keduanya harus terpenuhi).
 * 5. Tombol Reset untuk mengembalikan semua filter ke kondisi awal.
 * 6. Tampilan Empty State jika tidak ada kuliner yang cocok.
 * 7. Fitur Modal Random Culinary (Pilihan Acak) dengan tombol coba lagi.
 * 8. Membaca parameter URL (`?category=X`) saat berpindah dari halaman Beranda.
 * ==============================================================================
 */

// State lokal untuk menyimpan kondisi filter saat ini
let currentSearchTerm = "";
let currentSelectedCategory = "all";

/**
 * Inisialisasi utama untuk halaman Explore.
 *
 * Alur Logika:
 * 1. Baca query parameter dari URL (`window.location.search`) jika pengguna datang dari Beranda.
 * 2. Render tombol-tombol pill kategori secara dinamis dari data `categories`.
 * 3. Pasang event listener pada input pencarian, tombol reset, dan tombol random.
 * 4. Lakukan rendering awal daftar makanan.
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
 *
 * Method yang digunakan:
 * - `URLSearchParams(window.location.search)`: Standar Web API untuk membaca parameter seperti `?category=2`.
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
 *
 * Alur Logika:
 * 1. Buat tombol pertama: "Semua" (value: "all").
 * 2. Iterasi array `categories` untuk membuat tombol kategori 1 sampai 5.
 * 3. Beri class `active` pada tombol yang cocok dengan `currentSelectedCategory`.
 */
function renderCategoryPills() {
  const container = document.getElementById("category-pills-list");
  if (!container) return;

  if (typeof categories === "undefined" || !Array.isArray(categories)) return;

  // Tombol opsi "Semua"
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

  // Tombol untuk setiap kategori master
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
 *
 * Method yang digunakan:
 * - `addEventListener('input')`: Mendeteksi setiap ketikan huruf oleh pengguna.
 * - `addEventListener('click')`: Mendeteksi klik pada tombol kategori dan reset.
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

      // Tampilkan tombol silang (clear) jika input memiliki isi
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

      // Perbarui status class active pada tombol-tombol pill
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
 *
 * Sesuai kebutuhan PRD:
 * - Menghapus teks pada input pencarian.
 * - Mengembalikan pilihan kategori ke "Semua".
 * - Menampilkan kembali seluruh 25 hidangan.
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

  // Kembalikan highlight pill ke "Semua"
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
 *
 * Alur Logika:
 * 1. Panggil `filterFoods(foods, currentSearchTerm, currentSelectedCategory)` dari `js/utils/filters.js`.
 * 2. Hitung jumlah hasil yang ditemukan dan perbarui teks status.
 * 3. Jika hasil kosong (length === 0), tampilkan komponen Empty State yang rapi.
 * 4. Jika hasil ada, ubah setiap data makanan menjadi food card HTML.
 * 5. Pasang listener favorit pada food cards.
 */
function updateFoodDisplay() {
  const container = document.getElementById("explore-food-list");
  const statusContainer = document.getElementById("explore-results-status");
  if (!container) return;

  if (typeof foods === "undefined" || !Array.isArray(foods)) {
    container.innerHTML = "<p>Data kuliner belum dapat dimuat.</p>";
    return;
  }

  // Panggil fungsi filter kombinasi (Search + Kategori)
  const filteredResults = filterFoods(foods, currentSearchTerm, currentSelectedCategory);

  // Perbarui teks status jumlah hasil
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

  // Kondisi EMPTY STATE jika tidak ada makanan yang lolos filter
  if (filteredResults.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state-icon" aria-hidden="true">🔍</div>
        <h3 class="empty-state-title">Kuliner Tidak Ditemukan</h3>
        <p class="empty-state-desc">
          Tidak ada kuliner yang cocok dengan kriteria pencarian Anda. 
          Silakan coba kata kunci lain atau bersihkan filter.
        </p>
        <button type="button" class="btn btn-primary" onclick="resetAllFilters()">
          <span>Kembalikan Semua Kuliner</span>
        </button>
      </div>
    `;
    return;
  }

  // Tampilkan kumpulan kartu makanan
  container.innerHTML = filteredResults
    .map((food) => createFoodCardHTML(food))
    .join("");

  // Pasang listener klik favorit
  if (typeof attachFavoriteButtonListeners === "function") {
    attachFavoriteButtonListeners(container);
  }
}

/**
 * Mengatur fitur Modal Random Culinary (Pilihan Spontan).
 *
 * Alur Logika:
 * 1. Dengarkan klik pada tombol `#btn-random-culinary`.
 * 2. Pilih satu makanan secara acak menggunakan `getRandomFood(foods)`.
 * 3. Isi informasi makanan tersebut ke dalam modal HTML.
 * 4. Buka modal dengan class `.is-open`.
 * 5. Pengguna dapat menekan "Pilih Lainnya" untuk mengambil acak yang lain tanpa menutup modal.
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

    // Render data makanan acak ke elemen-elemen di dalam modal
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

    // Tampilkan modal
    modalBackdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalBackdrop.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", showRandomCulinary);

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (tryAgainBtn) {
    tryAgainBtn.addEventListener("click", showRandomCulinary);
  }

  // Tutup jika klik pada area gelap di luar kotak modal
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Tutup dengan tombol Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("is-open")) {
      closeModal();
    }
  });
}

/**
 * Mencegah celah keamanan XSS saat menampilkan teks input pengguna kembali ke HTML.
 *
 * Parameter:
 * @param {string} str - Teks mentah.
 * @returns {string} Teks yang telah di-escape karakternya.
 */
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Jalankan skrip saat halaman selesai dimuat
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initExplorePage);
} else {
  initExplorePage();
}
