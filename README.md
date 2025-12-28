# 📚 Mini Library

**Mini Library** is a single-page web application for managing a book catalog with user authentication.  
The project is built with **React + TypeScript**, uses **React Router** for navigation, **Firebase** for backend services, and **Tailwind CSS** for styling. The app is bundled and served with **Vite**.

---

## 🚀 Features

- 🔐 User authentication and registration
- 👤 User profile with protected routes
- 📖 Book catalog browsing
- ➕ Add new books
- 🌐 Client-side routing (React Router)
- 🎨 Responsive UI with Tailwind CSS
- ⚡ Fast development and build process using Vite

---

## 🛠 Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **React Router v7**
- **Firebase**
- **Tailwind CSS**
- **React Hook Form**
- **ESLint**

---

## 📂 Project Structure (simplified)

```txt
src/
├── app/
│   ├── App.tsx
│   └── provider/
│       └── router.tsx
├── pages/
│   ├── landing/
│   ├── auth/
│   ├── profile/
│   ├── login/
│   └── adding-book/
├── features/
│   └── auth-form/
│       ├── login/
│       └── register/
├── main.tsx
├── index.ts
└── index.css
```

⚙️ Installation & Setup
Clone the repository
git clone https://github.com/your-username/mini-library.git
cd mini-library

Install dependencies
npm install

Start development server
npm run dev

Build for production
npm run build

Preview production build
npm run preview

🔐 Firebase Configuration

The project uses Firebase.

Add your Firebase configuration in main.tsx:

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};


⚠️ Do not commit real Firebase credentials to a public repository.
Use environment variables for production environments.

🧭 Application Routes
Route	Description
/	Landing page
/auth	Authentication page
/auth/login	Login form
/auth/sign-up	Registration form
/profile	User profile (protected)
/catalog	Book catalog
/adding-book	Add new book
🔒 Protected Routes

The /profile route is protected using AuthRoute, which restricts access to authenticated users only.

🧪 Linting
npm run lint

📦 Dependencies

Main dependencies include:

react, react-dom

react-router, react-router-dom

firebase

tailwindcss

All dependencies are listed in package.json.

📌 Future Improvements

 Book search and filtering

 User roles (admin / user)

 Favorites or bookmarks

 Pagination improvements

 Unit and integration tests

👤 Author

Created as a learning / pet project.

