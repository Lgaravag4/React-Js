import Item from "./Item"
import useProducts from "./hooks/useProducts";
import { useParams } from "react-router-dom";

const ItemList = () => {
    
    const {id}= useParams()
    const {products} = useProducts()
    const filterProducts = id ? products.filter(({category}) => category === id) : products

    return (
        <div style={{display: 'flex'}}>

            {   
                filterProducts.map((product) => <Item key={product.id} product={product}/>)
            }

        </div>
    )
}

export default ItemList