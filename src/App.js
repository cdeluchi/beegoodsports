import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Collection from "./components/Collection";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from "./components/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home/>}></Route>
      <Route path='/collection' exact element={<Collection />}></Route>
      <Route path='/collection/:id' element={<Product/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

