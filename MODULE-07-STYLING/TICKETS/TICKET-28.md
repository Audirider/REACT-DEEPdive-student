# TICKET-28: Themeable Analytics Dashboard with Styled-components

**Assigned:** Module 7 Day 2  
**Due:** Module 7 Day 3, 9:00 AM  
**Points:** 12.5  
**Type:** Individual Task  

---

## 🎯 OBJECTIVE

Build a **Themeable Personal Finance & Analytics Dashboard** powered entirely by **styled-components** (or Emotion). You will implement a robust design token system, dynamic props, transient props (`$prop`), and a seamless Light/Dark mode switcher.

---

## 📋 REQUIREMENTS

### 1. Theme Configuration (`src/styles/theme.js`)
- [ ] Comprehensive token objects for `lightTheme` and `darkTheme`:
  - `bgPrimary`, `bgSurface`, `bgCard`
  - `textPrimary`, `textMuted`
  - `accentPrimary`, `accentSuccess`, `accentDanger`
  - `borderLight`, `shadowCard`
- [ ] `GlobalStyle` component resetting box-sizing, typography, and setting animated background/text color transitions.

### 2. Dashboard Components (all built with `styled`)
- [ ] **Navbar / Header:**
  - App brand title with icon.
  - Theme Toggle Switch (with smooth slider animation).
  - User avatar with status indicator dot.
- [ ] **Financial Metric Cards (3 cards):**
  - "Total Balance", "Monthly Income", "Monthly Expenses".
  - Props: `$trend="up" | "down"` (colors the indicator green or red).
  - Hover elevation with smooth transitions.
- [ ] **Transaction Table / List:**
  - Displays category icon, title, date, amount.
  - Alternating or highlighted row styling based on transaction type (`$isCredit`).
- [ ] **Action Buttons:**
  - Reusable `<Button>` with `$variant="primary" | "secondary" | "outline"` and `$size="sm" | "md"`.
  - Use of the polymorphic `as` prop for at least one navigation link.

### 3. Technical Constraints
- [ ] All dynamic styling props must use the `$` prefix (e.g. `$variant`, `$trend`, `$isCredit`) to prevent invalid HTML DOM attributes.
- [ ] All styled components declared **outside** component render functions.
- [ ] Zero inline styles or external `.css` files used for component presentation.

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Dark/Light mode toggle functions instantly and persists to `localStorage`
- [ ] Clean visual hierarchy and readable contrast in both themes
- [ ] Transient props properly applied without browser console DOM warnings
- [ ] Component reusability demonstrated across multiple cards and buttons
- [ ] Responsive design on both mobile and desktop viewports

---

## 📤 SUBMISSION

```
TICKET-28 Submission
Name: [Your Name]
GitHub: [Repository URL]
Screenshot: [Show Dashboard in both Light Mode AND Dark Mode]
Features: ✅ Styled-components ✅ ThemeProvider (Light & Dark) ✅ Transient Props ✅ Metric Cards
```
