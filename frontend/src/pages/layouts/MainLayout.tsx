import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </>
    );
};
