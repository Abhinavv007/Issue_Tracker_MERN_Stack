import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import CreateProject from "./Pages/CreateProject";
import Navig from "./Pages/Navig";
import CreateIssue from "./Pages/CreateIssue";
import ViewIssues from "./Pages/ViewIssues";
import EditIssue from "./Pages/EditIssue";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navig />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/create-issue" element={<CreateIssue />} />
      <Route path="/view-issue" element={<ViewIssues />} />
      <Route path="/edit-issue" element={<EditIssue />} />
   
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
