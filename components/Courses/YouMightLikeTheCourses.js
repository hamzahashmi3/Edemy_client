import React from "react";
import Link from "next/link";
import axios from "axios";
import ReadMoreReact from 'read-more-react';
import { useState, useEffect } from "react";

const YouMightLikeTheCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const fetchCourses = async () => {
          const { data } = await axios.get("/api/courses");
          setCourses(data);
        };
        fetchCourses();
      }, []);
  return (
    <div className="courses-area bg-f8f9f8 pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>More Courses You Might Like</h2>
        </div>

        <div className="row">
          <div className="row">
            {courses.slice(0, 3).map(
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
                        <ReadMoreReact
                          text={course.description}
                          min={30}
                          ideal={50}
                          max={100}
                          readMoreText={
                            <button className="default-btn">read more</button>
                          }
                        />
                      </div>
                    </div>
                  </div>
                )
              )
            )}
          </div>
          {/* <div className="col-lg-4 col-md-6">
            <div className="single-courses-box">
              <div className="courses-image">
                <Link href="/single-courses-1">
                  <li className="d-block image">
                    <img src="/images/courses/courses1.jpg" alt="image" />
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
                    <li>
                      The Data Science Course 2020: Complete Data Science
                      Bootcamp
                    </li>
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

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default YouMightLikeTheCourses;
