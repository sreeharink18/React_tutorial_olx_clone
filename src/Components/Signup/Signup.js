import React, { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import {FirebaseContext} from '../../store/firebaseContext'
import './Signup.css';


export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext);
  const formClick =(e)=>{
    e.preventDefault();
  
      firebase.auth().createUserWithEmailAndPassword(email,password).then(result=>{
        result.user.updateProfile({displayName:username}).then(()=>{
          firebase.firestore().collection('users').add({
            id:result.user.uid,
            username:username,
            phone:phone
          }).catch((error) => {
              console.log("Error creating user:", error.message);
          })
          .then(()=>{
            navigate('/login')
          }).catch((error)=>{
            console.log(error.message);
          })
        })
      console.log(result.user);
    })
    
      
    
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={formClick}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            name="name"
            onChange={(e)=>setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login' style={{textDecoration:'none' , color:'black' }}>
            <p>Login</p>
        </Link>
       
      </div>
    </div>
  );
}
