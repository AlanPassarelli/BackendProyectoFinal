import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Register } from './components/register'
import { Login } from './components/login'
import { Products } from './components/Products'
import { NewProducts } from './components/NewProducts'


export const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/newproducts' element={<NewProducts/>}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}
