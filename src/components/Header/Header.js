import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Header.css";

const Header = (props)=> {

  const [mainButton, setMainButton] = useState(true);

  const homePageHandler = () => {
     window.location.reload();
  }

  return (
    <div className='headerContainer'>
      <div className='titlecontainer'>Sirudhaniyam</div>
      <button className="Button" onClick={homePageHandler}>Main Menu</button>
    </div>
  );
}

export default Header;
