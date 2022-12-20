import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
// import user from "../../server/models/user.model";
import { Container, Row, Col } from 'react-bootstrap'


const Register = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      // console.log("REGISTER RESPONSE", data);
      toast("Registration successful. Please login.");
      setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="bg-light m-auto mt-5 rounded-lg">
            <h1 className="text-center square p-2">Register</h1>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleInputUser1">Username</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputUser1" aria-describedby="userHelp" placeholder="Enter full name" required />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password" required />
              </div>
              <button type="submit" disabled={!name || !email || !password || loading} class="btn btn-warning mt-3">
                {loading ? <SyncOutlined spin /> : "Register"}
              </button>
            </form>

            <p className="text-center p-3">
              Already have an account?{" "}
              <Link href="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </p>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Register;
