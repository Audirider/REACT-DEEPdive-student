# TICKET-29: SaaS Marketing Landing Page with Tailwind CSS

**Assigned:** Module 7 Day 3  
**Due:** Following Monday, 9:00 AM  
**Points:** 12.5  
**Type:** Individual Task  

---

## 🎯 OBJECTIVE

Build a high-conversion, fully responsive **Modern SaaS Product Landing Page** using **Tailwind CSS**. You will demonstrate atomic class composition, responsive breakpoint modifiers (`sm:`, `md:`, `lg:`), hover/focus micro-interactions, and class-based dark mode.

---

## 📋 REQUIREMENTS

### 1. Navigation Bar
- [ ] Sticky/fixed top navbar with backdrop blur (`backdrop-blur-md bg-white/80 dark:bg-slate-900/80`).
- [ ] Brand logo, navigation anchor links ("Features", "Pricing", "Testimonials").
- [ ] Dark Mode toggle button.
- [ ] Call-to-action button: "Start Free Trial".
- [ ] Mobile hamburger menu toggle (opens/closes mobile drawer).

### 2. Hero Section
- [ ] Eye-catching gradient headline (`bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent`).
- [ ] Supporting subtitle with balanced max-width (`max-w-2xl mx-auto`).
- [ ] Dual CTA buttons: Primary "Get Started Free" and Secondary "Book a Demo".
- [ ] Product screenshot or dashboard preview mockup container with soft elevation shadow.

### 3. Features Bento Grid
- [ ] Responsive grid: 1 column on mobile, 3 columns on tablet/desktop.
- [ ] Minimum of 3 feature cards with icons, bold titles, and explanatory descriptions.
- [ ] Interactive hover states (`hover:-translate-y-1 hover:shadow-xl transition-all duration-300`).

### 4. 3-Tier Pricing Matrix
- [ ] Tiers: **Starter** ($0/mo), **Pro** ($29/mo), **Enterprise** ($99/mo).
- [ ] Highlight the **Pro** tier as "Most Popular" with a highlighted border and badge.
- [ ] Feature bullet list with checkmark icons.
- [ ] Action buttons for each tier.

### 5. Social Proof / Testimonials
- [ ] Customer quote card with user avatar, name, title, and star rating.

### 6. Dark Mode Support
- [ ] Complete dark mode support across every single section using `dark:` utility prefixes.
- [ ] Persist selected mode in `localStorage`.

---

## ✅ ACCEPTANCE CRITERIA

- [ ] 100% styled using Tailwind CSS utility classes (no inline styles or external CSS)
- [ ] Fully responsive: verified on mobile (375px), tablet (768px), and desktop (1280px)
- [ ] Dark mode switch toggles smoothly without breaking contrast
- [ ] Interactive elements have distinct hover, active, and focus rings
- [ ] Code is organized into clean React sub-components (`Navbar`, `Hero`, `Features`, `Pricing`, `Footer`)

---

## 📤 SUBMISSION

```
TICKET-29 Submission
Name: [Your Name]
GitHub: [Repository URL]
Live URL: [Vercel / Netlify / GitHub Pages deployment]
Tailwind Features: ✅ Hero Section ✅ Bento Grid ✅ Pricing Table ✅ Dark Mode Toggle
```
