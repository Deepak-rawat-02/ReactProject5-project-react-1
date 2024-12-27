import "./login.css";
// var title ="User Details";      this is not recommended
// var userid="Deepak@123.com";
import{useEffect, useState} from 'react'
 
 export function Login() {
  const [title,setTitle]= useState('');
  useEffect(()=> {
    setTitle("User Details")
  },[]);
  const [userId,setUserId]= useState('');
   useEffect(()=> {
    setUserId("Deepaak@123.com")
   },[])
   const[password,setPassword]=useState('');
   useEffect(()=>{
    setPassword('Abc@123')
   },[]);
  return (
    <div className="container">
      <form className="form-login alert alert-warning alert-dismissible" >
        <h1 className="bi bi-person-fill" >{title}</h1>
        <button data-bs-dismiss="alert"  className="btn btn-close"></button>
        <div>
            <dt>
                <dl>User Id:</dl>
                <dd><input type="email" className="form-control" value={userId}/></dd>
                <dl>Password:</dl>
                <dd><input type="password" className="form-control" placeholder={password}/></dd>
                <button className="btn btn-warning w-100">Login</button>
            </dt>
        </div>
        
      </form>
    </div>
  );
}
