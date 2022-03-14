import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const Checkout = () => {
    const {items, clearCart}=useContext(CartContext)
    const {id} = useParams()

    const[buyer, setBuyer] = useState({
        name:'',
        phone:'',
        email:''

    })

    const handleChange = (e) =>  {
        const {name, value } = e.target
        setBuyer({...buyer, [name]: value})
    }

    const [orderId, setOrderId] = useState(null)

    const sendOrder = () => {
        const order={
            buyer,
            item: items,
            total: items.reduce((acum, item) => acum + (item.cantidad * item.price),0)
                       
        }

        const db = getFirestore()
        
        const orderCollection = collection(db, "orders")
        
        addDoc(orderCollection, order).then(({id}) => setOrderId(id))
        
        clearCart()
    }

    const updateOrder = () =>{
        const db = getFirestore()
        items.forEach(item => {
            const docRef = doc(db, "items", item.id)
            
            updateDoc(docRef, {stock:item.stock-item.cantidad})    
        })

    }

    return(
        <div>
            <hr/>
            <form>
                <label>Nombre</label>
                <input placeholder="name" name="name" onChange={handleChange}/>

                <label>Telefono</label>
                <input placeholder="phone" name="phone" onChange={handleChange} />

                <label>Email</label>
                <input placeholder="email" name="email" onChange={handleChange}/>

            </form>
            <br/>
            <Button onClick={() =>{sendOrder() ; updateOrder()}}>Enviar</Button>
        </div>
    )
}

export default Checkout