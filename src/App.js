import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Bars/NavBar';
import SideBar from './Bars/SideBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import SaleListContainer from './SaleListContainer/SaleListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import RightBar from './Bars/RightBar';
import Contact from './Extras/Contact';
import Cart from './Cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <SideBar />
        <NavBar />
        <Routes>
          <Route exact path='/' element={<SaleListContainer />} />
          <Route exact path='/products' element={<ItemListContainer/>} />
          <Route exact path='/products/:categoryID' element={<ItemListContainer/>} />
          <Route exact path='/detail' element={<ItemDetailContainer/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/cart' element={<Cart/>} />
        </Routes>
        <RightBar />
      </div>
    </BrowserRouter>
  )
}

export default App;
