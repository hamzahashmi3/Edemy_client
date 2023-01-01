import { List, Avatar } from "antd";
const { Item } = List;

const SingleCourseLessons = ({
  lessons,
  setPreview,
  showModal,
  setShowModal,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col lesson-list">
          {lessons && <h4>{lessons.length} Lessons</h4>}
          <hr />
          <List
            itemLayout="horizontal"
            dataSource={lessons}
            renderItem={(item, index) => (
              <div>
                {/* <h3>{item.title}</h3> */}
                <ul>
                  <li>
                    <a
                      href="#"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <span className="courses-name">{item.title}</span>
                      <div className="courses-meta">
                        {/* <span className="questions">5 questions</span>
                      <span className="duration">01 Hour</span> */}
                        {item.video &&
                          item.video !== null &&
                          item.free_preview && (
                            // <span
                            //   className="text-primary pointer"
                            // onClick={() => {
                            //   setPreview(item.video.Location);
                            //   setShowModal(!showModal);
                            // }}
                            // >
                            //   Preview
                            // </span>
                            <span
                              className="status"
                              onClick={() => {
                                setPreview(item.video.Location);
                                setShowModal(!showModal);
                              }}
                            >
                              Preview
                            </span>
                          )}
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              // <Item>
              //   <Item.Meta
              //     avatar={<Avatar>{index + 1}</Avatar>}
              //     title={item.title}
              //   />
              // {item.video && item.video !== null && item.free_preview && (
              //   <span
              //     className="text-primary pointer"
              //     onClick={() => {
              //       setPreview(item.video.Location);
              //       setShowModal(!showModal);
              //     }}
              //   >
              //     Preview
              //   </span>
              // )}
              // </Item>
            )}
          />

          {/* <h3>Stepping into the World of Python</h3>
          <ul>
            <li>
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <span className="courses-name">NumPy Introduction</span>
                <div className="courses-meta">
                  <span className="duration">15 Min</span>
                  <span className="status locked">
                    <i className="flaticon-password"></i>
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <span className="courses-name">NumPy Getting Started</span>
                <div className="courses-meta">
                  <span className="duration">30 Min</span>
                  <span className="status locked">
                    <i className="flaticon-password"></i>
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <span className="courses-name">NumPy Creating Arrays</span>
                <div className="courses-meta">
                  <span className="duration">45 Min</span>
                  <span className="status locked">
                    <i className="flaticon-password"></i>
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <span className="courses-name">NumPy Array Indexing</span>
                <div className="courses-meta">
                  <span className="questions">4 questions</span>
                  <span className="duration">1 Hour</span>
                  <span className="status locked">
                    <i className="flaticon-password"></i>
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <span className="courses-name">NumPy Array Slicing</span>
                <div className="courses-meta">
                  <span className="duration">1.5 Hour</span>
                  <span className="status locked">
                    <i className="flaticon-password"></i>
                  </span>
                </div>
              </a>
            </li>
          </ul>
          <h3>Python MySQL</h3>
          <ul>
            <li>
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <span className="courses-name">Python MySQL</span>
                <div className="courses-meta">
                  <span className="duration">01 Hour</span>
                  <span className="status locked">
                    <i className="flaticon-password"></i>
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <span className="courses-name">
                  Python MySQL Create Database
                </span>
                <div className="courses-meta">
                  <span className="questions">3 questions</span>
                  <span className="duration">1.1 Hour</span>
                  <span className="status locked">
                    <i className="flaticon-password"></i>
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <span className="courses-name">Python MySQL Create Table</span>
                <div className="courses-meta">
                  <span className="duration">1.5 Hour</span>
                  <span className="status locked">
                    <i className="flaticon-password"></i>
                  </span>
                </div>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default SingleCourseLessons;
