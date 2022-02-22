// https://github.com/abadevlopment/web-app-e-commerce

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/bar/SideBar';
import NavBar from './components/bar/NavBar'
import Start from './components/extras/Start';
import Contact from './components/extras/Contact';
import Cart from './components/cart/Cart';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer.js/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='main-screen' >
          <div className='lateral-section' >
            <SideBar />
          </div>
          <div className='main-section' >
            <div className='header' >
              <NavBar />
            </div>
            <div className='body' >
              <Routes>
                <Route exact path='/' element={<Start />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/cart' element={<Cart/>} />
                <Route exact path='/products' element={<ItemListContainer/>} />
                <Route exact path='/detail' element={<ItemDetailContainer/>} />
              </Routes>
            </div>
          </div>

          {/* <SideBar />
          <div className='main-section' >
            <NavBar />
            <Routes>
              <Route exact path='/' element={<Start/>} />
              <Route exact path='/cart' element={<Cart/>} />
              <Route exact path='/contact' element={<Contact/>} />
              <Route exact path='/products' element={<ItemListContainer/>} />
              <Route exact path='/detail' element={<ItemDetailContainer/>} />
            </Routes>
          </div> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
