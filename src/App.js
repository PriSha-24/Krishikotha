import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Loan from "./pages/Loan";
import LoanServices from "./pages/LoanServices";
import Schemes from "./pages/Schemes";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home2 from "./pages/Home2";
import Aboutus from "./pages/Aboutus";
import Aboutus2 from "./pages/Aboutus2";
import Fertilizer from "./pages/Fertilizer";
function App() {
return (<>
<BrowserRouter><Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/home2" element={<Home2/>}/>
  <Route path="/loan" element={<Loan/>}/>
  <Route path="/loan-services" element={<LoanServices/>}/>
  <Route path="/schemes" element={<Schemes/>}/>
  <Route path="/fertilizer" element={<Fertilizer/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/about" element={<Aboutus/>}/>
  <Route path="/about2" element={<Aboutus2/>}/>
  </Routes></BrowserRouter></>);}
export default App;