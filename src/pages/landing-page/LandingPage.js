import React from 'react';
import { useHistory } from "react-router-dom";

import './landing-page.css';
import logo from '../../assets/giphy.gif'
import { Buttons } from '../../components/button/buttons';

const LandingPage = () => {
const history = useHistory()
  function clickIron(){
    history.push("/iron-man-giphy")
  }

  function clickSearch(){
    localStorage.setItem("type", "all");
    history.push("/search-giphy")
  }

  return (
    <section className="container">
      <div className="child">
        <div>
          <h1 className="title-hero">welcome to your giphy</h1>
          <div className="logo-position">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="button-area">
            <Buttons onClick={clickIron} title="Iron Man Giphy" color="bg-line-blue" />
            <Buttons onClick={clickSearch} title="Search Your Giphy" color="bg-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;