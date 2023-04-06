import Style from './faq.module.css';
import Image from 'next/image';
import {
    Accordion
} from 'react-bootstrap';
const Faq = ()=>{
    return(
        <>
        <div className={`py-5`}>
            <div className={`container`}>
            <div className={`row py-5 `}>
                <div className={`col-md-6 p-4 `}>
                    <div className={`card border-0`}>
                        <Image 
                            src="/faq.png" 
                            width={508} 
                            height={444} 
                            alt="faq" 
                            className={`${Style.faqimg}`}
                            placeholder="blur"
                            blurDataURL="/blurcardbg.webp" 
                        />
                    </div>
                </div>
                <div className={`col-md-6 d-flex flex-column  pt-4 justify-content-start `}>
                    <div className={`d-flex flex-column justify-content-center ${Style.faxbox} `} style={{ paddingRight:'150px'}}>
                            <h6 className={`${Style.chooseh5}`}>
                                <span  className={`me-3 p-0 m-0`}>
                                    <Image 
                                        src="/shape_line.png" 
                                        width={35} 
                                        height={7} 
                                        alt="shape_line"                     
                                    />
                                </span>
                                FAQ</h6>
                        <h2 style={{fontSize:'36px', fontWeight:'600', lineHeight:'43px'}}>
                        Most common question
                        about our services
                        </h2>
                    </div>

                    <div className={`Style.faxbox`}>
                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Where can i get analytics help</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.m.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What kind of data need for analytics ?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What kind of data need for analytics ?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. 
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Faq;