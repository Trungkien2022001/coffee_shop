import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ChangeMenu } from './component/admin/changeMenu/ChangeMenu';
import { Home } from './component/admin/home/Home';
import { NewMenu } from './component/admin/newMenu/NewMenu';
import { NewOrder } from './component/admin/newOrder/NewOrder';
import { OrderDetail } from './component/admin/orderDetail/OrderDetail';
import { Cart } from './component/client/cart/Cart';
import { Homepage } from './component/client/home/Homepage';
import './app.scss'
import { Product } from './component/client/product/Product';
import Login from './component/client/login/Login';
import { Register } from './component/client/register/Register';
import { NotFound } from './components/notFound/NotFound';
import { User } from './component/client/user/User';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element = {<Homepage/>}/>
          <Route path='/user' element = {<User/>}/>
          <Route path='/:id' element = {<Homepage/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/product/:id' element = {<Product/>}/>
          <Route path='admin/' element = {<Home/>}/>
          <Route path='admin/orderDetail/:id' element = {<OrderDetail/>}/>
          <Route path='admin/newOrder' element = {<NewOrder/>}/>
          <Route path='admin/newMenu' element = {<NewMenu/>}/>
          <Route path='admin/changeMenu/:id' element = {<ChangeMenu/>}/>
          <Route path='*' element = {<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
