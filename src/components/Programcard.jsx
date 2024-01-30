import React from "react";
import { Link } from "react-router-dom";

function Programcard({img , h3text, ptext}) {
  return (
    <><div className="cardBox">
      <div className="cardBox1">
        <div className="cardImg">
          <img src={img} alt="Toyman logo" />
        </div>
        <div className="textBox">
        <h3>{h3text}</h3>
        <p>
          {ptext}
        </p>
        <Link><button className="cardBtn">MORE INFO</button></Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default Programcard;
