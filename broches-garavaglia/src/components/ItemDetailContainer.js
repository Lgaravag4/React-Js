import { useEffect, useState } from "react";
import useProducts from "./hooks/useProducts"
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import ItemCounter from "./ItemCounter";


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
        }
    }, [products])
        
    if(loading){
        return <h1>Cargando.....</h1>
    }
    
    return (
        <>
        {
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={selectedItem && selectedItem.imagen} />
            <Card.Body>
              <Card.Title>{selectedItem && selectedItem.name}</Card.Title>
              <Card.Text>$ {selectedItem && selectedItem.price}</Card.Text>
                   <ItemCounter stock={selectedItem && selectedItem.stock} setStockSelected={setStockSelected}/>
                    <Button> Seleccionar Producto </Button>
            </Card.Body>
          </Card>
        }
      </>
    );
};

export default ItemDetailContainer;