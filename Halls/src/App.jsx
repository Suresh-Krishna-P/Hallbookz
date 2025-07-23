import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Book from "./components/Book";
import SignUp from "./components/SignUp";
import Explore from "./components/Explore";
import Home from "./components/Home";
import TopVenues from "./components/Top";
import About from "./components/About";
import Contact from "./components/Contact"
import Payment from "./components/Payment"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Book" element={<Book/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Explore" element={<Explore/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/TopVenues" element={<TopVenues/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Payment" element={<Payment/>}/>
    </Routes>
  );
}

export default App;
