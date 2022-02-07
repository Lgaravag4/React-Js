import Item from "./Item"

const ItemList = ({productos}) => {

    return (
        <div style={{display: 'flex'}}>

        {
            productos?.map((prod) => <Item key={prod.id} prod={prod}/>)
        }
        </div>
    )
}

export default ItemList