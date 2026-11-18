/**
 * ==============================================================================
 * MANGKASARA — UTILITY LOCALSTORAGE (MANAJEMEN FAVORIT)
 * ==============================================================================
 * File ini menangani seluruh operasi penyimpanan data favorit di browser
 * pengguna menggunakan Web Storage API (LocalStorage).
 *
 * Aturan Kontrak Penyimpanan:
 * - Storage Key: "mangkasara-favorites"
 * - Format Data: Array of number (ID makanan saja, bukan objek lengkap).
 *   Contoh isi LocalStorage: "[1, 17, 22]"
 *
 * Keamanan Data (Resilience):
 * Seluruh operasi pembacaan dibungkus dalam blok try...catch untuk mencegah
 * aplikasi mengalami crash (error fatal) jika data di LocalStorage rusak atau korup.
 * ==============================================================================
 */

// Kunci penyimpanan LocalStorage sesuai spesifikasi PRD
const FAVORITES_KEY = "mangkasara-favorites";

/**
 * Mengambil daftar ID makanan favorit dari LocalStorage.
 *
 * Mengapa fungsi ini diperlukan:
 * Digunakan untuk mengetahui makanan apa saja yang sudah disimpan oleh pengguna,
 * baik untuk menampilkan status ikon love pada card makanan maupun me-render halaman favorit.
 *
 * Return:
 * @returns {number[]} Array berisi ID makanan yang tersimpan, atau array kosong [] jika belum ada.
 *
 * Method dan Alur Logika:
 * 1. `localStorage.getItem(FAVORITES_KEY)`: Mengambil string mentah dari browser.
 * 2. Cek apakah data bernilai null/kosong. Jika ya, kembalikan `[]`.
 * 3. `JSON.parse()`: Mengubah teks JSON kembali menjadi array JavaScript.
 * 4. `Array.isArray()`: Memastikan data yang di-parse benar-benar bertipe Array.
 * 5. `try...catch`: Menangkap error jika teks JSON rusak (misal diubah manual di console devtools).
 */
function getFavorites() {
  try {
    const rawData = localStorage.getItem(FAVORITES_KEY);
    if (!rawData) {
      return [];
    }

    const parsed = JSON.parse(rawData);

    // Validasi bahwa data yang tersimpan berformat array
    if (Array.isArray(parsed)) {
      // Pastikan setiap elemen bertipe number dan valid
      return parsed
        .map((item) => Number(item))
        .filter((num) => !isNaN(num) && num > 0);
    }

    return [];
  } catch (error) {
    console.error("Gagal membaca data favorit dari LocalStorage:", error);
    // Jika data korup, kembalikan array kosong agar aplikasi tidak berhenti
    return [];
  }
}

/**
 * Menyimpan array ID makanan favorit ke LocalStorage.
 *
 * Mengapa fungsi ini diperlukan:
 * Fungsi helper internal untuk menulis kembali array favorit yang telah diperbarui ke browser.
 *
 * Parameter:
 * @param {number[]} favoritesArray - Array ID makanan yang akan disimpan.
 *
 * Method yang digunakan:
 * - `JSON.stringify()`: Mengubah struktur array menjadi teks string agar dapat disimpan di LocalStorage.
 * - `localStorage.setItem()`: Menyimpan pasangan key dan value ke browser.
 */
function saveFavorites(favoritesArray) {
  try {
    const uniqueIds = Array.from(new Set(favoritesArray.map((id) => Number(id))));
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(uniqueIds));
  } catch (error) {
    console.error("Gagal menyimpan data favorit ke LocalStorage:", error);
  }
}

/**
 * Memeriksa apakah suatu makanan sudah masuk dalam daftar favorit.
 *
 * Mengapa fungsi ini diperlukan:
 * Digunakan untuk menentukan tampilan ikon tombol favorit (apakah berwarna merah/aktif atau kosong).
 *
 * Parameter:
 * @param {number|string} foodId - ID makanan yang ingin dicek.
 *
 * Return:
 * @returns {boolean} True jika sudah menjadi favorit, false jika belum.
 *
 * Method yang digunakan:
 * - includes(): Memeriksa apakah sebuah elemen ada di dalam array.
 */
function isFavorite(foodId) {
  const currentFavorites = getFavorites();
  const numericId = Number(foodId);
  return currentFavorites.includes(numericId);
}

/**
 * Menambahkan ID makanan ke daftar favorit di LocalStorage.
 *
 * Mengapa fungsi ini diperlukan:
 * Dipanggil saat pengguna menekan tombol favorit/love pada card makanan atau halaman detail.
 *
 * Parameter:
 * @param {number|string} foodId - ID makanan yang ingin ditambahkan.
 *
 * Return:
 * @returns {boolean} True jika berhasil ditambahkan, false jika sudah ada sebelumnya.
 *
 * Method yang digunakan:
 * - push(): Menambahkan elemen baru ke akhir array.
 */
function addFavorite(foodId) {
  const numericId = Number(foodId);
  if (isNaN(numericId) || numericId <= 0) return false;

  const currentFavorites = getFavorites();

  // Cegah duplikasi ID jika sudah ada di dalam favorit
  if (!currentFavorites.includes(numericId)) {
    currentFavorites.push(numericId);
    saveFavorites(currentFavorites);
    return true;
  }

  return false;
}

/**
 * Menghapus ID makanan dari daftar favorit di LocalStorage.
 *
 * Mengapa fungsi ini diperlukan:
 * Dipanggil saat pengguna membatalkan favorit pada card makanan, halaman detail,
 * atau menghapus kartu favorit di halaman Favorit (`favorites.html`).
 *
 * Parameter:
 * @param {number|string} foodId - ID makanan yang ingin dihapus.
 *
 * Return:
 * @returns {boolean} True jika berhasil dihapus.
 *
 * Method yang digunakan:
 * - filter(): Membuat array baru tanpa elemen ID yang ingin dihapus.
 */
function removeFavorite(foodId) {
  const numericId = Number(foodId);
  const currentFavorites = getFavorites();
  const updatedFavorites = currentFavorites.filter((id) => id !== numericId);

  saveFavorites(updatedFavorites);
  return true;
}

/**
 * Mengganti (toggle) status favorit makanan (tambah jika belum ada, hapus jika sudah ada).
 *
 * Mengapa fungsi ini diperlukan:
 * Mempermudah event handler tombol love pada UI cukup memanggil satu fungsi ini.
 *
 * Parameter:
 * @param {number|string} foodId - ID makanan yang tombolnya ditekan.
 *
 * Return:
 * @returns {boolean} Status baru: true jika sekarang menjadi favorit, false jika sekarang tidak favorit.
 */
function toggleFavorite(foodId) {
  const numericId = Number(foodId);
  if (isFavorite(numericId)) {
    removeFavorite(numericId);
    return false;
  } else {
    addFavorite(numericId);
    return true;
  }
}

/**
 * Mengambil daftar objek makanan lengkap yang termasuk dalam favorit.
 *
 * Mengapa fungsi ini diperlukan:
 * Diperlukan khusus oleh halaman `favorites.html` untuk me-render card makanan secara lengkap,
 * dengan cara mencocokkan ID dari LocalStorage ke master data `foods`.
 *
 * Return:
 * @returns {Array} Kumpulan objek makanan lengkap yang ada di favorit.
 *
 * Method yang digunakan:
 * - forEach() atau map() / filter(): Mencari makanan yang ID-nya ada di daftar favorit.
 */
function getFavoriteFoods() {
  const favoriteIds = getFavorites();
  if (!favoriteIds || favoriteIds.length === 0) {
    return [];
  }

  // Jika foods terdefinisi di lingkungan global
  if (typeof foods !== "undefined" && Array.isArray(foods)) {
    return foods.filter((food) => favoriteIds.includes(food.id));
  }

  return [];
}

/**
 * Menghapus seluruh data favorit dari LocalStorage.
 *
 * Mengapa fungsi ini diperlukan:
 * Digunakan jika pengguna ingin membersihkan seluruh koleksi favoritnya sekaligus.
 */
function clearAllFavorites() {
  try {
    localStorage.removeItem(FAVORITES_KEY);
  } catch (error) {
    console.error("Gagal membersihkan data favorit:", error);
  }
}

// Mendukung ekspor modul jika dijalankan di Node.js / module bundler
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    FAVORITES_KEY,
    getFavorites,
    saveFavorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    getFavoriteFoods,
    clearAllFavorites
  };
}
