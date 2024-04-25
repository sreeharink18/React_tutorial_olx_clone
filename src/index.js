import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase from './firebase/config';
import {FirebaseContext} from './store/firebaseContext'
import Context from './store/firebaseContext';
ReactDOM.render(
<FirebaseContext.Provider value={Firebase}>
<Context>
<App />
</Context>
</FirebaseContext.Provider>




, document.getElementById('root'));
