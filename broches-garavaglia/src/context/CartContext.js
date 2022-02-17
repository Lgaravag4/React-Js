import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [items, setItems] = useState ([])

    const addItem = (currentItem, count) => {
        const indice = isInCart(currentItem)

        if (indice === -1){
            setItems([...items, currentItem])
        } else{
            let updateCard = [...items]
            updateCard[indice].count = count
            setItems(updateCard)
        }
    }

    const isInCart = (itemNuevo) => {
        const item = items.find( item => item.id === itemNuevo.id)
        return items.indexOf(item)
    }
    return (
        <CartContext.Provider value={{items,addItem}}>
            {children}
        </CartContext.Provider>
    )
}
