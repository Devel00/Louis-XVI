import "./App.css";
//import Navbar from "./Components/Navbar";
import Signup from "./Components/User/Signup";
import { Login } from "./Components/User/Login";
import PCard from "./Components/Problem/PCard";
import Manager from "./Components/Problem/ManageProblems";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Global/Navbar";
import Problems from "./Components/Problem/Problems";
import { HomePage } from "./Components/Global/HomePage";
import { Profile } from "./Components/User/Profile";
import Increase from "./Components/User/Increase";
import AddProblem from "./Components/Problem/AddProblem";
import Factor from "./Components/User/Factor";
import IdeaCategory from "./Components/Idea/IdeaCategory";
import {IdeaDetail} from "./Components/Idea/IdeaDetail";
import AddIdea from "./Components/Idea/AddIdea";
import {ProblemDetail} from "./Components/Problem/ProblemDetail";
import CRUDProblem from "./Components/Problem/EditProblem";
import Loading from "./Components/Global/Loading";
import Feet from "./Components/Foot/FootManagement";
import AddFoot from "./Components/Foot/AddFoot"
import EditUser from "./Components/User/CRUDUser";
import EditIdea from "./Components/Idea/EditIdea";
import IdeaManager from "./Components/Idea/IdeaManger";
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
          <Route path="/AddProblem" element={<AddProblem />} />
          <Route path="/Factor" element={<Factor />} />
          <Route path="/IdeaCategory" element={<IdeaCategory />} />
          <Route path="/ideas/:id" element={<IdeaDetail />} />
          <Route path="/problems/:id" element={<ProblemDetail />} />
          <Route path="/AddIdea" element={<AddIdea />} />
          <Route path="/ProblemDetail/:id" element={<ProblemDetail />} />
          <Route path="/idea/:id" element={<IdeaDetail />} />
          <Route path="/EditIdea/:id" element={<EditIdea />} />
          <Route path="/EditProblem/:id" element={<CRUDProblem />} />
          <Route path="/Load" element={<Loading />} />
          <Route path="/feet" element={<Feet />} />
          <Route path="/AddFoot" element={<AddFoot />} />
          <Route path="/EditUser" element={<EditUser />} />
          <Route path="/IdeaManager" element={<IdeaManager />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
