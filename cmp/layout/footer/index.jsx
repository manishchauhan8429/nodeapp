import Style from "./footer.module.css";
import {
    Row,
    Col
} from "react-bootstrap";

import Link from "next/link";
import Logo from '../../shared/logo';


const Footer =()=>{
    const design = (
        <>
        <div style={{background:'#091d3e', color:'white'}}>
                <Row className={`w-100 p-0 m-0 ${Style.footerRow}`}>
                    <Col md="4" className={` mb-4 ${Style.footerPadding} ${Style.footerlf} `}>
                        <div>
                            <Logo />
                            <p className={`${Style.myfont} my-4`}>Excellence decisively nay man yet
                               impression for contrasted remarkably.
                               There spoke happy for you are out. Fertile
                               how old address did showing
                            </p>
                            <div className={`d-flex  justify-content-between ${Style.socialIcon}`}>
                                <div className={`${Style.iconDiv} d-flex align-items-center justify-content-center`}>
                                <Link href={process.env.NEXT_PUBLIC_FACEBOOK}><i className={`fa fa-facebook text-white`}></i></Link>
                                </div>

                                <div className={`${Style.iconDiv} d-flex align-items-center justify-content-center`}>
                                    <Link href={process.env.NEXT_PUBLIC_TWITTER}><i className={`fa fa-twitter text-white`}></i></Link>
                                </div>

                                <div className={`${Style.iconDiv} d-flex align-items-center justify-content-center`}>
                                <Link href={process.env.NEXT_PUBLIC_LINKEDIN}><i className={`fa fa-linkedin text-white`}></i></Link>
                                </div>

                                <div className={`${Style.iconDiv} d-flex align-items-center justify-content-center`}>
                                <Link href={process.env.NEXT_PUBLIC_YOUTUBE}><i className={`fa fa-youtube text-white`}></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md="2" className={` mb-4 ${Style.footerPadding}`}>
                        <div className="d-flex flex-column align-items-start">
                            <h5 className={`${Style.myfont} text-white mb-4`}  style={{fontWeight:'bold'}}>Solutions</h5>
                            <Link href="/service"><a className={` ${Style.MenuLink}`}>IT Management</a></Link>
                            <Link href="/service" ><a className={` ${Style.MenuLink}`}>Cloud Service</a></Link>
                            <Link href="/service" ><a className={` ${Style.MenuLink}`}>Data Center</a></Link>
                            <Link href="/service" ><a className={` ${Style.MenuLink}`}>Software Development</a></Link>
                            <Link href="/service" ><a className={` ${Style.MenuLink}`}>Machine Learning</a></Link>
                        </div>
                    </Col>

                    <Col md="3" className={`mb-4  ${Style.footerPadding} pe-5`}>
                        <div className="d-flex flex-column align-items-start">
                            <h5 className={`${Style.myfont} text-white mb-4`}  style={{fontWeight:'bold'}}>Contact Info</h5>
                            <p className={`${Style.myfont} mb-4 `}>Muzaffarpur , Bihar (India)</p>
                            <div className={`d-flex `}>
                                <div className={`pe-3`}>
                                    <i className={`fa fa-clock-o ${Style.clock}`}></i>
                                </div>
                                <div>
                                    <h6>Opening Hours:</h6>
                                    <p className={`${Style.myfont}`}>10:00 AM – 06:00 PM</p>
                                </div>
                            </div>

                            <div className={`d-flex `}>
                                <div className={`pe-3`}>
                                    <i className={`fa fa-user-o ${Style.clock}`}></i>
                                </div>
                                <div>
                                    <h6>Phone:</h6>
                                    <p className={`${Style.myfont}`}>+91 {process.env.NEXT_PUBLIC_PHONE_NUMBER}</p>
                                </div>
                            </div>

                            <div>
                                <Link href='/developers' passHref>
                                    <a className={`d-flex justify-content-center align-items-center ${Style.developer}`}>
                                        <div className={`pe-3`}>
                                            <i className={`fa fa-users ${Style.clock}`}></i>
                                        </div>
                                        <div>
                                            <h6 className="pt-2 text-light">Developers</h6>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md="3" className={`ps-0 ${Style.footerPadding}`} style={{background:'#0C234A'}}> 
                        <div className={`d-flex flex-column align-items-start px-lg-5 ${Style.newsletter} `}>
                            <h5 className={`${Style.myfont}, ${Style.subs} text-white mb-4 `}  style={{fontWeight:'bold'}}>Subscribe To Newsletter</h5>
                            <p className={`${Style.myfont} text-start`}> Join our subscribers list to get the latest news and special offers . </p>
                            <form className={`${Style.formDiv}`}>
                                <input type="text" className={`form-control py-3 mb-3`} placeholder="Your Email" required style={{background:'inherit', color:'#f5f5f5'}} />
                                <button type="submit" className={`btn text-white  py-3 w-100 text-center ${Style.myfont}`} style={{background:'#104CBA'}}> Subscribe Now 
                                 <i className={`fa fa-paper ${Style.tele}`}></i></button>
                            </form>
                            <p className={`${Style.myfont}`}>Please select atleast one list.</p>
                        </div>
                    </Col>
                    <hr />
                    <Row  className={`${Style.footerpadd} d-flex justify-content-around`}>
                        <Col md="6">
                            <p>&#169; Copyright 2022 All Rights Reserved by <Link href="/"><a style={{fontWeight:'bold', color:'white'}}>Nodewap</a></Link></p>
                        </Col>

                        <Col md="6">
                            <div className={`d-flex align-items-center justify-content-end`}>
                                <div className={`${Style.footerAction} d-flex align-items-center justify-content-evenly w-50`}>
                                    <Link href="/terms"><a className="text-light">Terms</a></Link>
                                    <Link href="/privacy-policy"><a className="text-light">Privacy</a></Link>
                                    <Link href="/contact-us"><a className="text-light">Support</a></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Row>  
            </div>  
         
        </>
    );
    return design;
}

export default Footer;
