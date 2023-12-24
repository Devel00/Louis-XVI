import "./App.css";
//import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import { Login } from "./Components/Login";
import Card from "./Components/Card";
import Manager from "./Components/manage_problems";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Problems from "./Components/Problems";
import { HomePage } from "./Components/HomePage";
import { Profile } from "./Components/Profile";
import Increase from "./Components/Increase";
import AddProblem from "./Components/AddProblem";
import Factor from "./Components/Factor";
import IdeaCategory from "./Components/IdeaCategory";
import IdeaDetail from "./Components/IdeaDetail";

function App() {
  return (
    <div className="App">
      {/* <Login />
      <Signup /> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<IdeaDetail />} />
          <Route path="/Problem" exact element={<Problems />} />
          <Route path="/Profile" exact element={<Profile />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/Increase" element={<Increase />} />
          <Route path="/AddProblem" element={<AddProblem />} />
          <Route path="/Factor" element={<Factor />} />
          <Route path="/IdeaCategory" element={<IdeaCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
