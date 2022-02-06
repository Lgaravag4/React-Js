import { useEffect, useState } from "react";
import BsSpinner from "./BsSpinner";
import { productsAPI } from "./helpers/Promise";
import Item from "./Item";
import ItemList from "./ItemList"


const ItemListContainer = ({greeting}) => {
    
    const [selectedItem, setSelectedItem] = useState(null)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () =>{
        try {
            const result = await productsAPI
            setProducts(result)
        } catch (error){
            console.log({ error })
        } finally {
            setLoading(false)
            console.log("Finalizacion del consumo de la API")
        }
    }
    
    if(loading){
        return <BsSpinner/>
    }

    return (
        <div>
            <div style={{ textAling: 'center'}}>
                <h1>{greeting}</h1>
            </div>
            <h1>Lista de productos</h1>
            <h3>Producto seleccionado</h3>
            <p>ID: {selectedItem && selectedItem.id}</p>
            <p>Producto: {selectedItem && selectedItem.name}</p>
            <p>Precio: {selectedItem && selectedItem.price}</p>
            <p>Cantidad Seleccionada: {selectedItem && selectedItem.stock}</p>
            <hr/>

            <ItemList productos = {products} />
        </div>

    );
};

export default ItemListContainer;
