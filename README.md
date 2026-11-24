# MANGKASARA

### Discover the Taste of Makassar.

Mangkasara is a culinary exploration and encyclopedia website focused on traditional food from Makassar, South Sulawesi.

The website introduces local culinary heritage through food collections, categories, descriptions, ingredients, characteristics, and cultural information.

Mangkasara is designed as an informational and educational platform, not a food ordering service or marketplace.

---

## 1. PROJECT OVERVIEW

### Project Information

| Information       | Details                                     |
| ----------------- | ------------------------------------------- |
| Project Name      | Mangkasara                                  |
| Tagline           | Discover the Taste of Makassar.             |
| Project Type      | Culinary Exploration & Encyclopedia Website |
| Development Stage | Frontend MVP                                |
| Semester          | Semester 1                                  |
| Frontend          | HTML, CSS, Vanilla JavaScript               |
| Data Source       | Local JavaScript Dummy Data                 |
| Future Backend    | PHP & MySQL                                 |
| Local Development | VS Code Live Server                         |

### Project Goals

- Introduce traditional Makassar culinary heritage.
- Help users discover traditional local foods.
- Provide organized culinary information.
- Create a simple and responsive browsing experience.
- Prepare a frontend foundation for future backend integration.

### Target Users

- Students interested in local culinary culture.
- Makassar residents.
- Tourists and visitors.
- People interested in traditional Indonesian food.

---

## 2. DEVELOPMENT ROADMAP

Mangkasara is developed in two stages.

### Semester 1 — Frontend MVP

The first stage focuses on the frontend website.

**Technology:**

- HTML5
- CSS3
- Vanilla JavaScript

**Data:**

- Local JavaScript files.
- No database.
- No PHP backend.

**Features:**

- Homepage.
- Food catalog.
- Search.
- Category filtering.
- Food detail page.
- Random culinary discovery.
- Favorites page placeholder.
- Responsive design.

### Semester 2 — Backend Development

The next stage is planned to introduce:

- PHP backend.
- MySQL database.
- Frontend and backend integration.
- Dynamic culinary data.
- Admin CRUD.
- Favorites functionality.
- User authentication, if included in the final scope.

These are future development plans, not current frontend features.

---

## 3. CURRENT FEATURES

### 3.1 Homepage

The homepage introduces Mangkasara and provides access to the main website sections.

It contains:

- Hero section.
- Featured culinary.
- Culinary categories.
- Editorial introduction.
- Navigation.
- Footer.

### 3.2 Explore

The Explore page provides access to the culinary collection.

Users can:

- Browse available foods.
- Search by food name.
- Filter foods by category.
- Combine search and category filters.
- Reset filters.
- Discover a random food.

### 3.3 Food Detail

The detail page displays information about a selected food.

Information may include:

- Food name.
- Food image.
- Category.
- Short description.
- Full description.
- Ingredients.
- Preparation steps (Cara Pembuatan): Sequential overview of traditional cooking/preparation methods.
- Characteristics.
- History or cultural story when reliable information is available.
- Sources or references.
- Related foods when available.

### 3.4 Favorites — Coming Soon

The Favorites page is included in the current website structure as a placeholder.

It does not currently save or manage favorite foods.

The actual favorites feature is planned for Semester 2, when the backend and database are introduced.

---

## 4. TECHNOLOGY STACK

| Technology            | Usage                            |
| --------------------- | -------------------------------- |
| HTML5                 | Website structure                |
| CSS3                  | Styling and responsive layout    |
| Vanilla JavaScript    | Frontend functionality           |
| JavaScript Modules    | Organizing and sharing code      |
| Local JavaScript Data | Temporary food and category data |
| PHP                   | Planned future backend           |
| MySQL                 | Planned future database          |

No frontend framework is required for the current stage.

---

## 5. DESIGN SYSTEM

Mangkasara uses a warm editorial visual direction inspired by the provided design reference.

### Color Palette

| Color        | Hex       | Usage              |
| ------------ | --------- | ------------------ |
| Background   | `#FBF9F5` | Main background    |
| Section      | `#F5EFE6` | Alternate sections |
| Primary      | `#BD6249` | Main accent        |
| Primary Soft | `#D18A70` | Secondary accent   |
| Text         | `#302821` | Main text          |
| Muted        | `#82786F` | Secondary text     |
| Border       | `#E9E2D9` | Borders            |
| Footer       | `#2D2621` | Footer background  |
| Footer Text  | `#F7F2EA` | Footer content     |

### Typography

- **Playfair Display:** Headings.
- **DM Sans:** Body text and interface elements.

### Design Principles

- Warm and welcoming appearance.
- Clear content hierarchy.
- Large and relevant food photography.
- Comfortable whitespace.
- Consistent card design.
- Responsive layouts.
- Simple navigation.

The existing visual identity should be preserved when new features are implemented.

---

## 6. PROJECT STRUCTURE

The project currently follows a structure similar to the following:

```text
mangkasara/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── css/
│   ├── style.css
│   ├── components.css
│   └── responsive.css
│
├── js/
│   ├── components/
│   │   └── food-card.js
│   │
│   ├── data/
│   │   ├── categories.js
│   │   └── foods.js
│   │
│   ├── pages/
│   │   ├── home.js
│   │   ├── explore.js
│   │   ├── detail.js
│   │   └── favorites.js
│   │
│   └── utils/
│       └── filters.js
│
├── reference/
│
├── index.html
├── explore.html
├── detail.html
├── favorites.html
│
├── front-end-PRD.md
└── README.md
```

**Important:** This is a documentation reference for the intended organization. Check the actual project directory for the exact filenames and contents.

Some files may be added, modified, or removed as the implementation develops. Avoid keeping unused JavaScript files just because they appear in an earlier structure.

### Folder Responsibilities

**`assets/`**

Stores images, icons, and other static assets used by the website.

**`css/`**

Contains the website styling.

**`js/components/`**

Contains reusable interface functions, such as food card rendering.

**`js/data/`**

Contains local food and category data.

**`js/pages/`**

Contains JavaScript functionality specific to each HTML page.

**`js/utils/`**

Contains shared helper functions that are genuinely used by multiple parts of the project.

**`reference/`**

Stores design references or other project reference materials.

---

## 7. HOW THE FRONTEND WORKS

The current frontend uses local JavaScript data.

The basic flow is:

```text
HTML Page
   |
   v
Page JavaScript
   |
   v
Local JavaScript Data
   |
   v
Process or Filter Data
   |
   v
Render Content into the DOM
```

For example, when a user opens the Explore page:

1. The browser loads `explore.html`.
2. The page loads its JavaScript file.
3. JavaScript imports the food data.
4. The data is processed if needed.
5. Food cards are rendered into the page.
6. User interactions trigger search or filtering.
7. The displayed cards are updated.

### 7.1 Local Food Data

The `foods.js` file stores the culinary collection.

Example:

```js
export const foods = [
  {
    id: "coto-makassar",
    name: "Coto Makassar",
    categoryId: "hidangan-berkuah",
    shortDescription: "Hidangan berkuah khas Makassar.",
    description: "Deskripsi lengkap mengenai makanan.",
    ingredients: ["Daging sapi", "Jeroan", "Kacang tanah"],
    preparationSteps: [
      "Rebus daging sapi dan jeroan bersama serai dan jahe hingga empuk.",
      "Haluskan bumbu rempah dan kacang tanah sangrai.",
      "Tumis bumbu halus hingga harum, lalu masukkan ke kuah kaldu rebusan.",
      "Sajikan panas bersama ketupat, daun bawang, dan sambal tauco."
    ],
    characteristics: "Kuah kaya rempah dengan cita rasa gurih.",
    history: null,
    image: "assets/images/coto-makassar.webp",
    tags: ["Daging sapi", "Berkuah", "Gurih"],
    sources: [],
    featured: true,
  },
];
```

This is an example of the data structure. The actual property names should remain consistent throughout the project.

**Preparation Steps (`preparationSteps`):**
- Properti `preparationSteps` berupa array string yang berisi tahapan berurutan cara pembuatan atau pengolahan kuliner secara ringkas dan informatif.
- Pada `detail.html`, modul `js/pages/detail.js` merender elemen ini ke dalam container `#detail-food-preparation` sebagai ordered list (`<ol class="preparation-steps-list">`) dengan penomoran elegan.
- **Penanganan Empty State:** Jika kuliner tidak memiliki tahapan pembuatan atau array `preparationSteps` kosong/tidak terdefinisi, sistem menampilkan pesan ramah *"Informasi cara pembuatan belum tersedia untuk kuliner ini."* tanpa menimbulkan error JavaScript atau merender list kosong.
- Fungsi sanitasi `escapeHTML()` diterapkan untuk mencegah injeksi kode HTML berbahaya pada konten dinamis.

**Why use local data?**

The current semester focuses on frontend development. Local data allows the team to build and test the website without waiting for a database or backend.

### 7.2 Category Data

The `categories.js` file stores the available culinary categories.

Example:

```js
export const categories = [
  {
    id: "hidangan-berkuah",
    name: "Hidangan Berkuah",
  },
  {
    id: "makanan-utama",
    name: "Makanan Utama",
  },
];
```

Food objects can refer to a category through `categoryId`.

This helps keep category information consistent.

### 7.3 JavaScript Modules

JavaScript modules allow code to be separated into different files.

For example:

```js
import { foods } from "../data/foods.js";
```

This imports the food data so another JavaScript file can use it.

A module can also export a function:

```js
export function exampleFunction() {
  // Function implementation
}
```

Other files can import and use that function when needed.

This keeps data, page logic, and reusable components organized.

### 7.4 Food Card Component

A food card component can be used to display food information consistently.

Its responsibility is to receive a food object and generate the corresponding card interface.

The same component can be reused in:

- Homepage featured section.
- Explore catalog.
- Related food section.

The component should focus on displaying data rather than deciding where that data comes from.

This separation will make future backend integration easier.

### 7.5 Search and Filtering

The Explore page uses JavaScript to process the local food collection.

Common methods that may be used include:

| Method          | Purpose                                   |
| --------------- | ----------------------------------------- |
| `filter()`      | Select foods that match a condition       |
| `includes()`    | Check whether text contains a search term |
| `toLowerCase()` | Make text comparison case-insensitive     |
| `find()`        | Find one matching food                    |
| `map()`         | Transform an array into another array     |
| `join()`        | Combine array values into a string        |

For example, searching can compare the user's input with each food name.

Category filtering can select only foods whose `categoryId` matches the selected category.

Search and category filtering should work together rather than overwrite each other.

### 7.6 Random Culinary Discovery

The random discovery feature selects one food from the available collection.

The selected food is then opened on its detail page.

This gives users another way to discover culinary entries without manually searching for them.

---

## 8. CULINARY CATEGORIES

The initial collection is organized into the following editorial categories.

These categories are used for website navigation and do not represent an official cultural classification.

### Hidangan Berkuah

- Coto Makassar
- Pallubasa
- Sop Konro
- Sop Saudara
- Sop Ubi
- Pallumara
- Pallu Kaloa
- Pallu Ce'la

### Makanan Utama

- Mie Titi
- Songkolo Bagadang
- Kaddo Minyak
- Bassang

### Olahan Ikan & Seafood

- Juku' Parape
- Juku' Tunu
- Juku' Kambu
- Bandeng Bakar

### Camilan & Jajanan

- Jalangkote
- Gogoso
- Baroncong
- Tarajong

### Kue & Hidangan Manis

- Barongko
- Pisang Epe
- Es Pisang Ijo
- Pallu Butung
- Cucuru Bayao

Food entries must be checked for their cultural association with Makassar before being published.

Do not automatically classify every food from South Sulawesi as traditional Makassar cuisine.

---

## 9. IMAGE ASSETS & BRAND IDENTITY

The team has collected official brand and food photography assets for the project.

### 9.1 Brand Logo & Favicon

- **Path:** `assets/logo-1.png` (Brand Logo Utama) dan `assets/favicon.png` (Favicon Browser)
- **Spesifikasi:** Format 32-bit RGBA (1402 x 475 px) untuk logo utama; cropped icon simbol rumah khas Makassar 256 x 256 px untuk favicon browser.
- **Implementasi:** `assets/logo-1.png` digunakan sebagai logo utama navbar dan footer; `assets/favicon.png` digunakan sebagai favicon browser (`<link rel="icon" type="image/png" href="assets/favicon.png" />`).
- **Warna Identitas:** Menampilkan aksen terracotta `#BD6249` dan warna teks gelap `#302821`.

### 9.2 Food Photography Mapping

Sebanyak 13 dari 25 hidangan tradisional telah memiliki dokumentasi foto asli tim:

| ID | Nama Kuliner | Kategori | Path Foto | Status |
|---|---|---|---|---|
| 01 | Coto Makassar | Hidangan Berkuah | `assets/images/coto.jpg` | Foto Tim |
| 05 | Sop Ubi | Hidangan Berkuah | `assets/images/sop-ubi.jpg` | Foto Tim |
| 06 | Pallumara | Hidangan Berkuah | `assets/images/pallu-mara.png` | Foto Tim |
| 08 | Pallu Ce'la | Hidangan Berkuah | `assets/images/pallu-cela.jpg` | Foto Tim |
| 14 | Juku' Tunu | Olahan Ikan & Seafood | `assets/images/juku-tunu.jpg` | Foto Tim |
| 16 | Bandeng Bakar | Olahan Ikan & Seafood | `assets/images/bandeng-bakar.jpg` | Foto Tim |
| 17 | Jalangkote | Camilan & Jajanan | `assets/images/jalangkote.jpg` | Foto Tim |
| 19 | Baroncong | Camilan & Jajanan | `assets/images/baroncong.jpg` | Foto Tim |
| 21 | Barongko | Kue & Hidangan Manis | `assets/images/barongko.jpg` | Foto Tim |
| 22 | Pisang Epe | Kue & Hidangan Manis | `assets/images/pisang-epe.jpg` | Foto Tim |
| 23 | Es Pisang Ijo | Kue & Hidangan Manis | `assets/images/pisang-hijo.jpg` | Foto Tim |
| 24 | Pallu Butung | Kue & Hidangan Manis | `assets/images/pallu-butung.jpg` | Foto Tim |
| 25 | Cucuru Bayao | Kue & Hidangan Manis | `assets/images/cucuru-bayao.jpg` | Foto Tim |
| - | 12 Hidangan Lainnya | Berbagai Kategori | `assets/images/placeholder-food.svg` | Fallback SVG |

When adding or updating food images:

1. Check the available files in `assets/`.
2. Identify the actual food shown in each image.
3. Match images with the correct food data.
4. Use consistent image presentation.
5. Do not invent filenames.
6. Do not replace existing images without a reason.
7. Use a fallback when a suitable image is unavailable.

Preserve original assets.

---

## 10. HOW TO RUN THE PROJECT

### Requirements

- Visual Studio Code.
- A modern web browser.
- VS Code Live Server extension.

No PHP, MySQL, Node.js, or database setup is required for the current frontend stage.

### Steps

1. Open the Mangkasara project folder in VS Code.
2. Open `index.html`.
3. Right-click the file.
4. Select **Open with Live Server**.
5. The website will open in the browser.

If the project uses JavaScript ES Modules, run it through a local HTTP server instead of opening the HTML file directly using `file://`.

---

## 11. CURRENT LIMITATIONS

The current version is a frontend MVP.

It does not currently include:

- PHP backend.
- MySQL database.
- User registration.
- User login.
- Admin dashboard.
- Database-backed food management.
- Database-backed favorites.
- Persistent user data.
- Online API integration.

Food and category information are currently stored in local JavaScript files.

The Favorites page is a placeholder and does not save user selections.

---

## 12. FUTURE DEVELOPMENT — PHP & MYSQL

The next development stage is planned to introduce a PHP and MySQL backend.

### 12.1 Planned Architecture

```text
Browser
   |
   | JavaScript fetch()
   v
PHP API
   |
   | SQL Query
   v
MySQL Database
   |
   | Query Result
   v
PHP JSON Response
   |
   v
JavaScript
   |
   v
Update Website Content
```

JavaScript will communicate with PHP through HTTP requests.

PHP will handle communication with MySQL.

The browser must not connect directly to the MySQL database.

### 12.2 Example Future Request

The following is an example of how the frontend may request food data from a PHP endpoint in Semester 2.

```js
async function getFoods() {
  const response = await fetch("api/foods.php");

  const foods = await response.json();

  return foods;
}
```

This is a future integration example, not code required for the current semester.

### 12.3 Planned Database Structure

| Table              | Responsibility                                      |
| ------------------ | --------------------------------------------------- |
| `categories`       | Stores food categories                              |
| `foods`            | Stores culinary information                         |
| `food_ingredients` | Stores food ingredients                             |
| `users`            | Stores user accounts, if authentication is included |
| `favorites`        | Stores favorite food relationships                  |

The final database structure will be designed during backend development.

### 12.4 Planned Backend Features

- Display food data from MySQL.
- Display category data from MySQL.
- Retrieve individual food details.
- Manage food data through admin CRUD.
- Save and remove favorites.
- User authentication if required by the final scope.

### 12.5 Future Favorites Flow

When favorites are implemented:

1. A user selects a food as a favorite.
2. The frontend sends a request to the PHP backend.
3. PHP validates the request and user authorization.
4. PHP stores the relationship in the MySQL `favorites` table.
5. The frontend updates the displayed state.

The exact authentication and database design will be determined in Semester 2.

---

## 13. DEVELOPMENT GUIDELINES

When modifying Mangkasara:

- Preserve the established visual identity.
- Keep HTML, CSS, and JavaScript organized.
- Use readable variable and function names.
- Avoid unnecessary dependencies.
- Avoid duplicated logic.
- Keep functions focused on clear responsibilities.
- Use comments to explain important code decisions.
- Test every page after making changes.
- Check the browser console for errors.
- Verify that all navigation and image paths work.
- Ensure the website remains responsive.

Do not add features outside the agreed project scope without discussing them with the team.

---

## 14. PROJECT STATUS

| Feature                 | Current Stage             |
| ----------------------- | ------------------------- |
| Homepage                | Semester 1                |
| Explore Catalog         | Semester 1                |
| Search                  | Semester 1                |
| Category Filtering      | Semester 1                |
| Food Detail             | Semester 1                |
| Random Discovery        | Semester 1                |
| Favorites Placeholder   | Semester 1                |
| Favorites Functionality | Semester 2                |
| PHP Backend             | Semester 2                |
| MySQL Database          | Semester 2                |
| Admin CRUD              | Semester 2                |
| Authentication          | Planned, subject to scope |

---

## 15. PROJECT VISION

Mangkasara aims to become a simple and informative digital space for discovering traditional Makassar culinary heritage.

The first stage establishes the frontend experience and culinary information structure.

The next stage will introduce backend capabilities, database integration, and additional functionality.

By separating the development into stages, the team can focus on building a clear and functional frontend before introducing more complex backend concepts.

---

**Mangkasara — Discover the Taste of Makassar.**
