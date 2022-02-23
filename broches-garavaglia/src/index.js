import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserAuthProvider } from './context/UserAuthContext';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSWpShPYSk5RlDASpV7qPSmj75XLfsQds",
  authDomain: "broches-garavaglia.firebaseapp.com",
  projectId: "broches-garavaglia",
  storageBucket: "broches-garavaglia.appspot.com",
  messagingSenderId: "389112116097",
  appId: "1:389112116097:web:ff34a98b510dbd109c6e80"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.render(
  <React.StrictMode>
    <UserAuthProvider>
      <App />
    </UserAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
