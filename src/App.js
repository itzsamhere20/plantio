
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import AdminPanel from './components/admin/AdminPanel';
import Signup from './components/signup/signup';
import Shop from './components/shop/shop';
import Footer from './components/footer/footer';
import ProductDetail from './components/productDetail/productDetail';
import { AnimatePresence } from 'framer-motion';
import Cart from './components/cart/cart';


function App() {
  return (
   
    <AnimatePresence>
  <BrowserRouter>
  
    
<Routes>

        <Route  path='/' element={<Home/>} />
        <Route path='/admin' element={<AdminPanel/>} />
        <Route exact path='/sign-up' element={<Signup/>} />
        <Route exact path='/shop' element={<Shop/>} />
        <Route  path='/shop/:category/:id' element={<ProductDetail/>} />
        <Route  path='/cart' element={<Cart/>} />
        
        </Routes>
       
       

    </BrowserRouter>
    </AnimatePresence>
    
    
  
    
  );
}

export default App;
