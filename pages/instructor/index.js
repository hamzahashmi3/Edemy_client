import { useState, useEffect } from "react";
import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute";
import { Avatar, Tooltip } from "antd";
import Link from "next/link";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const InstructorIndex = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get("/api/instructor-courses");
    setCourses(data);
  };

  const myStyle = { marginTop: "-15px", fontSize: "10px" };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center square">Instructor Dashboard</h1>
      {/* <pre>{JSON.stringify(courses, null, 4)}</pre> */}
      {/* start */}
      <div className="courses-area courses-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            {courses &&
              courses.map((course) => (
                <>
                <div className="col-lg-4 col-md-6">
                  <div className="single-courses-box">
                    <div className="courses-image">
                      <Link href={`/instructor/course/view/${course.slug}`}>
                        <li className="d-block image">
                          <img src={course.image ? course.image.Location : "/course.png"} alt="image" />
                        </li>
                      </Link>
                      <a href="#" className="fav">
                        {/* <i className="flaticon-heart"></i> */}
                        {course.published ? (
                            <Tooltip title="Published">
                              <CheckCircleOutlined className="h5 pointer text-success" />
                            </Tooltip>
                          ) : (
                            <Tooltip title="Unpublished">
                              <CloseCircleOutlined className="h5 pointer text-warning" />
                            </Tooltip>
                          )}
                      </a>

                      <div className="price shadow">${course.price}</div>
                    </div>
                    <div className="courses-content">
                      {/* <div className="course-author d-flex align-items-center">
                        <img
                          src="/images/user1.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                        <span>Alex Morgan</span>
                      </div> */}
    
                      <h3>
                        <Link href={`/instructor/course/view/${course.slug}`}>
                          <div>
                            {course.name}
                          </div>
                        </Link>
                      </h3>
    
                      <p>
                        {course.description}
                      </p>
                      <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> {course.lessons.length} Lessons
                        </li>
                        {course.lessons.length < 5 ? (
                            <p style={myStyle} className="text-warning">
                              At least 5 lessons are required to publish a
                              course
                            </p>
                          ) : course.published ? (
                            <p style={myStyle} className="text-success">
                              Your course is live in the marketplace
                            </p>
                          ) : (
                            <p style={myStyle} className="text-success">
                              Your course is ready to be published
                            </p>
                          )}
                        {/* <li>
                          <i className="flaticon-people"></i> 145 Students
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                  {/* <div className="media pt-2">
                    <Avatar
                      size={80}
                      src={course.image ? course.image.Location : "/course.png"}
                    />

                    <div className="media-body pl-2">
                      <div className="row">
                        <div className="col">
                          <Link
                            href={`/instructor/course/view/${course.slug}`}
                            className="pointer"
                          >
                            <li className="mt-2 text-primary">
                              <h5 className="pt-2">{course.name}</h5>
                            </li>
                          </Link>
                          <p style={{ marginTop: "-10px" }}>
                            {course.lessons.length} Lessons
                          </p>

                          {course.lessons.length < 5 ? (
                            <p style={myStyle} className="text-warning">
                              At least 5 lessons are required to publish a
                              course
                            </p>
                          ) : course.published ? (
                            <p style={myStyle} className="text-success">
                              Your course is live in the marketplace
                            </p>
                          ) : (
                            <p style={myStyle} className="text-success">
                              Your course is ready to be published
                            </p>
                          )}
                        </div>

                        <div className="col-md-3 mt-3 text-center">
                          {course.published ? (
                            <Tooltip title="Published">
                              <CheckCircleOutlined className="h5 pointer text-success" />
                            </Tooltip>
                          ) : (
                            <Tooltip title="Unpublished">
                              <CloseCircleOutlined className="h5 pointer text-warning" />
                            </Tooltip>
                          )}
                        </div>
                      </div>
                    </div>
                  </div> */}
                </>
              ))}
          </div>
        </div>
      </div>
      {/* end */}
    </InstructorRoute>
  );
};

export default InstructorIndex;
