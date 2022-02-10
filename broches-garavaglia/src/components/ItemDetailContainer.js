import { useEffect, useState } from "react";
import useProducts from "./hooks/useProducts"
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import ItemCounter from "./ItemCounter";
import ItemDetail from "./ItemDetail";
import BsSpinner from "./BsSpinner";



const ItemDetailContainer = () => {
    
    const [selectedItem, setSelectedItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {products} = useProducts ()
    const {id} = useParams()
    const[stockSelected, setStockSelected] = useState(0)

    useEffect(() => {
        if (products.length > 0) {
            const selectedProduct = products.find((product) => product.id === id)
            setSelectedItem(selectedProduct)
            setLoading(false)
        }
    }, [products])
        
       
    return (
        <>
        { loading ? 
        <BsSpinner/> :
         <ItemDetail selectedItem={selectedItem} setStockSelected={setStockSelected}/>}
        
      </>
    );
};

export default ItemDetailContainer;