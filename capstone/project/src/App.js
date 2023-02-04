import './App.css';
import { BrowserRouter  ,Routes , Route } from "react-router-dom";

import Header from './components/Header';
// import  Nav  from '../src/components/Nav2';
import Foot from './components/footer';
import Homemain from './components/Homemain';
import Dept from './components/Dept';
// import logo from './logo.png'
function App() {
  return (
    <>
    <BrowserRouter>
   <Header/>
   {/* <Nav/> */}
   <Routes>
    <Route path="/" element={<Homemain/>} ></Route>
   </Routes>
   {/* <Homemain/> */}
   <Routes>
    <Route path="/Dept" element={<Dept/>} ></Route>
   </Routes>
   <Foot/>
   </BrowserRouter>   
    </>
  );
}

export default App;
