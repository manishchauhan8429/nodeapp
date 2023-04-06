import Style from './service.module.css';
import Image from 'next/image';
import { Button, Container } from 'react-bootstrap';
import Link from 'next/link';

import data from './service.json';

const Card = (data)=>{
    return(
        <>
        <div className={`col-md-3 p-3 mb-2`}>            
            <div className={`card py-5 px-4 shadow border-0 ${Style.cardDiv}`}>
                <div className={`${Style.iconBox} d-flex justify-content-center align-items-center`}>
                    <Image 
                        src={data.allData.path}
                        width={60} 
                        height={60} 
                        alt="service-image"
                        placeholder="blur"
                        blurDataURL="/blurcardbg.webp"                       
                    />
                </div>
                <div className={`${Style.rightIcon} d-flex justify-content-center align-items-center`}>
                    <Image 
                        src='/servrtbgdotted.png'
                        width={128} 
                        height={200} 
                        alt="service-image"                      
                    />
                </div>
                <div className={`pt-4 ${Style.allText} `}>
                    <h4>{data.allData.title}</h4>
                    <p>{data.allData.para}</p>
                </div>
                <div>
                    <Link href={data.allData.url}>
                        <Button className={`${Style.readButton}`}> <i className='fa fa-arrow-right' style={{fontSize:'12px'}}></i> Read More</Button>
                    </Link>
                </div>
            </div>
        </div>

        </>
    );
}

const Service = ()=>{
    return(
        <>
        <Container fluid className={`py-5 ${Style.serviceCont}`}>
                <div className='mt-5'>
                    <h4 className={`${Style.chooseh4} text-center p-0 m-0`}>MEET OUR SERVICES</h4>
                    <div  className={`text-center mb-3`}>
                        <Image 
                            src="/shape_line.png" 
                            width={35} 
                            height={10} 
                            alt="shape_line"                      
                        />
                    </div>            
                    <h1 className={`text-center ${Style.chooseh1}`} style={{fontWeight:'600',fontSize:'36px'}}>Data sceince solutions for<br />
                        startup and enterprises
                    </h1>
                </div>
            <div className={`container`}>                
                <div className={`row`}>                    

                {
                    data.map((items)=>{
                        return <Card allData={items} key={items.id} />
                    })
                }
                
            </div>
            </div>
        </Container>
        </>
    );
}

export default Service;