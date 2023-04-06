import Style from './header.module.css';
import Link from "next/link";
const Header = ()=>{
    return(
        <>
            <div placeholder="blur" blurDataURL="/blurbgreact.png" className={` ${Style.mainImage} animate__animated animate__fadeIn d-flex align-items-center justify-content-center contaner-fluid mb-5`}>
                <div className={`text-center`}>
                    <h1 className={`${Style.head_terms}`}>Terms & Conditions</h1>
                    <div>
                        <Link href="/"><span className={`${Style.home}`}>HOME</span></Link>
                        <span className={`${Style.it_terms}`}> / Terms & Conditions</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
