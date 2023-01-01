import React from "react";
// import Link from "../utils/ActiveLink";
import Link from "next/link";

import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import "antd/dist/reset.css";
import {
  AppstoreOutlined,
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  CarryOutOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Item, SubMenu, ItemGroup } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/profile-authentication");
  };

  // ----------------------------------------
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <div id="navbar" className="navbar-area">
        <div className="edemy-nav">
          <div className="container-fluid">
            <div className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <div onClick={toggleNavbar} className="navbar-brand">
                  <img src="/images/logo4.png" alt="logo" />
                </div>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <form className="search-box">
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Search for anything"
                  />
                  <button type="submit">
                    <i className="flaticon-search"></i>
                  </button>
                </form>

                <ul className="navbar-nav">
                  {/* <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <li onClick={e => e.preventDefault()} className="nav-link">
                                                Home <i className='bx bx-chevron-down'></i>
                                            </li> 
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">eLearning School</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-2" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Vendor Certification Training</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-3" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Online Training School</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-4" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Distance Learning</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-5" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Language School</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-6" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Modern Schooling</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-7" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Yoga Training</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-8" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Health Coaching</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-9" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Kindergaten</li> 
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}

                  <li
                    className="nav-item"
                    style={
                      user && user.role && user.role.includes("Instructor")
                        ? { marginTop: "4.5%" }
                        : user && user.role && user.role.includes("Instructor")
                        ? { marginTop: "6%" }
                        : { marginTop: "6%" }
                    }
                  >
                    <Link href="/">
                      <li className="nav-link">Home</li>
                    </Link>
                  </li>
                  {user && user.role && user.role.includes("Instructor") ? (
                    <li className="nav-item">
                      <Link href="/instructor/course/create">
                        <li className="nav-link">Create Course</li>
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item">
                      {/* <Link 
                        href="/user/become-instructor"
                        style={{ textDecoration: "none" }}
                      >
                        Become Instructor
                      </Link> */}
                    </li>
                  )}
                  <li className="nav-item">
                    <Link href="/courses-1">
                      <li className="nav-link">Courses</li>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about-3">
                      <li className="nav-link">About Us</li>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact">
                      <li className="nav-link">Contact Us</li>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {/* <Link href="#">
                                            <li onClick={e => e.preventDefault()} className="nav-link">
                                                Pages <i className='bx bx-chevron-down'></i>
                                            </li> 
                                        </Link> */}

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="#">
                                                    <li onClick={e => e.preventDefault()} className="nav-link">
                                                        About Us <i className='bx bx-chevron-down'></i>
                                                    </li> 
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <li onClick={toggleNavbar} className="nav-link">About Us 01</li> 
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/about-2" activeClassName="active">
                                                            <li onClick={toggleNavbar} className="nav-link">About Us 02</li> 
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/about-3" activeClassName="active">
                                                            <li onClick={toggleNavbar} className="nav-link">About Us 03</li> 
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/success-story" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Success Story</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/advisor" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Teacher</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/gallery" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Gallery</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">FAQs</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Contact Us</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/profile-authentication" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Login/Register</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">404 Error Page</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Coming Soon</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/purchase-guide" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Purchase Guide</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Privacy Policy</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/terms-of-service" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Terms of Service</li> 
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  <li className="nav-item megamenu">
                    {/* <Link href="#">
                                            <li onClick={e => e.preventDefault()} className="nav-link">
                                                Courses <i className='bx bx-chevron-down'></i>
                                            </li> 
                                        </Link> */}

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="/courses-1" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Grid 01</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-2" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Grid 02</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-3" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Grid 03</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-4" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Grid 04</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-5" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses List 01</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-6" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Right Sidebar</li> 
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
 
                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="/single-courses-1" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Single Layout 01</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/single-courses-2" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Single Layout 02</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/categories" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Categories</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/membership-levels" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Membership Levels</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/become-a-teacher" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Become a Teacher</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/profile" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Profile</li> 
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
 
                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="/courses-1" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Grid 01</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-2" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Grid 02</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-3" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Grid 03</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-4" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Grid 04</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-5" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses List 01</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-6" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Right Sidebar</li> 
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
 
                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="/single-courses-1" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Single Layout 01</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/single-courses-2" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Single Layout 02</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/categories" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Courses Categories</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/membership-levels" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Membership Levels</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/become-a-teacher" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Become a Teacher</li> 
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/profile" activeClassName="active">
                                                                        <li onClick={toggleNavbar} className="nav-link">Profile</li> 
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="row m-0 mobile-none">
                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-code-alt'></i>
                                                                </div>
                                                                <h3>Development</h3>
                                                                <span className="sub-title">60 Courses</span>

                                                                <Link href="/courses-1">
                                                                    <li className="link-btn"></li> 
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-camera'></i>
                                                                </div>
                                                                <h3>Photography</h3>
                                                                <span className="sub-title">21 Courses</span>
                                                                
                                                                <Link href="/courses-2">
                                                                    <li className="link-btn"></li> 
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-layer'></i>
                                                                </div>
                                                                <h3>Design</h3>
                                                                <span className="sub-title">58 Courses</span>
                                                                
                                                                <Link href="/courses-3">
                                                                    <li className="link-btn"></li> 
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bxs-flag-checkered'></i>
                                                                </div>
                                                                <h3>Language</h3>
                                                                <span className="sub-title">99 Courses</span>
                                                                
                                                                <Link href="/courses-4">
                                                                    <li className="link-btn"></li> 
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-health'></i>
                                                                </div>
                                                                <h3>Fitness</h3>
                                                                <span className="sub-title">21 Courses</span>
                                                                
                                                                <Link href="/courses-5">
                                                                    <li className="link-btn"></li> 
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-line-chart'></i>
                                                                </div>
                                                                <h3>Business</h3>
                                                                <span className="sub-title">49 Courses</span>
                                                                
                                                                <Link href="/courses-6">
                                                                    <li className="link-btn"></li> 
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul> */}
                  </li>

                  {/* <li className="nav-item">
                                        <Link href="#">
                                            <li onClick={e => e.preventDefault()} className="nav-link">
                                                Events <i className='bx bx-chevron-down'></i>
                                            </li> 
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/events" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Events</li> 
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/single-events" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Events Details</li> 
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}

                  {/* <li className="nav-item">
                                        <Link href="#">
                                            <li onClick={e => e.preventDefault()} className="nav-link">
                                                Shop <i className='bx bx-chevron-down'></i>
                                            </li> 
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/products-list-1" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Product List 01</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/products-list-2" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Product List 02</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/cart" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Cart</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/checkout" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Checkout</li> 
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/single-products" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Product Details</li> 
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}

                  {/* <li className="nav-item">
                                        <Link href="#">
                                            <li onClick={e => e.preventDefault()} className="nav-link">
                                                Blog <i className='bx bx-chevron-down'></i>
                                            </li> 
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog-1" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Grid (2 in Row)</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-2" activeClassName="active">
                                                <li onClick={toggleNavbar} className="nav-link">Grid (3 in Row)</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-3" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Grid (Full Width)</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-4" activeClassName="active">
                                                    <li onClick={toggleNavbar} className="nav-link">Right Sidebar</li> 
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#">
                                                    <li onClick={e => e.preventDefault()} className="nav-link">
                                                        Single Post <i className='bx bx-chevron-down'></i>
                                                    </li> 
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/single-blog-1" activeClassName="active">
                                                            <li onClick={toggleNavbar} className="nav-link">Default</li> 
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/single-blog-2" activeClassName="active">
                                                            <li onClick={toggleNavbar} className="nav-link">With Video</li> 
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/single-blog-3" activeClassName="active">
                                                            <li onClick={toggleNavbar} className="nav-link">With Image Slider</li> 
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                  {user !== null && (
                    <li className="nav-item">
                      <Link href="#">
                        <li
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          {user ? user.name : "User"}{" "}
                          <i className="bx bx-chevron-down"></i>
                        </li>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/user" activeClassName="active">
                            <li onClick={toggleNavbar} className="nav-link">
                              Dashboard
                            </li>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="#" activeClassName="active">
                            <li onClick={logout} className="nav-link">
                              Logout
                            </li>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  )}
                </ul>

                <div className="others-option d-flex align-items-center">
                  {/* <div className="option-item">
                                        <div className="cart-btn">
                                            <Link href="/cart">
                                                <li><i className='flaticon-shopping-cart'></i> <span>3</span></li> 
                                            </Link>
                                        </div>
                                    </div> */}

                  <div className="option-item">
                    {user && user.role && user.role.includes("Instructor") && (
                      <Link href="/instructor">
                        <li className="default-btn">
                          <i className="flaticon-user"></i> Instructor
                          <span></span>
                        </li>
                      </Link>
                    )}
                    {user === null && (
                      <Link href="/profile-authentication">
                        <li className="default-btn">
                          <i className="flaticon-user"></i> Login/Register{" "}
                          <span></span>
                        </li>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
