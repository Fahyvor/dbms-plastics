import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage';
import Products from './ProductsPage/Products';
import SellWaste from './SellersPage/SellWaste';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/buy' element={<Products />} />
        <Route path='/sell' element={<SellWaste />} />
      </Routes>
    </Router>
  );
}

export default App;
