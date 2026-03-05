# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






<!-- ---------------------------- -->
What is JSX, and why is it used?
- What is the difference between State and Props?
- What is the useState hook, and how does it work?
- How can you share state between components in React?
- How is event handling done in React?

১. What is JSX, and why is it used?
JSX হলো JavaScript XML এর সংক্ষিপ্ত রূপ। এটি React এ ব্যবহৃত হয় HTML-এর মতো সিনট্যাক্স লিখার জন্য যা JavaScript-এ রেন্ডার হয়।
JSX ব্যবহার করে যাতে আমরা সহজে UI তৈরি করতে পারি.
২. What is the difference between State and Props?
State: মাধামে Component-এর নিজস্ব ডেটা, আমারা সহজে পরিবর্তন করতে পারি সময় সাথে ।
Props: Parent থেকে child component-এ ডেটা পাঠানোর জন্য ব্যবহার করি আমরা।

৩. What is the useState hook, and how does it work?
useState হলো React-এর একটি Hook যা component-এর state declare করতে সাহায্য করে। এটি দুটি value দেয়: current state এবং state update করার function।
৪. How can you share state between components in React?

Lifting state up: Parent component-এ state রাখো, child-এ props দিয়ে পাঠাও।
Context API: Global state তৈরি করতে ব্যবহার হয়।
State management library: Redux বা Zustand দিয়ে complex state share করা যায়।
৫.How is event handling done in React?
React-এ event handling করা হয় JSX-এর মধ্যে function attach করে। Event names camelCase এ লিখতে হয়।