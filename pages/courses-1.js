import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import ReadMoreReact from 'read-more-react';
// import readmore from '/images/icons/read-more.png'
import { currencyFormatter } from "../utils/helpers";
import CourseCard from "../components/cards/CourseCard";

const CoursesGrid01 = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get("/api/courses");
      setCourses(data);
    };
    fetchCourses();
  }, []);

  const readMore = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };

  let data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Phasellus imperdiet, nulla et dictum interdum, nisi
  lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
  est, ultrices nec congue eget, auctor vitae massa.
  Fusce luctus vestibulum augue ut aliquet. Nunc
  sagittis dictum nisi, sed ullamcorper ipsum dignissim
  ac. In at libero sed nunc venenatis imperdiet sed
  ornare turpis. Donec vitae dui eget tellus gravida
  venenatis. Integer fringilla congue eros non
  fermentum. Sed dapibus pulvinar nibh tempor porta.`;

  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Courses Grid 01"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Courses Grid 01"
      />

      <div className="courses-area courses-section pt-100 pb-70">
        <div className="container">
          <div className="edemy-grid-sorting row align-items-center">
            <div className="col-lg-8 col-md-6 result-count">
              <p>
                We found <span className="count">{courses.length}</span> courses available for
                you
              </p>
            </div>

            <div className="col-lg-4 col-md-6 ordering">
              <div className="select-box">
                <select className="form-control">
                  <option>Sort By</option>
                  <option>Popularity</option>
                  <option>Latest</option>
                  <option>Price: low to high</option>
                  <option>Price: high to low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            {courses.map(
              (course) => (
                console.log(course),
                (
                  <div key={course._id} className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                      <div className="courses-image">
                        <Link href={`/course/${course.slug}`}>
                          <li className="d-block image">
                            <img
                              src={course?.image.Location}
                              alt={course?.name}
                            />
                          </li>
                        </Link>
                        <a href={`/course/${course.slug}`} className="fav">
                          <i className="flaticon-heart"></i>
                        </a>
                        <div className="price shadow">
                          {course.paid
                            ? `$${course.price}`
                            : // currencyFormatter({
                              //       amount: course.price,
                              //       currency: "usd",
                              //     })
                              "Free"}
                        </div>
                      </div>
                      <div className="courses-content">
                        <div className="course-author d-flex align-items-center">
                          {/* <img
                          src="/images/user1.jpg"
                          className="rounded-circle"
                          alt="image"
                        /> */}
                          <span>offered by: {course.instructor.name}</span>
                        </div>

                        <h3>
                          <Link href={`/course/${course.slug}`}>
                            <div>{course.name}</div>
                          </Link>
                        </h3>
                        <ReadMoreReact text={course.description}
                            min={30}
                            ideal={50}
                            max={100}
                            readMoreText={<button className="default-btn">read more</button>}/>
                        {/* <p>
                          {data.length < 100 ? data : <span id="dots">{data.substring(0, 99)}...</span> }
                            <span id="more">
                                {data}
                            </span>
                        </p>
                        <button onClick={readMore} id="myBtn">
                          Read more
                        </button> */}
                        {/* <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> 15 Lessons
                        </li>
                        <li>
                          <i className="flaticon-people"></i> 145 Students
                        </li>
                      </ul> */}
                      </div>
                    </div>
                  </div>
                )
              )
            )}

            {/* <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <li className="d-block image">
                      <img src="/images/courses/courses2.jpg" alt="image" />
                    </li>
                  </Link>
                  <a href="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </a>
                  <div className="price shadow">$49</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user2.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Sarah Taylor</span>
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <li>
                        Java Programming MasterclassName for Software Developers
                      </li>
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 20 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 100 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <li className="d-block image">
                      <img src="/images/courses/courses3.jpg" alt="image" />
                    </li>
                  </Link>
                  <a href="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </a>
                  <div className="price shadow">$59</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user3.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>David Warner</span>
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <li>
                        Deep Learning A-Z™: Hands-On Artificial Neural Networks
                      </li>
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 20 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 150 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <li className="d-block image">
                      <img src="/images/courses/courses4.jpg" alt="image" />
                    </li>
                  </Link>
                  <a href="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </a>
                  <div className="price shadow">$39</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user6.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Alex Morgan</span>
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <li>
                        Python for Finance: Investment Fundamentals & Data
                        Analytics
                      </li>
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 15 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 145 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <li className="d-block image">
                      <img src="/images/courses/courses5.jpg" alt="image" />
                    </li>
                  </Link>
                  <a href="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </a>
                  <div className="price shadow">$49</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user5.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Sarah Taylor</span>
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <li>
                        Machine Learning A-Z™: Hands-On Python & R In Data
                        Science
                      </li>
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 20 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 100 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <li className="d-block image">
                      <img src="/images/courses/courses6.jpg" alt="image" />
                    </li>
                  </Link>
                  <a href="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </a>
                  <div className="price shadow">$99</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user4.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>James Anderson</span>
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <li>
                        R Programming A-Z™: R For Data Science With Real
                        Exercises!
                      </li>
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 44 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 440 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <li className="d-block image">
                      <img src="/images/courses/courses10.jpg" alt="image" />
                    </li>
                  </Link>
                  <a href="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </a>
                  <div className="price shadow">$39</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user1.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Alex Morgan</span>
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <li>Deep Learning The Numpy Stack in Python</li>
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 15 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 145 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <li className="d-block image">
                      <img src="/images/courses/courses11.jpg" alt="image" />
                    </li>
                  </Link>
                  <a href="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </a>
                  <div className="price shadow">$49</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user2.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Sarah Taylor</span>
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <li>Statistics for Data Science and Business Analysis</li>
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 20 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 100 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <li className="d-block image">
                      <img src="/images/courses/courses12.jpg" alt="image" />
                    </li>
                  </Link>
                  <a href="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </a>
                  <div className="price shadow">$59</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user3.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>David Warner</span>
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <li>Microsoft Excel - Excel from Beginner to Advanced</li>
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 20 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 150 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <li className="d-block image">
                      <img src="/images/courses/courses13.jpg" alt="image" />
                    </li>
                  </Link>
                  <a href="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </a>
                  <div className="price shadow">$39</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user6.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Alex Morgan</span>
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <li>Python Django Web Development: To-Do App</li>
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 15 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 145 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <li className="d-block image">
                      <img src="/images/courses/courses14.jpg" alt="image" />
                    </li>
                  </Link>
                  <a href="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </a>
                  <div className="price shadow">$49</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user5.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Sarah Taylor</span>
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <li>
                        Oracle SQL Developer : Essentials, Tips and Tricks
                      </li>
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 20 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 100 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <li className="d-block image">
                      <img src="/images/courses/courses15.jpg" alt="image" />
                    </li>
                  </Link>
                  <a href="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </a>
                  <div className="price shadow">$99</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user4.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>James Anderson</span>
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <li>Learning A-Z™: Hands-On Python In Data Science</li>
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 44 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 440 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoursesGrid01;
