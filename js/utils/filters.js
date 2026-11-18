/**
 * ==============================================================================
 * MANGKASARA — UTILITY FILTER DAN PENCARIAN
 * ==============================================================================
 * File ini berisi fungsi-fungsi logika untuk:
 * 1. Menyaring makanan berdasarkan kata kunci pencarian nama.
 * 2. Menyaring makanan berdasarkan kategori yang dipilih.
 * 3. Mengombinasikan pencarian dan kategori secara simultan (bersamaan).
 * 4. Memilih makanan secara acak (Random Culinary).
 * ==============================================================================
 */

/**
 * Menyaring daftar makanan berdasarkan kombinasi kata kunci pencarian dan kategori.
 *
 * Mengapa fungsi ini diperlukan:
 * Sesuai kebutuhan PRD, pengguna di halaman Explore dapat mengetik kata kunci DAN
 * memilih kategori sekaligus. Kedua kondisi penyaringan ini harus dipenuhi bersamaan.
 *
 * Parameter:
 * @param {Array} foodsList - Array kumpulan objek makanan yang akan disaring.
 * @param {string} searchTerm - Kata kunci pencarian yang diketik pengguna di kolom input.
 * @param {string|number} selectedCategory - ID kategori yang dipilih ("all", 1, 2, dst.).
 *
 * Return:
 * @returns {Array} Array makanan baru yang lolos penyaringan kedua kriteria.
 *
 * Method dan Alur Logika:
 * 1. `trim()`: Menghapus spasi berlebih di awal dan akhir teks pencarian.
 * 2. `toLowerCase()`: Mengubah teks menjadi huruf kecil agar pencarian bersifat case-insensitive
 *    (misal: kata "coto", "Coto", dan "COTO" akan memberikan hasil yang sama).
 * 3. `filter()`: Menjelajahi setiap item di foodsList dan hanya menyimpan item yang lolos uji kondisi.
 * 4. `includes()`: Memeriksa apakah string nama makanan memuat potongan kata kunci pencarian.
 * 5. Operator logika `&&` (DAN): Mengharuskan kondisi pencarian bernilai true DAN kondisi kategori bernilai true.
 */
function filterFoods(foodsList, searchTerm = "", selectedCategory = "all") {
  if (!Array.isArray(foodsList)) {
    return [];
  }

  // Bersihkan teks kata kunci dan ubah ke huruf kecil
  const cleanSearchTerm = searchTerm.trim().toLowerCase();

  return foodsList.filter((food) => {
    // Kondisi 1: Pencarian nama makanan
    // Jika kata kunci kosong, otomatis bernilai true (semua nama lolos)
    const matchesSearch =
      cleanSearchTerm === "" ||
      food.name.toLowerCase().includes(cleanSearchTerm);

    // Kondisi 2: Penyaringan kategori
    // Jika kategori bernilai "all", semua kategori lolos
    const matchesCategory =
      selectedCategory === "all" ||
      food.categoryId === Number(selectedCategory);

    // Kembalikan true hanya jika lolos kedua kondisi
    return matchesSearch && matchesCategory;
  });
}

/**
 * Memilih satu makanan secara acak dari kumpulan makanan yang tersedia.
 *
 * Mengapa fungsi ini diperlukan:
 * Mengimplementasikan fitur "Discover Random Culinary" (Pilihan Acak)
 * untuk memberikan rekomendasi spontan kepada pengunjung.
 *
 * Parameter:
 * @param {Array} foodsList - Kumpulan makanan yang menjadi kandidat pemilihan acak.
 *
 * Return:
 * @returns {object|null} Objek makanan yang terpilih secara acak, atau null jika daftar kosong.
 *
 * Method yang digunakan:
 * - `Math.random()`: Menghasilkan bilangan desimal acak antara 0 (inklusif) dan 1 (eksklusif).
 * - `Math.floor()`: Membulatkan bilangan desimal ke bawah ke integer terdekat.
 * - Rumus indeks acak: `Math.floor(Math.random() * foodsList.length)`
 */
function getRandomFood(foodsList) {
  if (!Array.isArray(foodsList) || foodsList.length === 0) {
    return null;
  }

  // Pilih indeks acak dari 0 sampai (panjang array - 1)
  const randomIndex = Math.floor(Math.random() * foodsList.length);

  return foodsList[randomIndex];
}

// Mendukung ekspor modul jika dijalankan di Node.js / module bundler
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    filterFoods,
    getRandomFood
  };
}
