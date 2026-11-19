/**
 * ==============================================================================
 * MANGKASARA — DATA KULINER TRADISIONAL MAKASSAR (25 HIDANGAN)
 * ==============================================================================
 * File ini berisi kumpulan data 25 kuliner tradisional Makassar yang terbagi
 * ke dalam 5 kategori utama. Data ini berfungsi sebagai Single Source of Truth
 * untuk seluruh halaman website (Beranda, Explore, Detail, dan Favorit).
 *
 * Struktur Kontrak Data (Data Contract):
 * - id {number}              : Identitas unik dan stabil untuk setiap makanan.
 * - slug {string}            : URL-friendly identifier.
 * - name {string}            : Nama kuliner tradisional.
 * - categoryId {number}      : ID kategori (1: Berkuah, 2: Utama, 3: Ikan/Seafood, 4: Camilan, 5: Manis).
 * - shortDescription {string}: Ringkasan 1 kalimat untuk card preview.
 * - description {string}     : Deskripsi lengkap berdasarkan dokumentasi kuliner terpercaya.
 * - ingredients {string[]}   : Daftar bahan-bahan utama.
 * - characteristics {string} : Profil cita rasa dan karakteristik tekstur.
 * - history {string|null}    : Catatan sejarah terverifikasi (null jika belum terverifikasi).
 * - image {string|null}      : Path foto lokal jika sudah tersedia, atau null jika menunggu dokumentasi.
 * - tags {string[]}          : Label bahan utama, metode masak, atau rasa.
 * - sources {string[]}       : Sumber rujukan literatur dan dokumentasi budaya.
 * - featured {boolean}       : Penanda apakah hidangan ditampilkan pada sorotan Beranda.
 *
 * PANDUAN PENAMBAHAN FOTO BARU OLEH TIM:
 * Ketika foto baru dimasukkan ke folder `assets/images/`, tim HANYA perlu
 * memperbarui properti `image` pada objek makanan bersangkutan di file ini.
 * Contoh: `image: "assets/images/sop-konro.jpg"`. Seluruh tampilan UI akan
 * secara otomatis menampilkan foto tersebut tanpa perlu mengubah kode HTML/UI.
 * ==============================================================================
 */

const foods = [
  // ----------------------------------------------------------------------------
  // KATEGORI 01: HIDANGAN BERKUAH (ID: 1)
  // ----------------------------------------------------------------------------
  {
    id: 1,
    slug: "coto-makassar",
    name: "Coto Makassar",
    categoryId: 1,
    shortDescription: "Hidangan sup daging dan jeroan sapi legendaris Makassar dengan kuah kental berempah dan kacang tanah sangrai.",
    description: "Coto Makassar adalah salah satu ikon kuliner tertua dan paling terkenal dari Makassar. Hidangan ini berupa sup daging dan jeroan sapi yang dimasak perlahan bersama puluhan jenis rempah aromatik khas serta kacang tanah sangrai yang digiling halus untuk memberikan tekstur kuah yang gurih, pekat, dan mendalam. Biasanya dinikmati bersama ketupat daun pandan atau buras serta sambal tauco yang khas.",
    ingredients: [
      "Daging sapi bagian sengkel atau has dalam",
      "Jeroan sapi (babat, paru, hati, usus)",
      "Kacang tanah sangrai giling halus",
      "Serai, lengkuas, dan jahe",
      "Ketumbar, jintan, dan merica sangrai",
      "Bawang merah dan bawang putih",
      "Air tajin (cucian beras putih pertama)"
    ],
    characteristics: "Kuah kental berwarna kecokelatan dengan aroma rempah pekat, tekstur daging empuk, dan cita rasa gurih legit kacang yang khas.",
    history: "Coto Makassar diyakini telah ada sejak era Kerajaan Gowa pada abad ke-16. Pada mulanya, bagian daging sirloin atau has dalam disajikan khusus untuk bangsawan dan raja di istana, sementara bagian jeroan diolah untuk masyarakat umum dan prajurit. Seiring waktu, sajian ini berkembang menjadi kuliner rakyat yang dinikmati oleh seluruh lapisan masyarakat.",
    image: "assets/images/coto.jpg",
    tags: ["Daging sapi", "Rebus", "Gurih"],
    sources: [
      "Dinas Kebudayaan dan Pariwisata Kota Makassar",
      "Dokumentasi Warisan Budaya Takbenda Indonesia — Kemendikbudristek"
    ],
    featured: true
  },
  {
    id: 2,
    slug: "pallubasa",
    name: "Pallubasa",
    categoryId: 1,
    shortDescription: "Hidangan daging sapi berkuah kaya rempah dengan taburan serundeng kelapa sangrai dan kuning telur mentah (alas).",
    description: "Pallubasa adalah kuliner berkuah khas Makassar yang memiliki kemiripan visual dengan Coto Makassar, namun dengan proses pengolahan dan profil rasa yang berbeda. Keunikan utama Pallubasa terletak pada kuahnya yang dicampur kelapa parut sangrai yang ditumbuk halus, memberikan aroma smokey kelapa dan rasa gurih yang khas. Sering disajikan dengan tambahan kuning telur ayam kampung mentah yang diaduk panas-panas di dalam kuah (disebut 'alas').",
    ingredients: [
      "Daging sapi dan jeroan sapi",
      "Kelapa parut sangrai (serundeng halus)",
      "Kuning telur ayam kampung (alas)",
      "Serai, lengkuas, dan asam jawa",
      "Ketumbar dan jintan bubuk",
      "Bawang merah dan bawang putih",
      "Gula merah dan garam"
    ],
    characteristics: "Kuah bertekstur agak kasar karena serundeng kelapa, gurih pekat beraroma sangrai, dan creamy jika ditambah kuning telur.",
    history: "Nama 'Pallubasa' berasal dari bahasa Makassar, yaitu 'pallu' yang berarti memasak dan 'basa' yang berarti basah atau berkuah. Dahulu merupakan makanan para pekerja pelabuhan dan buruh karena kalorinya yang tinggi dan mengenyangkan.",
    image: null,
    tags: ["Daging sapi", "Rebus", "Gurih"],
    sources: [
      "Dinas Pariwisata Kota Makassar",
      "Ensiklopedi Kuliner Tradisional Nusantara"
    ],
    featured: true
  },
  {
    id: 3,
    slug: "sop-konro",
    name: "Sop Konro",
    categoryId: 1,
    shortDescription: "Sup iga sapi berukuran besar berkuah gelap aromatik dari racikan buah kluwek dan rempah pilihan.",
    description: "Sop Konro adalah hidangan sup iga sapi khas Makassar yang tersohor dengan kuahnya yang berwarna gelap kehitaman alami dari buah kluwek (keluwek). Potongan tulang iga yang besar dengan daging empuk yang merekat dimasak hingga bumbu meresap sempurna sampai ke serat tulang. Disajikan panas bersama potongan ketupat atau nasi putih, perasan jeruk nipis, dan sambal cabai rawit pedas.",
    ingredients: [
      "Iga sapi berdaging tebal",
      "Buah kluwek tua berkualitas",
      "Kayu manis, cengkeh, dan kapulaga",
      "Biji pala dan daun salam",
      "Serai dan lengkuas",
      "Bawang merah dan bawang putih",
      "Ketumbar dan merica"
    ],
    characteristics: "Kuah pekat gurih beraroma rempah hangat dan kluwek yang earthy, berpadu dengan daging iga lembut yang juicy.",
    history: "Konro merupakan sajian tradisional yang berakar dari masyarakat Bugis-Makassar. Pada mulanya disajikan pada upacara adat atau perayaan hari besar, kini Konro telah menjadi salah satu kuliner Nusantara yang paling tersohor.",
    image: null,
    tags: ["Daging sapi", "Rebus", "Gurih"],
    sources: [
      "Pemerintah Kota Makassar",
      "Warisan Kuliner Tradisional Indonesia"
    ],
    featured: true
  },
  {
    id: 4,
    slug: "sop-saudara",
    name: "Sop Saudara",
    categoryId: 1,
    shortDescription: "Sup daging sapi kaya rempah dengan isian pelengkap unik berupa bihun soun dan perkedel kentang.",
    description: "Sop Saudara adalah hidangan sup daging sapi khas Pangkep yang sangat populer di Makassar. Sup ini dimasak dengan racikan bumbu rempah aromatik seperti serai, pala, dan kayu manis, lalu disajikan dalam mangkuk bersama sohun, perkedel kentang goreng gurih, dan taburan bawang goreng. Dinikmati bersama nasi hangat dan ikan bakar bandeng.",
    ingredients: [
      "Daging sapi bagian sandung lamur",
      "Paru sapi goreng garing",
      "Bihun / soun lembut",
      "Perkedel kentang goreng",
      "Bawang merah dan bawang putih",
      "Serai, jahe, dan kayu manis",
      "Pala bubuk dan kaldu sapi"
    ],
    characteristics: "Kuah harum rempah ringan namun gurih, dipadukan dengan kelembutan soun dan tekstur renyah-lembut perkedel kentang.",
    history: "Diciptakan pertama kali oleh H. Dollahi pada era 1950-an di Pangkajene (Pangkep), yang kemudian membuka cabang di Makassar. Nama 'Saudara' diambil dari filosofi persaudaraan bahwa siapa pun yang singgah menyantap sup ini dianggap sebagai saudara.",
    image: null,
    tags: ["Daging sapi", "Rebus", "Gurih"],
    sources: [
      "Kajian Gastronomi Sulawesi Selatan — Balai Pelestarian Nilai Budaya"
    ],
    featured: false
  },
  {
    id: 5,
    slug: "sop-ubi",
    name: "Sop Ubi",
    categoryId: 1,
    shortDescription: "Perpaduan segar sup kaldu sapi gurih dengan singkong goreng empuk, sohun, dan tauge renyah.",
    description: "Sop Ubi adalah kuliner legendaris khas Makassar yang unik karena memadukan potongan singkong (ubi kayu) yang digoreng terlebih dahulu hingga renyah di luar dan lembut di dalam, lalu diguyur kuah kaldu sapi bening yang gurih panas. Isian lainnya meliputi potongan daging sapi empuk, sohun, tauge segar, kacang goreng, dan seledri.",
    ingredients: [
      "Singkong (ubi kayu) empuk goreng potong dadu",
      "Daging sapi / tetelan lembut",
      "Kaldu sapi murni gurih",
      "Sohun / bihun",
      "Tauge segar",
      "Kacang tanah goreng renyah",
      "Bawang goreng dan seledri cincang"
    ],
    characteristics: "Perpaduan rasa gurih kaldu sapi dengan manis-lembut singkong goreng yang menyerap kuah secara nikmat.",
    history: null,
    image: "assets/images/sop-ubi.jpg",
    tags: ["Daging sapi", "Rebus", "Gurih"],
    sources: [
      "Arsip Kuliner Rakyat Kota Makassar"
    ],
    featured: false
  },
  {
    id: 6,
    slug: "pallumara",
    name: "Pallumara",
    categoryId: 1,
    shortDescription: "Sop ikan tradisional berkuah kuning cerah dengan paduan rasa segar asam jawa dan kunyit aromatik.",
    description: "Pallumara adalah masakan sup ikan khas Bugis-Makassar dengan kuah kuning bening yang menonjolkan rasa asam dan pedas segar. Warna kuning diperoleh dari kunyit segar, sedangkan rasa asamnya berasal dari asam jawa (mangga muda atau belimbing wuluh juga sering digunakan). Biasanya menggunakan kepala atau badan ikan kakap merah, ikan bandeng, atau ikan tongkol.",
    ingredients: [
      "Ikan kakap merah / bandeng segar",
      "Kunyit segar diparut halus",
      "Asam jawa matang",
      "Bawang merah iris",
      "Cabai rawit utuh",
      "Serai dimemarkan",
      "Garam dan minyak kelapa"
    ],
    characteristics: "Cita rasa dominan asam menyegarkan berpadu gurih ikan laut alami dan sedikit sengatan pedas cabai rawit.",
    history: "Berasal dari kata 'pallu' (memasak) dan 'mara' (kering/mengecil atau rasa kecut/segar). Hidangan ini mencerminkan kearifan masyarakat pesisir Makassar dalam mengolah hasil laut segar dengan rempah sederhana yang menghilangkan aroma amis ikan.",
    image: "assets/images/pallu-mara.png",
    tags: ["Ikan", "Rebus", "Asam", "Pedas"],
    sources: [
      "Pusat Studi Makanan Tradisional Universitas Hasanuddin"
    ],
    featured: false
  },
  {
    id: 7,
    slug: "pallu-kaloa",
    name: "Pallu Kaloa",
    categoryId: 1,
    shortDescription: "Hidangan ikan berkuah hitam pekat khas Makassar menggunakan racikan buah kluwek (kaloa) yang gurih sedap.",
    description: "Pallu Kaloa adalah varian olahan ikan khas Makassar yang menggunakan bumbu kluwek (dalam bahasa Makassar disebut 'kaloa'), menghasilkan kuah berwarna hitam pekat mirip rawon namun dengan tekstur lebih encer dan karakter bumbu pesisir. Ikan yang biasa digunakan adalah kepala ikan kakap atau ikan bolu (bandeng).",
    ingredients: [
      "Kepala ikan kakap atau ikan bandeng",
      "Kaloa (kluwek hitam tua)",
      "Bawang merah dan bawang putih",
      "Kunyit dan serai",
      "Asam jawa",
      "Cabai rawit merah",
      "Garam dan daun salam"
    ],
    characteristics: "Rasa gurih mendalam dan legit dari kaloa berpadu kesegaran asam jawa dan daging ikan lembut.",
    history: null,
    image: null,
    tags: ["Ikan", "Rebus", "Gurih", "Asam"],
    sources: [
      "Dokumentasi Kuliner Tradisional Sulawesi Selatan"
    ],
    featured: false
  },
  {
    id: 8,
    slug: "pallu-cela",
    name: "Pallu Ce'la",
    categoryId: 1,
    shortDescription: "Olahan ikan berkuah minimalis khas nelayan Makassar yang direbus bersama kunyit dan garam melimpah.",
    description: "Pallu Ce'la merupakan hidangan ikan tradisional yang sangat sederhana namun memiliki rasa gurih asin yang khas. Ikan laut seperti cakalang, tongkol, atau layang dimasak dengan sedikit air, kunyit bubuk atau parut, garam yang cukup banyak, serta tangkai cabai rawit. Dimasak hingga kuah menyusut dan bumbu meresap tahan lama.",
    ingredients: [
      "Ikan tongkol / cakalang segar",
      "Kunyit bubuk / parut",
      "Garam laut kristal melimpah",
      "Air bersih secukupnya",
      "Cabai rawit merah utuh"
    ],
    characteristics: "Gurih asin yang kuat dengan semburat aroma kunyit yang menonjolkan kesegaran alami ikan.",
    history: "Dahulu merupakan cara nelayan Makassar mengawetkan hasil tangkapan ikan agar tidak lekas basi sebelum adanya mesin pendingin modern.",
    image: "assets/images/pallu-cela.jpg",
    tags: ["Ikan", "Rebus", "Gurih"],
    sources: [
      "Etnografi Masyarakat Pesisir Makassar"
    ],
    featured: false
  },

  // ----------------------------------------------------------------------------
  // KATEGORI 02: MAKANAN UTAMA (ID: 2)
  // ----------------------------------------------------------------------------
  {
    id: 9,
    slug: "mie-titi",
    name: "Mie Titi",
    categoryId: 2,
    shortDescription: "Mie kering renyah khas Makassar disiram kuah kental gurih berisi telur, sayuran sawi, ayam, dan seafood.",
    description: "Mie Titi adalah kuliner peranakan Tionghoa-Makassar yang sangat legendaris. Berupa mie kuning berukuran tipis yang digoreng hingga garing dan renyah seperti sarang burung, lalu disiram dengan kuah kaldu kental panas berisi irisan daging ayam, hati, udang, cumi, telur yang diaduk, dan sayur sawi hijau. Tekstur mie yang awalnya renyah perlahan menjadi lembut saat bersentuhan dengan kuah kental.",
    ingredients: [
      "Mie basah kuning tipis digoreng kering garing",
      "Kuah kaldu ayam gurih kental",
      "Tepung sagu / maizena untuk pengental",
      "Daging dada ayam rebus iris",
      "Udang kupas dan bakso ikan / hati",
      "Telur ayam kocok lepas",
      "Sawi hijau segar dan bawang putih cincang"
    ],
    characteristics: "Sensasi kontras antara mie renyah gurih dan kuah kental panas yang gurih lembut beraroma bawang putih.",
    history: "Diciptakan oleh Ang Kho Tjao pada tahun 1950-an dan kemudian dipopulerkan oleh salah satu putranya yang akrab disapa 'Titi'. Kini sajian ini telah menjadi salah satu identitas kuliner malam paling favorit di Kota Makassar.",
    image: null,
    tags: ["Ayam", "Seafood", "Goreng", "Gurih"],
    sources: [
      "Pemerintah Kota Makassar — Dinas Kebudayaan",
      "Dokumentasi Kuliner Peranakan Nusantara"
    ],
    featured: true
  },
  {
    id: 10,
    slug: "songkolo-bagadang",
    name: "Songkolo Bagadang",
    categoryId: 2,
    shortDescription: "Ketan kukus gurih (hitam atau putih) bertabur serundeng kelapa manis-gurih, ikan asin teri, dan sambal tumis pedas.",
    description: "Songkolo Bagadang (sering disebut juga Sokko) adalah makanan tradisional berbahan beras ketan putih atau hitam yang dikukus bersama santan hingga pulen dan gurih. Disajikan di atas daun pisang dengan taburan serundeng kelapa parut sangrai yang gurih manis, ikan teri asin goreng garing, dan sambal terasi pedas khas.",
    ingredients: [
      "Beras ketan putih atau beras ketan hitam pulen",
      "Santan kelapa pekat dan garam",
      "Kelapa parut sangrai tumbuk (serundeng manis-gurih)",
      "Ikan teri asin (ikan kandea) goreng garing",
      "Cabai merah, cabai rawit, dan terasi untuk sambal tumis",
      "Gula merah kelapa"
    ],
    characteristics: "Tekstur pulen ketan berpadu gurih manis serundeng, asin renyah ikan teri, dan pedas sambal yang menggugah selera.",
    history: "Dinamakan 'Bagadang' (begadang) karena kedai-kedai Songkolo di Makassar umumnya buka hingga larut malam dan dini hari, menjadi santapan favorit warga yang beraktivitas di malam hari.",
    image: null,
    tags: ["Beras", "Kukus", "Gurih", "Pedas"],
    sources: [
      "Pusat Dokumentasi Kebudayaan Makassar"
    ],
    featured: false
  },
  {
    id: 11,
    slug: "kaddo-minyak",
    name: "Kaddo Minyak",
    categoryId: 2,
    shortDescription: "Nasi gurih aromatik rempah yang dimasak bersama minyak samin atau santan kental, disajikan pada perayaan Maulid Nabi.",
    description: "Kaddo Minyak adalah nasi berbumbu khas Makassar yang diolah menggunakan beras berkualitas, santan pekat, minyak, dan rempah aromatik seperti cengkeh, kayu manis, dan serai. Hidangan ini memiliki nilai tradisi yang kental dan umumnya disajikan dalam wadah khusus (Baku' Maulid) saat peringatan Maulid Nabi Muhammad SAW atau upacara syukuran keluarga.",
    ingredients: [
      "Beras pulen pilihan",
      "Santan kelapa kental murni",
      "Minyak samin / minyak kelapa asli",
      "Serai, kayu manis, dan cengkeh",
      "Daun pandan wangi",
      "Bawang merah goreng gurih"
    ],
    characteristics: "Aroma harum rempah yang pekat, tekstur nasi pulen berminyak lembut, dan cita rasa gurih sedap.",
    history: "Merupakan makanan sakral dan simbol rasa syukur masyarakat Makassar dalam upacara tradisi Maudu Lompoa (peringatan Maulid akbar).",
    image: null,
    tags: ["Beras", "Kukus", "Gurih"],
    sources: [
      "Balai Pelestarian Nilai Budaya Sulawesi Selatan"
    ],
    featured: false
  },
  {
    id: 12,
    slug: "bassang",
    name: "Bassang",
    categoryId: 2,
    shortDescription: "Bubur jagung pulut putih tradisional Makassar yang dimasak lembut dengan santan kental dan sedikit taburan gula pasir.",
    description: "Bassang adalah hidangan sarapan tradisional Makassar berupa bubur yang terbuat dari biji jagung pulut putih (jagung lokal tanpa kulit ari) yang direbus berjam-jam hingga empuk dan merekah, kemudian dimasak bersama santan kental dan sedikit garam. Disajikan hangat di pagi hari dengan taburan gula pasir secukupnya.",
    ingredients: [
      "Biji jagung pulut putih lokal kering kupas",
      "Santan kelapa murni gurih",
      "Daun pandan simpul wangi",
      "Tepung beras sebagai pengental halus",
      "Gula pasir tabur",
      "Garam secukupnya"
    ],
    characteristics: "Tekstur kenyal-lembut dari biji jagung pulut berpadu dengan kuah santan gurih lembut dan manis ringan.",
    history: "Berasal dari kata 'bassang' dalam bahasa Makassar yang merupakan singkatan dari 'possi bassang' (mengenyangkan). Makanan sarapan murah meriah dan padat energi bagi masyarakat Makassar sejak masa lampau.",
    image: null,
    tags: ["Rebus", "Gurih", "Manis"],
    sources: [
      "Ensiklopedi Kuliner Tradisional Nusantara"
    ],
    featured: false
  },

  // ----------------------------------------------------------------------------
  // KATEGORI 03: OLAHAN IKAN & SEAFOOD (ID: 3)
  // ----------------------------------------------------------------------------
  {
    id: 13,
    slug: "juku-parape",
    name: "Juku' Parape",
    categoryId: 3,
    shortDescription: "Ikan bakar khas Makassar yang dibalut bumbu tumis karamel manis-pedas dari bawang merah melimpah dan gula merah.",
    description: "Juku' Parape adalah sajian ikan laut bakar istimewa khas Makassar. Ikan (biasanya baronang, kakap, atau kuwe) dibakar di atas bara arang batok kelapa, lalu dilumuri bumbu tumis khas berupa irisan banyak bawang merah, asam jawa, gula merah, dan sedikit kecap yang dikaramelisasi hingga harum meresap ke dalam daging ikan.",
    ingredients: [
      "Ikan laut segar (baronang, kakap, atau kuwe)",
      "Bawang merah cincang melimpah",
      "Gula aren / gula merah lokal",
      "Air asam jawa kental",
      "Kecap manis pilihan",
      "Cabai rawit iris pedas",
      "Minyak kelapa untuk menumis bumbu"
    ],
    characteristics: "Paduan rasa manis karamel bawang yang gurih, semburat asam segar, dan aroma asap bakaran arang batok kelapa.",
    history: "Dikenal sebagai salah satu teknik olahan ikan tertua di kalangan nelayan Makassar, memadukan kekayaan hasil laut Selat Makassar dengan gula aren dan asam lokal.",
    image: null,
    tags: ["Ikan", "Seafood", "Bakar", "Manis", "Gurih"],
    sources: [
      "Dinas Perikanan dan Ketahanan Pangan Kota Makassar"
    ],
    featured: false
  },
  {
    id: 14,
    slug: "juku-tunu",
    name: "Juku' Tunu",
    categoryId: 3,
    shortDescription: "Ikan laut segar yang dibakar polos di atas bara arang batok kelapa, dinikmati bersama aneka sambal cobek Makassar.",
    description: "Juku' Tunu secara harfiah berarti 'ikan bakar' dalam bahasa Makassar. Ikan laut yang baru ditangkap dibakar dengan bumbu minimalis (hanya garam dan perasan jeruk nipis) agar rasa manis alami daging ikan laut tetap terjaga. Disajikan bersama aneka racikan sambal khas Makassar seperti Sambal Petis (Rica Parape), Sambal Tomat Cobe, dan Sambal Mangga Muda (Rica Mangga).",
    ingredients: [
      "Ikan laut segar (baronang, kaneke, atau kaci-kaci)",
      "Garam laut alami",
      "Jeruk nipis segar",
      "Minyak kelapa untuk olesan bakar",
      "Sambal terasi cobe dan sambal mangga muda pencit"
    ],
    characteristics: "Daging ikan yang manis segar beraroma asap alami, sangat nikmat ketika dicocol ke sambal pedas-asam.",
    history: null,
    image: "assets/images/juku-tunu.jpg",
    tags: ["Ikan", "Seafood", "Bakar", "Gurih", "Pedas"],
    sources: [
      "Tradisi Pesisir Bahari Makassar"
    ],
    featured: false
  },
  {
    id: 15,
    slug: "juku-kambu",
    name: "Juku' Kambu",
    categoryId: 3,
    shortDescription: "Ikan bandeng tanpa duri yang diisi kembali dengan adonan daging ikan berbumbu rempah dan parutan kelapa, lalu digoreng telur.",
    description: "Juku' Kambu adalah kreasi kuliner tradisional Makassar dan pesisir Sulawesi Selatan yang sangat terampil. Daging ikan bandeng dikeluarkan secara hati-hati tanpa merusak kulitnya, dipisahkan dari duri-durinya, dicampur dengan parutan kelapa muda sangrai dan bumbu rempah, lalu dimasukkan kembali ke dalam tubuh ikan sebelum dibalut telur dan digoreng.",
    ingredients: [
      "Ikan bandeng segar ukuran sedang",
      "Kelapa parut setengah tua disangrai",
      "Telur ayam kocok untuk pelapis",
      "Ketumbar, bawang putih, dan bawang merah",
      "Kunyit segar dan jahe",
      "Garam dan merica"
    ],
    characteristics: "Tekstur padat lembut bebas duri dengan rasa rempah gurih aromatik kelapa yang lezat.",
    history: null,
    image: null,
    tags: ["Ikan", "Goreng", "Gurih"],
    sources: [
      "Pusat Pelestarian Kuliner Pesisir Sulawesi Selatan"
    ],
    featured: false
  },
  {
    id: 16,
    slug: "bandeng-bakar",
    name: "Bandeng Bakar",
    categoryId: 3,
    shortDescription: "Ikan bandeng tambak khas Makassar dibelah punggung dan dibakar hingga garing di luar namun lembut berlemak di dalam.",
    description: "Bandeng Bakar (sering disebut Juku' Bolu Tunu) adalah santapan harian favorit masyarakat Makassar. Bandeng tambak lokal memiliki rasa daging yang manis dan lapisan lemak perut yang kaya rasa. Biasanya dibakar dengan cara dibelah dua tanpa memutus bagian perut, disajikan dengan lumuran sambal tomat mentah, kecap manis cabai rawit, atau sambal dabu-dabu lokal.",
    ingredients: [
      "Ikan bandeng (bolu) tambak segar",
      "Perasan air jeruk nipis",
      "Garam kristal halus",
      "Minyak kelapa untuk olesan panggangan",
      "Sambal tomat segar dan kecap manis cabai rawit"
    ],
    characteristics: "Gurih alami, lembut berlemak di bagian perut, serta aroma khas panggangan arang.",
    history: null,
    image: "assets/images/bandeng-bakar.jpg",
    tags: ["Ikan", "Bakar", "Gurih"],
    sources: [
      "Dinas Kebudayaan Kota Makassar"
    ],
    featured: false
  },

  // ----------------------------------------------------------------------------
  // KATEGORI 04: CAMILAN & JAJANAN (ID: 4)
  // ----------------------------------------------------------------------------
  {
    id: 17,
    slug: "jalangkote",
    name: "Jalangkote",
    categoryId: 4,
    shortDescription: "Pastel khas Makassar berkulit tipis renyah berlapis dengan isian wortel, kentang, tauge, telur, dan saus cabai cuka cair merah.",
    description: "Jalangkote adalah kudapan gorengan paling ikonik di Makassar. Sepintas mirip dengan kue pastel di Pulau Jawa, namun Jalangkote memiliki kulit yang jauh lebih tipis dan bergelembung renyah (crispy). Isiannya terdiri dari tumisan wortel, kentang, tauge, soun, dan irisan telur rebus. Keistimewaan tak tergantikan Jalangkote terletak pada saus pendampingnya: kuah saus cair berwarna merah dengan rasa asam, manis, pedas, dan aroma bawang putih yang tajam.",
    ingredients: [
      "Tepung terigu, mentega, dan minyak untuk kulit tipis renyah",
      "Wortel dan kentang potong dadu kecil",
      "Tauge segar dan soun lembut",
      "Telur rebus iris",
      "Bawang putih, cuka makan, dan cabai merah giling untuk saus merah cair",
      "Gula pasir dan garam secukupnya"
    ],
    characteristics: "Kulit luar super renyah dan gurih, isian sayur lembut manis, berpadu sempurna dengan siraman saus cabai asam-manis-pedas yang segar.",
    history: "Nama 'Jalangkote' berasal dari kata 'jalang' (jalan) dan 'kote' (berkotek/teriak), merujuk pada anak-anak penjaja kue keliling pada masa lampau yang berjalan kaki sambil berteriak menjajakan kue hangat ini di perkampungan Makassar.",
    image: "assets/images/jalangkote.jpg",
    tags: ["Goreng", "Gurih", "Pedas"],
    sources: [
      "Dinas Pariwisata Kota Makassar",
      "Ensiklopedi Jajanan Tradisional Indonesia"
    ],
    featured: true
  },
  {
    id: 18,
    slug: "gogoso",
    name: "Gogoso",
    categoryId: 4,
    shortDescription: "Ketan gurih bersantan yang dibungkus daun pisang silinder panjang lalu dipanggang di atas bara arang.",
    description: "Gogoso adalah makanan khas Bugis-Makassar yang dibuat dari beras ketan (putih atau hitam) yang diaron bersama santan pekat dan garam, dibungkus memanjang menggunakan daun pisang, disemat kedua ujungnya dengan tusuk lidi, lalu dipanggang di atas bara arang hingga daunnya harum kecokelatan. Terdapat varian polos dan varian 'Gogoso Kambu' yang berisi abon ikan tuna/tongkol pedas gurih.",
    ingredients: [
      "Beras ketan putih atau hitam pulen",
      "Santan kelapa kental murni",
      "Garam dan daun pandan",
      "Daun pisang segar dan semat lidi",
      "Isian abon ikan cakalang/tuna pedas gurih (varian kambu)"
    ],
    characteristics: "Tekstur ketan kenyal dan pulen dengan aroma harum asap daun pisang bakar serta rasa gurih santan yang mantap.",
    history: "Gogoso merupakan sajian istimewa yang wajib hadir saat perayaan Hari Raya Idulfitri dan Iduladha di Makassar, biasanya disantap bersama telur asin atau Coto.",
    image: null,
    tags: ["Beras", "Bakar", "Kukus", "Gurih"],
    sources: [
      "Lembaga Kesenian dan Kebudayaan Makassar"
    ],
    featured: false
  },
  {
    id: 19,
    slug: "baroncong",
    name: "Baroncong",
    categoryId: 4,
    shortDescription: "Kue tradisional berbentuk busur setengah lingkaran berbahan adonan terigu dan kelapa parut bakar beraroma khas.",
    description: "Baroncong adalah jajanan tradisional khas Makassar yang dipanggang dalam cetakan logam berbentuk setengah lingkaran di atas gerobak berkayu bakar. Adonannya terbuat dari campuran tepung terigu, santan, gula pasir, dan parutan kelapa muda memanjang. Saat dipanggang, aroma kelapa muda terbakar menyeruak harum. Bagian luarnya sedikit renyah kecokelatan sementara dalamnya lembut gurih.",
    ingredients: [
      "Tepung terigu protein sedang",
      "Kelapa muda parut memanjang",
      "Santan kelapa segar",
      "Gula pasir dan sedikit garam",
      "Vanili bubuk aromatik",
      "Minyak kelapa / mentega untuk olesan cetakan"
    ],
    characteristics: "Lembut di dalam, sedikit garing di bagian dasar cetakan, dengan perpaduan rasa manis lembut dan gurih kelapa.",
    history: "Kue warisan tempo dulu yang hingga kini masih lestari dijajakan menggunakan gerobak khas dengan corong kayu bakar di sudut-sudut jalanan Kota Makassar.",
    image: "assets/images/baroncong.jpg",
    tags: ["Bakar", "Manis", "Gurih"],
    sources: [
      "Arsip Dokumentasi Budaya Kota Makassar"
    ],
    featured: false
  },
  {
    id: 20,
    slug: "tarajong",
    name: "Tarajong",
    categoryId: 4,
    shortDescription: "Gorengan manis legit khas Makassar berbahan ubi jalar rebus yang dihaluskan, dibentuk bulat pipih, lalu dibalut adonan tepung renyah.",
    description: "Tarajong adalah kue jajanan pasar tradisional Makassar berbahan dasar ubi jalar (biasanya ubi merah atau oranye). Ubi dikukus dan dihaluskan bersama sedikit gula, dibentuk pipih bundar, dicelupkan ke dalam larutan tepung beras dan terigu encer, kemudian digoreng hingga renyah keemasan. Kudapan sore yang nikmat disandingkan dengan kopi hitam atau teh hangat.",
    ingredients: [
      "Ubi jalar (ubi merah / ketela rambat matang)",
      "Tepung terigu dan tepung beras",
      "Gula pasir secukupnya",
      "Garam dan vanili",
      "Minyak goreng bersih"
    ],
    characteristics: "Kulit luar renyah kriuk dengan bagian dalam ubi yang lembut, empuk, dan manis alami.",
    history: null,
    image: null,
    tags: ["Goreng", "Manis"],
    sources: [
      "Jajanan Pasar Tradisional Sulawesi Selatan"
    ],
    featured: false
  },

  // ----------------------------------------------------------------------------
  // KATEGORI 05: KUE & HIDANGAN MANIS (ID: 5)
  // ----------------------------------------------------------------------------
  {
    id: 21,
    slug: "barongko",
    name: "Barongko",
    categoryId: 5,
    shortDescription: "Kue bangsawan Bugis-Makassar berbahan pisang kepok halus, telur, santan, dan gula yang dikukus dalam bungkusan daun pisang rapi.",
    description: "Barongko adalah salah satu mahakarya kue tradisional Bugis-Makassar yang sarat nilai filosofis. Dibuat dari buah pisang kepok matang yang dilumatkan halus bersama telur bebek/ayam, santan kental, gula pasir, dan garam. Adonan lembut ini kemudian dibungkus segitiga khas dalam lipatan daun pisang kepok segar dan dikukus hingga matang. Sangat nikmat disajikan dingin setelah disimpan di dalam lemari es.",
    ingredients: [
      "Pisang kepok matang pohon dilumatkan",
      "Telur ayam atau telur bebek",
      "Santan kelapa pekat segar",
      "Gula pasir dan sedikit garam",
      "Daun pisang kepok untuk bungkus khusus"
    ],
    characteristics: "Tekstur super lembut seperti puding sutra yang meleleh di lidah dengan rasa manis legit alami pisang dan gurih santan.",
    history: "Dahulu Barongko merupakan hidangan penutup penjamuan khusus para raja dan bangsawan Bugis-Makassar, serta menjadi hantaran wajib adat dalam prosesi lamaran dan pernikahan adat ('erang-erang').",
    image: "assets/images/barongko.jpg",
    tags: ["Pisang", "Kukus", "Manis"],
    sources: [
      "Dinas Kebudayaan Sulawesi Selatan",
      "Katalog Warisan Budaya Takbenda — Kemendikbudristek"
    ],
    featured: false
  },
  {
    id: 22,
    slug: "pisang-epe",
    name: "Pisang Epe",
    categoryId: 5,
    shortDescription: "Pisang raja mengkal yang dipanggang di atas bara api, dijepit hingga pipih, dan disiram lelehan saus gula merah aren aromatik.",
    description: "Pisang Epe adalah jajanan malam paling termasyhur di sepanjang Pantai Losari, Makassar. Menggunakan pisang raja lokal yang belum terlalu matang (mengkal), dipanggang di atas panggangan bara arang, lalu dijepit hingga pipih menggunakan alat penjepit kayu khusus (dalam bahasa Makassar disebut 'epe'). Setelah pipih dan matang beraroma karamel asap, pisang disiram kuah gula merah kental wangi daun pandan atau durian.",
    ingredients: [
      "Pisang raja setengah matang (mengkal)",
      "Gula aren / gula merah cair kental",
      "Daun pandan wangi",
      "Air bersih / air kelapa",
      "Topping pilihan: keju parut, cokelat, atau pasta durian asli"
    ],
    characteristics: "Tekstur pisang yang kenyal dan sedikit asam-sepat berpadu serasi dengan manis karamel saus gula merah yang legit dan aroma panggangan arang.",
    history: "Kata 'Epe' berasal dari bahasa Makassar yang berarti 'jepit' atau 'ditekan hingga pipih'. Menjadi ikon budaya kuliner nongkrong malam tepi laut masyarakat Makassar sejak puluhan tahun silam.",
    image: "assets/images/pisang-epe.jpg",
    tags: ["Pisang", "Bakar", "Manis"],
    sources: [
      "Dinas Pariwisata Kota Makassar",
      "Dokumentasi Budaya Kuliner Pantai Losari"
    ],
    featured: true
  },
  {
    id: 23,
    slug: "es-pisang-ijo",
    name: "Es Pisang Ijo",
    categoryId: 5,
    shortDescription: "Pisang raja utuh berbalut adonan kulit pandan hijau kukus, disajikan bersama bubur sumsum lembut, serutan es, sirup merah, dan susu kental.",
    description: "Es Pisang Ijo adalah sajian penutup dingin khas Makassar yang sangat terkenal di seantero Indonesia. Pisang raja matang dibalut lapisan adonan tepung beras dan terigu berwarna hijau alami dari daun suji dan pandan, lalu dikukus hingga matang kenyal. Disajikan dengan potongan pisang ijo, bubur sumsum putih yang gurih lembut, serutan es batu, siraman sirup DHT pisang ambon merah khas Makassar, serta kucuran susu kental manis.",
    ingredients: [
      "Pisang raja matang manis",
      "Tepung beras dan tepung terigu untuk adonan kulit hijau",
      "Pewarna alami air daun suji dan pandan wangi",
      "Bubur sumsum santan gurih bertekstur sutra",
      "Es batu serut melimpah",
      "Sirup merah rasa pisang ambon (sirup DHT khas Makassar)",
      "Susu kental manis putih"
    ],
    characteristics: "Perpaduan rasa manis legit, aroma pandan yang wangi, kelembutan gurih bubur sumsum, dan kesegaran es yang dingin melepas dahaga.",
    history: "Konon berakar dari kisah juru masak istana di masa kerajaan yang menyajikan pisang berbalut adonan hijau sebagai simbol kedamaian dan kesejukan. Kini menjadi santapan berbuka puasa dan pelepas dahaga paling favorit di Makassar.",
    image: "assets/images/pisang-hijo.jpg",
    tags: ["Pisang", "Kukus", "Manis"],
    sources: [
      "Dinas Pariwisata Kota Makassar",
      "Ensiklopedi Kuliner Nusantara"
    ],
    featured: true
  },
  {
    id: 24,
    slug: "pallu-butung",
    name: "Pallu Butung",
    categoryId: 5,
    shortDescription: "Hidangan manis potongan pisang raja rebus yang disajikan dalam bubur sumsum santan gurih, sirup merah, dan es serut.",
    description: "Pallu Butung adalah hidangan penutup tradisional Makassar yang memiliki rasa mirip Es Pisang Ijo namun berbeda dalam teknik pengolahan pisang. Pada Pallu Butung, pisang raja matang dipotong-potong dan direbus tanpa dibalut adonan tepung hijau. Potongan pisang kemudian disajikan di atas mangkuk berisi bubur tepung beras bersantan yang gurih lembut, diberi es serut, dan disiram sirup merah manis.",
    ingredients: [
      "Pisang raja matang dipotong bulat tebal lalu direbus",
      "Tepung beras dan santan kelapa murni untuk bubur",
      "Daun pandan simpul",
      "Gula pasir dan sedikit garam",
      "Sirup merah DHT khas Makassar",
      "Es serut dingin"
    ],
    characteristics: "Rasa manis alami pisang yang empuk berpadu dengan gurih santan bubur sumsum yang lembut serta sensasi dingin manis sirup.",
    history: "Dapat dinikmati dalam keadaan dingin dengan es serut di siang hari yang terik, maupun disajikan hangat di pagi hari atau musim hujan.",
    image: "assets/images/pallu-butung.jpg",
    tags: ["Pisang", "Rebus", "Manis"],
    sources: [
      "Kajian Warisan Kuliner Tradisional Makassar"
    ],
    featured: false
  },
  {
    id: 25,
    slug: "cucuru-bayao",
    name: "Cucuru Bayao",
    categoryId: 5,
    shortDescription: "Kue adat Bugis-Makassar berwarna kuning keemasan berbahan kuning telur bebek dan kenari yang direndam dalam larutan gula kental.",
    description: "Cucuru Bayao adalah kue tradisional mewah khas Bugis-Makassar yang melambangkan kemakmuran dan kehormatan. Nama 'Bayao' berarti telur dalam bahasa Makassar. Kue ini dibuat dari campuran banyak kuning telur (terutama telur bebek) yang dikocok bersama kenari sangrai cincang halus dan sedikit terigu, lalu dibentuk bulat pipih dan dimasak dalam rebusan air gula kental hingga mengilap keemasan.",
    ingredients: [
      "Kuning telur bebek murni segar",
      "Kacang kenari sangrai cincang halus",
      "Tepung terigu sedikit sebagai pengikat",
      "Gula pasir untuk rebusan sirup kental",
      "Air daun pandan wangi"
    ],
    characteristics: "Tekstur empuk basah dengan rasa manis pekat yang legit dan aroma khas telur berpadu gurih renyah kenari.",
    history: "Merupakan kue prestisius yang selalu disajikan dalam wadah bosara pada upacara pernikahan adat bangsawan Bugis-Makassar sebagai simbol kehidupan rumah tangga yang manis dan kaya berkah.",
    image: "assets/images/cucuru-bayao.jpg",
    tags: ["Kukus", "Rebus", "Manis"],
    sources: [
      "Adat dan Tradisi Bugis Makassar — Direktorat Jenderal Kebudayaan"
    ],
    featured: false
  }
];

// ==============================================================================
// FUNGSI-FUNGSI HELPER DATA KULINER
// ==============================================================================

/**
 * Mencari satu objek makanan berdasarkan ID numeriknya.
 *
 * Mengapa diperlukan:
 * Digunakan oleh halaman Detail (`detail.html`) untuk mengambil data lengkap makanan
 * berdasarkan parameter ID yang ada di URL (misal: `detail.html?id=1`).
 *
 * Parameter:
 * @param {number|string} id - ID makanan yang dicari.
 *
 * Return:
 * @returns {object|undefined} Objek makanan yang cocok, atau undefined jika tidak ditemukan.
 *
 * Method yang digunakan:
 * - find(): Mencari elemen pertama dalam array yang memenuhi kondisi.
 * - Number(): Mengonversi string ID menjadi angka.
 */
function getFoodById(id) {
  const numericId = Number(id);
  if (!isNaN(numericId) && numericId > 0) {
    const foundById = foods.find((food) => food.id === numericId);
    if (foundById) return foundById;
  }
  // Dukung pencarian berdasarkan slug jika parameter berupa teks (contoh: "coto-makassar")
  return foods.find((food) => food.slug === String(id));
}

/**
 * Mencari satu objek makanan berdasarkan slug teks ramah-URL.
 *
 * Parameter:
 * @param {string} slug - Slug makanan (contoh: "coto-makassar").
 *
 * Return:
 * @returns {object|undefined} Objek makanan yang cocok, atau undefined jika tidak ditemukan.
 */
function getFoodBySlug(slug) {
  if (!slug) return undefined;
  return foods.find((food) => food.slug === String(slug));
}

/**
 * Mengambil daftar makanan yang ditandai sebagai `featured: true`.
 *
 * Mengapa diperlukan:
 * Digunakan oleh halaman Beranda (`index.html`) untuk menampilkan rekomendasi pilihan kuliner.
 *
 * Return:
 * @returns {Array} Kumpulan objek makanan pilihan.
 *
 * Method yang digunakan:
 * - filter(): Menyaring array dan mengembalikan elemen yang nilai `featured`-nya true.
 */
function getFeaturedFoods() {
  return foods.filter((food) => food.featured === true);
}

/**
 * Mengambil daftar makanan berdasarkan ID kategori tertentu.
 *
 * Mengapa diperlukan:
 * Digunakan untuk menyaring makanan berdasarkan kategori pada halaman Explore atau Beranda.
 *
 * Parameter:
 * @param {number|string} categoryId - ID kategori makanan.
 *
 * Return:
 * @returns {Array} Kumpulan makanan yang memiliki categoryId sesuai.
 */
function getFoodsByCategory(categoryId) {
  const numericCategoryId = Number(categoryId);
  return foods.filter((food) => food.categoryId === numericCategoryId);
}

/**
 * Mengambil daftar makanan terkait (kuliner rekomendasi di kategori yang sama).
 *
 * Mengapa diperlukan:
 * Pada halaman detail makanan, kita ingin merekomendasikan kuliner lain dalam kategori yang sama,
 * namun TIDAK boleh menampilkan makanan yang sedang dibuka.
 *
 * Parameter:
 * @param {number|string} currentFoodId - ID makanan yang sedang aktif dibuka.
 * @param {number|string} categoryId - ID kategori dari makanan tersebut.
 * @param {number} [limit=3] - Batas maksimal jumlah makanan terkait yang ditampilkan.
 *
 * Return:
 * @returns {Array} Kumpulan objek makanan terkait hingga batas limit.
 *
 * Method yang digunakan:
 * - filter(): Menyaring makanan dengan kategori sama dan ID tidak sama dengan currentFoodId.
 * - slice(): Mengambil potongan array dari index 0 sampai index `limit`.
 */
function getRelatedFoods(currentFoodId, categoryId, limit = 3) {
  const numericCurrentId = Number(currentFoodId);
  const numericCatId = Number(categoryId);

  return foods
    .filter((food) => food.categoryId === numericCatId && food.id !== numericCurrentId)
    .slice(0, limit);
}

/**
 * Mengambil path gambar makanan dengan fallback otomatis jika gambar belum tersedia.
 *
 * Mengapa diperlukan:
 * Menjamin tidak ada elemen gambar yang rusak (broken image) atau kosong saat foto
 * belum didokumentasikan oleh tim.
 *
 * Parameter:
 * @param {object} food - Objek makanan yang ingin diambil gambarnya.
 *
 * Return:
 * @returns {string} Path file gambar lokal atau file placeholder default.
 */
function getFoodImage(food) {
  const fallbackImage = "assets/images/placeholder-food.svg";
  if (!food || !food.image || typeof food.image !== "string" || food.image.trim() === "") {
    return fallbackImage;
  }
  return food.image;
}

// Mendukung ekspor modul jika dijalankan di Node.js / module bundler
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    foods,
    getFoodById,
    getFoodBySlug,
    getFeaturedFoods,
    getFoodsByCategory,
    getRelatedFoods,
    getFoodImage
  };
}
