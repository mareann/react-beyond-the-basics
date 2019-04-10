import React from "react";

export default function NewTootInput(props) {
  return (
    <input 
       onChange={props.changeWithMe}
       value={props.tootInputState}
       type="text" className="new-toot__input" maxLength="40" 
     />
  );
}
