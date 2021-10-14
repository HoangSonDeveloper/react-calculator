import React from "react";
import Button from "../Button";
import "./Buttons.scss";

function Buttons(props) {
  return (
    <div className="btn-group">
      <div className="btn-row">
        <Button onButtonClick={props.onButtonClick} name="AC" />
        <Button onButtonClick={props.onButtonClick} name="+/-" />
        <Button onButtonClick={props.onButtonClick} name="%" />
        <Button onButtonClick={props.onButtonClick} name="÷" red />
      </div>
      <div className="btn-row">
        <Button onButtonClick={props.onButtonClick} name="7" />
        <Button onButtonClick={props.onButtonClick} name="8" />
        <Button onButtonClick={props.onButtonClick} name="9" />
        <Button onButtonClick={props.onButtonClick} name="x" red />
      </div>
      <div className="btn-row">
        <Button onButtonClick={props.onButtonClick} name="4" />
        <Button onButtonClick={props.onButtonClick} name="5" />
        <Button onButtonClick={props.onButtonClick} name="6" />
        <Button onButtonClick={props.onButtonClick} name="-" red />
      </div>
      <div className="btn-row">
        <Button onButtonClick={props.onButtonClick} name="1" />
        <Button onButtonClick={props.onButtonClick} name="2" />
        <Button onButtonClick={props.onButtonClick} name="3" />
        <Button onButtonClick={props.onButtonClick} name="+" red />
      </div>
      <div className="btn-row">
        <Button onButtonClick={props.onButtonClick} name="0" wide />
        <Button onButtonClick={props.onButtonClick} name="." />
        <Button onButtonClick={props.onButtonClick} name="=" red />
      </div>
    </div>
  );
}

export default Buttons;
