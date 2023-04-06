import Style from "./navbar.module.css";
import { Form } from "react-bootstrap";
import Logo from "../../../cmp/shared/logo";
import Link from "next/link";
import Image from "next/image";
const Navbar = ({open}) =>{
    return(
        <>
            <div className="border-bottom px-4 bg-white d-flex justify-content-between align-items-center pt-2" 
                style={{
                    width:'100%',
                    height:'65px',
                    position: 'fixed',
                    zIndex: '10000',
                    transition: '0.3s',
                    top: 0
                }}> 
                    <div className="py-4 px-3 overflow-hidden">
                        <Logo />
                    </div>
                    <div>
                        <Form >
                            <div className={`position-relative d-flex justify-content-center align-items-center ${Style.searchBox}`}>
                                <i className="fa fa-search position-absolute" style={{left:"20px"}}></i>
                                <Form.Control type="search" placeholder="Search in front" />
                            </div>
                        </Form>
                    </div>
                    <div className="d-flex align-items-center">
                        <Link href='/'>
                            <button className={`d-flex ${Style.iconBox} btn justify-content-center align-items-center mx-1`}>
                                <i className="fa fa-bell-o "></i>
                            </button>
                        </Link>
                        <Link href='/'>
                            <button className={`d-flex ${Style.iconBox} btn justify-content-center align-items-center mx-1`}>
                                <i className="fa fa-file-o"></i>
                            </button>
                        </Link>   
                        <Link href='/' >
                            <button className={`d-flex ${Style.iconBox}  btn justify-content-center align-items-center mx-1`}>
                                <i className="fa fa-gg"></i>
                            </button> 
                        </Link>  
                        <Link href='/'>
                            <button className="btn ">
                                <div className={`d-flex ${Style.profileBox} position-relative justify-content-center align-items-center mx-1`}>
                                    <Image 
                                        src='/profile.jpg'
                                        width={38}
                                        height={38}
                                        alt="profile-image"
                                        className="rounded-circle"
                                    />
                                </div>
                                
                                <div className={`${Style.onlineStatus}`}>

                                </div>
                            </button> 
                        </Link>                                         
                    </div>
                </div>
        </>
    );
}
        
export default Navbar;