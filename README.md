# Dev Stack Project

Dev Stack is a responsive React and TypeScript web application that helps developers explore modern technologies and build their own personalized development stack. Users can browse technologies, view their category, difficulty, and rating, and add or remove technologies from their stack.

## Technologies

- React + TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON data
- Git & GitHub


## Features

1. Responsive Dev Stack landing page.
2. Technology cards loaded from a JSON file and added to a personal stack.
3. Toast notifications for add, duplicate, remove and remove-all actions.

## React Questions

### 1. What is JSX, and why is it used in React?
JSX lets us write HTML-like UI inside JavaScript/TypeScript. It makes React components easier to read and build.

### 2. What is the difference between props and state?
Props are data passed from a parent to a child. State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` creates component state. Here it stores the technologies selected in `stack` and controls the mobile menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` is normally used for side effects such as fetching data. In this project the JSON is loaded with an async Promise function and React 19 `use()` + `Suspense`, so a `useEffect` is not needed for the actual fetch.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the key to identify which list item changed, was added, or was removed. A stable unique key helps React update the list correctly.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different UI depending on a condition. For example, the stack shows an empty message when `stack.length === 0`, otherwise it shows selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data and functions through props. A child calls a function prop when it needs to send an action back to the parent.




