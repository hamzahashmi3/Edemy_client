import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
import { Container, Row, Col } from 'react-bootstrap'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  // const { user } = state;

  // router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      // console.log("LOGIN RESPONSE", data);
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      // save in local storage
      window.localStorage.setItem("user", JSON.stringify(data));
      // redirect
      router.push("/user");
      // setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="m-auto bg-light mt-5 rounded-lg">
            <h1 className="text-center square p-2">Login</h1>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  placeholder="Enter email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input 
                  type="password" 
                  class="form-control" 
                  id="exampleInputPassword1" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" class="btn btn-warning mt-3" disabled={!email || !password || loading}>
                {loading ? <SyncOutlined spin /> : "Login"}
              </button>
            </form>

            <p className="text-center pt-3">
              Need an account?{" "}
              <Link href="/register" style={{ textDecoration: "none" }}>
                Register
              </Link>
            </p>
            <p className="text-center">
              <Link href="/forgot-password" style={{ textDecoration: "none" }}>
                <div className="text-danger">Forgot password?</div>
              </Link>
            </p>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Login;


// style={{ textDecoration: "none" }}