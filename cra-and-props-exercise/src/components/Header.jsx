import React from "react";
import Title from "./Title";
import Description from "./Description";
import logoFileFromSRC from "../logo.svg";

function Header () {
  return (
    <header>

      <img src={logoFileFromSRC} className="App-logo" alt="logo" />
      <Title appTitle= 'React App'/>
      <Description>
        <p>This is a test app that im creating to lean about passing props.</p>

      </Description>


      </header>
  )
}
