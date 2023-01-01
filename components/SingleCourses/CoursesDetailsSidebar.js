import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LoadingOutlined, SafetyOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const CoursesDetailsSidebar = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
  loading,
  user,
  handlePaidEnrollment,
  handleFreeEnrollment,
  enrolled,
  setEnrolled,
}) => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  
  //   console.log(course,"course")
  return (
    <React.Fragment>
      {/* If you want to change the video need to update videoID */}
      {/* <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      /> */}

      <div className="courses-details-info">
        <div className="image" style={{marginBottom: "80%"}}>
          {/* <img src={image?.Location} alt="image" /> */}
          
        {course?.lessons[0].video &&
          course?.lessons[0].video.Location ? (
            <div
              className="link-btn popup-youtube"
              onClick={() => {
                setPreview(course?.lessons[0].video.Location);
                // openModal();
                setShowModal(!showModal);
              }}
            >
              <ReactPlayer
                className="react-player-div"
                url={course?.lessons[0].video.Location}
                light={course?.image.Location}
                width="100%"
                height="225px"
              />
            </div>
          ) : (
            <>
              <img
                src={course?.image.Location}
                alt={course?.name}
                className="img img-fluid"
              />
            </>
          )}

          {/* <Link href="#play-video">
            <li
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
              className="link-btn popup-youtube"
            ></li>
          </Link> */}

          {/* <div className="content">
            <i className="flaticon-play"></i>
            <span>Course Preview</span>
          </div> */}
        </div>

        <ul className="info">
          <li className="price">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-tag"></i> Price
              </span>
              $ {course?.price}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-teacher"></i> Instructor
              </span>
              {course?.instructor.name}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-time"></i> Duration
              </span>
              {course?.lessons.length} days
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-distance-learning"></i> Lessons
              </span>
              {course?.lessons.length}
            </div>
          </li>
          {/* <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-web"></i> Enrolled
              </span>
              255 students
            </div>
          </li> */}
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-lock"></i> Access
              </span>
              Lifetime
            </div>
          </li>
        </ul>

        <div className="btn-box">
          {loading ? (
            <div className="d-flex justify-content-center">
              <LoadingOutlined className="h1 text-danger" />
            </div>
          ) : (
            <Link href="#">
            <li
              className="default-btn"
              onClick={course?.paid ? handlePaidEnrollment : handleFreeEnrollment}
            >
              <i className="flaticon-tag"></i>{" "}
              {user
                ? enrolled.status
                  ? "Go to course"
                  : "Enroll"
                : "Login to enroll"}
              <span></span>
            </li>
          </Link>
          )}
        </div>

        {/* <div className="courses-share">
          <div className="share-info">
            <span>
              Share This Course <i className="flaticon-share"></i>
            </span>

            <ul className="social-link">
              <li>
                <a href="#" className="d-block" target="_blank">
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="d-block" target="_blank">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="d-block" target="_blank">
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="d-block" target="_blank">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default CoursesDetailsSidebar;
