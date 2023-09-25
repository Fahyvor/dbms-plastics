import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage';
import Products from './ProductsPage/Products';
import SellWaste from './SellersPage/SellWaste';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/buy' element={<Products />} />
        <Route path='/sell' element={<SellWaste />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
