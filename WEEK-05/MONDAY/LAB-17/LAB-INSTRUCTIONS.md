# LAB 17: React Component Gallery

**Week:** 5 — Monday  
**Points:** 12.5  
**Time:** 40 minutes (in class) + homework  
**Due:** Monday EOD

---

## 🎯 OBJECTIVE

Build a **Component Gallery** — a React application showcasing 4+ reusable components, each accepting props and rendering dynamic content.

---

## 📋 REQUIREMENTS

### Components to Build (minimum 4):

1. **UserCard** — Displays a user profile
   - Props: `name`, `bio`, `avatar` (image URL), `skills` (array)
   - Renders avatar image, name, bio text, and skill badges
   - Skills rendered with `.map()`

2. **ProgressBar** — Visual progress indicator
   - Props: `label`, `percentage` (0-100), `color`
   - Dynamic width based on percentage
   - Shows label and percentage text

3. **Badge** — Status/tag indicator
   - Props: `text`, `type` ("success", "warning", "error", "info")
   - Background color changes based on type
   - Default type if not provided

4. **StatCard** — Statistics display card
   - Props: `title`, `value`, `icon` (emoji)
   - Clean card layout with icon, title, and large value

### App.js Requirements:
- [ ] Import all 4+ components
- [ ] Display each component with different props (at least 2 instances each)
- [ ] Organized layout with section headings
- [ ] Clean, readable code

### Technical Requirements:
- [ ] Each component in its own file
- [ ] Destructured props (not `props.name`)
- [ ] `key` prop on all `.map()` list items
- [ ] Proper import/export syntax
- [ ] No console errors

---

## 🚀 GETTING STARTED

```bash
# Create new React app (if not already created)
npx create-react-app lab-17-component-gallery
cd lab-17-component-gallery
npm start
```

### File Structure:
```
src/
├── App.js           ← Main (import and display components)
├── App.css          ← Styles
├── UserCard.js      ← Component 1
├── ProgressBar.js   ← Component 2
├── Badge.js         ← Component 3
├── StatCard.js      ← Component 4
└── index.js         ← Entry (don't modify)
```

---

## 💡 STARTER CODE

### App.js (starter):
```jsx
import React from 'react';
import './App.css';
// TODO: Import your components here

function App() {
  return (
    <div className="App">
      <h1>⚛️ React Component Gallery</h1>

      {/* Section 1: User Cards */}
      <section>
        <h2>User Cards</h2>
        {/* TODO: Add UserCard components with props */}
      </section>

      {/* Section 2: Progress Bars */}
      <section>
        <h2>Progress Bars</h2>
        {/* TODO: Add ProgressBar components with props */}
      </section>

      {/* Section 3: Badges */}
      <section>
        <h2>Badges</h2>
        {/* TODO: Add Badge components with props */}
      </section>

      {/* Section 4: Stat Cards */}
      <section>
        <h2>Statistics</h2>
        {/* TODO: Add StatCard components with props */}
      </section>
    </div>
  );
}

export default App;
```

### UserCard.js (starter):
```jsx
function UserCard({ name, bio, avatar, skills }) {
  return (
    <div className="user-card">
      {/* TODO: Add avatar image */}
      {/* TODO: Add name as h3 */}
      {/* TODO: Add bio as paragraph */}
      {/* TODO: Map over skills array and render badges */}
    </div>
  );
}

export default UserCard;
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] 4+ components created in separate files
- [ ] Each component accepts and uses props
- [ ] Props are destructured
- [ ] Lists use `.map()` with `key` prop
- [ ] App.js imports and displays all components
- [ ] Multiple instances of each component (different props)
- [ ] No console errors or warnings
- [ ] Code is clean and well-organized

---

## 🏆 BONUS CHALLENGES

- [ ] Add CSS styling (use App.css or inline styles)
- [ ] Create a 5th component of your choice
- [ ] Add conditional rendering (e.g., "Online" badge vs "Offline")
- [ ] Make the gallery responsive
- [ ] Add hover effects with CSS

---

## 📤 SUBMISSION

```
LAB-17 Submission
Name: [Your Name]
GitHub: [Repository URL]
Screenshot: [Attach screenshot of running app]
Components Built: ✅ UserCard ✅ ProgressBar ✅ Badge ✅ StatCard
```

---

## 💡 HINTS

**Component structure:**
```jsx
function ComponentName({ prop1, prop2 }) {
  return (
    <div>
      <h3>{prop1}</h3>
      <p>{prop2}</p>
    </div>
  );
}
export default ComponentName;
```

**Inline styles:**
```jsx
<div style={{ width: `${percentage}%`, backgroundColor: color }}>
```

**Default props:**
```jsx
function Badge({ text, type = 'info' }) { ... }
```
