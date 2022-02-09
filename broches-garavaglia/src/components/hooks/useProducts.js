import { useState, useEffect } from "react";
import { productsAPI } from "../helpers/Promise";

const useProducts = () => {

    const [products, setProducts] = useState ([])

    useEffect(() => {
        getProducts()
    },[])

    const getProducts = async () => {
        try {
            const result = await productsAPI
            setProducts(result)
        } catch (error){
            console.log({error})
        } finally {
            console.log("Finalizacion consumo API productsAPI")
        }
    }

    return {
        products,
    }
}

export default useProducts;