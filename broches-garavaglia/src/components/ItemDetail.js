import { useState } from "react";
import ItemCounter from "./ItemCounter";
import { Button, Card } from "react-bootstrap";

// const ItemDetail = ({id, name, price, stock, imagen, setSelectedItem}) => {
  
//   return (
//     <>
//     <div>
       
//         <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={imagen} />
//             <Card.Body>
//                 <Card.Title>{name}</Card.Title>
//                 <Card.Text>$ {price}</Card.Text>
//                 <ItemCounter stock={stock} setStockSelected={setStockSelected}/>
//                 <button /*onClick={selectItem}*/>Seleccionar Producto</button>
//             </Card.Body>
//         </Card>
//     </div>
//     <hr/>
//   </>
//   )
// };

const ItemDetail = ({prod}) => {
  
  const{imagen, name, price, stock} = prod
  const[stockSelected, setStockSelected] = useState(0)
  
  
  return (
  <>
    {
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
               <ItemCounter stock={stock} setStockSelected={setStockSelected}/>
                <button>Seleccionar Producto</button>
        </Card.Body>
      </Card>
    }
  </>
  )
};

export default ItemDetail;