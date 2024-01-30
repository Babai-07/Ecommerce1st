import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { IoEarthOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";

function Icon() {
  return (
    <>
      <section className="container-fluid">
        <div className="icon-Box">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="iconE">
                <GiTrophyCup />
              </div>
              <h1>TEAM P4X</h1>
              <p>Our ambassadors.</p>
            </div>
            <div className="col-md-3 col-6">
            <div className="iconE">
                <LiaHandsHelpingSolid />
              </div>
              <h1>SUPPORT</h1>
              <p>FAQs and helpful tips.</p>
            </div>
            <div className="col-md-3 col-6">
            <div className="iconE">
                <IoEarthOutline/>
              </div>
              <h1>ABOUT US</h1>
              <p>Learn about PER4MAX.</p>
            </div>
            <div className="col-md-3 col-6">
            <div className="iconE">
                <BsCart4 />
              </div>
              <h1>PRO SHOP</h1>
              <p>Get gear, parts and more.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Icon;
