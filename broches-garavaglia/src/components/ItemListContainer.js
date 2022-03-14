import ItemList from "./ItemList"
import BsSpinner from "./BsSpinner";
import useProducts from "./hooks/useProducts"
import { useEffect, useState } from "react";



const ItemListContainer = ({greeting}) => {
    
    const [loading, setLoading] = useState(true)
    const {products} = useProducts ()

    useEffect(() => {
        if (products.length > 0) {
            setLoading(false)
        }
    }, [products])

    return (
        <div>
            <div style={{ textAling: 'center'}}>
                <h1>{greeting}</h1>
            </div>
            
            { loading ? 
                <BsSpinner/> : <ItemList /> }
            
        </div>

    );
};

export default ItemListContainer;
