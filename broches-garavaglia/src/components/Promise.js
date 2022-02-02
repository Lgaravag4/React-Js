import { products } from "../assets/products/products";

export const productsAPI = new Promise ((resolve, reject) =>{
    setTimeout(() =>{
        resolve(products)
    }, 2000)
})

