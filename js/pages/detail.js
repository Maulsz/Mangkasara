/**
 * ==============================================================================
 * MANGKASARA — SCRIPT HALAMAN DETAIL KULINER (DETAIL.JS)
 * ==============================================================================
 * File ini menangani seluruh rendering informasi ensiklopedia kuliner:
 * 1. Membaca parameter query URL `?id=X`.
 * 2. Mengambil data makanan yang cocok dari dataset master `foods`.
 * 3. Menangani penanganan kesalahan jika ID tidak valid / tidak ditemukan (Error Handling).
 * 4. Merender foto, nama, deskripsi lengkap, karakteristik rasa, dan bahan utama.
 * 5. Menampilkan bagian sejarah/cerita budaya HANYA jika data `history` terverifikasi (tidak null).
 * 6. Menampilkan daftar referensi sumber informasi HANYA jika data `sources` terisi.
 * 7. Menampilkan daftar kuliner terkait dalam kategori yang sama (tanpa menyertakan makanan ini).
 * 8. Mengatur fungsi tombol Simpan ke Favorit pada halaman detail.
 * ==============================================================================
 */

/**
 * Inisialisasi utama untuk halaman Detail Kuliner.
 */
function initDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const foodIdParam = urlParams.get("id");

  // Jika parameter id tidak ada di URL
  if (!foodIdParam) {
    renderNotFound("ID kuliner tidak ditemukan pada alamat halaman.");
    return;
  }

  // Cari objek makanan di dataset master
  const food = typeof getFoodById === "function" ? getFoodById(foodIdParam) : null;

  // Jika ID tidak cocok dengan salah satu dari 25 makanan
  if (!food) {
    renderNotFound("Kuliner yang Anda cari tidak terdaftar dalam ensiklopedia Mangkasara.");
    return;
  }

  // Jika makanan ditemukan, render seluruh komponen informasi
  renderFoodDetail(food);
  renderRelatedFoods(food);
  setupDetailFavoriteButton(food);
}

/**
 * Menampilkan pesan ramah jika makanan tidak ditemukan (Not Found State).
 *
 * Parameter:
 * @param {string} message - Pesan penjelasan kepada pengguna.
 */
function renderNotFound(message) {
  const contentContainer = document.getElementById("detail-content-area");
  if (!contentContainer) return;

  document.title = "Kuliner Tidak Ditemukan — Mangkasara";

  contentContainer.innerHTML = `
    <div class="empty-state" style="margin: 64px auto;">
      <div class="empty-state-icon" aria-hidden="true">🍲</div>
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
 *
 * Parameter:
 * @param {object} food - Objek data kuliner yang ditemukan.
 */
function renderFoodDetail(food) {
  // 1. Perbarui judul halaman di tab browser
  document.title = `${food.name} — Mangkasara`;

  // 2. Ambil elemen kategori
  const category = typeof getCategoryById === "function"
    ? getCategoryById(food.categoryId)
    : null;
  const categoryName = category ? category.name : "Kuliner Tradisional";

  // 3. Perbarui Breadcrumb
  const breadcrumbCurrent = document.getElementById("breadcrumb-food-name");
  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent = food.name;
  }

  // 4. Perbarui Foto Hidangan
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

  // 5. Perbarui Header Info (Kategori, Nama, Lead)
  const categoryBadge = document.getElementById("detail-category-badge");
  const titleElement = document.getElementById("detail-food-title");
  const leadElement = document.getElementById("detail-food-lead");

  if (categoryBadge) {
    categoryBadge.textContent = categoryName;
    categoryBadge.href = `explore.html?category=${food.categoryId}`;
  }
  if (titleElement) titleElement.textContent = food.name;
  if (leadElement) leadElement.textContent = food.shortDescription || "";

  // 6. Perbarui Box Karakteristik Cita Rasa
  const charElement = document.getElementById("detail-food-characteristics");
  if (charElement) {
    charElement.textContent = food.characteristics || "Cita rasa khas kuliner tradisional Makassar.";
  }

  // 7. Perbarui Deskripsi Lengkap
  const descContainer = document.getElementById("detail-food-description");
  if (descContainer) {
    descContainer.innerHTML = `<p>${food.description || food.shortDescription}</p>`;
  }

  // 8. Perbarui Daftar Bahan Utama
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

  // 9. ATURAN PENTING PRD: Bagian Sejarah & Budaya
  // Jangan tampilkan bagian sejarah jika data history bernilai null atau string kosong!
  const historyBlock = document.getElementById("detail-history-block");
  const historyText = document.getElementById("detail-food-history");

  if (historyBlock && historyText) {
    if (food.history && typeof food.history === "string" && food.history.trim() !== "") {
      historyText.textContent = food.history;
      historyBlock.style.display = "block";
    } else {
      // Sembunyikan elemen sejarah sepenuhnya agar tidak ada undefined atau ruang kosong
      historyBlock.style.display = "none";
    }
  }

  // 10. ATURAN PENTING PRD: Bagian Referensi / Sumber
  // Jangan tampilkan daftar sumber jika array sources kosong!
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
 *
 * Aturan PRD:
 * - Tidak boleh menampilkan makanan yang sedang dibuka sebagai item terkait.
 * - Maksimal 3 kartu terkait.
 *
 * Parameter:
 * @param {object} currentFood - Objek kuliner yang sedang aktif.
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
    .map((food) => createFoodCardHTML(food))
    .join("");

  // Pasang listener favorit pada kartu terkait
  if (typeof attachFavoriteButtonListeners === "function") {
    attachFavoriteButtonListeners(container);
  }
}

/**
 * Mengatur aksi tombol Favorit utama pada halaman Detail.
 *
 * Parameter:
 * @param {object} food - Objek kuliner yang sedang aktif.
 */
function setupDetailFavoriteButton(food) {
  const btn = document.getElementById("btn-detail-fav-toggle");
  if (!btn) return;

  // Cek status awal di LocalStorage
  function updateBtnUI() {
    const isFav = typeof isFavorite === "function" ? isFavorite(food.id) : false;
    const btnText = btn.querySelector(".btn-fav-text");

    if (isFav) {
      btn.classList.add("is-favorite");
      btn.setAttribute("aria-label", `Hapus ${food.name} dari favorit`);
      if (btnText) btnText.textContent = "Tersimpan di Favorit";
    } else {
      btn.classList.remove("is-favorite");
      btn.setAttribute("aria-label", `Simpan ${food.name} ke favorit`);
      if (btnText) btnText.textContent = "Simpan ke Favorit";
    }
  }

  updateBtnUI();

  btn.addEventListener("click", () => {
    if (typeof toggleFavorite === "function") {
      toggleFavorite(food.id);
      updateBtnUI();

      // Perbarui jumlah di navbar
      if (typeof updateNavbarFavoritesCount === "function") {
        updateNavbarFavoritesCount();
      }
    }
  });
}

// Jalankan skrip saat halaman siap
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDetailPage);
} else {
  initDetailPage();
}
