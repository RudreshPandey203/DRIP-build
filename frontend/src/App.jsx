import './App.css';
import Navbar from './component/MyNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyHome from './component/MyHome';
import Shop from './component/Shop';
import ProductDetails from './component/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<MyHome />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/product/' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
