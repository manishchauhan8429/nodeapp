import Style from "./team.module.css";
import {
    Col,
    Row,
    Card,
    Container 
} from "react-bootstrap";
import Image from 'next/image';
import Teams from './team.json';


const  TeamData = (allData)=>{
    { 
        return(
      <>
        <Col md="3" className={`${Style.thiscol} p-4`}>
            <Card className={`${Style.maincard}`}>
                <Image 
                    src={allData.data.img} 
                    width={256}
                    height={304}
                    alt="teampictures"
                    placeholder="blur"
                    blurDataURL="/blurcardbg.webp" 
                    />
                <div className={`${Style.downBg}`}>
                    <Image 
                        src="/teamlow.png"
                        width={350}
                        height={40}
                        alt="24"                         
                        />
                </div>    
            </Card>
        <div className={`${Style.cardDiv}`}>
            <div className={`d-flex flex-column ${Style.socialdiv}`}>
                <i className={`fa fa-pinterest ${Style.socialIcon}`} aria-hidden="true"></i>
                <i  className={`fa fa-facebook ${Style.socialIcon}`} aria-hidden="true"></i>
                <i  className={`fa fa-twitter ${Style.socialIcon}`} aria-hidden="true"></i>
            </div>
        </div>
        <h2 className={`text-center ${Style.sporia}`}>{allData.data.name}</h2>
        <p className={`text-center ${Style.mark}`}>{allData.data.title}</p>
    </Col>
    </> 
    );  
    }
}


const Team =()=>{
    return (
       <>
         <Container fluid className={`${Style.mainCont}`}>
            <div>
                <h4 className={`${Style.chooseh4} text-center p-0 m-0`}>                    
                    EXPERT TEAM
                </h4>
                <div  className={`text-center mb-3`}>
                    <Image 
                        src="/shape_line.png" 
                        width={35} 
                        height={10} 
                        alt="shape_line"                      
                    />
                </div>            
                <h1 className={`text-center mb-5 ${Style.chooseh1}`} style={{fontWeight:'600',fontSize:'36px'}}>Meet  our expert from<br />
                    trusted source in IT services
                </h1>
            </div>
            <Container className={`py-4`}>
            <Row>
              {
                 Teams.map((items)=>{
                   return <TeamData data={items} key={items.id} />
                 })
              }
            </Row>
            </Container>
         </Container>
       </>
    );
}
export default Team;