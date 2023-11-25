import "./App.css";
//import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Card from "./Components/Card"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Login />
      <Signup /> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Card />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
