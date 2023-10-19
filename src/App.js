
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Shop,{detaildata} from './components/shop/shop';
import ProductDetail from './components/productDetail/productDetail';
import AdminPanel from './components/admin/AdminPanel';
import Signup from './components/signup/signup';


function App() {
  return (
    <>
  <BrowserRouter>
  
    
<Routes>

        <Route  path='/' element={<Home/>} />
        <Route exact path='admin' element={<AdminPanel/>} />
        <Route exact path='sign-up' element={<Signup/>} />
        </Routes>

    </BrowserRouter>
    
    </>
    
  );
}

export default App;
