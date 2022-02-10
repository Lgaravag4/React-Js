//import { useState } from "react";
//import BsSpinner from "./BsSpinner";
import ItemList from "./ItemList"



const ItemListContainer = ({greeting}) => {
    
    // const [loading, setLoading] = useState(true)

    
    // if(loading){
    //     return <BsSpinner/>
    // }

    return (
        <div>
            <div style={{ textAling: 'center'}}>
                <h1>{greeting}</h1>
            </div>

            <ItemList />
        </div>

    );
};

export default ItemListContainer;
