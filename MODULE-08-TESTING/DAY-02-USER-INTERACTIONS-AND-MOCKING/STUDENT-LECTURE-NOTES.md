# 📝 DAY 2: User Interactions & Mocking API Calls — Student Lecture Notes

**Name:** ___________________________  
**Date:** ___________________________  
**Topic:** `userEvent`, Form Testing, Async Queries (`findBy`), Mocking `fetch`

---

## 🎯 OBJECTIVES
- [ ] Understand why `@testing-library/user-event` is superior to legacy `fireEvent`
- [ ] Setup `userEvent` and properly `await` user interactions (typing, clicking)
- [ ] Master the 3 Query Families: `getBy*`, `queryBy*`, and `findBy*`
- [ ] Understand and eliminate the `act(...)` warning without manual `act()` wrappers
- [ ] Mock `global.fetch` with clean setup/teardown lifecycles (`beforeEach` / `afterEach`)
- [ ] Test controlled forms, error validation, and loading states

---

## 🖱️ `userEvent` VS `fireEvent`: THE GOLDEN PATTERN

Fill in the blanks:
- `fireEvent` is a legacy tool that dispatches _______________ DOM events. It does NOT simulate real user behavior.
- `userEvent` simulates realistic user actions: hovering, clicking, focusing, and keyboard events.

```javascript
test('user interaction example', async () => {
  // 1. ALWAYS initialize userEvent BEFORE render:
  const user = userEvent._______________();

  // 2. Render the component:
  render(<MyComponent />);

  // 3. ALWAYS await user actions:
  const input = screen.getByLabelText(/username/i);
  await user._______________(input, 'alex123');

  const button = screen.getByRole('button', { name: /submit/i });
  await user._______________(button);
});
```

> ❓ **Why MUST we use `await` with `user.type()` and `user.click()`?**  
> *Answer:* Because all `userEvent` methods in v14+ are _______________ and return Promises. Forgetting `await` causes assertions to run before the user finishes typing!

---

## 🧭 THE 3 QUERY FAMILIES DECISION TABLE

Fill in the table:

| Query Prefix | Synchronous or Async? | What happens if element is missing? | When to use? |
|--------------|-----------------------|-------------------------------------|--------------|
| **`getBy*`** | Synchronous | Throws an _______________ immediately | Elements that **must already exist** on screen |
| **`queryBy*`** | Synchronous | Returns `__________` | Exclusively for asserting an element is **NOT in the document** |
| **`findBy*`** | **Asynchronous** | Retries for 1000ms, then rejects | Elements that appear **after an API call or timer** |

---

## ⚠️ WHY DOES THE `act(...)` WARNING HAPPEN?

> *"Warning: An update to MyComponent inside a test was not wrapped in act(...)"*

**The Cause:**  
Your component initiated a background asynchronous operation (like `fetch()`). The test assertions ran immediately and finished, and **after** the test ended, `setUsers(data)` updated state!

**The Fix:**  
Never try to wrap your code in manual `act(() => ...)`.  
Instead, **await the element that appears when the state update finishes**:
```javascript
// Await the arrival of the fetched data:
const userCard = await screen.____________________('Amara Okafor');
expect(userCard).toBeInTheDocument();
```

---

## 🌐 CLEAN `global.fetch` MOCKING CHEAT SHEET

Fill in the blanks to mock an API request:

```javascript
describe('Async API Component', () => {
  beforeEach(() => {
    // 1. Create a fresh mock before each test:
    global.fetch = vi._______________();
  });

  afterEach(() => {
    // 2. Clean up mocks to prevent test pollution:
    vi._______________();
  });

  test('loads and displays products', async () => {
    // 3. Mock a successful JSON response:
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => [{ id: 1, title: 'Mechanical Keyboard' }]
    });

    render(<ProductList />);

    // Assert loading indicator appears:
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Await the mocked data to render on screen:
    const item = await screen.findByText(/mechanical keyboard/i);
    expect(item).toBeInTheDocument();

    // Assert loading indicator has disappeared:
    expect(screen._______________(/loading/i)).not.toBeInTheDocument();
  });
});
```

---

## 📊 KEY TAKEAWAYS

| Concept | Golden Rule |
|---------|-------------|
| **`userEvent.setup()`** | Always call *before* `render()` |
| **`await user.click(...)`** | Always `await` all user interaction calls |
| **`findByRole`** | Default choice for anything loaded from an API |
| **`queryByText`** | Default choice for checking an element is gone (`.not.toBeInTheDocument()`) |
| **`afterEach(vi.restoreAllMocks)`** | Prevents mock leakage between test cases |

---

## 🔗 RESOURCES
- [Testing Library: user-event API](https://testing-library.com/docs/user-event/setup)
- [Vitest: Mocking Functions](https://vitest.dev/api/mock.html)
