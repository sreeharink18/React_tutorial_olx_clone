import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/firebaseContext'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext)
  const navigate = useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <Link to='/'>
          <div className="brandName">
            <OlxLogo></OlxLogo>
          </div>
        </Link>

        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <Link to='/login' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
        <div className="loginPage">
          <span >{user ? user.displayName : "Login"}</span>
          <hr />
        </div>
        </Link>
        
        <span onClick={() => {
          firebase.auth().signOut();
          navigate('/login')
        }}>{user ? "logout" : ""}</span>
        <Link to='/create'>
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;
