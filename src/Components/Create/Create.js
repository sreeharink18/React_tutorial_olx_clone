import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/firebaseContext'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const {user} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
   const [name, setName] = useState('');
   const [category, setCategory] = useState('');
   const [image, setImage] = useState('');
   const [price, setPrice] = useState('');
   const [userIsValid, setUserIsValid] = useState(true)
   const date = new Date();
   const navigate = useNavigate()
   const handleSubmit=()=>{
    console.log(image);
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url);
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId : user.uid,
          createAt :date.toDateString()
        })
        navigate('/')
      }).catch((error)=>{
        setUserIsValid(false)
      })
    })
   }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image) : ' '}></img>
          
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <br/>
            <br/>
            {
              !userIsValid && <p style={{color:'red',fontWeight:500}}>Please Login Your Account</p>
            }
            <button onClick={()=>handleSubmit()} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
