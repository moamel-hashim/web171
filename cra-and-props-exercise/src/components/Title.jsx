import React from 'react';

export default function Title (props) {
  return (
    <div>
      <h3>TITLE:</h3>
      <h1 className="App-title">{props.appTitle}</h1>
    </div>
  )
}
