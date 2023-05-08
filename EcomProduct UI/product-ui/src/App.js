import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { AddProduct } from './component/AddProduct';
import { Routes, Route } from 'react-router-dom';
import EditProduct from './component/EditProduct';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addProduct' element={<AddProduct/>} />\
        <Route path='/editProduct/:id' element={<EditProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
