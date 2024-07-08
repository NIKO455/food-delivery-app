import {createContext, SetStateAction, useState} from "react";

export const CartContext = createContext(null);


// @ts-ignore
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addItem = (item: SetStateAction<never[]>) => {
        // @ts-ignore
        setCart((prevState) => [...prevState, item])
    }


    // @ts-ignore
    return <CartContext.Provider value={{cart, setCart, addItem}}>{children}</CartContext.Provider>

}