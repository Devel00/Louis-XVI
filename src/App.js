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
import { IdeaDetail } from "./Components/Idea/IdeaDetail";
import AddIdea from "./Components/Idea/AddIdea";
import { ProblemDetail } from "./Components/Problem/ProblemDetail";
import CRUDProblem from "./Components/Problem/EditProblem";
import Loading from "./Components/Global/Loading";
import Feet from "./Components/Foot/FootManagement";
import AddFoot from "./Components/Foot/AddFoot";
import EditUser from "./Components/User/CRUDUser";
import EditIdea from "./Components/Idea/EditIdea";
import IdeaManager from "./Components/Idea/IdeaManger";
import IdeaShorts from "./Components/Idea/IdeasShort.jsx";
import ManageFoot from "./Components/Foot/ManageFoot.jsx";
import {DetailFoot} from "./Components/Foot/FootDetail.jsx";
import EditFoot from "./Components/Foot/CRUDFoot.jsx";
import AboutUS from "./Components/Global/AboutUs";
import MyFundp from  "./Components/Problem/MyFunds.jsx";
import ProblemAll from "./Components/Problem/ProblemAll.jsx"
import ProblemCat from "./Components/Problem/ProblemCat.jsx";
import FootAll from  "./Components/Foot/AllFoot.jsx";
import FootCat from  "./Components/Foot/FootCat.jsx";

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
          <Route path="/Problem/All" exact element={<ProblemAll />} />
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
          <Route path="/FootAll" element={<FootAll />} />
          <Route path="/AddFoot" element={<AddFoot />} />
          <Route path="/EditUser" element={<EditUser />} />
          <Route path="/IdeaManager" element={<IdeaManager />} />
          <Route path="/IdeaShort" element={<IdeaShorts />} />
          <Route path="/MFoot" element={<ManageFoot />} />
          <Route path="/DetailFoot/:id" element={<DetailFoot />} />
          <Route path="/EditFoot/:id" element={<EditFoot />} />
          <Route path="/Ideas" element={<IdeaShorts />} />
          <Route path="/AboutUs" element={<AboutUS />} />
          <Route path="/MyFundP" element={<MyFundp />} />
          <Route path="/ProblemCat/:id" element={<ProblemCat />} />
          <Route path="/FootCat/:id" element={<FootCat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
