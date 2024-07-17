import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import './App.css';
import Reg from "./pages/Reg";
import Login from "./pages/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddLoan from "./pages/AddLoan";
import Listloan from "./pages/Listloan";
import Editloan from "./pages/Editloan";
import Addscheme from "./pages/Addscheme";
import Listscheme from "./pages/Listscheme";
import Addfertilizer from "./pages/Addfertilizer";
import Listfertilizer from "./pages/Listfertilizer";
import Editfertilizer from "./pages/Editfertilizer";
function App(){
   return(<>
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/" element={<Login/>} />
    <Route path="/reg" element={<Reg/>} />
    <Route path="/add-loan" element={<AddLoan/>} />
    <Route path="/list-loan" element={<Listloan/>} />
    <Route path="/edit-loan" element={<Editloan/>} />
    <Route path="/add-scheme" element={<Addscheme/>} />
    <Route path="/list-scheme" element={<Listscheme/>} />
    <Route path="/add-fertilizer" element={<Addfertilizer/>} />
    <Route path="/list-fertilizer" element={<Listfertilizer/>} />
    <Route path="/edit-fertilizer/:pid" element={<Editfertilizer/>} />
    </Routes>
    </BrowserRouter></>);}
export default App;