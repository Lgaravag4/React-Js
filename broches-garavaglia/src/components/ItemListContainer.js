import ItemList from "./ItemList"



const ItemListContainer = ({greeting}) => {
    
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
