# Mangkasara — Platform Eksplorasi & Ensiklopedia Kuliner Makassar

> **Nama Produk:** Mangkasara  
> **Tagline:** _Discover the Taste of Makassar_  
> **Jenis Produk:** Platform Eksplorasi dan Ensiklopedia Kuliner Tradisional Makassar  
> **Status:** Frontend MVP (Semester 1 Selesai & Berfungsi Penuh)

---

## 1. Tentang Proyek & Visi Produk

**Mangkasara** adalah nama brand untuk platform digital yang didedikasikan untuk mendokumentasikan, mengenalkan, dan membantu masyarakat menjelajahi kekayaan kuliner tradisional khas Makassar, Sulawesi Selatan.

Konsep produk menggabungkan dua pengalaman utama:
1. **Eksplorasi Kuliner (Culinary Discovery)**: Pengguna dapat menjelajahi seluruh koleksi hidangan, mencari makanan berdasarkan nama, menyaring berdasarkan lima kategori utama, mendapatkan rekomendasi acak (Random Culinary), serta menyimpan hidangan ke dalam koleksi favorit.
2. **Ensiklopedia Kuliner (Culinary Encyclopedia)**: Pengguna dapat mempelajari setiap hidangan secara mendalam melalui deskripsi lengkap, daftar bahan utama, profil cita rasa dan karakteristik, cerita latar belakang budaya/sejarah yang terverifikasi, serta daftar sumber referensi literatur.

### Batasan Produk (What Mangkasara IS NOT)
Mangkasara berfokus murni pada dokumentasi budaya dan pengetahuan kuliner. Platform ini **BUKAN**:
- Aplikasi pemesanan makanan (food ordering).
- Marketplace atau toko daring.
- Direktori restoran atau ulasan tempat makan komersial.
- Layanan pesan-antar makanan.

### Target Pengguna
- Masyarakat Makassar yang ingin mengenal kembali warisan kuliner daerahnya.
- Pelajar, mahasiswa, dan generasi muda.
- Wisatawan lokal maupun mancanegara yang berkunjung ke Makassar.
- Peneliti, pendidik, dan pecinta kuliner Nusantara.

---

## 2. Identitas Visual & Design System

Desain antarmuka Mangkasara mengusung gaya **editorial kuliner modern**: elegan, hangat, bersih, dan berakar pada budaya lokal dengan tipografi yang kuat serta penonjolan fotografi makanan. Visual dirancang terinspirasi dari referensi terpilih tim (`reference/dapur-kita-reference.jpg`) dengan identitas orisinil Mangkasara.

### Palet Warna (Design Tokens)
Ditetapkan dalam variabel CSS (`:root` di `css/style.css`):

| Peran Token | Nama Warna | Nilai Hex | Penggunaan di Antarmuka |
|---|---|---|---|
| `--color-bg` | Warm cream | `#FBF9F5` | Latar belakang utama seluruh halaman |
| `--color-section` | Soft beige | `#F5EFE6` | Latar belakang section alternatif & kartu aksen |
| `--color-primary` | Terracotta | `#BD6249` | Warna aksen brand, tombol utama, & link aktif |
| `--color-primary-soft` | Muted terracotta | `#D18A70` | Aksen lembut untuk border hover dan tag |
| `--color-text` | Dark brown | `#302821` | Teks utama dengan kontras tinggi dan mudah dibaca |
| `--color-muted` | Warm gray | `#82786F` | Teks sekunder, deskripsi ringkas, dan placeholder |
| `--color-border` | Soft beige-gray | `#E9E2D9` | Garis batas kartu, toolbar, dan pemisah konten |
| `--color-footer` | Deep brown | `#2D2621` | Latar belakang footer elegan penutup halaman |
| `--color-footer-text` | Warm white | `#F7F2EA` | Teks dan tautan di area footer |

### Tipografi
- **Headings & Editorial Titles:** `Playfair Display` (serif) untuk memberikan kesan klasik, terpercaya, dan editorial tradisional.
- **Body Text & UI Controls:** `DM Sans` (sans-serif) untuk menjamin keterbacaan tinggi pada navigasi, paragraf, tombol, dan form input.
- **Fallback Fonts:** Dilengkapi sistem font cadangan bawaan (Georgia, Times New Roman, -apple-system, Segoe UI, Roboto, Arial) sehingga halaman tetap tampil rapi jika koneksi internet font terhambat.

---

## 3. Struktur Folder Proyek

Kode sumber disusun rapi dan modular agar mudah dipelajari serta dikembangkan oleh tim mahasiswa:

```text
mangkasara/
│
├── index.html                   # Halaman 01: Beranda (Hero, Filosofi, Pilihan Editor, Kategori)
├── explore.html                 # Halaman 02: Jelajah Kuliner (Search, Filter, Reset, Random Modal)
├── detail.html                  # Halaman 03: Detail Kuliner (Ensiklopedia, Sejarah, Bahan, Terkait)
├── favorites.html               # Halaman 04: Koleksi Favorit (LocalStorage, Hapus Semua, Empty State)
│
├── assets/
│   ├── images/
│   │   ├── coto.jpg             # Foto kuliner asli tim: Coto Makassar
│   │   ├── jalangkote.jpg       # Foto kuliner asli tim: Jalangkote
│   │   ├── pisang-epe.jpg       # Foto kuliner asli tim: Pisang Epe
│   │   ├── pisang-hijo.jpg      # Foto kuliner asli tim: Es Pisang Ijo
│   │   └── placeholder-food.svg # Gambar netral fallback jika foto belum tersedia
│   └── reference/
│       └── dapur-kita-reference.jpg # Referensi visual awal tim
│
├── reference/
│   └── dapur-kita-reference.jpg # Akses referensi visual root
│
├── css/
│   ├── style.css                # Design tokens, reset, base typography, container layout
│   ├── components.css           # Styling komponen (navbar, card, modal, breadcrumb, footer)
│   └── responsive.css           # Media queries responsif (Desktop, Tablet, Mobile)
│
├── js/
│   ├── data/
│   │   ├── categories.js        # Data master 5 kategori kuliner & helper fungsi
│   │   └── foods.js             # Single source of truth 25 kuliner Makassar & helper fungsi
│   │
│   ├── utils/
│   │   ├── storage.js           # Manajemen LocalStorage favorit dengan try-catch aman
│   │   └── filters.js           # Logika filter gabungan nama + kategori & fungsi Random
│   │
│   ├── components/
│   │   ├── navbar.js            # Interaktivitas navbar, active state, mobile drawer, counter badge
│   │   └── food-card.js         # Generator template HTML kartu kuliner & event delegation favorit
│   │
│   └── pages/
│       ├── home.js              # Controller halaman Beranda
│       ├── explore.js           # Controller halaman Explore & Random Culinary Modal
│       ├── detail.js            # Controller halaman Detail Kuliner & penanganan ID
│       └── favorites.js         # Controller halaman Favorit & empty state
│
├── front-end-PRD.md             # Dokumen spesifikasi kebutuhan produk (PRD)
└── README.md                    # Dokumentasi lengkap proyek & petunjuk pengembangan
```

---

## 4. Halaman yang Diimplementasikan

### 1. Beranda (`index.html`)
- **Navbar Wordmark:** Logo tipografis Mangkasara dengan tagline *Discover the Taste of Makassar*.
- **Hero Section:** Tata letak editorial 2 kolom (teks headline + foto asli Coto Makassar dari aset tim berbalut kartu mengambang).
- **Pengenalan Mangkasara:** Tiga pilar utama (Keaslian Cita Rasa, Cerita & Budaya, Eksplorasi Interaktif).
- **Kuliner Pilihan (Featured):** Menampilkan hidangan pilihan bertanda `featured: true` langsung dari dataset tanpa duplikasi kode.
- **Kategori Kuliner:** Menampilkan 5 kartu kategori dengan jumlah hidangan yang dapat diklik untuk langsung menuju halaman Explore dengan kategori tersebut terseleksi.
- **Kutipan Budaya:** Kutipan editorial mengenai perjumpaan hasil laut Selat Makassar dan jalur rempah Nusantara.
- **Footer:** Identitas, navigasi sitemap, dan hak cipta.

### 2. Jelajah Kuliner (`explore.html`)
- **Pencarian Real-Time:** Mencari nama makanan secara instan, tidak membedakan huruf besar/kecil (`toLowerCase()`), dan memotong spasi kosong (`trim()`).
- **Penyaringan 5 Kategori:** Pilihan tombol pill ("Semua" dan 5 kategori otentik).
- **Filter Kombinasi:** Pencarian nama dan filter kategori bekerja secara simultan (keduanya harus terpenuhi).
- **Tombol Reset Filter:** Membersihkan input teks pencarian dan mengembalikan kategori ke "Semua".
- **Status Hasil Pencarian:** Menampilkan jumlah makanan yang ditemukan secara dinamis.
- **Empty State Ramah:** Menampilkan ilustrasi dan pesan jelas jika tidak ada makanan yang sesuai kriteria pencarian, lengkap dengan tombol untuk mereset filter.
- **Random Culinary (Pilihan Acak):** Menampilkan modal pop-up yang memilih satu hidangan secara acak dengan tombol "Lihat Detail Lengkap" dan "Pilih Lainnya" untuk mengulang undian.
- **Dukungan Parameter URL:** Membaca parameter `?category=X` saat pengguna berpindah dari kategori di Beranda.

### 3. Detail Kuliner (`detail.html?id=X`)
- **URL Query Parameter:** Membaca parameter ID makanan dari query string URL.
- **Penanganan Error (Not Found State):** Jika ID tidak ditemukan atau tidak valid, menampilkan pesan ramah dan tombol kembali ke Explore tanpa membuat halaman crash.
- **Media & Karakteristik:** Foto hidangan (dengan fallback gambar otomatis jika foto belum ada), lencana kategori, nama hidangan, deskripsi singkat, tombol favorit interaktif, dan kotak profil cita rasa.
- **Deskripsi Lengkap:** Ulasan lengkap hidangan.
- **Bahan Utama:** Daftar bahan-bahan masakan dalam bentuk list terstruktur.
- **Sejarah & Budaya (Kondisional):** Bagian sejarah HANYA ditampilkan jika makanan memiliki data sejarah terverifikasi (nilai `history` bukan `null`). Jika `null`, elemen disembunyikan sepenuhnya.
- **Referensi Sumber (Kondisional):** Bagian daftar sumber HANYA ditampilkan jika data `sources` berisi item referensi.
- **Kuliner Terkait:** Merekomendasikan makanan lain dalam kategori yang sama (tanpa menyertakan hidangan yang sedang dibuka).

### 4. Koleksi Favorit (`favorites.html`)
- **Integrasi LocalStorage:** Mengambil daftar ID tersimpan pada key `mangkasara-favorites`.
- **Manajemen Koleksi:** Menampilkan seluruh kartu makanan yang disimpan pengguna.
- **Hapus Item Langsung:** Menekan tombol love pada kartu akan langsung menghapus item tersebut dari koleksi dan memperbarui antarmuka seketika.
- **Hapus Semua:** Tombol untuk membersihkan seluruh favorit sekaligus dengan konfirmasi ramah.
- **Empty State Dinamis:** Jika koleksi kosong (atau jika item terakhir baru saja dihapus), tampilan otomatis berubah menjadi pesan ramah dengan tombol CTA menuju Explore.
- **Proteksi Data Rusak:** Dibungkus blok `try...catch` sehingga data JSON yang tidak valid di browser tidak akan menghentikan jalannya aplikasi.

---

## 5. Taksonomi & Koleksi 25 Kuliner Tradisional

Seluruh 25 hidangan tradisional Makassar yang tercantum dalam PRD telah diimplementasikan dalam dataset JavaScript (`js/data/foods.js`):

### Kategori 01: Hidangan Berkuah (`categoryId: 1`)
1. **Coto Makassar** (`id: 1`) — *Tersedia Foto Tim: `assets/images/coto.jpg` (Featured)*
2. **Pallubasa** (`id: 2`) — *(Featured)*
3. **Sop Konro** (`id: 3`) — *(Featured)*
4. **Sop Saudara** (`id: 4`)
5. **Sop Ubi** (`id: 5`)
6. **Pallumara** (`id: 6`)
7. **Pallu Kaloa** (`id: 7`)
8. **Pallu Ce'la** (`id: 8`)

### Kategori 02: Makanan Utama (`categoryId: 2`)
9. **Mie Titi** (`id: 9`) — *(Featured)*
10. **Songkolo Bagadang** (`id: 10`)
11. **Kaddo Minyak** (`id: 11`)
12. **Bassang** (`id: 12`)

### Kategori 03: Olahan Ikan & Seafood (`categoryId: 3`)
13. **Juku' Parape** (`id: 13`)
14. **Juku' Tunu** (`id: 14`)
15. **Juku' Kambu** (`id: 15`)
16. **Bandeng Bakar** (`id: 16`)

### Kategori 04: Camilan & Jajanan (`categoryId: 4`)
17. **Jalangkote** (`id: 17`) — *Tersedia Foto Tim: `assets/images/jalangkote.jpg` (Featured)*
18. **Gogoso** (`id: 18`)
19. **Baroncong** (`id: 19`)
20. **Tarajong** (`id: 20`)

### Kategori 05: Kue & Hidangan Manis (`categoryId: 5`)
21. **Barongko** (`id: 21`)
22. **Pisang Epe** (`id: 22`) — *Tersedia Foto Tim: `assets/images/pisang-epe.jpg` (Featured)*
23. **Es Pisang Ijo** (`id: 23`) — *Tersedia Foto Tim: `assets/images/pisang-hijo.jpg` (Featured)*
24. **Pallu Butung** (`id: 24`)
25. **Cucuru Bayao** (`id: 25`)

---

## 6. Standarisasi Kontrak Data (PRD vs README)

Terdapat dua perbedaan minor pada draf dokumentasi awal yang telah distandarisasi secara resmi dalam implementasi:
1. **Nama Properti Sumber Informasi:** Pada contoh README awal tertulis `source: []`, sedangkan pada PRD dan Master Prompt tertulis `sources: []`. Implementasi disepakati dan distandarisasi menggunakan nama jamak **`sources`** (tipe Array of string) sesuai spesifikasi PRD.
2. **Nama Kategori 03:** Pada draf awal disebut "Olahan Ikan", distandarisasi menjadi **"Olahan Ikan & Seafood"** (`slug: "olahan-ikan-seafood"`) agar mencakup kekayaan kepiting, udang, dan biota laut Selat Makassar lainnya.

---

## 7. Inventaris Foto & Alur Manajemen Foto Masa Depan

### Inventaris Foto Saat Ini:
- `assets/images/coto.jpg` (582x527 px) $\rightarrow$ Dimetakan ke **Coto Makassar** (`id: 1`).
- `assets/images/jalangkote.jpg` (387x258 px) $\rightarrow$ Dimetakan ke **Jalangkote** (`id: 17`).
- `assets/images/pisang-epe.jpg` (591x519 px) $\rightarrow$ Dimetakan ke **Pisang Epe** (`id: 22`).
- `assets/images/pisang-hijo.jpg` (640x480 px) $\rightarrow$ Dimetakan ke **Es Pisang Ijo** (`id: 23`).
- 21 hidangan lainnya saat ini belum memiliki foto dan menggunakan gambar fallback elegan `assets/images/placeholder-food.svg`.

### Panduan Memperbarui / Menambah Foto Baru:
Arsitektur Mangkasara dirancang agar tim dapat menambahkan foto baru **tanpa perlu mengubah kode logika JavaScript maupun HTML**:
1. Masukkan file foto baru ke dalam folder `assets/images/` (contoh: `assets/images/sop-konro.jpg`).
2. Buka file `js/data/foods.js`.
3. Temukan objek hidangan yang sesuai berdasarkan `id` atau `name`.
4. Ubah baris `image: null` menjadi path file baru, contoh:
   ```javascript
   image: "assets/images/sop-konro.jpg",
   ```
5. Simpan file. Seluruh antarmuka (kartu di Beranda, Explore, Detail, dan Favorit) akan langsung menampilkan foto tersebut secara otomatis.

---

## 8. Panduan Menjalankan Proyek Secara Lokal

Website Mangkasara dibangun murni menggunakan standar web (HTML5, CSS3, dan Vanilla JavaScript). Seluruh skrip dirancang tanpa ketergantungan modul tertutup, sehingga dapat dibuka langsung:

### Cara 1: Langsung Membuka File (Tanpa Server)
Klik ganda file `index.html` pada File Explorer / Finder di komputer Anda untuk membukanya langsung di peramban web (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari). Seluruh fitur (pencarian, navigasi, LocalStorage favorit, modal) dapat berfungsi langsung.

### Cara 2: Menggunakan Live Server (VS Code)
1. Buka folder proyek `mangkasara` di Visual Studio Code.
2. Pasang ekstensi **Live Server**.
3. Klik kanan pada file `index.html` dan pilih **Open with Live Server** (biasanya berjalan di `http://127.0.0.1:5500`).

### Cara 3: Menggunakan Python / Node Server Bawaan
Jika Anda memiliki terminal:
```bash
# Menggunakan Python 3:
python -m http.server 8000

# Atau menggunakan Node npx:
npx serve .
```
Lalu buka alamat `http://localhost:8000` di browser Anda.

---

## 9. Struktur Fungsi Penting JavaScript

Semua fungsi di dalam codebase dilengkapi dokumentasi komentar JSDoc dalam bahasa Indonesia:

- **`js/data/foods.js`**:
  - `getFoodById(id)`: Mengambil objek makanan berdasarkan ID numerik.
  - `getFeaturedFoods()`: Menyaring makanan unggulan bertanda `featured: true`.
  - `getFoodsByCategory(categoryId)`: Mengambil hidangan berdasarkan kategori tertentu.
  - `getRelatedFoods(currentFoodId, categoryId, limit)`: Mengambil hidangan rekomendasi serupa dengan mengecualikan hidangan yang sedang dibuka.
  - `getFoodImage(food)`: Mengembalikan path foto atau fallback placeholder jika foto kosong.

- **`js/utils/storage.js`**:
  - `getFavorites()`: Membaca array ID favorit dari LocalStorage secara aman dengan try-catch.
  - `isFavorite(foodId)`: Memeriksa apakah hidangan berstatus favorit.
  - `addFavorite(foodId)`: Menambahkan ID ke daftar favorit (mencegah duplikasi).
  - `removeFavorite(foodId)`: Menghapus ID dari daftar favorit.
  - `toggleFavorite(foodId)`: Mengganti status favorit secara instan.
  - `getFavoriteFoods()`: Mengambil array objek makanan lengkap yang ada di daftar favorit.
  - `clearAllFavorites()`: Menghapus seluruh riwayat favorit dari LocalStorage.

- **`js/utils/filters.js`**:
  - `filterFoods(foodsList, searchTerm, selectedCategory)`: Menyaring array makanan secara simultan berdasarkan kata kunci nama dan ID kategori.
  - `getRandomFood(foodsList)`: Memilih satu makanan secara acak menggunakan `Math.random()`.

- **`js/components/food-card.js`**:
  - `createFoodCardHTML(food)`: Menghasilkan string template kartu kuliner.
  - `attachFavoriteButtonListeners(container, callback)`: Menerapkan teknik *Event Delegation* untuk menangani klik tombol favorit.

- **`js/components/navbar.js`**:
  - `highlightActiveNavLink()`: Menandai menu navigasi aktif sesuai URL.
  - `initMobileMenu()`: Mengatur buka-tutup drawer navigasi di HP.
  - `updateNavbarFavoritesCount()`: Menghitung dan menampilkan badge jumlah favorit.

---

## 10. Rencana Pengembangan Backend (Semester Berikutnya)

### Prinsip Arsitektur Migrasi
Browser **tidak boleh mengakses MySQL secara langsung**. Pada semester berikutnya, alur arsitektur yang akan diterapkan adalah:

```text
Frontend (HTML/CSS/JS)
        │
        │ HTTP Request via fetch()
        ▼
Backend API (Node.js / Express.js)
        │
        │ SQL Query via driver database (mysql2)
        ▼
MySQL Database Server
```

### Rancangan Skema Tabel MySQL
1. **`categories`**: `id` (PK), `name`, `slug`
2. **`foods`**: `id` (PK), `category_id` (FK), `name`, `slug`, `short_description`, `description`, `characteristics`, `history`, `image_url`, `is_featured`
3. **`food_ingredients`**: `id` (PK), `food_id` (FK), `ingredient_name`
4. **`food_tags`**: `id` (PK), `food_id` (FK), `tag_name`
5. **`food_sources`**: `id` (PK), `food_id` (FK), `source_name`
6. **`users`**: `id` (PK), `name`, `email` (Unique), `password_hash`, `created_at`
7. **`favorites`**: `id` (PK), `user_id` (FK), `food_id` (FK), `created_at` (Unique kombinasi `user_id` + `food_id`)

### Rancangan Endpoint REST API
- `GET /api/foods`: Mengambil seluruh daftar kuliner
- `GET /api/foods/:id`: Mengambil detail satu makanan
- `GET /api/categories`: Mengambil seluruh daftar kategori
- `GET /api/foods?search=:term&category=:id`: Filter kuliner di level database
- `GET /api/foods/random`: Mengambil satu kuliner acak (`ORDER BY RAND() LIMIT 1`)
- `POST /api/auth/register` & `POST /api/auth/login`: Autentikasi akun pengguna
- `GET /api/favorites`: Mengambil kuliner favorit pengguna yang sedang login
- `POST /api/favorites`: Menambahkan makanan ke favorit akun
- `DELETE /api/favorites/:foodId`: Menghapus makanan dari favorit akun

---

## 11. Hak Cipta & Lisensi
Proyek Mangkasara dikembangkan untuk tujuan edukasi, pelestarian budaya, dan dokumentasi kuliner khas Kota Makassar, Sulawesi Selatan. Seluruh dokumentasi resep dan sejarah dirangkum dari berbagai publikasi dinas kebudayaan dan literatur terpercaya Nusantara.
