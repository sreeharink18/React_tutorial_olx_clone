import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login';
import View from './Pages/ViewPost'
import { Route } from 'react-router-dom';
import { AuthContext, FirebaseContext } from './store/firebaseContext';
import Create from './Components/Create/Create';
import Post from './store/postContext';

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}>
            </Route>
            <Route path='/signup' element={<Signup />}>
            </Route>
            <Route path='/login' element={<Login />}>
            </Route>
            <Route path='/create' element={<Create />}>
            </Route>
            <Route path='/view' element={<View/>}>
            </Route>
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
