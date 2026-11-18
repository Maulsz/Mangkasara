# Mangkasara — Platform Eksplorasi & Ensiklopedia Kuliner Makassar

> **Nama Produk:** Mangkasara  
> **Tagline:** _Discover the Taste of Makassar_  
> **Jenis Produk:** Platform Eksplorasi dan Ensiklopedia Kuliner Tradisional Makassar  
> **Desain:** Modern Culinary Editorial & Cultural Documentation  
> **Status:** Frontend MVP (Semester 1 Selesai & Berfungsi Penuh)

---

## 1. Tentang Proyek & Visi Produk

**Mangkasara** adalah platform digital yang didedikasikan untuk mendokumentasikan, mengenalkan, dan membantu masyarakat menjelajahi kekayaan kuliner tradisional khas Makassar, Sulawesi Selatan.

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

Desain antarmuka Mangkasara mengusung estetika **Modern Culinary Editorial & Cultural Documentation**: terinspirasi dari majalah kuliner independen berkualitas tinggi (*curated culinary publication*), anggun, bersih, dan berakar pada budaya lokal dengan tipografi yang kuat serta penonjolan fotografi makanan. 

Prinsip Visual Refinement:
- **Bebas Emoji & Ikon Dekoratif Berlebih:** Menghilangkan ikon emoji pada tombol, kartu, dan lencana agar tampilan matang dan profesional.
- **Hierarki Tipografi & Whitespace:** Memanfaatkan kontras font serif dan sans-serif untuk memandu pandangan pengguna.
- **Bayangan & Sudut Restrained:** Menghindari sudut kartu yang terlalu membulat dan bayangan tebal. Menggunakan border halus (`--color-border`) dan radius yang seimbang.
- **Fotografi Sebagai Titik Fokus:** Visual fotografi makanan diposisikan sebagai subjek utama eksplorasi.

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
├── index.html                   # Halaman 01: Beranda (Hero, Filosofi, Kategori Editorial, Pilihan Editor)
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
│   ├── style.css                # Design tokens, reset, typography, progress bar, entrance animation
│   ├── components.css           # Styling komponen (navbar, editorial cards, modal, toolbar, footer)
│   └── responsive.css           # Media queries responsif & mobile dropdown navbar
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
│   │   ├── page-transition.js   # Indikator progres tipis terracotta & page entrance animation
│   │   ├── navbar.js            # Interaktivitas navbar, active state, mobile dropdown, counter badge
│   │   └── food-card.js         # Generator template HTML kartu kuliner & event delegation favorit
│   │
│   └── pages/
│       ├── home.js              # Controller Beranda, editorial categories & smooth scroll CTA
│       ├── explore.js           # Controller halaman Explore & Random Culinary Modal
│       ├── detail.js            # Controller halaman Detail Kuliner & penanganan ID
│       └── favorites.js         # Controller halaman Favorit & transisi penghapusan kartu
│
├── front-end-PRD.md             # Dokumen spesifikasi kebutuhan produk (PRD)
└── README.md                    # Dokumentasi lengkap proyek & petunjuk pengembangan
```

---

## 4. Halaman yang Diimplementasikan & Refinement UI/UX

### 1. Beranda (`index.html`)
- **Hero CTA Scroll Behavior:** Menekan tombol utama *"Jelajahi Kuliner"* akan menggulirkan halaman secara halus (*smooth scroll*) langsung menuju seksi Kategori (`#categories`) sebagai titik penjelajahan awal pengguna, dengan memperhitungkan ketinggian sticky header (`scroll-margin-top`). Tombol sekunder *"Lihat Seluruh Koleksi"* tersedia bagi pengguna yang ingin langsung menuju seluruh katalog di `explore.html`. Tautan navbar tetap mengarah ke `explore.html`.
- **Kategori Kuliner Editorial:** 5 kategori disajikan dalam kartu editorial dengan penomoran indeks (`01` - `05`), nama kategori dalam font serif anggun, jumlah hidangan, deskripsi peran kuliner, dan tautan eksplorasi. Wadah emoji melingkar dihilangkan sepenuhnya.
- **Pilar Filosofi (Editorial Numbering):** Pengenalan 3 pilar produk (Keaslian Cita Rasa, Cerita & Budaya, Eksplorasi Interaktif) ditampilkan dengan nomor besar berkarakter majalah kuliner.
- **Hero Media & Floating Card:** Menampilkan fotografi Coto Makassar dengan kartu informasi minimalis bergaris aksen terracotta.
- **Kuliner Pilihan (Featured):** Menampilkan hidangan bertanda `featured: true` langsung dari dataset master.

### 2. Jelajah Kuliner (`explore.html`)
- **Pencarian Real-Time:** Mencari nama makanan secara instan, tidak membedakan huruf besar/kecil (`toLowerCase()`), dan memotong spasi kosong (`trim()`).
- **Penyaringan 5 Kategori:** Pilihan tombol pill ("Semua" dan 5 kategori otentik).
- **Filter Kombinasi:** Pencarian nama dan filter kategori bekerja secara simultan (keduanya harus terpenuhi).
- **Tombol Reset Filter:** Membersihkan input teks pencarian dan mengembalikan kategori ke "Semua" dengan ikon reset SVG bersih.
- **Status Hasil Pencarian:** Menampilkan jumlah makanan yang ditemukan secara dinamis.
- **Empty State Bersih:** Menampilkan ilustrasi kaca pembesar SVG minimalis jika tidak ada makanan yang sesuai kriteria pencarian, lengkap dengan tombol reset.
- **Random Culinary (Pilihan Acak):** Modal pop-up dengan tombol dadu SVG bersih untuk memilih hidangan secara spontan.

### 3. Detail Kuliner (`detail.html?id=X`)
- **URL Query Parameter:** Membaca parameter ID makanan dari query string URL.
- **Penanganan Error (Not Found State):** Menampilkan pesan ramah dengan ikon SVG jika ID tidak ditemukan.
- **Ensiklopedia Terverifikasi:** Deskripsi lengkap, karakteristik cita rasa, dan daftar bahan utama.
- **Sejarah & Budaya (Kondisional):** Bagian sejarah HANYA ditampilkan jika makanan memiliki data sejarah terverifikasi (nilai `history` bukan `null`). Judul menggunakan tipografi murni tanpa emoji.
- **Referensi Sumber (Kondisional):** Bagian daftar sumber HANYA ditampilkan jika data `sources` terisi.
- **Kuliner Terkait:** Rekomendasi makanan dalam kategori yang sama (mengecualikan hidangan yang sedang dibuka).

### 4. Koleksi Favorit (`favorites.html`)
- **Integrasi LocalStorage:** Mengambil daftar ID tersimpan pada key `mangkasara-favorites`.
- **Transisi Penghapusan Halus (Smooth Removal):** Saat tombol love pada kartu favorit diklik, kartu melakukan transisi fade-out dan scale-down halus sebelum DOM diperbarui, mencegah perubahan tampilan yang mendadak.
- **Empty State Dinamis:** Menampilkan pesan ramah berikon hati SVG minimalis dengan tombol CTA menuju Explore saat koleksi kosong.
- **Hapus Semua:** Tombol pembersih seluruh koleksi dengan dialog konfirmasi.

---

## 5. Fitur Navigasi & Pengalaman Transisi Halaman

### Redesain Navigasi Mobile (Dropdown Horizontal)
Navigasi mobile telah diperbarui dari side drawer kanan menjadi **dropdown horizontal langsung di bawah navbar**:
- **Struktur Bersih:** Navbar tetap di atas dengan brand di kiri dan hamburger button di kanan.
- **Panel Dropdown:** Saat tombol ditekan, menu turun secara halus langsung di bawah navbar (`top: var(--header-height)`), membentang selebar layar dengan opsi menu bertingkat.
- **Tanpa Backdrop Gelap & Tanpa Body Lock:** Scroll halaman tetap bebas dan tidak terkunci.
- **Penutupan Otomatis:** Dropdown menutup saat link diklik, saat area luar diklik, atau saat pengguna menekan tombol `Escape`. Status `aria-expanded` diperbarui secara akurat untuk aksesibilitas.

### Indikator Progres Navigasi Halaman (`page-transition.js`)
- **Garis Progres Tipis Terracotta:** Garis tipis 2.5px di bagian paling atas layar bergerak halus saat pengguna mengklik tautan internal antar-halaman.
- **Non-Blocking & Cerdas:** Tidak mengganggu pembukaan tab baru (`target="_blank"`), tombol kombinasi (Ctrl/Cmd/Shift), tautan jangkar internal (`#categories`), maupun tautan eksternal.
- **Animasi Masuk (Page Entrance):** Konten halaman baru masuk dengan fade-in dan pergeseran vertikal halus 5px.
- **Aksesibilitas:** Sepenuhnya mendukung kueri media `prefers-reduced-motion: reduce`.

---

## 6. Taksonomi & Koleksi 25 Kuliner Tradisional

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

Website Mangkasara dibangun murni menggunakan standar web (HTML5, CSS3, dan Vanilla JavaScript):

### Cara 1: Langsung Membuka File (Tanpa Server)
Klik ganda file `index.html` pada File Explorer / Finder di komputer Anda untuk membukanya langsung di peramban web (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari). Seluruh fitur dapat berfungsi langsung.

### Cara 2: Menggunakan Live Server (VS Code)
1. Buka folder proyek `mangkasara` di Visual Studio Code.
2. Pasang ekstensi **Live Server**.
3. Klik kanan pada file `index.html` dan pilih **Open with Live Server** (`http://127.0.0.1:5500`).

### Cara 3: Menggunakan Python / Node Server Bawaan
```bash
# Menggunakan Python 3:
python -m http.server 8000

# Atau menggunakan Node npx:
npx serve .
```

---

## 9. Struktur Fungsi Penting JavaScript

- **`js/components/page-transition.js`**:
  - `initPageTransitions()`: Memasang indikator progres tipis terracotta di atas layar dan mendeteksi navigasi tautan internal tanpa menghalangi navigasi browser.
- **`js/components/navbar.js`**:
  - `highlightActiveNavLink()`: Menandai menu aktif sesuai URL halaman saat ini.
  - `initMobileMenu()`: Mengontrol buka-tutup dropdown horizontal mobile di bawah navbar.
  - `updateNavbarFavoritesCount()`: Menghitung dan memperbarui badge favorit di navbar.
- **`js/components/food-card.js`**:
  - `createFoodCardHTML(food)`: Menghasilkan template kartu kuliner editorial.
  - `attachFavoriteButtonListeners(container, callback)`: Menerapkan event delegation untuk menangani tombol favorit.
- **`js/pages/home.js`**:
  - `renderCategoriesGrid()`: Merender 5 kategori kuliner format editorial (01 - 05).
  - `setupHomepageScrollCTA()`: Menangani smooth scroll tombol "Jelajahi Kuliner" ke `#categories`.
- **`js/utils/filters.js`**:
  - `filterFoods(foodsList, searchTerm, selectedCategory)`: Filter kombinasi nama dan ID kategori.
  - `getRandomFood(foodsList)`: Mengambil hidangan acak spontan.
- **`js/utils/storage.js`**:
  - `getFavorites()`, `addFavorite()`, `removeFavorite()`, `toggleFavorite()`, `isFavorite()`, `clearAllFavorites()`: Manajemen aman LocalStorage (`mangkasara-favorites`).

---

## 10. Rencana Pengembangan Backend (Semester Berikutnya)

### Prinsip Arsitektur Migrasi
Browser **tidak boleh mengakses MySQL secara langsung**. Pada semester berikutnya:

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
7. **`favorites`**: `id` (PK), `user_id` (FK), `food_id` (FK), `created_at`

---

## 11. Hak Cipta & Lisensi
Proyek Mangkasara dikembangkan untuk tujuan edukasi, pelestarian budaya, dan dokumentasi kuliner khas Kota Makassar, Sulawesi Selatan. Seluruh dokumentasi dirangkum dari publikasi kebudayaan terpercaya Nusantara.
