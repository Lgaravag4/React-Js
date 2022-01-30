import ItemCounter from "./ItemCounter";

const Item = ({id, name, price}) => {
  return <div>
      <h2>Nombre: {name}</h2>
      <h2>Precio: {price}</h2>
      <hr/>
      <ItemCounter stock={10}/>
  </div>;
};

export default Item;
