import Style from './newblog.module.css';
import Link from 'next/link';
import Image from 'next/image';
import AllData from '../../recentpost/blog.json';
import { Col, Container, Row, Button } from 'react-bootstrap';

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


const Newblog =()=>{
    return(
        <>
            <Container className={`mt-5`} >
                <Row className={`pt-5`}>
                <Col md="8 mb-4 mt-4">
                <div className={`mb-4`}>
                    <Image 
                        src="/blogthree.jpg"
                        width={714}
                        height={397}
                        alt="blogthree"
                        placeholder="blur"
                        blurDataURL="/blurbgreact.png" 
                    />
                </div> 
                <div>
                    <i className={`fa fa-calendar me-2`} style={{color:'#104CBA'}}></i>
                    <span className={`me-4`} style={{color:'#666666'}}>June 14, 2022</span>
                    <i className={`fa fa-user-circle-o me-2`} style={{color:'#104CBA'}}></i>
                    <Link href="/slug">
                        <span style={{color:'#666666',cursor:'pointer'}}>Nodewap</span>
                    </Link>
                </div>    
                            
                    <div>    
                        <p className={`mt-4 ${Style.blogPara}`}>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.</p>
                        <p className={`my-4 ${Style.blogPara}`}>New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                    </div>   

                    <div className={`${Style.bluebox} p-5 `}>
                        <p>Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.</p>
                    </div>

                    <p className={`my-4 ${Style.blogPara}`}>Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>

                    <h3 style={{color:'#232323',fontSize:'30px',fontWeight:'600',lineHeight:'42px'}}>Conduct replied off led whether? </h3>

                    <ul style={{lineHeight:'32px', fontSize:'16px', color:'#666666'}}>
                        <li>Pretty merits waited six</li>
                        <li>General few civilly amiable pleased account carried.</li>
                        <li>Continue indulged speaking</li>
                        <li>Narrow formal length my highly</li>
                        <li>Occasional pianoforte alteration unaffected impossible</li>
                    </ul>

                    <p className={`my-4 ${Style.blogPara}`}>Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.</p>

                    <div className={` mb-5 d-flex align-items-center justify-content-start p-0 m-0`}>
                        <h4 className={`me-3`} style={{fontSize:'16px', fontWeight:'600'}}>TAG :</h4>
                        <Button className={` btn-light border-0 ${Style.tagbtn}`}>Web</Button>
                    </div>

                    <Button className={`px-5 py-3 ${Style.prebtn}`}><i className={`fa fa-angle-double-left `}></i> Previous Post</Button> 
                </Col>        

                <Col md="4 mb-5 mt-4">
                        <div>
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
                        </div>  
                    </Col>
                </Row>    
            </Container> 
        </>
    );
}

export default Newblog;