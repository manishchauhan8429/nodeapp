import Style from "./solution.module.css";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import Image from "next/image";
const Solution =()=>{
    return (
        <>
            <Container fluid className={`${Style.imgDiv}`}>
                <Row className={`p-md-5 ${Style.contRow}`}>
                    <Col md="6" >
                        <div>
                            <div className={`${Style.allText} text-light`}>
                                <h4>
                                    <span  className={`text-center me-2`}>
                                        <Image 
                                            src="/shape_line.png" 
                                            width={35} 
                                            height={10} 
                                            alt="shape_line"                      
                                        />
                                    </span>                            
                                    OUR SOLUTIONS
                                </h4>
                                <h2>How do we manage <br /> IT services for your industry</h2>
                                <div className={`${Style.curveIconBox}`}>
                                    <Image 
                                        src="/curve-shape.png" 
                                        width={66} 
                                        height={78} 
                                        alt="shape_line"                      
                                    />
                                </div>
                            </div>
                             
                            <div className={`${Style.optionDiv} text-light py-4`}>
                                <div className="d-flex pe-md-5 mb-4">
                                    <div className={`me-4`} >
                                        <div className={`${Style.iconBox} ` }>01</div>                                        
                                    </div>
                                    <div>
                                        <h4>Receive Custom Plan</h4>
                                        <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better performing renovation.</p>
                                    </div>
                                </div>
                                <div className={`d-flex pe-md-5 ${Style.rightBox}`}>
                                    <div className={`me-4`} >
                                        <div className={`${Style.iconBox} ` }>02</div>                                        
                                    </div>
                                    <div>
                                        <h4>Deliver expected project</h4>
                                        <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better performing renovation.</p>
                                    </div>
                                </div>
                            </div>                          
                        </div>
                    </Col>
                    <Col md="6">
                        <div className={`${Style.contectDiv} justify-content-end d-flex`}>
                            <Image 
                                src="/rocket.png"
                                width={497}
                                height={499}
                                alt="rocket"
                                placeholder="blur"
                                blurDataURL="/blurcardbg.webp" 
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Solution;
