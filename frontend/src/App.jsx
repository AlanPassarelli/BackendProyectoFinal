import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Register } from './components/register'
import { Login } from './components/login'
import { NewProducts } from './components/NewProducts'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from './components/Products';
import NavBar from './components/NavBar/Navbar';
import ResetPasswordPage from "./components/ResetPasswordPage/ResetPasswordPage";
import ResetPasswordRequest from "./components/ResetPasswordRequest/ResetPasswordRequest";
import ResetPasswordConfirm from "./components/ResetPasswordConfirm/ResetPasswordConfirm";


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
      <Route
            path="/reset-password-request"
            element={<ResetPasswordRequest />}
          />
          <Route
            path="/reset-password-confirm"
            element={<ResetPasswordConfirm />}
          />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordPage />}
          />
      </Routes>
      </BrowserRouter>
    </>
  )
}
