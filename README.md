# DevStack Builder 🚀

DevStack Builder is a modern, responsive web application designed for developers to explore various technologies, compare their specifications, and dynamically build their customized development stack.

---

## 🛠️ Technologies Used

- **React.js** (v18+)
- **TypeScript**
- **Vite**
- **Tailwind CSS** (v4)
- **React-Toastify**
- **Lucide React** (Icons)

---

## ✨ Key Features

1. **Interactive Stack Builder:** Dynamically select and add technologies across Frontend, Backend, Database, and DevOps categories into a dedicated "Your Stack" sidebar with interactive counter updates.
2. **Duplicate Safeguards & Toast Notifications:** Built-in validation prevents duplicate items from being added twice, triggering instant, styled toast notifications powered by `react-toastify`.
3. **Asynchronous Data Fetching & Loading State:** Fetches technology data dynamically via `useEffect` from a local JSON dataset, featuring an animated loading spinner state while data resolves.

---

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like elements directly within JavaScript code. React uses JSX to make component structures intuitive, highly readable, and expressive.

### 2. What is the difference between props and state?
- **Props:** Immutable, read-only data passed from a parent component down to a child component to configure it.
- **State:** Mutable, component-managed internal data that can change over time based on user interactions and automatically triggers component re-renders when updated.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional React components to track and manage local state. In this project, `useState` is used in `App.tsx` to maintain the list of selected technologies (`selectedTechs`) and to handle the initial data loading spinner status (`loading`).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook enables functional components to perform side-effects such as data fetching, subscription setups, or manual DOM manipulations. In this project, `useEffect` was required to asynchronously fetch the technology dataset from the JSON file when the application mounts.

### 5. Why does every item in a .map() list need a unique key prop?
React uses unique `key` props during DOM reconciliation to efficiently track which items in a rendered list have changed, been inserted, or removed. Supplying unique keys prevents unnecessary re-rendering and maintains optimal UI performance.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is the practice of rendering specific UI components or text based on evaluated conditions or state variables.

In `Stack.tsx`, conditional rendering is used to show an empty state message when no item is selected, and render the list of items when technologies are present:

```tsx
{count === 0 ? (
  <p className="text-xs text-gray-400">Your stack is empty.</p>
) : (
  <div className="flex flex-col gap-3">
    {/* Rendered stack items */}
  </div>
)}
