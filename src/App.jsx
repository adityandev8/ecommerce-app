import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Items from './Pages/Items';
import Cart from './Pages/cart';
import ProductDetail from './Pages/ProductDetail';
import Header from './components/common/Header';
import Footer from './components/common/Footer';  
function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const showHeaderAndFooter = !isLoginPage;
  return (
    <div className="flex flex-col min-h-screen">
      {showHeaderAndFooter && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Items />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div className="p-20 text-center text-3xl">404 — Page not found</div>} />
        </Routes>
      </main>
      {showHeaderAndFooter && <Footer />}
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
export default App;