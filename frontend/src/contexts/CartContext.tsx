import {createContext, SetStateAction, useState} from "react";

export const CartContext = createContext(null);


export const CartProvider = ({children}) => {
    let [cart, setCart] = useState([])
    const addItem = (item: SetStateAction<never[]>) => {
        setCart((prevState) => [...prevState, item])
    }

    const discardItem = (itemId: number) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    }

    return <CartContext.Provider value={{cart, setCart, addItem, discardItem}}>{children}</CartContext.Provider>

}