import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ChangeMenu } from './component/admin/changeMenu/ChangeMenu';
import { Home } from './component/admin/home/Home';
import { NewMenu } from './component/admin/newMenu/NewMenu';
import { NewOrder } from './component/admin/newOrder/NewOrder';
import { OrderDetail } from './component/admin/orderDetail/OrderDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/orderDetail/:id' element = {<OrderDetail/>}/>
          <Route path='/newOrder' element = {<NewOrder/>}/>
          <Route path='/newMenu' element = {<NewMenu/>}/>
          <Route path='/changeMenu/:id' element = {<ChangeMenu/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
