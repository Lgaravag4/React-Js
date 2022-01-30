import React, {useState} from "react";

const ItemCounter = ({stock}) => {

    const [counter, setCounter] = useState(0);
    
    const minusCounter = () => {
        if (counter <=0) return;
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
                <button onClick={plusCounter}>+</button>
            </div>
            <button >Agregar</button>

        </>
    );
};

export default ItemCounter;
