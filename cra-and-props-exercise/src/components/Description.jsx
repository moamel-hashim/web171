import React from "react";


export default function Description (props) {
  return (
    <div>
      <h3>Description:</h3>
      <p>{props.children}</p>
    </div>
  )
}
