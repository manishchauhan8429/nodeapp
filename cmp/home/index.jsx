import Header from "./header";
import Service from "./service";
import Story from "./story";
import Team from "./team";
import Solution from "./solution";
import Pricing from "./pricing";
import Feedback from "./feedback";
import Faq from './faq';
import Blog from "./blog";

const Home = ()=>{
    const design=(
        <>
            <Header />
            <Service />
            <Story />  
            <Team />       
            <Solution />
            <Pricing />
            <Feedback />
            <Faq />
            <Blog />
            
        </>
    );
    return design;
}
export default Home;