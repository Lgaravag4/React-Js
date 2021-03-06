import { useState, useEffect } from "react";
import { collection, getDocs} from 'firebase/firestore'
import {db} from '../../index'

const useProducts = () => {

    const [products, setProducts] = useState ([])

    useEffect(() => {
        getProducts()
    },[])

    
    const getProducts = () => {
        const result = collection(db, 'items')
        getDocs (result)
        .then((prod) => {
            const items = (prod.docs.map((prod) => ({id:prod.id,...prod.data()})))
            setProducts(items)
        })
        .finally(() => console.log("Finalizacion consumo API productsAPI"))
    }

    return {
        products,
    }
}

export default useProducts;