# PRODUCT REQUIREMENTS DOCUMENT

# MANGKASARA — FRONTEND

**Product:** Mangkasara  
**Tagline:** Discover the Taste of Makassar  
**Version:** 2.0  
**Platform:** Responsive Website  
**Development Stage:** Frontend MVP  
**Technology:** HTML, CSS, Vanilla JavaScript  
**Data Source:** Local JavaScript Dummy Data

---

# 1. INSTRUCTIONS FOR ANTIGRAVITY AGENT

You are working as a frontend developer for Mangkasara, a culinary exploration and encyclopedia website focused on traditional Makassar cuisine.

Your responsibility is to implement the frontend based on this document and the existing project assets.

Before writing code:

1. Inspect the entire existing project directory.
2. Inspect the existing HTML, CSS, JavaScript, and asset files.
3. Locate the food photography assets already collected by the team.
4. Review the provided visual reference.
5. Understand the existing project structure before modifying anything.
6. Preserve useful existing code and assets.
7. Do not install unnecessary dependencies.
8. Do not implement backend functionality during this semester.

Do not stop after producing a design mockup. Implement the functional website.

## Mandatory Brand Requirements

The brand name is **MANGKASARA**.

The name must appear visibly in the actual frontend:

- Navbar brand/wordmark.
- Homepage identity.
- Footer.
- Browser document title.
- Metadata where applicable.

Use the tagline:

**Discover the Taste of Makassar.**

Do not leave:

- Dapur Kita.
- RasaNusa.
- Placeholder brand names.
- Generic "Food Website" branding.

If no logo file exists, create a clean typographic wordmark using text and CSS.

---

# 2. PRODUCT DEFINITION

Mangkasara is a platform that combines culinary exploration and culinary knowledge.

Users must be able to:

1. Discover traditional Makassar food.
2. Browse foods by category.
3. Search for a specific food.
4. Read detailed culinary information.
5. Save favorite foods.
6. Discover a random culinary recommendation.

This is not:

- A food ordering platform.
- A restaurant directory.
- A food marketplace.
- A delivery application.

---

# 3. DESIGN SYSTEM

Use the team's selected Dapur Kita reference as the visual direction.

The final website must have a warm, editorial, elegant, and modern appearance.

## 3.1 Color Tokens

```css
:root {
  --color-bg: #fbf9f5;
  --color-section: #f5efe6;
  --color-primary: #bd6249;
  --color-primary-soft: #d18a70;
  --color-text: #302821;
  --color-muted: #82786f;
  --color-border: #e9e2d9;
  --color-footer: #2d2621;
  --color-footer-text: #f7f2ea;
}
```

Use the colors consistently.

Do not introduce unrelated bright colors.

## 3.2 Typography

- Playfair Display: headings and editorial titles.
- DM Sans: body text, navigation, buttons, labels.

Use suitable fallbacks.

## 3.3 Visual Guidelines

- Large and high-quality food photography.
- Warm cream backgrounds.
- Terracotta accents.
- Dark brown text.
- Soft rounded corners.
- Subtle shadows.
- Clear typography hierarchy.
- Generous spacing.
- Consistent card dimensions.
- Responsive navigation.

Avoid:

- Excessive gradients.
- Excessive animations.
- Too many decorative elements.
- Oversized text on mobile.
- Inconsistent card layouts.

---

# 4. FOOD IMAGE ASSETS — IMPORTANT

The team has already collected food photographs.

These photographs are available inside the project directory.

You MUST inspect the existing asset folders before implementing the food cards and detail pages.

Required workflow:

1. Find all image files recursively.
2. Identify image filenames and dimensions where possible.
3. Create an internal asset inventory.
4. Match each image to the corresponding food.
5. Use local asset paths in the JavaScript food data.
6. Use the same image consistently in cards and detail pages.
7. Preserve the original image files.

Do not:

- Replace available team photographs with random internet images.
- Use unrelated food photographs.
- Invent image filenames.
- Delete original assets.
- Assume an image represents a food without checking it.

If an image cannot be confidently identified, leave the mapping unresolved and report it.

If there are no suitable images for a particular food, use a neutral fallback state.

---

# 5. SITEMAP

Implement these four primary pages:

```text
Home
├── Explore Culinary
│   └── Food Detail
└── Favorites
```

Suggested files:

- index.html
- explore.html
- detail.html
- favorites.html

The navigation must work between all pages.

---

# 6. PAGE REQUIREMENTS

## PAGE 01 — HOMEPAGE

Purpose:
Introduce Mangkasara and encourage users to explore traditional Makassar cuisine.

Required sections:

### A. Navbar

- Mangkasara wordmark.
- Home navigation.
- Explore navigation.
- Favorites navigation.
- Mobile navigation menu.

### B. Hero Section

- Headline introducing traditional Makassar cuisine.
- Short supporting description.
- Primary CTA: Explore Culinary.
- Food photography from the team's assets.
- Editorial two-column layout on desktop.
- Stacked layout on mobile.

Suggested headline:

"Discover the Taste of Makassar"

Suggested description:

"Explore the rich flavors, stories, and culinary heritage of traditional Makassar cuisine."

### C. Introduction Section

Explain the purpose of Mangkasara.

### D. Featured Culinary

Display selected food items.

Each food card must include:

- Food image.
- Food name.
- Category label.
- Short description.
- Link to detail page.

Only foods marked `featured: true` should appear here.

### E. Category Section

Display the five main categories.

Clicking a category must navigate to Explore with that category selected.

### F. Editorial Section

Provide a short introduction to Makassar culinary heritage.

Do not invent historical facts.

### G. Footer

Must display:

- Mangkasara.
- Tagline.
- Navigation links.
- Copyright information.

Acceptance criteria:

- Brand name is visible.
- All sections render correctly.
- Featured cards use actual food data.
- Navigation and CTA work.
- Responsive layout works.

---

## PAGE 02 — EXPLORE CULINARY

Purpose:
Allow users to browse and discover the entire culinary collection.

Required components:

1. Page title.
2. Short introduction.
3. Search input.
4. Category filter.
5. Food card grid.
6. Random Culinary button.
7. Empty state.

### Search Behavior

Search must:

- Search food names.
- Ignore uppercase/lowercase differences.
- Trim unnecessary whitespace.
- Update displayed results.

Example:
Searching `coto` should find Coto Makassar.

### Category Filter

The category filter must use these exact categories:

| ID  | Category              |
| --- | --------------------- |
| 1   | Hidangan Berkuah      |
| 2   | Makanan Utama         |
| 3   | Olahan Ikan & Seafood |
| 4   | Camilan & Jajanan     |
| 5   | Kue & Hidangan Manis  |

Provide an "Semua" option that displays all foods.

### Combined Search and Category Filtering

Search and category filtering MUST work together.

Example:

- Selected category: Hidangan Berkuah.
- Search keyword: coto.

Expected result:

- Coto Makassar.

The result must satisfy BOTH conditions.

Conceptual logic:

```js
const filteredFoods = foods.filter((food) => {
  const matchesSearch = food.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "all" || food.categoryId === Number(selectedCategory);

  return matchesSearch && matchesCategory;
});
```

### Reset Filter

Provide a reset control.

It must:

- Clear search input.
- Reset category to "Semua".
- Display the complete collection again.

### Empty State

If there are no results, display a clear message.

Example:

"No culinary items found. Try another keyword or category."

Do not leave an empty blank area.

Acceptance criteria:

- Search works.
- Category filtering works.
- Both filters work simultaneously.
- Reset restores all results.
- Empty state appears when appropriate.

---

## PAGE 03 — FOOD DETAIL

Purpose:
Provide complete information about a selected culinary item.

Access example:

```text
detail.html?id=1
```

Required content:

1. Food image.
2. Food name.
3. Category.
4. Short description.
5. Full description.
6. Main ingredients.
7. Taste or culinary characteristics.
8. History/story, if verified.
9. Information sources, if available.
10. Related foods.
11. Favorite button.
12. Back to Explore navigation.

### Data Handling

Read the food ID from the URL query parameter.

Find the matching food object from the dummy dataset.

If the ID does not exist:

- Show a friendly not-found message.
- Provide a button to return to Explore.

Optional fields:

- Do not display empty history sections.
- Do not display undefined values.
- Do not display empty source lists.

### Related Foods

Display other foods from the same category.

Do not display the current food as a related item.

Acceptance criteria:

- Correct food is displayed based on ID.
- Invalid IDs are handled.
- Optional content is handled.
- Favorite button works.
- Related food links work.

---

## PAGE 04 — FAVORITES

Purpose:
Allow users to save and revisit culinary items.

Use LocalStorage.

Storage key:

```js
const FAVORITES_KEY = "mangkasara-favorites";
```

Storage format:

```json
[1, 4, 7]
```

Store food IDs, not complete food objects.

Required behavior:

- Add a food to favorites.
- Remove a food from favorites.
- Display all saved foods.
- Persist favorites after refresh.
- Navigate from favorite cards to detail pages.
- Display an empty state if there are no favorites.

Suggested empty state:

"Your favorite culinary collection is still empty."

Provide an Explore CTA.

Acceptance criteria:

- Favorites can be added.
- Favorites can be removed.
- Data persists after refresh.
- Empty state works.
- Invalid stored data does not crash the page.

---

# 7. RANDOM CULINARY

Purpose:
Give users a spontaneous way to discover traditional Makassar cuisine.

Behavior:

1. User clicks "Discover Random Culinary".
2. JavaScript chooses one available food.
3. Display the selected food.
4. Provide a button to view its details.
5. Allow the user to try again.

Do not select an invalid ID.

If the collection is empty, show a friendly message.

---

# 8. CULINARY TAXONOMY

Every food must have exactly ONE primary category.

Use these five categories.

## CATEGORY 01 — HIDANGAN BERKUAH

Initial food list:

- Coto Makassar
- Pallubasa
- Sop Konro
- Sop Saudara
- Sop Ubi
- Pallumara
- Pallu Kaloa
- Pallu Ce'la

## CATEGORY 02 — MAKANAN UTAMA

Initial food list:

- Mie Titi
- Songkolo Bagadang
- Kaddo Minyak
- Bassang

## CATEGORY 03 — OLAHAN IKAN & SEAFOOD

Initial food list:

- Juku' Parape
- Juku' Tunu
- Juku' Kambu
- Bandeng Bakar

## CATEGORY 04 — CAMILAN & JAJANAN

Initial food list:

- Jalangkote
- Gogoso
- Baroncong
- Tarajong

## CATEGORY 05 — KUE & HIDANGAN MANIS

Initial food list:

- Barongko
- Pisang Epe
- Es Pisang Ijo
- Pallu Butung
- Cucuru Bayao

IMPORTANT CONTENT RULES:

- This list is an initial editorial curation, not an official cultural classification.
- Verify every food before including it as traditional Makassar cuisine.
- Do not automatically include all South Sulawesi dishes.
- Do not assume every food sold in Makassar originated from Makassar.
- Do not invent historical information.
- Record reliable references for food descriptions and historical claims.
- If an item's cultural association is uncertain, flag it for team review.

---

# 9. TAGGING SYSTEM

Primary category and food tags are different.

Each food has one primary category, but it may have multiple tags.

Suggested tags:

### Main Ingredient

- Daging sapi
- Ikan
- Ayam
- Pisang
- Beras
- Seafood

### Cooking Method

- Rebus
- Bakar
- Goreng
- Kukus

### Taste

- Gurih
- Manis
- Pedas
- Asam

Tags are optional for the MVP.

Do not create additional category filters for tags unless explicitly approved.

---

# 10. JAVASCRIPT DATA STRUCTURE

Use a consistent data contract.

Example:

```js
{
  id: 1,
  slug: "coto-makassar",
  name: "Coto Makassar",
  categoryId: 1,
  shortDescription: "Hidangan berkuah tradisional Makassar.",
  description: "Deskripsi lengkap berdasarkan sumber.",
  ingredients: [
    "Daging sapi",
    "Jeroan",
    "Kacang tanah"
  ],
  characteristics: "Gurih dan kaya rempah.",
  history: null,
  image: "assets/images/coto-makassar.webp",
  tags: ["Daging sapi", "Rebus", "Gurih"],
  sources: [],
  featured: true
}
```

Category data:

```js
{
  id: 1,
  name: "Hidangan Berkuah",
  slug: "hidangan-berkuah"
}
```

Rules:

- Every food must have a unique ID.
- Every food must have a valid categoryId.
- Every image path must refer to an existing asset.
- Ingredients must be an array.
- Tags must be an array.
- History may be null.
- Featured must be a boolean.
- Keep the data separate from UI rendering.

---

# 11. SUGGESTED PROJECT STRUCTURE

```text
mangkasara/
│
├── index.html
├── explore.html
├── detail.html
├── favorites.html
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
└── js/
    ├── data/
    │   ├── foods.js
    │   └── categories.js
    │
    ├── utils/
    │   ├── storage.js
    │   └── filters.js
    │
    ├── components/
    │   ├── navbar.js
    │   └── food-card.js
    │
    └── pages/
        ├── home.js
        ├── explore.js
        ├── detail.js
        └── favorites.js
```

This is a suggested structure. Adapt it to the existing project when appropriate.

Do not unnecessarily rewrite an existing working project.

---

# 12. RESPONSIVE REQUIREMENTS

Desktop:

- Full navigation bar.
- Two-column hero.
- Multi-column food card grid.
- Large food imagery.

Tablet:

- Adjust grid columns.
- Reduce section spacing.
- Maintain readable typography.

Mobile:

- Mobile navigation.
- Single-column hero.
- Two-column or single-column card grid depending on available width.
- Full-width search input.
- Comfortable touch targets.
- No horizontal overflow.

---

# 13. ACCESSIBILITY

- Use semantic HTML.
- Add alt text to meaningful food images.
- Provide visible keyboard focus.
- Use labels for form inputs.
- Ensure sufficient text contrast.
- Buttons must have clear accessible labels.
- Do not communicate status only through color.

---

# 14. OUT OF SCOPE

Do NOT implement:

- Backend API.
- MySQL connection.
- Real authentication.
- Login and register.
- Admin dashboard.
- Food CRUD interface.
- Food ordering.
- Payment.
- Restaurant directory.
- User comments.
- User rating system.
- Online image upload.

These features belong to future backend development.

---

# 15. IMPLEMENTATION ORDER

Follow this order:

1. Inspect project files and existing assets.
2. Identify and map food photographs.
3. Establish Mangkasara branding and design tokens.
4. Build shared navbar and footer.
5. Build reusable food cards and category cards.
6. Implement homepage.
7. Implement dummy food and category data.
8. Implement Explore page.
9. Implement search and combined category filtering.
10. Implement Food Detail.
11. Implement Favorites using LocalStorage.
12. Implement Random Culinary.
13. Implement responsive layouts.
14. Test all navigation and interactions.
15. Report completion and any unresolved asset/content mapping.

Do not skip asset inspection.

---

# 16. ACCEPTANCE CRITERIA

The frontend is considered complete only when:

- Mangkasara appears visibly throughout the frontend.
- The selected visual reference is followed.
- Existing food photographs are used appropriately.
- Homepage is complete.
- Explore page is functional.
- Search works.
- Category filtering works.
- Combined search and category filtering works.
- Reset filter works.
- Food detail is based on the selected food ID.
- Invalid food IDs are handled.
- Favorites persist using LocalStorage.
- Random Culinary works.
- Related foods work.
- Responsive layouts work.
- No major console errors remain.
- No important buttons are decorative or non-functional.
- No unsupported culinary history is presented as fact.

---

# 17. FINAL AGENT REPORT

After implementation, provide a short report containing:

1. Pages implemented.
2. Features completed.
3. Project structure created or modified.
4. Food images discovered and mapped.
5. Images that could not be identified.
6. Features that remain incomplete.
7. Testing performed.
8. Known bugs or limitations.

Do not claim a feature is complete unless it has been implemented and tested.
