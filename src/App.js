import { useEffect } from "react";
import feather from "feather-icons";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Navbar from './pages/Navbar';
import Useracc from "./pages/Useraccount";
import Shop from './pages/Shop';
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Placeorder from "./pages/Placeorder";
import Trackorder from "./pages/Trackorder";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Forgotpass from "./pages/Forgotpass";
import Otp from "./pages/Otp";

function App() {
     useEffect(() => {
    feather.replace();
  }, []);
  return (
    < >
         <Routes >
           <Route path='/' element={<Home/>}/>
           <Route path='/Faq' element={<Faq/>}/>
           <Route path='/Navbar' element={<Navbar/>}/>
          <Route path="/Contact" element={<Contact/>}/>
           <Route path='/Shop' element={<Shop/>}/>
           <Route path='/UserAccount' element={<Useracc/>}/>

           <Route path="/Login" element={<Login/>}/>
           <Route path="/Wishlist" element={<Wishlist/>}/>
           <Route path="/Checkout" element={<Checkout/>}/>
           <Route path="/Placeorder" element={<Placeorder/>}/>
           <Route path="/Trackorder" element={<Trackorder/>}/>
           <Route path="/Cart" element={<Cart/>} />
           <Route path="/Signup" element={<Signup/>}/>
           <Route path="/Forgotpass" element={<Forgotpass/>}/>
           <Route path="/Otp" element={<Otp/>}/>
         </Routes>
          <div class="theme-option">
      

        <div class="back-to-top">
            <a id="back-to-top" href="#">
                <i class="fas fa-chevron-up"></i>
            </a>
        </div>
    </div>
    </>
  );
}

export default App;
