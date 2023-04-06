import Style from "./header.module.css";
import { useState,useEffect } from "react";
import Cookies from 'universal-cookie';
import{
    Container,
    Row,
    Col,
    Form,
    Button,
    Modal
} from "react-bootstrap";
import Link from 'next/link';
import Image from "next/image";

const Header = ()=>{
    const[modalState,changeModalState] = useState(false);
    const cookies = new Cookies();
    useEffect(()=>{
        setTimeout(()=>{
            const getcookie = cookies.get('timer');
            getcookie ? changeModalState(false) : changeModalState(true);           
        },5000)        
    },[])

    const MOdalAction =()=>{             
        cookies.set('timer', 'today', {
            path:"/",
            maxAge:86400
        });                       
        return changeModalState(false);
    }

    return (
       <>
            <Modal show={modalState}>
                <Modal.Header closeButton onClick={MOdalAction}>
                    <Modal.Title className={`${Style.headermodal} p-0 m-0`}>CONTACT US</Modal.Title>
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
                            Send US
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal> 
            <Container fluid className={` ${Style.mainCont}`}>
                <Row>
                    <Col md="6" className={` p-5 m-0`}>
                        <div className={`${Style.LeftBg}`}>
                            <div className={`${Style.LeftSideBg}`}></div>
                            <div>
                                <h4 className={`${Style.headData} mb-3`}>Applying Data Science</h4>
                                <strong className={` ${Style.bigdata}`}>big data</strong>
                                <p className={`${Style.security} mb-4`}>Security analytics</p>
                                <div style={{width:'90%'}} className={`${Style.paraaffix}`}>
                                    <p className={`${Style.affiexed} mb-4`}>
                                        Affixed pretend account ten natural. 
                                        Need eat week even yet that. Incommode
                                        delighted he resolving sportsmen do in
                                        listening.
                                    </p>
                                </div>
                                <Link href='/'>
                                    <Button className={`${Style.btnGrad}`}>
                                        Get Started
                                    </Button> 
                                </Link>
                            </div>
                        </div>

                    </Col>

                    <Col md="6" className={` p-0 m-0`}>
                        <div className={`  ${Style.RightBg}`}>
                            <div className={`${Style.mainbg} px-3 `}>
                                <Image 
                                    src="/frontbg.png"
                                    width={597}
                                    height={429}
                                    alt="pic"
                                    placeholder="blur"
                                    blurDataURL="/blurcardbg.webp"  
                                />
                            </div>

                            <div className={`${Style.roundCont} `}>
                                <Image 
                                    src="/movingObj.png"
                                    width={218}
                                    height={212}
                                    alt="round"  
                                     />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
       </>
    );
}
export default Header;