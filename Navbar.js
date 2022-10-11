import { Link } from "react-router-dom";
const Navbar=()=>{
return(
<>
<a><Link to='/Clintt'> Sign up</Link></a>
<a><Link to="/Signin">sign in</Link></a>
</>
);
}
export default Navbar;