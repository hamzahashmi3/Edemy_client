import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import PageBanner from "../../../../components/SingleCourses/PageBanner";
import CoursesDetailsSidebar from "../../../../components/SingleCourses/CoursesDetailsSidebar";
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import Link from "next/link";
import { Avatar, Tooltip, Button, Modal, List } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  UploadOutlined,
  QuestionOutlined,
  CloseOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import AddLessonForm from "../../../../components/forms/AddLessonForm";
import { toast } from "react-toastify";
import Item from "antd/lib/list/Item";

const CourseView = () => {
  const [course, setCourse] = useState({});
  // for lessons
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    title: "",
    content: "",
    video: {},
  });
  const [uploading, setUploading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Video");
  const [progress, setProgress] = useState(0);
  // student count
  const [students, setStudents] = useState(0);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  useEffect(() => {
    course && studentCount();
  }, [course]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
  };

  const studentCount = async () => {
    const { data } = await axios.post(`/api/instructor/student-count`, {
      courseId: course._id,
    });
    console.log("STUDENT COUNT => ", data);
    setStudents(data.length);
  };

  // FUNCTIONS FOR ADD LESSON
  const handleAddLesson = async (e) => {
    e.preventDefault();
    // console.log(values);
    try {
      const { data } = await axios.post(
        `/api/course/lesson/${slug}/${course.instructor._id}`,
        values
      );
      // console.log(data)
      setValues({ ...values, title: "", content: "", video: {} });
      setProgress(0);
      setUploadButtonText("Upload video");
      setVisible(false);
      setCourse(data);
      toast("Lesson added");
    } catch (err) {
      console.log(err);
      toast("Lesson add failed");
    }
  };

  const handleVideo = async (e) => {
    try {
      const file = e.target.files[0];
      setUploadButtonText(file.name);
      setUploading(true);

      const videoData = new FormData();
      videoData.append("video", file);
      // save progress bar and send video as form data to backend
      const { data } = await axios.post(
        `/api/course/video-upload/${course.instructor._id}`,
        videoData,
        {
          onUploadProgress: (e) => {
            setProgress(Math.round((100 * e.loaded) / e.total));
          },
        }
      );
      // once response is received
      console.log(data);
      setValues({ ...values, video: data });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast("Video upload failed");
    }
  };

  const handleVideoRemove = async () => {
    try {
      setUploading(true);
      const { data } = await axios.post(
        `/api/course/video-remove/${course.instructor._id}`,
        values.video
      );
      console.log(data);
      setValues({ ...values, video: {} });
      setUploading(false);
      setUploadButtonText("Upload another video");
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast("Video remove failed");
    }
  };

  const handlePublish = async (e, courseId) => {
    try {
      let answer = window.confirm(
        "Once you publsih your course, it will be live in the marketplace for users to enroll"
      );
      if (!answer) return;
      const { data } = await axios.put(`/api/course/publish/${courseId}`);
      setCourse(data);
      toast("Congrats! Your course is live");
    } catch (err) {
      toast("Course publish failed. Try again");
    }
  };

  const handleUnpublish = async (e, courseId) => {
    try {
      let answer = window.confirm(
        "Once you unpublsih your course, it will no be available for users to enroll"
      );
      if (!answer) return;
      const { data } = await axios.put(`/api/course/unpublish/${courseId}`);
      setCourse(data);
      toast("Your course is unpublished");
    } catch (err) {
      toast("Course publish failed. Try again");
    }
  };

  return (
    <InstructorRoute>
      <PageBanner
        pageTitle={course ? course.name : ""}
        homePageUrl="/"
        homePageText="Home"
        innerPageUrl="/courses-1"
        innerPageText="Courses"
        activePageText={course ? course.name : ""}
      />

      <div className="courses-details-area pb-100">
        <div className="courses-details-image">
          <img
            src={course?.image ? course.image.Location : "/course.png"}
            alt="image"
          />
        </div>

        {course && (
          <div className="container">
            {/* <div className="container-fluid pt-1"> */}
            {/* <div className="media pt-2"> */}
            {/* <div className="media-body pl-2"> */}
            {/* <div className="row"></div> */}
            {/* </div> */}
            {/* </div> */}
            <hr />
            {/* <div className="row">
                <div className="col">
                  <ReactMarkdown source={course.description} />
                </div>
              </div> */}
            {/* <div className="row"> */}
            {/* <div className="d-flex pt-4"> */}
            <div className="btn-box">
              <Link href="#">
                <li className="default-btn">
                  <i className="flaticon-teacher"></i>
                  {students} Enrolled <span></span>
                </li>{" "}
              </Link>
              <Link href="/instructor/course/edit/${slug}">
                <li className="default-btn">
                  <i className="flaticon-distance-learning"></i> Edit{" "}
                  <span></span>
                </li>{" "}
              </Link>
              {course.lessons && course.lessons.length < 5 ? (
                <Tooltip title="Min 5 lessons required to publish">
                  <QuestionOutlined className="h5 pointer text-danger" />
                </Tooltip>
              ) : course.published ? (
                <Link href="#">
                  <li
                    className="default-btn"
                    onClick={(e) => handleUnpublish(e, course._id)}
                  >
                    <i class="flaticon-cross-circle"></i> Unpublish{" "}
                    <span></span>
                  </li>
                </Link>
              ) : (
                <Link href="#">
                  <li
                    className="default-btn"
                    onClick={(e) => handlePublish(e, course._id)}
                  >
                    <i class="flaticon-upload"></i> Publish <span></span>
                  </li>
                </Link>
              )}{" "}
              <Link href="#">
                <li className="default-btn" onClick={() => setVisible(true)}>
                  <i class="flaticon-add"></i> Add Lesson <span></span>
                </li>
              </Link>
            </div>

            {/* </div> */}
            {/* <Button
                      onClick={() => setVisible(true)}
                      className="col-md-6 offset-md-3 text-center"
                      type="primary"
                      shape="round"
                      icon={<UploadOutlined />}
                      size="large"
                    >
                      Add Lesson
                    </Button> */}
            {/* </div> */}

            <br />

            <Modal
              title="+ Add Lesson"
              centered
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
            >
              <AddLessonForm
                values={values}
                setValues={setValues}
                handleAddLesson={handleAddLesson}
                uploading={uploading}
                uploadButtonText={uploadButtonText}
                handleVideo={handleVideo}
                progress={progress}
                handleVideoRemove={handleVideoRemove}
              />
            </Modal>

            <div className="row pb-5">
              <div className="col lesson-list">
                <h4>
                  {course && course.lessons && course.lessons.length} Lessons
                </h4>
                <List
                  itemLayout="horizontal"
                  dataSource={course && course.lessons}
                  renderItem={(item, index) => (
                    <Item>
                      <Item.Meta
                        avatar={<Avatar>{index + 1}</Avatar>}
                        title={item.title}
                      ></Item.Meta>
                    </Item>
                  )}
                ></List>
              </div>
            </div>
            {/* </div> */}
          </div>
        )}
      </div>
      {/* <div className="contianer-fluid pt-3">
        {course && (
          <div className="container-fluid pt-1">
            <div className="media pt-2">
              <div className="media-body pl-2">
                <div className="row">
                  <div className="col">
                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                      <div>
                        <i className="flaticon-agenda"></i>
                        {course.lessons && course.lessons.length} Lessons
                      </div>
                    </ul>
                    <p style={{ marginTop: "-15px", fontSize: "10px" }}>
                      {course.category}
                    </p>
                  </div>

                  <div className="d-flex pt-4">
                    <Tooltip title={`${students} Enrolled`}>
                      <UserSwitchOutlined className="h5 pointer text-info mr-4" />
                    </Tooltip>

                    <Tooltip title="Edit">
                      <EditOutlined
                        onClick={() =>
                          router.push(`/instructor/course/edit/${slug}`)
                        }
                        className="h5 pointer text-warning mr-4"
                      />
                    </Tooltip>

                    {course.lessons && course.lessons.length < 5 ? (
                      <Tooltip title="Min 5 lessons required to publish">
                        <QuestionOutlined className="h5 pointer text-danger" />
                      </Tooltip>
                    ) : course.published ? (
                      <Tooltip title="Unpublish">
                        <CloseOutlined
                          onClick={(e) => handleUnpublish(e, course._id)}
                          className="h5 pointer text-danger"
                        />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Publish">
                        <CheckOutlined
                          onClick={(e) => handlePublish(e, course._id)}
                          className="h5 pointer text-success"
                        />
                      </Tooltip>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <ReactMarkdown source={course.description} />
              </div>
            </div>
            <div className="row">
              <Button
                onClick={() => setVisible(true)}
                className="col-md-6 offset-md-3 text-center"
                type="primary"
                shape="round"
                icon={<UploadOutlined />}
                size="large"
              >
                Add Lesson
              </Button>
            </div>

            <br />

            <Modal
              title="+ Add Lesson"
              centered
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
            >
              <AddLessonForm
                values={values}
                setValues={setValues}
                handleAddLesson={handleAddLesson}
                uploading={uploading}
                uploadButtonText={uploadButtonText}
                handleVideo={handleVideo}
                progress={progress}
                handleVideoRemove={handleVideoRemove}
              />
            </Modal>

            <div className="row pb-5">
              <div className="col lesson-list">
                <h4>
                  {course && course.lessons && course.lessons.length} Lessons
                </h4>
                <List
                  itemLayout="horizontal"
                  dataSource={course && course.lessons}
                  renderItem={(item, index) => (
                    <Item>
                      <Item.Meta
                        avatar={<Avatar>{index + 1}</Avatar>}
                        title={item.title}
                      ></Item.Meta>
                    </Item>
                  )}
                ></List>
              </div>
            </div>
          </div>
        )}
      </div> */}
    </InstructorRoute>
  );
};

export default CourseView;
