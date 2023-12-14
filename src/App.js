import "./App.css";
//import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Card from "./Components/Card";
import Manager from "./Components/manage_problems";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Problems from "./Components/Problems";
import { HomePage } from "./Components/HomePage";
import { Profile } from "./Components/Profile";
import Increase from "./Components/Increase";
import Factor from "./Components/Factor";
import IdeaCategory from "./Components/IdeaCategory";

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
          <Route path="/Profile" exact element={<Profile />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/Increase" element={<Increase />} />
          <Route path="/Factor" element={<Factor />} />
          <Route path="/Cat" element={<IdeaCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
