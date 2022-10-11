import React from "react";
import { Link } from "react-router-dom";
import Signin from "./Signin";
const Signedin =(props)=>{
    return(
<div>
<p>Welcome {props.name} !</p>
</div>
        )}
export default Signedin;