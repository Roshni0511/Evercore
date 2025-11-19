import { useEffect } from "react";
import feather from "feather-icons";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
     useEffect(() => {
    feather.replace();
  }, []);
  return (
    < >
         <Routes >
           <Route path='/' element={<Home/>}/>
         </Routes>
    </>
  );
}

export default App;
