import React from "react";
import Link from "next/link";
import axios from "axios";
import ReadMoreReact from "read-more-react";
import { useState, useEffect } from "react";

const MainBanner = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get("/api/courses");
      setCourses(data);
    };
    fetchCourses();
  }, []);
  return (
    <div className="main-banner">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="main-banner-content">
              <h1>The World’s Leading Distance Learning Provider</h1>
              <p>
                Flexible easy to access learning opportunities can bring a
                significant change in how individuals prefer to learn! The eDemy
                can offer you to enjoy the beauty of eLearning!
              </p>

              <Link href="/profile-authentication">
                <li className="default-btn">
                  <i className="flaticon-user"></i> Join For Free <span></span>
                </li>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="main-banner-courses-list">
              <div className="row">
                {courses.slice(2, 4).map(
                  (course) => (
                    console.log(course),
                    (
                      <div key={course._id} className="col-lg-6 col-md-6">
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

                            <Link href="#">
                              <li className="fav">
                                <i className="flaticon-heart"></i>
                              </li>
                            </Link>

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
                        src="/images/user6.jpg"
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
                            <ReadMoreReact
                              text={course.description}
                              min={30}
                              ideal={50}
                              max={100}
                              readMoreText={
                                <button className="default-btn">
                                  read more
                                </button>
                              }
                            />

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
              </div>

              <div className="banner-shape1">
                <img src="/images/banner-shape1.png" alt="image" />
              </div>
              <div className="banner-shape2">
                <img src="/images/banner-shape2.png" alt="image" />
              </div>
              <div className="banner-shape3">
                <img src="/images/banner-shape3.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
