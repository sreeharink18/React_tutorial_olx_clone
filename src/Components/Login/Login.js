import React, { useContext, useState } from 'react';
import {FirebaseContext} from '../../store/firebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const {firebase} = useContext(FirebaseContext)
   const [email, setEmail] = useState('')
   const [isEmailValid, setIsEmailValid] = useState(true);
   const [errorEmail, setErrorEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isPasswordValid, setIsPasswordValid] = useState(true);
   const [errorPassword, setErrorPassword] = useState('')
   const handleLogin =(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate('/')
    }).catch((error)=>{
      console.log(error.message);
      if(error.code == 'auth/invalid-email'){
        setIsEmailValid(false); 
        setErrorEmail('Please enter your email');
      }
      else if(error.code == 'auth/missing-password'){
        setIsPasswordValid(false);
        setErrorPassword('Enter your correct password');
      }else if(error.code == 'auth/invalid-credential'){
        setIsEmailValid(false);
        setErrorEmail('User not found . Please check...')
      }
      else{
        setIsEmailValid(true);
        setIsPasswordValid(true);
      }
    })

   }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          {
            !isEmailValid && <p className='errorMessage'>{errorEmail}</p>
          }
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          {
            !isPasswordValid && <p className='errorMessage'>{errorPassword}</p>
          }
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
          <p >Signup</p>
        </Link>
        
      </div>
    </div>
  );
}

export default Login;
