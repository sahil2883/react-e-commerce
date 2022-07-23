import './App.css';
import Header from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Index from './components/Index';
import Detail from './components/Detail';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/product-Details/:id" element={<Detail/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
