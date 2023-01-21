import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Forgotpassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }
  onChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlesubmit = () => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      alert("link sent to email successfully");
      this.setState({ email: "" });
    } else {
      alert("please enter a valid email id");
    }
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md="4" className="logindiv">
              <h1>Forgot password</h1>
              <Form>
                <Form.Group controlId="usernameId">
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your Email Id"
                    value={this.state.username}
                    onChange={(e) => this.onChange(e)}
                  />
                  <FormControl.Feedback type="invalid"></FormControl.Feedback>
                </Form.Group>
              </Form>
              <Button
                onClick={this.handlesubmit}
                className="loginbtn"
                color="primary"
              >
                submit
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Forgotpassword;
