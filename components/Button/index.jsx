import React from "react";
import PropTypes from "prop-types";
import "../Buttons/Buttons.scss";

Button.propTypes = {
  name: PropTypes.string,
};

function Button(props) {
  const { name, red, wide } = props;
  const className = ["btn", red ? "btn-red" : "", wide ? "btn-wide" : ""];
  return (
    <button
      onClick={() => props.onButtonClick(name)}
      className={className.join(" ").trim()}
    >
      {name}
    </button>
  );
}

export default Button;
