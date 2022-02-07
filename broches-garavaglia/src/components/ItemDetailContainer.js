import { useEffect, useState } from "react";
import { detalle } from "./helpers/Promise";
import ItemDetail from "./ItemDetail";
import Item from "./ItemDetail";

const ItemDetailContainer = () => {
    
    const [selectedItem, setSelectedItem] = useState(null)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () =>{
        try {
            const result = await detalle
            setProducts(result)
        } catch (error){
            console.log({ error })
        } finally {
            setLoading(false)
            console.log("Finalizacion del consumo de la API")
        }
    }
    
    if(loading){
        return <h1>Cargando.....</h1>
    }
    
    return (
        <div>
            {/* <h1>Lista de productos</h1>
            <h3>Producto seleccionado</h3>
            <p>ID: {selectedItem && selectedItem.id}</p>
            <p>Producto: {selectedItem && selectedItem.name}</p>
            <p>Precio: {selectedItem && selectedItem.price}</p>
            <p>Cantidad Seleccionada: {selectedItem && selectedItem.stock}</p>
            <hr/> */}

            <ItemDetail prod = {products}/>
        </div>
    );
};

export default ItemDetailContainer;