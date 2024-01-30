import React from "react";
import { Link } from "react-router-dom";

function Extrahome() {
  return (
    <>
      <section className="container-fluid">
        <div className="home-Box">
          <div className="row text-Home">
            <h1>
              The power to design your next ride is here! <br /> Customize your next
              chair at <Link to="" className="home-link">PER4MAX.FIT</Link>
            </h1>
            <div className="btn-home"><button>DESIGN MY CHAIR</button></div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Extrahome;
