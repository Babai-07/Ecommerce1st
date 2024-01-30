import React from "react";

function Teachercard() {
  return (
    <>
      <div className="teacherinfo-Box">
        <div className="teacherinfo-Box1">
          <div className="teacher-cardImg">
            {/* <img src={img} alt="Toyman logo" /> */}
            <img src={require("../kidsimg/1.avif")} alt="Toyman logo" />
          </div>
          <div className="info-Box">
            {/* <h3>{h3text}</h3> */}
            <h3>Mr Mike Roy</h3>
            <p className="tec-info">
              Teacher
              {/* {ptext} */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teachercard;
