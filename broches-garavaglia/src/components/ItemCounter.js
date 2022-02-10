import { Button } from "react-bootstrap";
import React, {useEffect, useState} from "react";

const ItemCounter = ({stock, setStockSelected, onAdd}) => {

    const [counter, setCounter] = useState(1);
    
    useEffect(() => {
        setStockSelected(counter)
    },[counter])
    
    const minusCounter = () => {
        if (counter <=1) return;
        setCounter (counter -1);
    }

    const plusCounter = () => {
        if (counter >= stock) return;
        setCounter ( counter + 1);
    }
  return(
        <>
            <div>
                <button onClick={minusCounter}>-</button>
                <span>{counter}</span>
                <button onClick={plusCounter}>+</button><hr/>    
                <Button onClick={() => onAdd(counter)} disabled={stock<1 ? true : false}>Agregar al Carrito</Button>
            </div>
        </>
    );
};

export default ItemCounter;
