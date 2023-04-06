import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import ContImg from "./contact";
import Location from "./location";
import Section from "./section/index";

const Contact = () =>{
  return (
    <>
      <Navbar />
        <ContImg />
        <Section />
        <Location />
      <Footer />
    </>
  );
}
export default Contact;
