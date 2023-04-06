import Style from "./sidenav.module.css";
import Link from "next/link";
import data from "../menu.json";
const MenuDesign = (allData)=>{
    return (
        <>
            <Link href={allData.allItems.url}>
                <button className="btn text-start">
                    <i className={`ps-4 me-2 ${allData.allItems.icon}`}></i>{allData.allItems.label }
                </button>                  
            </Link>
        </>
    );
}

const Sidenav = ({open,setOpen})=>{
    return(

    <>
      <div style={{
        width: open ? 250 : 0,
        height: '100vh',
        position: 'fixed',
        zIndex: '10000',
        top: 65,
        left: 0,
        transition: '0.3s'
      }} 
      className={`border-end ${Style.leftMenu}`}
      >
        <div className={`d-flex flex-column m-0`}  >
            <div onClick={()=>setOpen(!open)} className={`d-flex justify-content-center align-items-center ${Style.closeMenu}`}>
                <i className="fa fa-arrow-left"></i>
            </div>            
            <div className={`d-flex flex-column m-0 pt-2 ${Style.sidenav}`} >
                <Link href='/admin'>
                    <button className="btn text-start">
                    <i className="fa fa-home ps-4 me-2"></i> Dashboards
                    </button>
                </Link>
                <small className="py-3 ps-4">PAGES</small>
                {
                    data.map((item,index)=>{    
                        return <MenuDesign allItems={item} key={index} /> ;                        
                    })
                }
            </div>
        </div>
  
      </div>
    </>
  )};
  export default Sidenav;
  