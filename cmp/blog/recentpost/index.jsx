import Style from './recentpost.module.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import AllData from './blog.json';

const Newblog=(data)=>{
    return(
        <>
            <Col md="12 mb-4 mt-4">
                <div className={`mb-4`}>
                    <Image 
                        src={data.blog.imagePath}
                        width={714}
                        height={397}
                        alt="blogthree"
                        placeholder="blur"
                        blurDataURL="/blurbgreact.png" 
                    />
                </div> 
                <div>
                    <i className={`fa fa-calendar me-2`} style={{color:'#104CBA'}}></i>
                    <span className={`me-4`} style={{color:'#666666'}}>{data.blog.date}</span>
                    <i className={`fa fa-user-circle-o me-2`} style={{color:'#104CBA'}}></i>
                    <Link href={data.blog.userlink}>
                        <span style={{color:'#666666',cursor:'pointer'}}>{data.blog.username}</span>
                    </Link>
                </div>    
                    <Link href={'/blog/'+data.blog.title.toLowerCase().split(" ").join("-")}>
                        <h3 className={`mt-4 ${Style.headh3}`}>{data.blog.title}</h3>
                    </Link>        
                    <div>    
                        <p className={`mt-4 ${Style.blogPara}`}>{data.blog.desc}</p>
                    </div>   
                    <Link href={data.blog.btnLink}>
                      <button className={`btn px-5 py-3 ${Style.blogbtnread}`}>{data.blog.btn}</button>
                    </Link>
            </Col>        
        </>
    );
}

const Miniblog=(minidata)=>{
    return(
        <>
            <div className={`d-flex mb-4`}>
                <div className={`me-3`}>
                    <Image 
                        src={minidata.miniblog.imagePath}
                        width={180}
                        height={180}
                        alt="blogthree"
                        placeholder="blur"
                        blurDataURL="/blurcardbg.png" 
                        className={`rounded`}
                        />
                </div>
                                
                    <div className={`${Style.minirecent}`}>
                        <p>{minidata.miniblog.date}</p>
                        <Link href={minidata.miniblog.blogLink}>
                            <h6>	 
                                {minidata.miniblog.title} 
                            </h6>
                        </Link>
                    </div>
            </div>  
        </>
    );
}

const Recentpost =()=>{
    return (
        <>
            <Container className={`my-5`} >
                <Row className={`mt-5`}>
                    <Col md="8">
                        <Row>
                            {
                                AllData.map((items, index)=>{
                                return <Newblog blog={items} key={index}/>
                                })
                            }
                        </Row>
                    </Col>
                    <Col md="4 mb-5 mt-4">
                        <div className={` p-4 px-5 mb-5 ${Style.searchDiv}`}>
                            <div className={``}>
                                    <label className={`${Style.serchLabel} mb-3`}>
                                        Search
                                    </label>
                                <form className={`${Style.mainfrm} d-flex`}>
                                    <input type="text" className={`${Style.frmInp}`} />
                                    <Button className={`btn px-3`}>Search</Button>
                                </form>
                            </div>    
                        </div>
                        
                        <div className={` p-4 px-5 mb-5 ${Style.minirecentdiv}`}>
                                <h4>Recent Post</h4>
                            <div className={`${Style.recentHr} mb-4`}></div>
                                {
                                    AllData.map((items, index)=>{
                                      return  <Miniblog miniblog={items} key={index}/>
                                    })                                    
                                }
                        </div>

                        <div className={`p-4 px-5 mb-5 ${Style.categorydiv}`}>
                            <h4 className={`${Style.cathead} mb-4`}>Categories</h4>
                            <p>Cloud Service</p>
                            <hr />
                            <p>Data Center</p>
                            <hr />
                            <p>Uncategorized</p>
                            
                        </div>

                        <div className={`p-4 px-5 mb-5 ${Style.tagdiv}`}>
                            <h4 className={`${Style.taghead} mb-4`}>Tag</h4>
                            <Button>Cloud Service</Button>
                            <Button>Data Center</Button>
                            <Button>Web</Button>                
                        </div>

                        <div className={`p-4 px-5 mb-5 ${Style.categorydiv}`}>
                            <h4 className={`${Style.cathead} mb-4`}>Archives</h4>
                            <p>June 2022</p>
                            <hr />
                            <p>April 2022</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Recentpost;