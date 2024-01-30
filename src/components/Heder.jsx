import React from "react";
import { Link } from "react-router-dom";

function Heder() {
  return (
    <>
      <section className="container-fluid">
        <div className="homeBox">
          <div className="row">
            <div className="homeText col-6">
              <h1>Best place for <br /> Your child to study.</h1>
              <p>Free Tuition Refer A Family & Enjoy 1 Free Week!</p>
              <Link to="" className="link-style">
                <button className="buttonStyle">LEARN MORE</button>
              </Link>
            </div>
            <div className="homeImg col-6">
              <img
                src={require("../kidsimg/1st.kids.webp")}
                alt="kids of Toyman pic"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Heder;
