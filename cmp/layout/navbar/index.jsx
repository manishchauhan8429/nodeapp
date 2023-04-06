import Style from "./navbar.module.css";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Button
} from "react-bootstrap";

import data from "./menu.json";

import Link from "next/link";
import Logo from '../../shared/logo';
import { useState } from "react";
import { useEffect } from "react";

const MenuDesign = (data)=>{
    const design =(
        <>       
            <Link href={data.menuInfo.url} passHref>               
                <a className={`${Style.mynav} mx-4 my-2`}>
                    {data.menuInfo.label}
                </a>    
            </Link>       
        </>
    );
    return design;
}

const DropMenu = (data)=>{
    const design = (
        <>
        <NavDropdown className={`${Style.mynav} mx-4 my-2`} title={data.menuInfo.label} id="dropdown-container">
            {
                data.menuInfo.dropdownMenu.map((item)=>{
                    return <MenuDesign menuInfo={item} key={item.id} />;
                })
            }
        </NavDropdown>
        </>
    );
    return design;
}

const NavbarCont =()=>{
    const[stickey,changeStickeyData] = useState("bg-white fixed-top py-4");

    useEffect(()=>{
        window.onscroll =()=>{
            let tmp = "";
            let top = window.scrollY;
            if(top > 100)
            {
                tmp ="bg-white shadow fixed-top py-4 sticked";
            }
            else{
                tmp ="bg-white fixed-top py-4";
            }
            return changeStickeyData(tmp);
        }
    },[])

    const design = (
        <>
           <Navbar expand="lg" className={stickey}>
                <Container>
                    <Link href="/" passHref>
                        <a className="text-dark">
                            <Logo small={false} />
                        </a>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">                   

                    <Nav className="justify-content-center w-100">
                        <Link href="" passHref>               
                            <a className={`${Style.mynav} mx-4 my-2`}>
                                Helpline : +91 {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                            </a>    
                        </Link>

                        {
                            data.map((item)=>{
                                if(item.dropdown){
                                  return <DropMenu menuInfo={item} key={item.id} />  
                                }
                                return <MenuDesign menuInfo={item} key={item.id} />;
                            })
                       } 
                    </Nav>
                    <Nav>
                        <Link href='/contact-us'>
                            <Button className={`${Style.btnGrad}`}>
                                Get A Quote
                            </Button> 
                        </Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>    
        </>
    );
    return design;
}

export default NavbarCont;