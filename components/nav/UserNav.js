import Link from "next/link";

const UserNav = () => {
  return (
    <div className="nav flex-column nav-pills mt-2">
      <Link href="/user" style={{ textDecoration: "none" }}>
        <li className="nav-link active">Dashboard</li>
      </Link>
    </div>
  );
};

export default UserNav;
