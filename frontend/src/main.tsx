import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './Routing.tsx'
// @ts-ignore
import {CartProvider} from './contexts/CartContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CartProvider>
            <RouterProvider router={router}/>
        </CartProvider>
    </React.StrictMode>,
)
