import React, { useEffect } from "react";
import { useState } from "react";
import Contact from "./Contact";
import App from "./App";
import "./App.css";
import {db} from './firebase';
import {collection,getDocs,addDoc, deleteDoc,doc} from 'firebase/firestore';
import { async } from "@firebase/util";
import {BrowserRouter as Router ,Route,Switch}from 'react-router-dom'
import { Link } from "react-router-dom";

import Signin from "./Signin";
import Navbar from "./Navbar";
const Clintt= ()=>{
    const [info,setinfo]=useState({email:'',surname:'',name:'',password:'',repassword:'',checkbox:false});
    const [user,setuser]=useState([])
    const [updatestate,setupdate]=useState({email:'',name:'',password:'',repassword:''});
    const [iftrue,setiftrue]=useState(true);
    const usersCollectionRef=collection (db,'users');
    useEffect(()=>{
  const clint= async()=>{
    const getUsers=await getDocs(usersCollectionRef);
  setuser(getUsers.docs.map((i)=>{return{...i.data(),id:i.id}}))

  }
  clint()
  },[])
  function change(e){
    let {name,value,type,checked}=e.target;
    setinfo(i=>{ 
    return{...i
      , [e.target.name]:e.target.value
       ,[name]:type==='checkbox'? checked:value
    }})
    console.log(info.checkbox)
  }
  const submit=async(e)=>{
    if(info.checkbox=='true'){
setiftrue(false);
    }
    else{
      setiftrue(false)
    await addDoc(usersCollectionRef,{email:info.email,surname:info.surname, name:info.name, password:info.password})
    console.log(user.id)
    

    //Bsetinfo(info.email='',info.name='',info.password='')
    }
  }
  const clicked=async(id)=>{
    //setuser(user.filter(todo=> todo.id!=id))
    const deletedocs=doc(db,'users',id)
    await deleteDoc(deletedocs)
  
  }
  /*const update=(id)=>{
  
  useEffect(()=>{
    <>
  <input type='text' placeholder="enter updated information" name='email' value={updatestate.email}>{user.email}</input>
  <input type='text' placeholder="enter updated information" name='name' value={updatestate.name}>{user.name}</input>
  <input type='text' placeholder="enter updated information" name='password' value={updatestate.password}>{user.password}</input>
  </>})
  
  }*/
  return(
    <>
    <div className="contactbutton">
    <form onSubmit={submit} className='fform'>
      <div className="flex">    
      <input type='text'name="name" value={info.name} placeholder='First Name'onChange={change}/>
      <input type='text'name="surname" value={info.surname} placeholder='Surname' onChange={change}/>
      </div>
      <input type='text' name="email" value={info.email} placeholder='Email Address' onChange={change}/>
      <input type='password' name="password" value={info.password} placeholder='Password' onChange={change}/>
      <input type='password' name="repassword" value={info.repassword} placeholder='Re-enter password' onChange={change} />
      <input type ='checkbox' name="checkbox" value={info.checkbox}  onClick={change} className='checkbox'/>
    
 {!info.checkbox ?  <div>please accept terms and services</div>:null
  ||info.email.length<=10 ?<div>enter valid email</div>:null
  ||info.name==''?<div>enter name</div>:null
  ||info.surname==''?<div>enter surname</div>:null
  || info.password.length<=8?<div>password must be at least 8 characters long</div>:null
  || info.repassword==''?<div>re-enter password</div>:null
  ||info.repassword!=info.password ?<div>re-enter password</div>:null
  ||user.find(user=>user.email==info.email) ?<div>email is already registered</div>:null ?
    <button disabled >error</button>
     :
     <Router> 
      <button><Link to="/Signin"></Link> Create account</button>
       <Route exact path= '/Signin' >
    <Signin/>
    </Route>
    </Router>
     }

    </form>
    </div>
   
   

  </>
  )
}

export default Clintt;