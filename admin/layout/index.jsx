import { useState } from "react";
import Sidenav from "./sidenav";
import Navbar from "./navbar";
import Section from './section';
const Layout =({children})=>{
  const [open,setOpen] = useState(true);
  return (
    <>
    <div>
      <Navbar open={open} />
      <Sidenav open={open} setOpen={setOpen} />
      <Section open={open} >
        {children}
      </Section>
    </div>
  </>
  );
}

export default Layout;