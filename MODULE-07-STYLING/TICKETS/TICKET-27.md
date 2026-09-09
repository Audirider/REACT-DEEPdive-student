# TICKET-27: E-Commerce Product Catalog with CSS Modules

**Assigned:** Module 7 Day 1  
**Due:** Module 7 Day 2, 9:00 AM  
**Points:** 12.5  
**Type:** Individual Task  

---

## 🎯 OBJECTIVE

Build an **E-Commerce Product Catalog & Filter Sidebar** component library styled exclusively with **CSS Modules**. You will demonstrate modularity, zero class name leakage, and dynamic variant handling.

---

## 📋 REQUIREMENTS

### 1. File & Architecture Structure
- [ ] Every component must have its own isolated `.module.css` file:
  - `src/components/ProductCard/ProductCard.jsx` & `ProductCard.module.css`
  - `src/components/FilterSidebar/FilterSidebar.jsx` & `FilterSidebar.module.css`
  - `src/components/Rating/Rating.jsx` & `Rating.module.css`
  - `src/components/Navbar/Navbar.jsx` & `Navbar.module.css`

### 2. ProductCard Component
- [ ] Image container with hover zoom and discount badge.
- [ ] Product title, category tag, star rating component.
- [ ] Price block showing current price and struck-through original price.
- [ ] "Add to Cart" button with interactive loading spinner state.
- [ ] Conditional stock status badge: "In Stock" (green) vs "Low Stock" (orange) vs "Sold Out" (gray).

### 3. FilterSidebar Component
- [ ] Category checkboxes (All, Electronics, Apparel, Home).
- [ ] Price range slider with dynamic label display.
- [ ] In-stock only toggle switch.
- [ ] Clear Filters button that resets state.

### 4. Technical & CSS Modules Constraints
- [ ] All class names must use **camelCase** (e.g. `.productCard`, `.discountBadge`).
- [ ] Multiple classes combined using template literals or `clsx`.
- [ ] Zero inline styles (`style={{}}`) for presentation.
- [ ] No collisions between `.title` in `Navbar.module.css` and `.title` in `ProductCard.module.css`.

---

## ✅ ACCEPTANCE CRITERIA

- [ ] All components styled with CSS Modules
- [ ] Filter sidebar dynamically filters the displayed products
- [ ] Hover animations and active states function smoothly
- [ ] Responsive grid: collapses from 3 columns on desktop to 1 column on mobile
- [ ] Zero global CSS style bleed

---

## 📤 SUBMISSION

```
TICKET-27 Submission
Name: [Your Name]
GitHub: [Repository URL]
Screenshot: [Catalog with filter sidebar & product cards]
Features: ✅ CSS Modules ✅ Dynamic Variants ✅ Filter Sidebar ✅ Responsive Grid
```
