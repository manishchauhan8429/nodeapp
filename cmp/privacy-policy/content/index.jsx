import Style from './content.module.css';
import {
    Container,
    Card
} from "react-bootstrap";
const Content = ()=>{
    return(
        <>
            <Container className="mb-5">
                <div className={`shadow p-4 ${Style.content}`} >
                    <h5>Privacy Policy</h5>
                    <h6>                        
                    If you use our Services, you must abide by our Privacy Policy. You acknowledge that you have read our Privacy Policyand understand that it sets forth how we collect, use, and store your information. If you do not agree with our Privacy Statement, then you must stop using the Services immediately. Any person, entity, or service collecting data from the Services must comply with our Privacy Statement. Misuse of any User's Personal Information is prohibited. If you collect any Personal Information from a User, you agree that you will only use the Personal Information you gather for the purpose for which the User has authorized it. You agree that you will reasonably secure any Personal Information you have gathered from the Services, and you will respond promptly to complaints, removal requests, and 'do not contact' requests from us or Users.
                    </h6>
                    <h5>Contact</h5>
                    <h6>
                    If you have any questions about Nodewap’s privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us
                    <br />
                    Email: nodewapitsolution@gmail.com
                    </h6>
                </div>
                
            </Container>
        </>
    );
}
export default Content;
