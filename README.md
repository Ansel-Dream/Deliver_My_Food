# 📚 Food-Cart

Welcome to the **Food Delivery System** — where your cravings meet convenience. This is the frontend of the Food Delivery platform, built using **React.js**.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🛠️ Technologies Used

<img alt="React" src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" /> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" /> <img alt="Vite" src="https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E" />
<img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" /> <img alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" /> <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" />

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Features

- Browse restaurants and menus in your city
- Smart search & filters (by cuisine, price, ratings, delivery time)
- Add to cart & customize meals (extra toppings, spice level, drinks)
- Secure online payments (Credit/Debit Card, Easypaisa, JazzCash, COD)
- Real-time order tracking (from restaurant to doorstep)
- Live updates via WebSockets (order status, delivery ETA)
- Favorite restaurants & reorder history
- Discount coupons, deals & loyalty rewards
- Push notifications for order status and promotions
- Responsive design for mobile and desktop users
- Rider tracking & contactless delivery option

---

## Getting Started

This project (**deliver_my_food**) is built with **React.js, Vite, TailwindCSS, Redux Toolkit, Axios, and more**.  
Follow the steps below to set up and run the project locally.

---

## 1️ Install Dependencies

To set up and run the project locally:

```bash
npm install
```

Or if you are using Yarn then:

```bash
yarn install
```

Installs all required dependencies.

---

## Install Dependencies Individually

---

```bash
npm install @headlessui/react@2.2.9
```

yarn

```bash
yarn add @headlessui/react@2.2.9
```

---

---

```bash
npm install @reduxjs/toolkit@2.9.0
```

yarn

```bash
yarn add @reduxjs/toolkit@2.9.0
```

---

---

```bash
npm install @tailwindcss/vite@4.1.14
```

yarn

```bash
yarn add @tailwindcss/vite@4.1.14
```

---

**axios**

```bash
npm install axios@1.12.2
```

yarn

```bash
yarn add axios@1.12.2
```

---

**framer-motion**

```bash
npm install framer-motion@12.23.22
```

yarn

```bash
yarn add framer-motion@12.23.22
```

---

**lucide-react**

```bash
npm install lucide-react@0.544.0
```

yarn

```bash
yarn add lucide-react@0.544.0
```

---

**react**

```bash
npm install react@19.2.0
```

yarn

```bash
yarn add react@19.2.0
```

---

**react-dom**

```bash
npm install react-dom@19.2.0
```

yarn

```bash
yarn add react-dom@19.2.0
```

---

**react-redux**

```bash
npm install react-redux@9.2.0
```

yarn

```bash
yarn add react-redux@9.2.0
```

---

**react-router-dom**

```bash
npm install react-router-dom@7.9.3
```

yarn

```bash
yarn add react-router-dom@7.9.3
```

---

**react-scroll**

```bash
npm install react-scroll@1.9.3
```

yarn

```bash
yarn add react-scroll@1.9.3
```

---

**react-toastify**

```bash
npm install react-toastify@11.0.5
```

yarn

```bash
yarn add react-toastify@11.0.5
```

---

**tailwindcss**

```bash
npm install tailwindcss@4.1.14
```

yarn

```bash
yarn add tailwindcss@4.1.14
```

---

## Important

Before pushing code to GitHub, always run:

```bash
npm run build
```

yarn run build

```bash
yarn run build
```

or simply

```bash
npm build
```

yarn

```bash
yarn build
```

## Locally preview the production build before deployment.

## Importantt Note

- Always run **`npm run build`** or **`yarn build`** before pushing code to GitHub or deploying.
- This ensures optimized and production-ready files, & also ensures the build process completes without errors, which may not always appear in the console during development. This is especially important when working with CI/CD pipelines.

---

And please don't forgot to update readme.md file

## 📁 Project Structure

deliver_my_food
├── .git
│ ├── COMMIT_EDITMSG
│ ├── FETCH_HEAD
│ ├── HEAD
│ ├── config
│ ├── description
│ ├── hooks
│ │ ├── applypatch-msg.sample
│ │ ├── commit-msg.sample
│ │ ├── fsmonitor-watchman.sample
│ │ ├── post-update.sample
│ │ ├── pre-applypatch.sample
│ │ ├── pre-commit.sample
│ │ ├── pre-merge-commit.sample
│ │ ├── pre-push.sample
│ │ ├── pre-rebase.sample
│ │ ├── pre-receive.sample
│ │ ├── prepare-commit-msg.sample
│ │ ├── push-to-checkout.sample
│ │ ├── sendemail-validate.sample
│ │ └── update.sample
│ ├── index
│ ├── info
│ │ └── exclude
│ ├── logs
│ │ ├── HEAD
│ │ └── refs
│ │ ├── heads
│ │ │ └── main
│ │ └── remotes
│ │ └── origin
│ │ ├── HEAD
│ │ └── main
├── .gitignore
├── README.md
├── docs.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│ └── vite.svg
├── src
│ ├── App.css
│ ├── App.jsx
│ ├── Redux_State
│ │ ├── Auth
│ │ │ └── slice.jsx
│ │ ├── Contact
│ │ │ ├── dataSlice.jsx
│ │ │ └── slice.jsx
│ │ ├── hooks.jsx
│ │ └── store.jsx
│ ├── assets
│ │ └── react.svg
│ ├── hooks
│ │ └── useCountdown.jsx
│ ├── index.css
│ ├── layouts
│ │ └── BasicLayout.jsx
│ ├── main.jsx
│ ├── pages
│ │ └── Home.jsx
│ ├── router
│ │ ├── Router.jsx
│ │ └── Routes
│ │ └── Routes.jsx
│ └── utils
│ ├── fetchApiMethods.jsx
│ └── tokenMethods.jsx
└── vite.config.js
