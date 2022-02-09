import Item from "./Item"
import useProducts from "./hooks/useProducts";
import { useParams } from "react-router-dom";

const ItemList = () => {
    
    const {id}= useParams()
    const {products} = useProducts()
    const filterProducts = products.filter(({category}) => category === id)

    return (
        <div style={{display: 'flex'}}>

            {!id && products.map((product) =>{
                return <Item key={product.id} {...product}/>
            })}
            {id && filterProducts.map((product) =>{
                return <Item key={product.id} {...product}/>
            })}
        </div>
    )
}

export default ItemList