import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Navbar from './pages/Navbar';


function App() {
  return (
    < >
         <Routes >
           <Route path='/' element={<Home/>}/>
           <Route path='/Faq' element={<Faq/>}/>
           <Route path='/Navbar' element={<Navbar/>}/>
          
         </Routes>
    </>
  );
}

export default App;
