import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Register } from './components/register'
import { Login } from './components/login'
import { NewProducts } from './components/NewProducts'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from './components/Products';
import NavBar from './components/NavBar/Navbar';



export const App = () => {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
      <Routes>
  
      <Route path="/" element={<Products />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/newproducts' element={<NewProducts/>}/>
      <Route path='/products' element={<Products/>}/>
  
      </Routes>
      </BrowserRouter>
    </>
  )
}
