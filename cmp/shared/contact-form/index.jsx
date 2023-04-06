import Style from "./contact-form.module.css";
import {
    Col
} from "react-bootstrap";

import Image from 'next/image';
const contactForm = ()=>{
    return(
        <>
        <Col>
              <form className={`${Style.contact_form}`}>
              <h6 className={`${Style.chooseh5} ps-2`}>
                    <span  className={`me-2 p-0 m-0`}>
                        <Image 
                            src="/shape_line.png" 
                            width={35} 
                            height={7} 
                            alt="shape_line"                     
                        />
                    </span>
                    CONTACT US
                </h6>
                <h3 className="PS-2" style={{fontWeight:'bold'}}>Have Questions<br />
                Get in Touch!</h3>
                <input type="text"  name="con_name" placeholder="To make requests for further informat *" />
                <input type="email" name="email" placeholder="Email *" />
                <input name="con_subject"  type="text" placeholder="Subject *" className={`${Style.con_subject}`} />
                <textarea name="con_message" placeholder="Please describe what you need." className={`${Style.con_message}`}></textarea>
                <button className={`${Style.submit_btn} btn submit-btn btn-primary`} value="submit">Send message</button>
              </form>
          </Col>
        </>
    );
}
export default contactForm;