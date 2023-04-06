import Image from 'next/image';
import { 
    Container,
    Row,
    Col
 } from 'react-bootstrap';
 import Frm from '../../shared/contact-form';

import Style from './location.module.css';
const Location = ()=>{
    return (
        <>
        <Container fluid className={`${Style.maincont}`} >
            <Row>
                <div className={`${Style.formdiv}`}>
                    <Frm />
                </div>
                <Col md="7" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14326.592630251134!2d85.3957918!3d26.1430126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef79e342408725b6!2sWap!5e0!3m2!1shi!2sin!4v1667648678265!5m2!1shi!2sin" width="100%" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>

                <Col md="5">
                    <Image 
                         src="/mapbg.png"
                         width={500}
                         height={500}
                         alt="star"
                    />
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Location;