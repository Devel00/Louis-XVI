import "./App.css";
//import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Card from "./Components/Card";
import Manager from "./Components/manage_problems";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Problems from "./Components/Problems";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      {/* <Login />
      <Signup /> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/Problem" exact element={<Problems />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Manager" element={<Manager />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
