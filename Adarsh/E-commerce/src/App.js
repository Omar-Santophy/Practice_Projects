// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Carosal from './components/Carosal';
import Footer from './components/Footer';
import Login from './pages/LogIn';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Carosal/> */}
        <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path='/cart' element={<Cart />}/> 
          <Route path='/login' element={<Login />}/> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
