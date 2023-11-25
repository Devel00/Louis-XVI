import "./App.css";
//import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Problems from "./Components/Problems";

function App() {
  return (
    <div className="App">
      {/* <Login />
      <Signup /> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Problems />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
