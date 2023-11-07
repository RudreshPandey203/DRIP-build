import './App.css';
import Navbar from './component/MyNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyHome  from './component/MyHome';
import Shop from './component/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<MyHome/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
