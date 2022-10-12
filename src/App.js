import './App.css';
import Navbar from "./components/navbar"
import Home from "./home"
import Product from "./produt"
import Gallery from "./gallery"
import Shop from "./shop"
import Register from "./register"
import Cart from "./cart"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
<>
<Router>
  
    <Navbar/>
    <Routes>
     
   <Route exact path="/"  element={<Home/>}/>
   <Route exact path="/product" element={<Product/>}/>
   <Route exact path="/register" element={<Register/> }/>
   <Route exact path="/shop" element={<Shop/>}/>
   <Route exact path="/gallery" element={<Gallery/>}/>
   <Route exact path="/cart" element={<Cart/>}/>


 
    </Routes>  
    
 
   </Router>
</>

  );
}

export default App;
