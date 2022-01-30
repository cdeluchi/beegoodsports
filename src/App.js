import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Product from "./components/Product";
import Tags from "./components/Tags"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home/>}></Route>
      <Route path='/collection' exact element={<Collection />}></Route>
      <Route path='/collection/:itemId' element={<Product />}></Route>
      <Route path='/tags' exact element={<Tags />}></Route>
      <Route path='/cart' element={<Cart/>}> </Route>
      </Routes>
    </Router>
  );
}

export default App;

