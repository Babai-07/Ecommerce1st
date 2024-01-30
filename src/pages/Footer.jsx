import React from "react";
import { LuFacebook } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footerBox container-fluid ">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 colFooter-1 ">
            <div className="footer-Logo">
              <img src={require("../kidsimg/logo.avif")} alt="Toyman logo" />
            </div>
            <p>
              A kids toy shop is a store that specializes in selling toys <br />
              and games designed specifically for children.
            </p>
            <div className="footer-Icon">
              <Link to="">
                <LuFacebook className="footerIcon" />
              </Link>
              <Link to="">
                {" "}
                <LuTwitter className="footerIcon" />
              </Link>
              <Link to="">
                <SlSocialInstagram className="footerIcon" />
              </Link>
              <Link to="">
                <SlSocialYoutube className="footerIcon" />
              </Link>
              <Link to="">
                <FaPinterest className="footerIcon" />
              </Link>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                India IND ₹
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button class="dropdown-item" type="button">
                    Bangladesh BDT
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Canada (CND €)
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    London $
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-4 col-6 colFooter-2 ">
            <h1>Information</h1>
            <Link to="" className="link-style">
              <p>Help Center</p>
            </Link>
            <Link to="" className="link-style">
              <p>Redeem Voucher</p>
            </Link>
            <Link to="" className="link-style">
              <p>Contact Us</p>
            </Link>
            <Link to="" className="link-style">
              <p>Policies & Rules</p>
            </Link>
            <Link to="" className="link-style">
              <p>Check Offer List</p>
            </Link>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-4 col-6 colFooter-2">
            <h1>Shopping</h1>
            <Link to="" className="link-style">
              <p>Product Support</p>
            </Link>
            <Link to="" className="link-style">
              <p>Checkout</p>
            </Link>
            <Link to="" className="link-style">
              <p>License Policy</p>
            </Link>
            <Link to="" className="link-style">
              <p>Affiliate</p>
            </Link>
            <Link to="" className="link-style">
              <p>About Us</p>
            </Link>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-4 col-6 colFooter-2">
            <h1>Quick Links</h1>
            <Link to="" className="link-style">
              <p>Search</p>
            </Link>
            <Link to="" className="link-style">
              <p>About us</p>
            </Link>
            <Link to="" className="link-style">
              <p>Wishlist</p>
            </Link>
            <Link to="" className="link-style">
              <p>Account</p>
            </Link>
          </div>
        </div>
        <div className="row copy-Rightbox">
          <div className="col-12">
            <p>Copyright Toyman | Built with Toyman by Babai Khan</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
