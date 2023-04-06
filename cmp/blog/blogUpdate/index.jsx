import Style from './blogupdate.module.css';
import Link from 'next/link';

const BlogUpdate = ()=>{
    return(
        <>
            <div placeholder="blur" blurDataURL="/blurbgreact.png"  className={` ${Style.mainImage}  animate__animated animate__fadeIn d-flex align-items-center justify-content-center contaner-fluid`}>
                <div className={Style.opacityDiv}></div> 
                <div className={`text-center`} style={{position:'absolute'}}>
                    <h1 className={`${Style.head_service}`}>Blog</h1>
                    <div>
                        <Link href="/"><span className={`${Style.home}`}>HOME</span></Link>
                        <span className={`${Style.it_service}`}> <i className={`fa fa-angle-right`} style={{color:'white', fontSize:'17px'}}></i> BLOG</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogUpdate;