import Style from "./team.module.css";
import { useState } from "react";
import {
    Col,
    Row,
    Card,
    Container,Button,Modal,Form
} from "react-bootstrap";
import Image from 'next/image';
import Teams from './team.json';
import Link from "next/link"; 

const  TeamData = (allData)=>{
    const[modalState,changeModalState] = useState(false);
    return(
      <>
        <Col md="3" className={`${Style.thiscol} mb-4  p-4`}>
            <Card className={`${Style.maincard}`}>
                <Image 
                    src={allData.data.img} 
                    width={256}
                    height={306}
                    alt="teampictures"
                    placeholder="blur"
                    blurDataURL="/blurcardbg.webp" 
                    />
                <div className={`${Style.downBg}`}>
                    <Image 
                        src="/teamlow.png"
                        width={350}
                        height={40}
                        alt="24"                         
                        />
                </div>    
            </Card>
        <div className={`${Style.cardDiv}`}>
            <div className={`d-flex flex-column ${Style.socialdiv}`}>
                <Link href={allData.data.fb}>
                    <i  className={`fa fa-facebook ${Style.socialIcon}`} aria-hidden="true"></i>
                </Link>
                <Link href={allData.data.insta}>
                    <i className={`fa fa-instagram ${Style.socialIcon}`} aria-hidden="true"></i>  
                </Link> 
                <Link href={allData.data.linkd}>             
                    <i  className={`fa fa-linkedin ${Style.socialIcon}`} aria-hidden="true"></i>
                </Link>
            </div>
        </div>
        <h2 className={`text-center ${Style.sporia}`}>{allData.data.name}</h2>
        <p className={`text-center ${Style.mark}`}>{allData.data.title}</p>
        <div className="text-center">
            <Button onClick={()=>changeModalState(true)}  className={`${Style.contactBtn}`}>Contact me</Button>
        </div>
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
        </Col>
    </> 
);  
}


const Team =()=>{
    return (
       <>
         <Container fluid className={`${Style.mainCont}`}>
            <div>
                <h4 className={`${Style.chooseh4} text-center p-0 m-0`}>                    
                    EXPERT TEAM
                </h4>
                <div  className={`text-center mb-3`}>
                    <Image 
                        src="/shape_line.png" 
                        width={35} 
                        height={10} 
                        alt="shape_line"                      
                    />
                </div>            
                <h1 className={`text-center mb-5 ${Style.chooseh1}`} style={{fontWeight:'600',fontSize:'36px'}}>Meet  our expert from<br />
                    trusted source in IT services
                </h1>
            </div>
            <Container className={`py-4`}>
            <Row>
              {
                 Teams.map((items)=>{
                   return <TeamData data={items} key={items.id} />
                 })
              }
            </Row>
            </Container>
         </Container>
       </>
    );
}
export default Team;