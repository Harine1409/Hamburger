import React from "react";
import logout from '../assests/icons8-logout-rounded-48 (1).png';
import { Modal, Button } from "react-bootstrap";
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false
        };
    }
    Handlelogout=() =>{
        debugger;
        this.setState({ modal: true })
    }
    CloseinitModal = () => {
        this.setState({ modal: false });
    };
    OkinitModal = () => {
        window.location.assign("/");

    };
    render() {
        return (
            <>
                <Modal show={this.state.modal}>
                    <Modal.Header>
                        <Modal.Title>
                           Logout
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div>Are You Sure you want to Logout ?</div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            onClick={(e) => {
                                this.CloseinitModal();
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="dark"
                            onClick={(e) => {
                                this.OkinitModal();
                            }}
                        >
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className="headermain">
                    <h1 className="dashboardhead">{window.location.pathname && window.location.pathname.split("/home/") ? `${window.location.pathname.split("/home/")[1].toUpperCase()} MODULE` : "MODULE"}</h1>
                    <button className="logoutbtn" onClick={this.Handlelogout} >Logout </button>
                </div>
            </>
        );
    }
}

export default Header;
