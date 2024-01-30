import React from "react";

function Contact() {
  return (
    <>
      <div className=" container-fluid Contact-Box">
        <div className="row">
          <div className="col-6 contact_Img">
            <img src={require("../kidsimg/as2.webp")} alt="dancce" />
            <div className="img-info">
              <h1>
                Dance Course <br />
                Available Now
              </h1>
            </div>
          </div>
          <div className="col-6 contact_inbox">
            <section className="support">
              <div className="container">
                <div className="support_card">
                  <div className="title">
                    <h2>
                      <span>Register Now</span>
                    </h2>
                    <p>LAST 7 SEATS</p>
                  </div>
                  <div className="row">
                    <div className="col-12 ">
                      <div className="mb-2">
                        <label htmlFor="email">Your Email</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="mb-2">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="mb-2">
                        <label htmlFor="msg">Your Message</label>
                        <input
                          type="text"
                          name="msg"
                          id="name"
                          className="form-control"
                          //   onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submit">
                    <button className="btn_style">SEND NOW</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
