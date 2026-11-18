/**
 * ==============================================================================
 * MANGKASARA — SCRIPT HALAMAN FAVORIT (FAVORITES.JS)
 * ==============================================================================
 * Mengontrol seluruh fungsionalitas halaman Favorit Pengguna:
 * 1. Mengambil daftar ID yang tersimpan di LocalStorage (`mangkasara-favorites`).
 * 2. Mencocokkan ID dengan data kuliner lengkap dari `foods.js`.
 * 3. Menampilkan jumlah koleksi favorit yang tersimpan.
 * 4. Menyediakan tombol "Hapus Semua" dengan konfirmasi ramah.
 * 5. Menghapus item secara halus (smooth removal transition) saat tombol favorit diklik.
 * 6. Menampilkan pesan Empty State bersih dan editorial jika koleksi kosong.
 * ==============================================================================
 */

/**
 * Inisialisasi utama untuk halaman Favorit.
 */
function initFavoritesPage() {
  renderFavoritesList();
  setupClearAllButton();
}

/**
 * Menampilkan daftar kartu kuliner favorit atau Empty State jika kosong.
 */
function renderFavoritesList() {
  const container = document.getElementById("favorites-food-list");
  const countElement = document.getElementById("favorites-total-count");
  const clearAllBtn = document.getElementById("btn-clear-all-favs");

  if (!container) return;

  const favoriteFoods = typeof getFavoriteFoods === "function" ? getFavoriteFoods() : [];
  const totalCount = favoriteFoods.length;

  if (countElement) {
    countElement.textContent = `${totalCount} Hidangan`;
  }

  if (clearAllBtn) {
    clearAllBtn.style.display = totalCount > 0 ? "inline-flex" : "none";
  }

  // KONDISI EMPTY STATE: Jika pengguna belum menyimpan kuliner apa pun
  if (totalCount === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; margin: 48px auto;">
        <div class="empty-state-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
        <h2 class="empty-state-title">Koleksi Kuliner Favorit Masih Kosong</h2>
        <p class="empty-state-desc">
          Anda belum menyimpan kuliner apa pun. Jelajahi aneka ragam kuliner tradisional Makassar,
          dan tekan ikon hati pada hidangan yang ingin Anda simpan atau pelajari lebih lanjut.
        </p>
        <a href="explore.html" class="btn btn-primary btn-lg">
          <span>Mulai Jelajahi Kuliner</span>
          <svg class="arrow-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = favoriteFoods
    .map((food) => createFoodCardHTML(food))
    .join("");

  // Pasang listener klik tombol love dengan transisi halus sebelum render ulang
  if (typeof attachFavoriteButtonListeners === "function") {
    attachFavoriteButtonListeners(container, (foodId, isNowFav, cardElement) => {
      if (!isNowFav && cardElement) {
        // Efek animasi keluar halus (fade-out & scale down)
        cardElement.style.transition = "opacity 0.22s ease, transform 0.22s ease";
        cardElement.style.opacity = "0";
        cardElement.style.transform = "scale(0.96)";

        setTimeout(() => {
          renderFavoritesList();
        }, 220);
      } else {
        renderFavoritesList();
      }
    });
  }
}

/**
 * Mengatur tombol untuk membersihkan seluruh isi favorit sekaligus.
 */
function setupClearAllButton() {
  const clearAllBtn = document.getElementById("btn-clear-all-favs");
  if (!clearAllBtn) return;

  clearAllBtn.addEventListener("click", () => {
    const confirmClear = window.confirm(
      "Apakah Anda yakin ingin menghapus seluruh koleksi kuliner favorit Anda?"
    );

    if (confirmClear) {
      if (typeof clearAllFavorites === "function") {
        clearAllFavorites();
        renderFavoritesList();

        if (typeof updateNavbarFavoritesCount === "function") {
          updateNavbarFavoritesCount();
        }
      }
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFavoritesPage);
} else {
  initFavoritesPage();
}
