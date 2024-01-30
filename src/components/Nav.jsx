import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FiAlignJustify } from "react-icons/fi";
import Shop from "./Shop";
function Nav() {
  const { pathname } = useLocation();
  return (
    <>
      <nav className="container-fluid navBox">
        <div className="navB1">
          <div className="row">
            <div className="col-3 navLogo">
              <img src={require("../kidsimg/logo.avif")} alt="Toyman logo" />
            </div>
            <div className="col-6 navOption">
              <ul>
                <li className="myHome-Ddown">
                  <Link
                    to=""
                    className={
                      pathname === "/" ? "link-style my_Color" : "link-style"
                    }
                  >
                    Home
                  </Link>
                  <ul className="myDropdown">
                    <li>
                      <Link
                        className={
                          pathname === "/"
                            ?"link-Dcolor my_dColor"
                            : "link-Dcolor"
                        }
                      >
                        Toys Store One
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname === "/"
                            ? "link-Dcolor my_dColor"
                            : "link-Dcolor"
                        }
                      >
                        Toys Store Two
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname === "/"
                            ? "link-Dcolor my_dColor"
                            : "link-Dcolor"
                        }
                      >
                        Fashion Store
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname === "/"
                            ? "link-Dcolor my_dColor"
                            : "link-Dcolor"
                        }
                      >
                        Education Store
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname === "/"
                            ? "link-Dcolor my_dColor"
                            : "link-Dcolor"
                        }
                      >
                        Stationery Store
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="myShop-Ddown">
                  <Link
                    to="/extra"
                    className={
                      pathname === "/extra"
                        ? "link-style my_Color"
                        : "link-style"
                    }
                  >
                    Shop
                  </Link>
                  <div  id="myShopdown">
                    <Shop />
                  </div>
                </li>
                <li>
                  <Link to="" className="link-style">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="" className="link-style">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-3 navIcons">
              <ul>
                <li>
                  <Link to="" className="link-style">
                    <IoSearchOutline className="nav-icon" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="link-style">
                    <HiOutlineBriefcase className="nav-icon" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="link-style">
                    <FiAlignJustify className="nav-icon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
