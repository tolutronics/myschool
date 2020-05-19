import React from 'react';
import logo from './child.jpg'
import * as signalR from '@aspnet/signalr';
import './App.css';

function App() {
  return (
    
    <div className="cover">
      
      <div className="image">
     <div className="overlay">
     <div className="top">
       <ul className="social">
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
       </ul>
       <div className="spacer"></div>
       <ul className="social">
         <li>+2347031234126</li>
         <li>toluxy100@gmail.com</li>
       </ul>
     </div>
       <div className="container">
         
     <div className="header">
       <div className="logoa">
         <div className="logob"></div>
       </div>
       <h2 >MYSCHOOL</h2>
      <div className="spacer"></div>
        <ul className="menu"> 
          <li>HOME</li>
          <li>ABOUT</li>
          <li>EVENT</li>
          <li>ADMISSIONS</li>
          <li>CLASS</li>
          <li>ALUMNI</li>
          <li>STAFF</li>
          <li>CONTACT</li>
        </ul>

      </div>
      <div className="quote">
<h1>WE ENSURE BETTER EDUCATION FOR A BETTER WORLD</h1>
<p>In the history of modern astronomy, there is probably 
  no one greater leap forward than the building and launch 
  of the space telescope known as the Hubble.</p>
  <button>GET STARTED</button>

      </div>
      </div>
      {/* <input
        type="text"
        value={'tolu'}
        
      />

      <button>Send</button> */}
     </div>
     
      </div>

        
    </div>
  );
}

export default App;
