# PRODUCT REQUIREMENTS DOCUMENT (PRD)

# MANGKASARA — FRONTEND

**Product:** Mangkasara  
**Tagline:** Discover the Taste of Makassar.  
**Version:** 3.0  
**Platform:** Responsive Website  
**Development Stage:** Frontend MVP — Semester 1  
**Technology Stack:** HTML, CSS, Vanilla JavaScript  
**Data Source:** Local JavaScript Dummy Data  
**Future Backend:** PHP and MySQL — Semester 2

---

## 1. PROJECT OVERVIEW

Mangkasara is a culinary exploration and encyclopedia website focused on traditional food from Makassar, South Sulawesi.

The website helps users discover traditional Makassar culinary heritage through food collections, categories, descriptions, ingredients, characteristics, and cultural information.

Mangkasara combines two main concepts:

1. **Culinary Exploration:** Users can browse, search, filter, and discover traditional Makassar foods.
2. **Culinary Encyclopedia:** Users can read information about each food, including its description, ingredients, characteristics, and historical or cultural background when reliable information is available.

Mangkasara is an educational and informational website, not a food marketplace or food delivery platform.

### 1.1 Project Goals

- Introduce traditional Makassar culinary heritage.
- Make information about traditional foods easier to discover.
- Provide a simple and comfortable browsing experience.
- Present culinary information through an organized and attractive interface.
- Build a frontend foundation that can be connected to a PHP and MySQL backend in the next semester.

### 1.2 Target Users

- Students and young people interested in local culinary culture.
- Local residents who want to explore traditional Makassar foods.
- Tourists and visitors interested in Makassar culinary heritage.
- General users looking for information about traditional Makassar dishes.

---

## 2. DEVELOPMENT SCOPE

The project is divided into two development stages according to the academic semester.

### 2.1 Semester 1 — Frontend MVP

The first semester focuses on building the website interface and frontend functionality.

**Technology:**

- HTML5
- CSS3
- Vanilla JavaScript
- Local JavaScript data
- Responsive web design

**Data handling:**

All food and category data will initially come from local JavaScript files. The website does not require a database or backend during this stage.

**Features included:**

- Homepage.
- Food catalog.
- Food search.
- Category filtering.
- Food detail page.
- Random food discovery.
- Responsive navigation.
- Responsive layout.
- Favorites page placeholder.

### 2.2 Semester 2 — Backend Integration

The second semester will focus on connecting the existing frontend to a backend system.

**Planned technology:**

- PHP
- MySQL
- JavaScript Fetch API
- XAMPP for local development

**Planned features:**

- Database integration.
- Dynamic food and category data.
- PHP endpoints returning JSON.
- Admin food management (CRUD).
- Favorites functionality.
- User authentication, if included in the final project scope.

These features are future plans and must not be implemented during the current frontend-only stage.

---

## 3. INSTRUCTIONS FOR THE ANTIGRAVITY AGENT

You are working as a frontend developer for Mangkasara.

Your responsibility is to inspect, understand, and implement the frontend based on this PRD, the existing project files, and the provided visual references.

### 3.1 Before Writing or Modifying Code

1. Inspect the entire existing project directory.
2. Review all HTML, CSS, and JavaScript files.
3. Inspect the existing project structure and understand how files are connected.
4. Inspect the `assets` directory recursively.
5. Identify the food photography assets already collected by the team.
6. Review the visual references provided in the project.
7. Understand the existing design and functionality before making changes.
8. Identify duplicated, unused, or unnecessary JavaScript code.
9. Preserve useful existing code and assets whenever possible.

### 3.2 Development Rules

- Do not rebuild the project from scratch without a clear reason.
- Do not replace the existing visual identity with a different design.
- Do not install unnecessary dependencies.
- Do not use React, Vue, Angular, Node.js, Express, or other frameworks.
- Use HTML, CSS, and Vanilla JavaScript only.
- Do not implement backend functionality during this semester.
- Do not connect to a database.
- Do not introduce unnecessary JavaScript abstractions.
- Keep the code readable and understandable for beginner-level developers.
- Use reusable functions only when they provide a clear benefit.
- Avoid duplicated code where a simple reusable component is appropriate.
- Do not add features outside the defined project scope.

### 3.3 Code Documentation

Write useful comments in JavaScript and CSS where they help explain the implementation.

For important JavaScript functions, explain:

- What the function does.
- Why the function is needed.
- Which parameters it receives, if any.
- Which DOM elements or data it interacts with.
- Which JavaScript methods or concepts it uses.

Comments should help students understand and modify the code. Avoid excessive comments that merely repeat the code.

### 3.4 Implementation Requirement

Do not stop after producing a mockup or static design.

Implement the actual frontend functionality defined in this document and test the website across all pages.

---

## 4. MANDATORY BRAND REQUIREMENTS

The official project name is **MANGKASARA**.

The tagline is:

**Discover the Taste of Makassar.**

The brand name must appear consistently in:

- Navbar brand or wordmark.
- Homepage identity.
- Footer.
- Browser document title.
- Relevant metadata.

Do not leave any previous placeholder brand names such as Dapur Kita or RasaNusa in the final interface.

Maintain consistent naming, tone, and visual identity throughout the website.

---

## 5. DESIGN REQUIREMENTS

### 5.1 Design Direction

Use the existing visual reference as the primary design direction.

The visual identity should feel:

- Warm.
- Editorial.
- Clean.
- Modern.
- Cultural.
- Comfortable to read.
- Focused on food photography.

The design should present traditional Makassar cuisine in a way that feels welcoming and informative.

### 5.2 Color Palette

Use the following colors as the primary design tokens. Existing project values may be preserved when they already match the intended appearance.

| Token        | Color     | Purpose                      |
| ------------ | --------- | ---------------------------- |
| Background   | `#FBF9F5` | Main page background         |
| Section      | `#F5EFE6` | Alternate section background |
| Primary      | `#BD6249` | Main accent and buttons      |
| Primary Soft | `#D18A70` | Secondary accent             |
| Text         | `#302821` | Main text                    |
| Muted        | `#82786F` | Secondary text               |
| Border       | `#E9E2D9` | Borders and separators       |
| Footer       | `#2D2621` | Footer background            |
| Footer Text  | `#F7F2EA` | Footer content               |

### 5.3 Typography

- Heading font: Playfair Display.
- Body font: DM Sans.

Maintain a clear typography hierarchy between headings, descriptions, labels, and supporting information.

### 5.4 Layout and Components

Maintain the existing design direction:

- Simple navigation bar.
- Spacious editorial layout.
- Large food photography.
- Two-column hero section on desktop.
- Clean food cards.
- Rounded card corners.
- Consistent spacing.
- Clear content hierarchy.
- Dark footer.
- Responsive layouts for mobile, tablet, and desktop.

### 5.5 Design Preservation

The current visual design must remain consistent.

Do not arbitrarily change:

- Main color palette.
- Typography direction.
- Layout structure.
- Card appearance.
- Navbar style.
- Footer style.
- Spacing system.
- Food image presentation.

Only make visual adjustments when required by the actual functionality or responsiveness.

---

## 6. WEBSITE STRUCTURE

Mangkasara consists of four main pages.

### 6.1 Homepage — `index.html`

**Purpose:** Introduce Mangkasara and encourage users to explore traditional Makassar cuisine.

**Required sections:**

1. Navbar.
2. Hero section.
3. Featured culinary section.
4. Culinary category section.
5. Editorial or cultural introduction section.
6. Footer.

**Functional requirements:**

- Navbar links navigate to the correct pages.
- Featured food cards navigate to their detail pages.
- Category cards navigate to the Explore page with the corresponding category selected, when supported by the existing implementation.
- Main call-to-action navigates to the Explore page.

### 6.2 Explore Page — `explore.html`

**Purpose:** Allow users to browse and discover the culinary collection.

**Required elements:**

- Page heading and introduction.
- Search input.
- Category filter.
- Food catalog.
- Random culinary button.
- Empty state when no food matches the search or filter.

**Functional requirements:**

1. Display all available food data.
2. Search foods by name.
3. Filter foods by category.
4. Allow search and category filtering to work together.
5. Provide a reset option when appropriate.
6. Display an empty state when no results are found.
7. Random culinary button selects a food from the available collection and directs users to its detail page.

Search and filtering must work with the local JavaScript data.

### 6.3 Food Detail Page — `detail.html`

**Purpose:** Present detailed information about one selected traditional food.

**Required information:**

- Food image.
- Food name.
- Category.
- Short description.
- Full description.
- Ingredients.
- Characteristics.
- Historical or cultural story, when reliable information is available.
- Sources or references when available.
- Related foods, if supported by the available data.

**Functional requirements:**

1. Read the selected food identifier from the URL.
2. Find the matching food in the local data.
3. Display the corresponding food information.
4. Display a clear invalid or unavailable state if the food identifier does not exist.
5. Related food cards should navigate to their respective detail pages.

Example URL:

`detail.html?id=coto-makassar`

The identifier format may follow the existing project implementation, provided it is consistent.

### 6.4 Favorites Page — `favorites.html`

**Purpose:** Reserve a dedicated page for a future favorites feature.

For the current semester, this page is a **Coming Soon / To Be Continued placeholder**.

**Required interface:**

- Page title: Favorites.
- Short explanation that the feature is planned for a future development stage.
- A visually consistent Coming Soon state.
- Navigation back to Explore or Home.

**Important restrictions:**

Do not implement the following during the current semester:

- Add to favorites.
- Remove from favorites.
- Favorite state management.
- LocalStorage-based favorites.
- Session-based favorites.
- User accounts.
- Favorites database.
- Active favorite buttons or heart interactions.

If the existing food cards contain favorite buttons or heart icons, make sure they do not imply an active feature. Remove or visually disable them while preserving the card design.

Do not create unnecessary `favorites.js` or `storage.js` functionality for a feature that is not being implemented. Inspect existing files and remove or leave unused code only after checking its dependencies.

---

## 7. CULINARY DATA REQUIREMENTS

### 7.1 Data Source

For the current semester, culinary data must be stored in local JavaScript files.

Suggested files:

- `js/data/foods.js`
- `js/data/categories.js`

The implementation may preserve the existing file organization if it is already functional.

### 7.2 Food Data Structure

Use a consistent object structure for every food entry.

Example:

```js
{
  id: "coto-makassar",
  name: "Coto Makassar",
  categoryId: "hidangan-berkuah",
  shortDescription: "Hidangan berkuah khas Makassar.",
  description: "Deskripsi lengkap mengenai makanan.",
  ingredients: [
    "Daging sapi",
    "Jeroan",
    "Kacang tanah"
  ],
  characteristics: "Kuah kaya rempah dengan cita rasa gurih.",
  history: null,
  image: "assets/images/coto-makassar.webp",
  tags: ["Daging sapi", "Berkuah", "Gurih"],
  sources: [],
  featured: true
}
```

This is an example structure. Adapt property names to the existing implementation when necessary, but maintain consistency across all food objects.

### 7.3 Data Accuracy

- Do not invent historical facts.
- Do not invent cultural origins.
- Do not present uncertain information as established fact.
- Use reliable references when documenting history or cultural background.
- If historical information cannot be verified, leave it unavailable rather than fabricating it.
- Keep descriptions informative and easy to understand.
- Use consistent category assignments.

### 7.4 Culinary Scope

The website focuses specifically on traditional Makassar culinary heritage.

Do not automatically include every food from South Sulawesi.

Foods from other regions or ethnic culinary traditions must only be included when their relationship to Makassar culinary heritage has been verified.

### 7.5 Initial Culinary Collection

The following is an initial editorial collection, not an official cultural classification.

**Hidangan Berkuah**

- Coto Makassar
- Pallubasa
- Sop Konro
- Sop Saudara
- Sop Ubi
- Pallumara
- Pallu Kaloa
- Pallu Ce'la

**Makanan Utama**

- Mie Titi
- Songkolo Bagadang
- Kaddo Minyak
- Bassang

**Olahan Ikan & Seafood**

- Juku' Parape
- Juku' Tunu
- Juku' Kambu
- Bandeng Bakar

**Camilan & Jajanan**

- Jalangkote
- Gogoso
- Baroncong
- Tarajong

**Kue & Hidangan Manis**

- Barongko
- Pisang Epe
- Es Pisang Ijo
- Pallu Butung
- Cucuru Bayao

Verify the cultural association of each entry before publishing it.

---

## 8. IMAGE AND ASSET REQUIREMENTS

The team has already collected food photography assets.

These existing assets must be inspected and prioritized.

### Rules

1. Inspect the entire `assets` directory recursively.
2. Identify available images and their formats.
3. Match each image to the correct food.
4. Use existing team photography as the primary image source.
5. Do not replace available team images with random stock photos.
6. Do not assume an image represents a particular food based only on its filename.
7. Do not invent image filenames or paths.
8. Preserve original image files.
9. Report images that cannot be confidently matched.
10. Use a consistent image presentation across cards and detail pages.

If a food does not have a suitable image, use an appropriate fallback rather than an unrelated image.

---

## 9. JAVASCRIPT ARCHITECTURE

Use Vanilla JavaScript and keep the implementation understandable.

The existing project structure should be inspected before changing it.

The current project may contain:

```text
js/
├── components/
├── data/
│   ├── categories.js
│   └── foods.js
├── pages/
│   ├── detail.js
│   ├── explore.js
│   ├── favorites.js
│   └── home.js
└── utils/
    ├── filters.js
    └── storage.js
```

This is the current visible structure and should be treated as a starting point, not a requirement to preserve every file.

### 9.1 Responsibilities

**Data files**

- Store local food and category information.
- Export data for use by page scripts.

**Components**

- Contain reusable UI functions when necessary.
- Example: a food card renderer.

**Page scripts**

- Handle functionality specific to each page.
- `home.js`: homepage content.
- `explore.js`: catalog, search, category filtering, and random discovery.
- `detail.js`: selected food detail.
- `favorites.js`: only if needed to display the Coming Soon placeholder.

**Utilities**

- Contain genuinely shared helper functions.
- Avoid creating utilities that are not needed.

### 9.2 JavaScript Guidelines

- Prefer simple functions with clear responsibilities.
- Use `const` by default and `let` when reassignment is required.
- Use array methods when they make the logic clearer.
- Use event listeners for user interactions.
- Use DOM methods to update page content.
- Avoid unnecessary global variables.
- Avoid duplicated filtering logic.
- Avoid unnecessary storage logic.
- Avoid excessive abstraction.

Use ES Modules if the existing project architecture supports them. Do not mix incompatible module systems.

Run the project through a local development server such as VS Code Live Server. Do not rely on opening HTML files directly through `file://` when using ES Modules.

### 9.3 Future Backend Compatibility

Keep data rendering separate from the source of the data where practical.

The food card and detail rendering logic should be reusable when data later comes from a PHP JSON API.

Do not implement the PHP API now.

---

## 10. FUTURE BACKEND PLAN — SEMESTER 2

This section documents the intended direction only.

### 10.1 Planned Architecture

The future architecture is:

```text
Frontend
HTML + CSS + JavaScript
        |
        | fetch()
        v
PHP API
        |
        | SQL query
        v
MySQL Database
        |
        | Query result
        v
PHP JSON Response
        |
        v
JavaScript renders the data
```

The browser must not connect directly to MySQL.

PHP will handle database communication and return data to the frontend, preferably in JSON format.

### 10.2 Planned Database Tables

Potential tables:

| Table              | Purpose                                             |
| ------------------ | --------------------------------------------------- |
| `categories`       | Stores culinary categories                          |
| `foods`            | Stores food information                             |
| `food_ingredients` | Stores food ingredients                             |
| `users`            | Stores user accounts, if authentication is included |
| `favorites`        | Stores user-to-food favorite relationships          |

Additional tables may be introduced if the final requirements need them.

### 10.3 Planned API Examples

These are conceptual endpoint examples:

- `GET /api/foods.php`
- `GET /api/food.php?id=1`
- `GET /api/categories.php`
- `GET /api/random-food.php`
- `GET /api/favorites.php`
- `POST /api/favorites.php`
- `DELETE /api/favorites.php`

Admin CRUD endpoints may also be added.

The final endpoint structure will be determined during the backend semester.

### 10.4 Backend Security Considerations

During backend implementation:

- Use PDO or an appropriate database access method.
- Use prepared statements for user-provided values.
- Validate incoming data on the server.
- Do not trust user IDs supplied directly by the browser.
- Protect admin operations.
- Handle errors properly.
- Return appropriate HTTP status codes.
- Store passwords securely if authentication is implemented.

---

## 11. RESPONSIVE DESIGN REQUIREMENTS

The website must work on:

- Desktop.
- Tablet.
- Mobile phones.

Requirements:

- No horizontal overflow.
- Text remains readable.
- Images scale appropriately.
- Food cards adapt to smaller screens.
- Navigation remains usable on mobile.
- Buttons and inputs remain easy to interact with.
- Detail content must remain organized on small screens.

Preserve the desktop design direction while adapting the layout for smaller screens.

---

## 12. FUNCTIONAL ACCEPTANCE CRITERIA

The implementation is considered complete when the following requirements are satisfied.

### Homepage

- [ ] Mangkasara branding is visible.
- [ ] Hero section displays correctly.
- [ ] Featured food cards display correctly.
- [ ] Category navigation works.
- [ ] Main navigation works.
- [ ] Footer displays correctly.

### Explore

- [ ] Food catalog displays local data.
- [ ] Search works by food name.
- [ ] Category filtering works.
- [ ] Search and filtering work together.
- [ ] Reset behavior works.
- [ ] Empty state displays correctly.
- [ ] Random food discovery works.
- [ ] Food cards navigate to the correct detail page.

### Food Detail

- [ ] Food information matches the selected identifier.
- [ ] Image displays correctly.
- [ ] Ingredients and descriptions display correctly.
- [ ] Missing information is handled gracefully.
- [ ] Invalid identifiers display a proper unavailable state.
- [ ] Related food links work when available.

### Favorites

- [ ] Favorites page exists.
- [ ] Coming Soon message is displayed.
- [ ] No active favorite functionality is present.
- [ ] No LocalStorage favorites implementation is present.

### General

- [ ] All navigation links work.
- [ ] No broken image paths.
- [ ] No major console errors.
- [ ] Layout works on mobile, tablet, and desktop.
- [ ] Existing visual identity is preserved.
- [ ] No backend or database functionality is implemented.

---

## 13. FINAL IMPLEMENTATION REPORT

After completing the implementation, provide a short report containing:

1. Summary of changes.
2. Files created.
3. Files modified.
4. Files removed, including the reason for removal.
5. Existing assets reused.
6. Assets that could not be matched.
7. Features implemented.
8. Features intentionally left for Semester 2.
9. Testing results.
10. Known limitations or remaining issues.

Do not claim that a feature works unless it has actually been tested.

---

**END OF DOCUMENT**
