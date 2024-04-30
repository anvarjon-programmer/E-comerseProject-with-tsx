import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Store from './page/Store';
import About from './page/About';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <>
    <ShoppingCartProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='store' element={<Store/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </ShoppingCartProvider>
    </>
  );
}

export default App;
