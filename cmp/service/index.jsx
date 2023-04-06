import NavbarCont from '../layout/navbar';
import ItService from './itservice';
import Work from './work';
import Footer from '../layout/footer';
import OurGoals from './our-goal';
import Plan from './Plan';
import Team from './team';
import Faq from './faq';

const Service = ()=>{
    const design = (
        <>
          <NavbarCont  />
          <ItService />
          <Work />
          <OurGoals />
          <Plan />
          <Team />
          <Faq />
          <Footer />          
        </>
    );
    return design;
}
export default Service;
