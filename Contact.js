import React from "react";
import Clintt from "./Clintt";
import App from "./App";
import Signin from "./Signin";
  const Contact=(props)=>{
return(
<>
<div>
  {props.user.map(users=>{return <div key={users.id} className='contactbutton'>email:{users.email}<br/>name: {users.name}
    <br/>password:{users.password}<br/>
   <span>
 {//  <button onClick={()=>clicked(user.id)}>delete field</button>
    //<button >update field</button>
}
  </span>
</div> })}
</div>
</>
    )
    }
    
export default Contact;