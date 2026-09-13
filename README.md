# DevStack Builder 🚀

DevStack Builder is an interactive web application designed to help developers explore popular technologies, evaluate their specs, and build customized development stacks in real time.

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

1. **Interactive Stack Construction:** Easily add or remove frontend, backend, database, and dev tools to build a custom tech stack with instant UI counters.
2. **Duplicate Prevention & Smart Toast Alerts:** Built-in safeguards prevent duplicate technology additions while providing informative, styled toast notifications using React-Toastify.
3. **Asynchronous Data Fetching & Loading States:** Dynamically fetches tech details from a JSON dataset using `useEffect` with an integrated loading spinner for optimized user experience.

---

## 📚 React Q&A Section

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like markup inside JavaScript code, making UI component structures clearer and much easier to read and maintain.

### 2. What is the difference between props and state?
- **Props:** Read-only data passed down from a parent component to a child component.
- **State:** Internal data managed within a component that can change over time and trigger a UI re-render.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to store and manage local state. In this project, it is used in `App.tsx` to store the selected technologies (`selectedTechs`) and track the loading status (`loading`).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in React components (such as fetching data or setting up timers). In this project, it was used to asynchronously fetch the local `technologies.json` file when the application mounts.

### 5. Why does every item in a .map() list need a unique key prop?
React relies on unique `key` props to track, identify, and re-render only the list items that have changed, been added, or removed, ensuring optimal DOM rendering performance.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI elements based on specific conditions or state. 

Used in `Stack.tsx` to render an empty stack message when `count === 0`, and the selected tech list when items exist.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** Data is passed down using **props** (e.g., `<TechnologyCard tech={tech} />`).
- **Child to Parent:** The parent passes a callback function down as a prop, and the child calls that function with data as arguments (e.g., `onSelect(tech)`).
