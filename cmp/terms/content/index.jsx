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
                    <h5>Terms and Condition</h5>
                    <h6>
                    1. By accessing this website, you agree to be bound by these website Terms and Conditions of Use, applicable laws and regulations and their compliance. If you disagree with any stated terms and conditions, you are prohibited from using or accessing this site. In addition, the materials contained in this site are secured by relevant copyright and trademark law.
                    <br />
                    2 Limitations <br />
                    You are responsible for your account's security and all activities on your account. You must not, in the use of this site, violate any applicable laws, including, without limitation, copyright laws, or any other laws regarding the security of your personal data, or otherwise misuse this site.
                    <br />
                    nodewap reserves the right to remove or disable any account or any other content on this site at any time for any reason, without prior notice to you, if we believe that you have violated this agreement.
                    <br />
                    You agree that you will not upload, post, host, or transmit any content that:
                    <br />
                    1. is unlawful or promotes unlawful activities;
                    <br />
                    2. is or contains sexually obscene content;
                    <br />
                    3. is libelous, defamatory, or fraudulent;
                    <br />
                    4. is discriminatory or abusive toward any individual or group;
                    <br />
                    5. is degrading to others on the basis of gender, race, class, ethnicity, national origin, religion, sexual preference, orientation, or identity, disability, or other classification, or otherwise represents or condones content that: is hate speech, discriminating, threatening, or pornographic; incites violence; or contains nudity or graphic or gratuitous violence;
                    <br />
                    6. violates any person's right to privacy or publicity, or otherwise solicits, collects, or publishes data, including personal information and login information, about other Users without consent or for unlawful purposes in violation of any applicable international, federal, state, or local law, statute, ordinance, or regulation; or
                    contains or installs any active malware or exploits/uses our platform for exploit delivery (such as part of a command or control system); or infringes on any proprietary right of any party, including patent, trademark, trade secret, copyright, right of publicity, or other rights.
                    While using the Services, you agree that you will not:
                    <br />
                    7. harass, abuse, threaten, or incite violence towards any individual or group, including other Users and nodewap contributors;
                    use our servers for any form of excessive automated bulk activity (e.g., spamming), or rely on any other form of unsolicited advertising or solicitation through our servers or Services;
                    <br />
                    8. attempt to disrupt or tamper with our servers in ways that could a) harm our Website or Services or b) place undue burden on our servers;
                    access the Services in ways that exceed your authorization;
                    <br />
                    9. falsely impersonate any person or entity, including any of our contributors, misrepresent your identity or the site's purpose, or falsely associate yourself with nodewap;
                    <br />
                    10. violate the privacy of any third party, such as by posting another person's personal information without their consent;
                    <br />
                    11. access or attempt to access any service on the Services by any means other than as permitted in this Agreement, or operating the Services on any computers or accounts which you do not have permission to operate;
                    <br />
                    12. facilitate or encourage any violations of this Agreement or interfere with the operation, appearance, security, or functionality of the Services; or
                    use the Services in any manner that is harmful to minors.
                    <br />
                    13. Without limiting the foregoing, you will not transmit or post any content anywhere on the Services that violates any laws. nodewap absolutely does not tolerate engaging in activity that significantly harms our Users. We will resolve disputes in favor of protecting our Users as a whole.
                    </h6>                    
                </div>
                
            </Container>
        </>
    );
}
export default Content;
