import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../../pages/auth";
import { Catalog } from "../../pages/login";
import { Landing } from "../../pages/landing";
import App from "../App";
import LoginForm from "../../features/auth-form/login/ui/LoginForm";
import RegisterForm from "../../features/auth-form/register/ui/RegisterForm";
import AuthRoute from "./AuthRoute";
import ProfilePage from "../../pages/profile/ui/ProfilePage";
import { AddBookPage } from "@/pages/adding-book/ui/AddBookPage";

export const router = createBrowserRouter([
    { path: '/' , element: <App /> , children: [
        { index: true, element: <Landing />},
        { path: '/auth' , element: <AuthPage /> , children: [
            { index: true, element: <LoginForm />},
            { path: 'login' , element: <LoginForm />},
            { path: 'sign-up' , element: <RegisterForm />}
        ]},
        { path: '/profile' , element: <AuthRoute><ProfilePage/></AuthRoute>},
        { path: '/catalog' , element: <Catalog />},
        { path: '/adding-book' , element: <AddBookPage />}
    ],}
])