import { products } from "../../assets/products/products";

export const productsAPI = new Promise ((resolve, reject) =>{
    setTimeout(() =>{
        resolve(products)
    }, 2000)
})

export const detalle = new Promise ((resolve, reject) =>{
    setTimeout(() =>{
        resolve(products[1])
    }, 2000)
})