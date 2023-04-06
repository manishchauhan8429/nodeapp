import Footer from "./footer";
import Navbar from "./navbar";

const Layout =({children})=>{
    const design = (
        <>
          <Navbar />
            {children}
          <Footer />  
        </>
    );
    return design;
}

export default Layout;