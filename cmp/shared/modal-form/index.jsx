import Style from "./modalform.module.css";
import { useState } from "react";
import {Modal,Form,Button} from "react-bootstrap";
const modalForm = ()=>{
    const[modalState,changeModalState] = useState(false);
    return(
        <>
        <Modal show={modalState}>
            <Modal.Header closeButton onClick={()=>changeModalState(false)}>
                <Modal.Title className={`${Style.headermodal} p-0 m-0`}>CONTACT ME</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Your Mobile No.</Form.Label>
                        <Form.Control type="number" placeholder="Enter phone" />
                    </Form.Group>

                    <Form.Group className="mb-3" required>
                        <Form.Control
                            as="textarea"
                            placeholder="Write your query..."
                            style={{ height: '100px' }}
                        />
                    </Form.Group>
                    <Button className={`${Style.contactBtn}`} type="submit">
                        Send me
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
        
        </>
    )
}

export default modalForm;