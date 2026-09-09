# TICKET-25: Resource Manager with Mock REST API (JSON Server)

**Assigned:** Week 5 Thursday  
**Due:** Week 6 Monday, 9:00 AM  
**Points:** 12.5  
**Type:** Individual Task  

---

## 🎯 OBJECTIVE

Build a production-ready **Personal Book Library** or **Course Tracker** application that performs full persistent CRUD operations against a mock backend powered by **JSON Server**.

---

## 📋 REQUIREMENTS

### 1. Mock Backend Configuration
- [ ] Create a `db.json` file at the root with a `resources` (or `books`) endpoint.
- [ ] Include at least 5 seed entries with diverse fields:
  - `id` (auto-managed string)
  - `title` (string)
  - `author` or `category` (string)
  - `rating` (number 1–5)
  - `status` (`"Read"` / `"Reading"` / `"Want to Read"`, or boolean `completed`)
- [ ] Configure `package.json` with a `"server"` script: `"json-server db.json --port 5000"`.

### 2. Read (GET)
- [ ] Fetch and display all entries on initial load using `useEffect`.
- [ ] Show a pleasant loading skeleton or spinner while data is fetching.
- [ ] Provide user-friendly feedback if the backend is unreachable.

### 3. Create (POST)
- [ ] Modal or expandable form with controlled inputs and validation.
- [ ] Form fields: Title, Author/Category, Rating, Status.
- [ ] Prevent blank submissions and display validation errors.
- [ ] Successfully persist new entries to `db.json` and immediately show in the UI.

### 4. Update (PATCH / PUT)
- [ ] Ability to edit status or rating directly from the item card/row.
- [ ] Send `PATCH` request to persist the change.
- [ ] Reflect changes instantaneously without requiring a full page reload.

### 5. Delete (DELETE)
- [ ] Delete button with a confirmation safeguard (`confirm()` or modal).
- [ ] Send `DELETE` request to remove the entry from `db.json`.
- [ ] Animate or immediately remove the item from the displayed list.

### 6. Search & Filters (Bonus)
- [ ] Real-time search query using JSON Server's `?q=` endpoint.
- [ ] Filter by status using JSON Server's query parameters (e.g. `?status=Read`).

---

## ✅ ACCEPTANCE CRITERIA

- [ ] JSON Server starts seamlessly with `npm run server` on port 5000.
- [ ] React frontend runs concurrently without port collisions.
- [ ] Full CRUD cycle operational: items can be Created, Read, Updated, and Deleted.
- [ ] Changes persist across browser refreshes.
- [ ] All network errors are handled gracefully without crashing the app.
- [ ] Clean, semantic React components and separation of concerns.

---

## 📤 SUBMISSION

```
TICKET-25 Submission
Name: [Your Name]
GitHub: [Repository URL]
Screenshot: [Show app with items, add form, and console network requests]
Features: ✅ db.json Config ✅ GET on Mount ✅ POST Form ✅ PATCH Update ✅ DELETE Safeguard
Bonus: ⬜ Search (?q=) / ⬜ Status Filter
```
