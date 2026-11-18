/**
 * ==============================================================================
 * MANGKASARA — SCRIPT HALAMAN FAVORIT (FAVORITES.JS)
 * ==============================================================================
 * File ini mengontrol seluruh fungsionalitas halaman Favorit Pengguna:
 * 1. Mengambil daftar ID yang tersimpan di LocalStorage (`mangkasara-favorites`).
 * 2. Mencocokkan ID dengan data kuliner lengkap dari `foods.js`.
 * 3. Menampilkan jumlah koleksi favorit yang tersimpan.
 * 4. Menyediakan tombol "Hapus Semua" dengan konfirmasi dialog.
 * 5. Menghapus item secara langsung saat tombol love pada kartu diklik,
 *    dan langsung menampilkan Empty State jika item terakhir dihapus.
 * 6. Menampilkan pesan Empty State ramah beserta tombol menuju Explore jika koleksi kosong.
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
 *
 * Alur Logika:
 * 1. Panggil `getFavoriteFoods()` dari `js/utils/storage.js`.
 * 2. Hitung jumlah item favorit.
 * 3. Jika jumlah 0: Tampilkan empty state dan sembunyikan tombol "Hapus Semua".
 * 4. Jika jumlah > 0: Tampilkan food card untuk setiap makanan dan aktifkan tombol "Hapus Semua".
 * 5. Pasang listener favorit dengan callback agar UI langsung diperbarui saat ada item yang dihapus.
 */
function renderFavoritesList() {
  const container = document.getElementById("favorites-food-list");
  const countElement = document.getElementById("favorites-total-count");
  const clearAllBtn = document.getElementById("btn-clear-all-favs");

  if (!container) return;

  // Ambil kumpulan objek makanan lengkap yang ada di LocalStorage
  const favoriteFoods = typeof getFavoriteFoods === "function" ? getFavoriteFoods() : [];
  const totalCount = favoriteFoods.length;

  // Perbarui teks jumlah di header
  if (countElement) {
    countElement.textContent = `${totalCount} Hidangan`;
  }

  // Tampilkan atau sembunyikan tombol "Hapus Semua"
  if (clearAllBtn) {
    clearAllBtn.style.display = totalCount > 0 ? "inline-flex" : "none";
  }

  // KONDISI EMPTY STATE: Jika pengguna belum menyimpan kuliner apa pun
  if (totalCount === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; margin: 48px auto;">
        <div class="empty-state-icon" aria-hidden="true">❤️</div>
        <h2 class="empty-state-title">Koleksi Kuliner Favorit Anda Masih Kosong</h2>
        <p class="empty-state-desc">
          Anda belum menyimpan kuliner apa pun. Jelajahi aneka ragam kuliner tradisional Makassar,
          dan tekan ikon hati pada hidangan yang ingin Anda simpan atau pelajari lebih lanjut.
        </p>
        <a href="explore.html" class="btn btn-primary btn-lg">
          <span>Mulai Jelajahi Kuliner</span>
          <svg class="arrow-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    `;
    return;
  }

  // Tampilkan kumpulan food card
  container.innerHTML = favoriteFoods
    .map((food) => createFoodCardHTML(food))
    .join("");

  // Pasang listener klik tombol love dengan callback pembaruan otomatis
  if (typeof attachFavoriteButtonListeners === "function") {
    attachFavoriteButtonListeners(container, () => {
      // Ketika salah satu item difavoritkan/dihapus, refresh tampilan halaman favorit
      renderFavoritesList();
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
    // Tampilkan konfirmasi ramah kepada pengguna
    const confirmClear = window.confirm(
      "Apakah Anda yakin ingin menghapus seluruh koleksi kuliner favorit Anda?"
    );

    if (confirmClear) {
      if (typeof clearAllFavorites === "function") {
        clearAllFavorites();
        renderFavoritesList();

        // Perbarui badge di navbar
        if (typeof updateNavbarFavoritesCount === "function") {
          updateNavbarFavoritesCount();
        }
      }
    }
  });
}

// Jalankan skrip saat halaman siap
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFavoritesPage);
} else {
  initFavoritesPage();
}
