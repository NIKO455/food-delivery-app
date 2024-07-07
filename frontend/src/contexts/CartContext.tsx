import {createContext, SetStateAction, useState} from "react";

export const CartContext = createContext(null);


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item: SetStateAction<never[]>) => {
        console.log(cart)
        setCart((prevState) => [...prevState, item])
    }


    return <CartContext.Provider value={{cart, setCart, addItem}}>{children}</CartContext.Provider>

}