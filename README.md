# Kuliner Makassar --- Project README

> **Nama produk:** sementara / belum ditentukan\
> **Tagline konsep:** *Discover the Taste of Makassar*\
> **Jenis produk:** platform eksplorasi dan ensiklopedia kuliner
> tradisional Makassar\
> **Status:** Frontend MVP --- semester ini

------------------------------------------------------------------------

## 1. Tentang proyek

**Mangkasara** adalah nama brand untuk platform ini. Nama tersebut dipilih oleh tim sebagai identitas website yang berfokus pada kuliner tradisional Makassar.

Mangkasara merupakan platform digital untuk mengenalkan dan membantu
pengguna mengeksplorasi kuliner tradisional Makassar. Pengguna dapat
menemukan makanan melalui kategori, pencarian, dan rekomendasi, lalu
mempelajari informasi setiap hidangan melalui halaman detail.

Produk menggabungkan dua pendekatan:

1.  **Eksplorasi kuliner** --- pengguna dapat menjelajahi koleksi
    makanan, mencari hidangan, memfilter kategori, menemukan makanan
    secara acak, dan menyimpan favorit.
2.  **Ensiklopedia kuliner** --- pengguna dapat membaca deskripsi, bahan
    utama, karakteristik, serta cerita atau sejarah makanan jika
    informasinya tersedia dan memiliki sumber yang dapat dipercaya.

Mangkasara bukan aplikasi pemesanan makanan, marketplace, atau
direktori restoran. Fokus utamanya adalah dokumentasi dan pengenalan
kuliner tradisional Makassar.

### Tujuan

-   Memperkenalkan kuliner tradisional Makassar kepada masyarakat,
    khususnya generasi muda.
-   Menyediakan informasi kuliner dalam satu tempat dengan tampilan yang
    mudah dijelajahi.
-   Membantu pengguna menemukan makanan yang belum mereka kenal.
-   Menjadi proyek frontend yang dapat dikembangkan menjadi aplikasi
    full-stack pada semester berikutnya.

### Target pengguna

-   Masyarakat Makassar yang ingin mengenal kembali kuliner tradisional
    daerahnya.
-   Pelajar, mahasiswa, dan generasi muda.
-   Wisatawan atau orang luar Makassar yang ingin mengenal makanan
    tradisional Makassar.
-   Pengguna yang membutuhkan referensi informasi kuliner.

------------------------------------------------------------------------

## 2. Identitas visual dan design direction

Desain mengacu pada referensi visual yang dipilih tim: layout editorial
yang hangat, sederhana, dan menonjolkan fotografi makanan. Referensi
digunakan sebagai inspirasi, bukan untuk menyalin identitas atau konten
Dapur Kita.

### Palet warna

  Peran                           Warna              Hex
  ------------------------------- ------------------ -----------
  Background utama                Warm cream         `#FBF9F5`
  Background section alternatif   Soft beige         `#F5EFE6`
  Warna utama / aksen             Terracotta         `#BD6249`
  Aksen lembut                    Muted terracotta   `#D18A70`
  Teks utama                      Dark brown         `#302821`
  Teks sekunder                   Warm gray          `#82786F`
  Border                          Soft beige-gray    `#E9E2D9`
  Footer                          Deep brown         `#2D2621`
  Teks footer                     Warm white         `#F7F2EA`

Nilai warna di atas adalah **usulan token awal yang diturunkan dari
tampilan referensi**, bukan hasil sampling warna piksel yang presisi.
Tim boleh menyesuaikan setelah implementasi UI.

### Tipografi

-   **Heading:** Playfair Display atau font serif sejenis untuk kesan
    editorial dan tradisional.
-   **Body/UI:** DM Sans atau sans-serif sejenis untuk keterbacaan.
-   Gunakan heading serif untuk judul hero, judul section, dan judul
    detail makanan.
-   Gunakan sans-serif untuk navigasi, deskripsi, label, tombol, dan
    metadata.

Jika memakai Google Fonts, sediakan fallback system font agar halaman
tetap terbaca saat font eksternal gagal dimuat.

### Karakter layout

-   Navbar tipis dan sederhana.
-   Hero section dengan teks di satu sisi dan foto kuliner di sisi lain.
-   Kategori ditampilkan sebagai card ringkas.
-   Koleksi kuliner menggunakan card bergambar.
-   Bagian cerita/quote untuk memperkuat identitas budaya.
-   Footer berwarna gelap sebagai penutup visual.
-   Sudut card dan gambar sedikit membulat, bayangan tipis, ruang kosong
    yang cukup.
-   Responsif untuk desktop, tablet, dan mobile.

------------------------------------------------------------------------

## 3. Ciri khas produk

Ciri khas website adalah **menjelajahi makanan sekaligus memahami cerita
dan karakteristiknya**.

Informasi yang dapat ditampilkan pada detail makanan:

-   Nama makanan.
-   Kategori.
-   Foto.
-   Deskripsi singkat.
-   Bahan utama.
-   Karakteristik atau cita rasa.
-   Cerita, sejarah, atau latar budaya (opsional, hanya jika sumbernya
    memadai).
-   Referensi/sumber informasi (disarankan).
-   Kuliner terkait.

Konten harus berfokus pada kuliner tradisional Makassar. Jangan otomatis
memasukkan semua makanan yang dijual di Makassar atau seluruh makanan
Sulawesi Selatan sebagai makanan khas Makassar. Jika asal atau
keterkaitan suatu hidangan belum jelas, tandai untuk verifikasi sebelum
dipublikasikan.

------------------------------------------------------------------------

## 4. Fitur produk

### 4.1 Fitur Frontend --- semester ini

  -----------------------------------------------------------------------
  Fitur                   Deskripsi               Implementasi semester
                                                  ini
  ----------------------- ----------------------- -----------------------
  Homepage                Memperkenalkan platform Data statis/dummy dari
                          dan menampilkan kuliner JavaScript
                          pilihan                 

  Explore Kuliner         Menampilkan seluruh     Array data JavaScript
                          koleksi kuliner         

  Search                  Mencari makanan         Filter array di browser
                          berdasarkan nama        

  Category Filter         Menyaring makanan       Filter array di browser
                          berdasarkan kategori    

  Food Detail             Menampilkan informasi   Data dummy berdasarkan
                          lengkap satu makanan    ID

  Favorites               Menyimpan dan menghapus LocalStorage
                          makanan favorit         

  Random Culinary         Memilih satu makanan    Logika JavaScript dari
                          secara acak             data lokal

  Responsive UI           Menyesuaikan tampilan   CSS responsive
                          di berbagai ukuran      
                          layar                   
  -----------------------------------------------------------------------

### 4.2 Pengembangan Backend --- semester berikutnya

  -----------------------------------------------------------------------
  Fitur                               Deskripsi
  ----------------------------------- -----------------------------------
  REST API                            Menyediakan data kuliner dan
                                      kategori untuk frontend

  MySQL Database                      Menyimpan data makanan, kategori,
                                      akun, dan favorit

  Authentication                      Registrasi, login, dan logout

  User Favorites                      Menyimpan favorit berdasarkan akun
                                      pengguna

  Admin Dashboard                     Halaman khusus pengelola konten

  CRUD Kuliner                        Admin dapat menambah, melihat,
                                      mengubah, dan menghapus makanan

  CRUD Kategori                       Admin dapat mengelola kategori

  Content Management                  Mengelola foto, sumber, dan
                                      informasi makanan
  -----------------------------------------------------------------------

**Batas scope:** login/register dan dashboard admin bukan kewajiban
frontend MVP semester ini. Jangan membuat fitur backend palsu hanya
untuk terlihat lengkap. Jika diperlukan, cukup sisakan struktur halaman
atau dokumentasi integrasi.

------------------------------------------------------------------------

## 5. Scope dan pembagian semester

### Semester ini --- Frontend MVP

**Teknologi:** HTML, CSS, Vanilla JavaScript.

Tim perlu menyelesaikan:

1.  Menentukan struktur halaman dan design system.
2.  Membuat navbar, footer, tombol, card, dan komponen umum.
3.  Membuat homepage.
4.  Menyusun data dummy kuliner dan kategori.
5.  Membuat halaman Explore.
6.  Membuat search dan category filter.
7.  Membuat halaman detail kuliner.
8.  Membuat Favorites dengan LocalStorage.
9.  Membuat Random Culinary.
10. Memastikan responsive layout dan melakukan testing.

### Semester berikutnya --- Backend dan integrasi

**Pilihan teknologi:** Node.js + MySQL. Express.js dapat digunakan jika
diperbolehkan dan dipahami oleh tim.

Tim perlu menyelesaikan:

1.  Merancang dan membuat database MySQL.
2.  Membuat API untuk kuliner dan kategori.
3.  Menghubungkan frontend ke API menggunakan `fetch()`.
4.  Memindahkan sumber data dari array JavaScript ke database.
5.  Membuat authentication.
6.  Memindahkan penyimpanan favorit dari LocalStorage ke database per
    pengguna.
7.  Membuat admin dashboard dan fitur CRUD.

------------------------------------------------------------------------

## 6. Data dummy untuk frontend

Simpan data awal dalam file JavaScript terpisah agar mudah diganti
dengan API nanti.

Contoh `data/foods.js`:

``` js
export const foods = [
  {
    id: 1,
    slug: "coto-makassar",
    name: "Coto Makassar",
    categoryId: 1,
    shortDescription: "Hidangan berkuah tradisional Makassar.",
    description: "Deskripsi lengkap makanan ditulis berdasarkan sumber yang dapat diverifikasi.",
    ingredients: ["Daging sapi", "Jeroan", "Kacang tanah", "Rempah"],
    characteristics: "Kuah kaya rempah dan bercita rasa gurih.",
    history: null,
    image: "assets/images/coto-makassar.webp",
    source: [],
    featured: true
  }
];
```

Contoh `data/categories.js`:

``` js
export const categories = [
  { id: 1, name: "Hidangan Berkuah", slug: "hidangan-berkuah" },
  { id: 2, name: "Makanan Utama", slug: "makanan-utama" },
  { id: 3, name: "Olahan Ikan", slug: "olahan-ikan" },
  { id: 4, name: "Camilan & Jajanan", slug: "camilan-jajanan" },
  { id: 5, name: "Kue & Hidangan Manis", slug: "kue-hidangan-manis" }
];
```

Kategori dan daftar makanan merupakan kurasi awal tim, bukan klasifikasi
resmi yang mutlak. Verifikasi identitas dan asal setiap makanan sebelum
konten final dimasukkan.

### Aturan data

-   Gunakan `id` yang unik dan stabil.
-   Gunakan `categoryId` untuk menghubungkan makanan dengan kategori.
-   Gunakan `slug` untuk URL atau pencarian detail yang mudah dibaca.
-   Jangan menyimpan file gambar sebagai base64 di data JavaScript;
    simpan path atau URL gambar.
-   `history` boleh `null` jika belum ada informasi yang terverifikasi.
-   Simpan sumber informasi untuk memudahkan pemeriksaan fakta.

------------------------------------------------------------------------

## 7. Struktur folder frontend yang disarankan

Salah satu struktur sederhana tanpa framework:

``` text
project/
├── index.html
├── pages/
│   ├── explore.html
│   ├── detail.html
│   └── favorites.html
├── assets/
│   ├── images/
│   └── icons/
├── css/
│   ├── style.css
│   ├── components.css
│   └── responsive.css
└── js/
    ├── data/
    │   ├── foods.js
    │   └── categories.js
    ├── utils/
    │   └── storage.js
    ├── components/
    │   ├── navbar.js
    │   └── food-card.js
    └── pages/
        ├── home.js
        ├── explore.js
        ├── detail.js
        └── favorites.js
```

Struktur ini fleksibel. Jika tim memilih satu halaman dengan beberapa
section atau pendekatan lain, struktur dapat disesuaikan. Yang penting
pemisahan data, tampilan, dan logika tetap jelas.

------------------------------------------------------------------------

## 8. Rencana migrasi dari dummy data ke MySQL

### Prinsip arsitektur

Browser **tidak boleh mengakses MySQL secara langsung**. Alur yang
benar:

``` text
Frontend (HTML/CSS/JS)
        |
        | HTTP request menggunakan fetch()
        v
Backend API (Node.js)
        |
        | query melalui driver database
        v
MySQL Database
```

Pada semester ini, frontend mengambil data dari file JavaScript lokal.
Semester depan, bagian pengambilan data diganti menjadi request ke API.
Bentuk objek data sebaiknya dijaga konsisten agar perubahan tidak
terlalu besar.

### Rancangan tabel MySQL awal

  -----------------------------------------------------------------------
  Tabel                   Kolom penting           Kegunaan
  ----------------------- ----------------------- -----------------------
  `categories`            `id`, `name`, `slug`    Kategori makanan

  `foods`                 `id`, `category_id`,    Data kuliner
                          `name`, `slug`,         
                          `description`,          
                          `characteristics`,      
                          `history`, `image_url`, 
                          `is_featured`           

  `food_ingredients`      `id`, `food_id`,        Bahan makanan
                          `ingredient_name`       

  `food_sources`          `id`, `food_id`,        Sumber informasi
                          `source_name`,          
                          `source_url`            

  `users`                 `id`, `name`, `email`,  Akun pengguna
                          `password_hash`         

  `favorites`             `id`, `user_id`,        Relasi favorit pengguna
                          `food_id`, `created_at` 
  -----------------------------------------------------------------------

Gunakan foreign key untuk relasi. Tambahkan unique constraint pada email
dan kombinasi `user_id` + `food_id` di tabel favorites. Password harus
disimpan sebagai hash, bukan teks biasa.

### API yang mungkin dibutuhkan

  Method   Endpoint                   Fungsi
  -------- -------------------------- ---------------------------------------
  GET      `/api/foods`               Mengambil daftar kuliner
  GET      `/api/foods/:id`           Mengambil detail kuliner
  GET      `/api/categories`          Mengambil kategori
  GET      `/api/foods?search=coto`   Pencarian
  GET      `/api/foods?category=1`    Filter kategori
  GET      `/api/foods/random`        Mengambil kuliner acak
  POST     `/api/auth/register`       Registrasi
  POST     `/api/auth/login`          Login
  GET      `/api/favorites`           Mengambil favorit pengguna yang login
  POST     `/api/favorites`           Menambahkan favorit
  DELETE   `/api/favorites/:foodId`   Menghapus favorit

Endpoint admin untuk CRUD harus dilindungi autentikasi dan otorisasi
admin. Daftar di atas merupakan rancangan awal, bukan API yang sudah
dibuat.

### Opsi A --- Node.js tanpa framework

Gunakan modul bawaan `http` dari Node.js untuk membuat server dan
menangani request/response. Gunakan package driver MySQL seperti
`mysql2` untuk koneksi database.

Kelebihan: - Memahami dasar server HTTP, routing, request, dan
response. - Tidak bergantung pada framework backend.

Kekurangan: - Routing, parsing body, validasi, error handling, dan
middleware perlu dibuat lebih manual. - Lebih banyak kode pendukung
ketika endpoint bertambah.

Cocok jika tujuan pembelajaran semester depan adalah memahami cara kerja
backend dari dasar dan guru meminta tanpa framework.

### Opsi B --- Node.js dengan Express.js

Express membantu membuat routing dan middleware lebih ringkas. Koneksi
database tetap menggunakan driver seperti `mysql2`.

Contoh alur endpoint (ilustrasi):

``` js
app.get("/api/foods", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM foods");
  res.json(rows);
});
```

Kelebihan: - Routing dan middleware lebih sederhana. - Lebih mudah
mengatur endpoint yang bertambah. - Cocok untuk proyek kelompok yang
akan dikembangkan.

Kekurangan: - Tim perlu memahami konsep Express, middleware, dan
struktur backend. - Tetap harus memahami SQL dan keamanan API.

**Rekomendasi:** pelajari dasar Node.js terlebih dahulu. Jika guru
memperbolehkan framework dan tim sudah memahami request/response,
Express + `mysql2` adalah pilihan praktis. Jangan menghubungkan browser
langsung ke MySQL dan jangan menaruh kredensial database di frontend.

### Contoh perubahan sumber data

Semester ini:

``` js
import { foods } from "../data/foods.js";

function getFoods() {
  return foods;
}
```

Semester depan:

``` js
async function getFoods() {
  const response = await fetch("http://localhost:3000/api/foods");

  if (!response.ok) {
    throw new Error("Gagal mengambil data kuliner");
  }

  return await response.json();
}
```

Agar mudah dipindahkan, komponen UI sebaiknya menerima data sebagai
parameter dan tidak bergantung langsung pada file dummy. Misalnya
`renderFoodCard(food)` tetap dapat digunakan baik data berasal dari
array lokal maupun API.

------------------------------------------------------------------------

## 9. Batasan proyek

Tidak termasuk scope MVP frontend:

-   Pemesanan atau pembayaran makanan.
-   Marketplace.
-   Direktori dan pencarian restoran.
-   Live chat.
-   Komentar dan rating pengguna.
-   Login/register sungguhan.
-   Admin dashboard dan CRUD sungguhan.
-   Integrasi database pada frontend semester ini.

Fitur tersebut dapat dipertimbangkan lagi jika ada kebutuhan dan waktu,
tetapi jangan mengganggu penyelesaian MVP.

------------------------------------------------------------------------

## 10. Definition of Done --- Frontend MVP

Frontend MVP dianggap selesai jika:

-   Semua halaman utama dapat dibuka dan navigasinya berfungsi.
-   Data dummy ditampilkan konsisten.
-   Search menghasilkan hasil yang sesuai.
-   Filter kategori bekerja dan dapat dikombinasikan dengan search.
-   Detail menampilkan makanan yang benar berdasarkan ID/slug.
-   Favorites dapat ditambah, dihapus, dan bertahan setelah refresh
    melalui LocalStorage.
-   Random Culinary menampilkan salah satu data yang tersedia.
-   Tampilan dapat digunakan di desktop dan mobile.
-   Tidak ada tombol utama yang tidak memiliki aksi.
-   Tidak ada error JavaScript yang belum ditangani di console.
-   Konten dan gambar memiliki sumber/izin penggunaan yang jelas.

------------------------------------------------------------------------

## 11. Prinsip pengembangan tim

1.  Selesaikan alur utama sebelum menambah fitur tambahan.
2.  Sepakati bentuk data sebelum anggota membuat halaman masing-masing.
3.  Gunakan komponen dan class CSS yang konsisten.
4.  Hindari menulis ulang data makanan di banyak file.
5.  Gunakan Git branch atau pembagian tugas yang disepakati agar
    perubahan tidak saling menimpa.
6.  Uji fitur setelah digabungkan, bukan hanya di komputer
    masing-masing.
7.  Utamakan akurasi konten kuliner dan kualitas pengalaman pengguna.
