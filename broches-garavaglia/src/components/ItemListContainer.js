import Item from "./Item";


const products = [
    {id:"1", name:"Broches", price: "13" },
    {id:"2", name:"Trapo", price: "4345" },
    {id:"3", name:"Sopapa", price: "1235" },
    {id:"4", name:"Rastrillo", price: "6544" },
    {id:"5", name:"Secador", price: "6457" },
    {id:"6", name:"Pala", price: "235" }

];

const ItemListContainer = () => {
    return (
        <div>
            
            {products.map(({id, name, price }) => (
                <Item
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    
                
                />

            ))}
        </div>

    );
};

export default ItemListContainer;
