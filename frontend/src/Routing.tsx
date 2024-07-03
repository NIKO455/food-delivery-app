import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import {MainLayout} from "./pages/layouts/MainLayout.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {RegisterPage} from "./pages/RegisterPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "register",
                element: <RegisterPage/>
            },
        ],
    },
]);

export default router;
