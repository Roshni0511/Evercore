import { useEffect } from "react";
import feather from "feather-icons";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Navbar from './pages/Navbar';
import Useracc from "./pages/Useraccount";
import Shop from './pages/Shop';

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
           <Route path='/Shop' element={<Shop/>}/>
           <Route path='/UserAccount' element={<Useracc/>}/>

         </Routes>
    </>
  );
}

export default App;
