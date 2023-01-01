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
        </div>
      </div>
    </div>
  );
};

export default YouMightLikeTheCourses;
