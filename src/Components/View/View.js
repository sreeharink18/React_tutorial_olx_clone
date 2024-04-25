import React, { useContext, useEffect, useState } from 'react';

import './View.css';

import {PostContext} from '../../store/postContext'
import {FirebaseContext} from '../../store/firebaseContext'
function View() {
  const {postDetail} = useContext(PostContext);
  const {firebase} = useContext(FirebaseContext);
  const [userDetail, setUserDetail] = useState()
  useEffect(() => {
    const {userId} = postDetail
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetail(doc.data())
        console.log(doc.data())
      });
    })
  }, [])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetail.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetail.price} </p>
          <span>{postDetail.name}</span>
          <p>{postDetail.category}</p>
          <span>{postDetail.createAt}</span>
        </div>
        {
          userDetail && 
          <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetail.username}</p>
          <p>{userDetail.phone}</p>
        </div>
        }
        
      </div>
    </div>
  );
}
export default View;
