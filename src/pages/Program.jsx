import React from "react";
import Programcard from "../components/Programcard";
import img1 from "../kidsimg/3rd.kids.webp";
import img2 from "../kidsimg/4th.kids.webp";
import img3 from "../kidsimg/5th.kids.webp";
import { TfiPencilAlt } from "react-icons/tfi";
import { TbBus } from "react-icons/tb";
import { FaSwimmer } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";
import Review from "../components/Review";
import Teachercard from "../components/Teachercard";

function Program() {
  return (
    <>
      <div className="container-fluid proBox">
        <h1>
          Inspiration & Fun <br /> in Teaching
        </h1>
        <div className="row">
          <Programcard
            img={img1}
            h3text="EDUCATION PROGRAM"
            ptext="Welcome to an innovative education program designed to ignite a passion for learning and foster."
          />
          <Programcard
            img={img2}
            h3text="GAMES PROGRAM"
            ptext="Welcome to an innovative education program designed to ignite a passion for learning and foster."
          />
          <Programcard
            img={img3}
            h3text="DRAWING PROGRAM"
            ptext="Welcome to an innovative education program designed to ignite a passion for learning and foster."
          />
        </div>
        <h1>
          Activities Benefits <br />
          our Toyman
        </h1>
        <div className="row activitiBox">
          <div className="col-7">
            <img src={require("../kidsimg/6th.kids.webp")} alt="Toyman logo" />
          </div>
          <div className="col-5">
            <div className="row actBox">
              <div className="col-2 iconAct">
                <TfiPencilAlt />
              </div>
              <div className="col-10 actText">
                <h1>Drawing & Painting</h1>
                <p>
                  Unleash your child's creativity with our exciting Kids Drawing
                  & Painting program Watch as they embark on a colorful journey
                  of self-expression and imagination.
                </p>
              </div>
            </div>
            <div className="row actBox">
              <div className="col-2 iconAct">
                <TbBus />
              </div>
              <div className="col-10 actText">
                <h1>Kids Summer Camp</h1>
                <p>
                  Where the sun meets endless possibilities for fun and
                  adventure! Our carefully crafted program is designed to make
                  this summer an unforgettable experience for your child.
                </p>
              </div>
            </div>
            <div className="row actBox">
              <div className="col-2 iconAct">
                <FaSwimmer />
              </div>
              <div className="col-10 actText">
                <h1>Swimming Camp</h1>
                <p>
                  Where the sun meets endless possibilities for fun and
                  adventure! Our carefully crafted program is designed to make
                  this summer an unforgettable experience for your child.
                </p>
              </div>
            </div>
            <div className="row actBox">
              <div className="col-2 iconAct">
                <IoMusicalNotes color="blue" size={30} />
              </div>
              <div className="col-10 actText">
                <h1>Sing & Dance Class</h1>
                <p>
                  Class the sun meets endless possibilities for fun and
                  adventure! Our carefully crafted program is designed to make
                  this summer an unforgettable experience for your child.
                </p>
              </div>
            </div>
            <button className="actBtn">MORE BENEFITS</button>
          </div>
        </div>

        <div className="activiti-Card">
          <div className="act-Card">
            <div className="row">
              <div className="col-6">
                <div className="act-Img">
                  <img
                    src={require("../kidsimg/7th.kids.webp")}
                    alt="Toyman logo"
                  />
                </div>
                <div className="act-Text1">
                  <p>Sale on exclusive</p>
                  <h3>
                    Download Our <br /> Kid's App
                  </h3>
                  <button>DOWNLOAD</button>
                </div>
              </div>
              <div className="col-6">
                <div className="act-Img">
                  <img
                    src={require("../kidsimg/8th.kids.webp")}
                    alt="Toyman logo"
                  />
                </div>
                <div className="act-Text2">
                  <p>Exclusive product</p>
                  <h3>
                    Children <br />
                    Rubber toys
                  </h3>
                  <button>SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>What Students Say</h2>
        <p>Customer Testimonials</p>
        <div className="castomerReviewbox">
          <Review />
        </div>
        <h1>
          Loveable Teachers <br />
          For Your Kids
        </h1>
        <div className="row tec-Row">
          <div className="col-3">
          <Teachercard />
          </div>
          <div className="col-3">
          <Teachercard />
          </div>
          <div className="col-3">
          <Teachercard />
          </div>
          <div className="col-3">
          <Teachercard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Program;
