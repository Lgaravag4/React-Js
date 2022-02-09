import { Navbar } from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ItemDetailContainer} from "./ItemDetailContainer";
import {ItemListContainer} from "./ItemListContainer";
import {NotFound} from "./NotFound"


const Routes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="item/:id" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
};

export default Routes;
