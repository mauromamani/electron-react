import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/About';
import HomePage from '../pages/Home';
import ProductsPage from '../pages/Products';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
};
export default AppRouter;
