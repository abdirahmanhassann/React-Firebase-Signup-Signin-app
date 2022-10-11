import "./App.css";
import Clintt from "./Clintt"; 
import {BrowserRouter as Router ,Route,Switch}from 'react-router-dom'
import Signin from "./Signin";
import Navbar from "./Navbar";
import Contact from "./Contact";
const App=()=>{

return(
  <>
  
  <Router>
 <nav><Navbar/></nav>
  <Route exact path= '/Clintt'>
   <Clintt />
    </Route>  
  <Route exact path= '/Signin' >
    <Signin/>
  </Route>
  <Route exact path= '/Contact' >
    <Contact/>
  </Route>
  <Route exact path= '/Contact' >
    <Contact/>
  </Route>
  </Router> 

</>
)
}
export default App;