import { async } from "@firebase/util";
import { useState,useEffect } from "react";
import { Link, Route, Router } from "react-router-dom";
import App from "./App";
import Navbar from "./Navbar";
import {db} from './firebase';
import Signedin from "./Signedin";
import {collection,getDocs,addDoc, deleteDoc,doc} from 'firebase/firestore';

const Signin=()=>{
    const [login,setlogin]=useState({email:'',password:''})
    const [user,setusers]=useState([])
    const [input,setinput]=useState([])
    const [success,setsuccess]=useState(null);
    const [auth,setauth]=useState([])
    const [er,seter]=useState('')
    const usersCollectionRef=collection (db,'users');
    useEffect(()=>{
  const clint= async()=>{
    const getUsers=await getDocs(usersCollectionRef);
  setinput(getUsers.docs.map((i)=>{return{...i.data(),id:i.id}}))
  console.log(input.map(i=>{return{i}}))
  }
  clint()
  },[])

const change=(e)=>{
    setlogin(i=>{return{
        ...i,
[e.target.name]:e.target.value
     }} );}
const submit=(e)=>{
e.preventDefault();
    setusers(login)
console.log(input)
 setauth(input.find(user=>user.email==login.email));
console.log(auth)
if(auth.password!=login.password){
setsuccess(false)
seter('error')
}

else{
 setsuccess(true)
let l=()=>{
  <p>login error</p>
}
}
if(success){
  window.location.reload();
}
}

return(
    <>   
<div className="para">
<form onSubmit={submit} className='signinform'>
<input type='text' placeholder='email' name='email' value={login.email} onChange={change}/>
<input type='text' placeholder='password' name='password' value={login.password} onChange={change}/>
{login.email!=''& login.password!='' ? <button>{success?'logout':'Login'} </button>: <button disabled>Login</button>}
</form>
<>{success==true? <Signedin name={auth.name}/> :'please enter details' }</>
</div>
</>
)
}
export default Signin;