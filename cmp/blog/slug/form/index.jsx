import Style from './form.module.css';
import Link from 'next/link';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';

const Frm =()=>{
    return(
        <>
         <Container className={`mt-4 mb-5`}>
            <Row>
                <Col md="8">
                    <h4 style={{color:'#232323',fontSize:'24px',fontWeight:'600'}}>Leave A Comment</h4>
                    <Form>
                    <Form.Control as="textarea" className={`mb-3 rounded-0`} rows={7} placeholder="Comment" />
                    <Row>
                        <Col>
                             <Form.Control type="text" className={`mb-3 p-4 rounded-0`} placeholder="Name*" />
                        </Col>

                        <Col>
                        <Form.Control type="email" className={`mb-4 p-4 rounded-0`}  placeholder="Email*" />
                        </Col>
                    </Row>   
                    <Button className={`${Style.postbtn} px-5 py-3`} type="submit">Post Comment</Button>                
                    </Form>
                </Col>

                <Col md="4">
                </Col>
            </Row>
         </Container>
        </>
    );
}

export default Frm;