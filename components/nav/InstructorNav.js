import { useState, useEffect } from "react";
import Link from "next/link";

const InstructorNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills">
      <Link href="/instructor" style={{ textDecoration: "none" }}>
        <li className={`nav-link ${current === "/instructor" && "active"}`}>
          Dashboard
        </li>
      </Link>
      <Link href="/instructor/course/create" style={{ textDecoration: "none" }}>
        <li className={`nav-link ${current === "/instructor/course/create" && "active"}`}>
          Course Create
        </li>
      </Link>
    </div>
  );
};

export default InstructorNav;
