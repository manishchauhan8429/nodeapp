import Style from "./addcontact.module.css";
import { Button, Card, Container, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Team from "../team-heading-details/team.json";
console.log(Team.length);
const AddContact = ()=>{
    const[modalState,changeModalState] = useState(false);
    return(
        <>
            <Container fluid>
                <div className={`d-flex justify-content-between align-items-center `}>
                        <h1 className={`p-0 m-0`} style={{fontSize:'22px', fontWeight:'600'}}>Contact</h1>
                        <Button onClick={()=>changeModalState(true)} className={`px-3 py-2`}>
                            <i className={`fa fa-user-plus`}></i> Contact
                        </Button>
                </div>
                <hr />

                <Modal show={modalState} style={{marginTop:'50px'}}>
                    <Modal.Header closeButton onHide={()=>changeModalState(false)}>
                        <Modal.Title className={`${Style.headermodal} p-0 m-0`}>Add New Blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Control type='file' accept="image/*" name='picture'/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' name='username' placeholder="Author Name" />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' name='blogTitle' placeholder="Blog Title" />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <textarea className='form-control' name="blogItem" rows="5" placeholder='write your blog here'></textarea>
                            </Form.Group>
                            <Button className={`${Style.submitBtn} mt-2`} type='submit' variant="success">Add Blog</Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                <Card className='p-3 shadow-sm'>
                    <div className=" d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center'>
                            <div>
                                <h4 className='p-0 m-0 me-2' style={{fontSize:'46px',fontWeight:'600' }}>{Team.length}</h4>
                            </div>
                            <div>
                                <p className='p-0 m-0'>Total Contact list</p>
                            </div>
                        </div>
                        <div>
                            <Form >
                                <div className={`position-relative d-flex justify-content-center align-items-center ${Style.searchBox}`}>
                                    <i className="fa fa-search position-absolute" style={{left:"20px"}}></i>
                                    <Form.Control type="search" placeholder="Search contact details" />
                                </div>
                            </Form>
                        </div>
                        <div className={`d-flex ${Style.customButton}`}>
                            <Button className="me-4" variant="outline-dark"><i className="fa fa-download"></i> Export <i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                            <Button className="" variant="outline-dark"><i className="fa fa-bars"></i> Filter </Button>
                        </div>
                    </div>
                </Card>
            </Container>
        </>
    );
}
export default AddContact;
