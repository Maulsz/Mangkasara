/**
 * ==============================================================================
 * MANGKASARA — DATA KATEGORI KULINER
 * ==============================================================================
 * File ini menyimpan data master kategori kuliner tradisional Makassar.
 * Setiap kategori memiliki:
 * - id: Identitas angka unik yang dihubungkan dengan categoryId pada makanan.
 * - name: Nama kategori yang ditampilkan pada antarmuka (UI).
 * - slug: Representasi nama yang ramah URL (URL-friendly string).
 * - description: Penjelasan singkat karakter kategori kuliner.
 * - icon: Simbol visual pendukung untuk card kategori pada beranda.
 * 
 * Penggunaan di aplikasi:
 * - Digunakan oleh filter kategori pada halaman Explore (`explore.html`).
 * - Digunakan untuk menampilkan card kategori pada Beranda (`index.html`).
 * - Digunakan untuk mencari nama kategori pada halaman Detail (`detail.html`).
 * ==============================================================================
 */

const categories = [
  {
    id: 1,
    name: "Hidangan Berkuah",
    slug: "hidangan-berkuah",
    description: "Kelezatan aneka sup dan hidangan berkuah kaya rempah khas Makassar.",
    icon: "🍲"
  },
  {
    id: 2,
    name: "Makanan Utama",
    slug: "makanan-utama",
    description: "Santapan pokok pengenyang yang kaya tradisi dan cita rasa otentik.",
    icon: "🍚"
  },
  {
    id: 3,
    name: "Olahan Ikan & Seafood",
    slug: "olahan-ikan-seafood",
    description: "Kekayaan kuliner hasil laut Selat Makassar dengan bumbu khas pesisir.",
    icon: "🐟"
  },
  {
    id: 4,
    name: "Camilan & Jajanan",
    slug: "camilan-jajanan",
    description: "Kudapan renyah dan jajanan jalanan legendaris pelepas rasa lapar.",
    icon: "🥟"
  },
  {
    id: 5,
    name: "Kue & Hidangan Manis",
    slug: "kue-hidangan-manis",
    description: "Kudapan penutup manis tradisional berbahan dasar pisang dan santan.",
    icon: "🍧"
  }
];

/**
 * Mendapatkan objek kategori berdasarkan ID.
 *
 * Mengapa fungsi ini diperlukan:
 * Pada halaman detail dan card makanan, data makanan hanya menyimpan `categoryId` (misal 1).
 * Fungsi ini mencocokkan angka tersebut dengan daftar kategori untuk mengambil nama lengkapnya.
 *
 * Parameter:
 * @param {number|string} categoryId - ID kategori yang ingin dicari.
 * 
 * Return:
 * @returns {object|undefined} Objek kategori yang cocok, atau undefined jika tidak ditemukan.
 *
 * Method yang digunakan:
 * - find(): Mencari satu elemen di dalam array yang memenuhi kondisi perbandingan.
 * - Number(): Mengubah parameter string menjadi tipe data number agar perbandingan akurat.
 */
function getCategoryById(categoryId) {
  return categories.find((cat) => cat.id === Number(categoryId));
}

// Mendukung ekspor modul jika dijalankan di Node.js / module bundler
if (typeof module !== "undefined" && module.exports) {
  module.exports = { categories, getCategoryById };
}
