import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["button--medium", "button--large"];

export const Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]; //by default will be primary button

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <Link to='/contact'className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick="onclick" type="type">
                {children}
            </button>
        </Link>
    )
};

// export default function Button() {
//     return (
//         <div>

//         </div>
//     )
// }
