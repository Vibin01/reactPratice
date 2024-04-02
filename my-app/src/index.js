import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import './QrCode.css';
// import "./formSample/RegForm.css";
import reportWebVitals from './reportWebVitals';
// import { Demo } from './Demo';
// import { RegForm } from './formSample/RegForm';
// import { Cart } from './formSample/Cart';
// import { UserDetails } from './formSample/UserDetails';
// import { UserCard } from './UserCard';
import { QrCode } from './QrCode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 
    <UserCard/>
   
    <Cart/>
<UserDetails/>
   <RegForm/>
 <RegForm/>
   <App /> 
    */}
    <QrCode/> 


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
