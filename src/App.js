import React from 'react';
import './App.css';
import Logo from "./asset/DDD.svg"

function App() {
  return (
<div className='main-page'>
<img src={Logo} alt="logo" className='logo-img'/>
<h3 className='desc'> We are going to be on live by ........ </h3>
<p className='rights'>Gamerse® | All rights reserved  </p>
</div>
  );
}

export default App;
