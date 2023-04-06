import {
  Container,
  Row,
  Col,
  Card
} from "react-bootstrap";
import Style from "./section.module.css";

const Section = () =>{
  return (
    <>
    <Container fluid className={`py-5`}>
      <Container className={` ${Style.maincont}`}>
        <Row>
          <Col md="4" className={`p-0 m-0`}>
              <Card className={`p-5 flex-column align-items-center justify-content-center ${Style.allCard}`} >
                  <div className={`${Style.roundDiv} d-flex align-items-center justify-content-center mb-4`}>
                  <i className={`fa fa-phone`} style={{fontSize:'60px'}} aria-hidden="true"></i>
                  </div> 
                  <h3 style={{fontWeight:'bold'}} className={`mb-4`}>Hotline</h3>
                  <p className={`text-center`} style={{lineHeight:'27px'}}>A wonderful serenity has taken posse of my entire soul, like these.</p>
                  <h6>+4733378901</h6>
              </Card>
          </Col>

          <Col md="4" className={`p-0 m-0`}>
              <Card className={`p-5 flex-column align-items-center justify-content-center ${Style.allCard}`}>
                  <div className={`${Style.roundDiv} d-flex align-items-center justify-content-center mb-4`}>
                  <i className={`fa fa-map-marker`} style={{fontSize:'60px'}} aria-hidden="true"></i>
                  </div> 
                  <h3 style={{fontWeight:'bold'}} className={`mb-4`}>Hotline</h3>
                  <p className={`text-center`} style={{lineHeight:'27px'}}>A wonderful serenity has taken posse of my entire soul, like these.</p>
                  <h6>+4733378901</h6>
              </Card>
          </Col>

          <Col md="4" className={`p-0 m-0`}>
              <Card className={`p-5 flex-column align-items-center justify-content-center ${Style.allCard}`}>
                  <div className={`${Style.roundDiv} d-flex align-items-center justify-content-center mb-4`}>
                  <i className={`fa fa-envelope-o`} style={{fontSize:'50px'}} aria-hidden="true"></i>
                  </div> 
                  <h3 style={{fontWeight:'bold'}} className={`mb-4`}>Hotline</h3>
                  <p className={`text-center`} style={{lineHeight:'27px'}}>A wonderful serenity has taken posse of my entire soul, like these.</p>
                  <h6>+4733378901</h6>
              </Card>
          </Col>
        </Row>
     </Container>
     </Container> 
   </>
  );
}
export default Section;
