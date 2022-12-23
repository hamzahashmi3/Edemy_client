import { useEffect } from "react";
import TopNav from "../components/TopNav";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "../public/css/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "antd/dist/antd.css";
import 'antd/dist/reset.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";

import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
// import "../node_modules/react-modal-video/css/modal-video.min.css";
// import "react-accessible-accordion/dist/fancy-example.css";
// import "react-tabs/style/react-tabs.css";
// import "react-image-lightbox/style.css";
// import "swiper/css/bundle";
import "../styles/style.css";
import "../styles/responsive.css";



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
      <Provider>
        <ToastContainer position="top-center" />
        <Navbar />
        {/* <TopNav /> */}
        <Component {...pageProps} />
        <Footer />
      </Provider>
  );
}

export default MyApp;
