import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";
class Logincomponent extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      passwordshow: "password",
      loading: true
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  passwordtoggle = () => {
    let { passwordshow } = this.state;
    if (passwordshow == "password") this.setState({ passwordshow: "text" });
    else this.setState({ passwordshow: "password" })
  };
  onLoginClick = (e) => {
    if (this.state.username == '' && this.state.password == '') {
      toast.error('please enter your username and password')
    }
    else if (this.state.username == '') {
      toast.error('please enter your username')
    }
    else if (this.state.password == '') {
      toast.error('please enter your password')

    }
    else {
      toast.success('logged in successfully')
      window.location.href = "/home/codes";

    }


  };
  render() {
    return (
      <>
        <ToastContainer />

        <Container>
          <Row>
            <Col md="4" className="logindiv">
              <h1>Login</h1>
              <Form>
                <Form.Group controlId="usernameId">
                  <Form.Label>User name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter user name"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  <FormControl.Feedback type="invalid"></FormControl.Feedback>
                </Form.Group>

                <Form.Group controlId="passwordId">
                  <Form.Label>Your password</Form.Label>
                  <Form.Control
                    type={this.state.passwordshow}
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <button
                  type="button"
                    className="btn btn-primary eyeslashed"
                    onClick={this.passwordtoggle}
                  >
                    {" "}
                    {this.state.passwordshow == "password" ? (
                      <svg
                        width="20"
                        height="17"
                        fill="currentColor"
                        className="bi bi-eye-fill eyefill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="17"
                        fill="currentColor"
                        className="bi bi-eye-slash-fill eyefill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    )}
                  </button>
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Form>
              <Button
                className="loginbtn"
                color="primary"
                onClick={(e) => this.onLoginClick(e)}
              >
                Login
              </Button>
              <p className="mt-2">
                Forgot your password?{" "}
                <Link to="/forgotpassword">Fogot Password</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Logincomponent;
