import Style from './pricing.module.css';
import Image from 'next/image'; 

const Pricing = ()=>{
    return(
        <>
        <div className={`py-5`} style={{backgroundColor:'#E7EDF8'}}>
            <div className={`container py-4`}>
            <div>
                <h4 className={`${Style.chooseh4} text-center p-0 m-0`}>                    
                    OUR PRICING
                </h4>
                <div  className={`text-center mb-3`}>
                    <Image 
                        src="/shape_line.png" 
                        width={35} 
                        height={10} 
                        alt="shape_line"                      
                    />
                </div>            
                <h1 className={`text-center mb-5 ${Style.chooseh1}`} style={{fontWeight:'600',fontSize:'36px'}}>    Committed to giving<br />
                the best lowest in technology
                </h1>
            </div>
                <div className={`row w-100 p-0 m-0 `}>
                    <div className="col-md-4 mb-5">
                        <div className={`${Style.regplan} text-center`}>
                            <div className={`${Style.imgDiv} m-auto mb-4`}>
                            <Image
                                    src="/priceone.png"
                                    width={150}
                                    height={150}
                                    alt="priceone"
                                    placeholder="blur"
                                    blurDataURL="/blurcardbg.webp" 
                            />
                            </div>
                                <h5 style={{fontWeight:'bold', color:'#232323'}}>Regular Plan</h5>
                                <h2 style={{fontWeight:'bold', fontSize:'60px', marginBottom:'25px'}}>
                                <sup style={{fontSize:'34px'}}>$</sup>
                                    35
                                    <sub style={{fontSize:'16px',color:'#777777', fontWeight:'normal'}}>/Monthly</sub>
                                </h2>

                                <div className={` mb-4 d-flex flex-column align-items-center justify-content-center `}>
                            <div>
                                    <div className={`d-flex`}>
                                        <div>
                                            <i className="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}}>Unlimited install</p>   
                                    </div>
            
                                <div className={`d-flex`}>
                                    <div>
                                        <i className="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}}>Unlimited Download</p>   
                                </div>
                            
                                <div className={`d-flex`}>
                                    <div>
                                        <i className="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}}>Life time Support</p>   
                                </div>
                            </div>
                                </div>
                                <button className={`btn rounded mb-4 ${Style.choosebtn}`}>Choose Plan</button>
                                
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div className={`${Style.preplan} text-center`}>
                            <div className={`${Style.imgDiv} m-auto mb-4`}>
                            <Image
                                    src="/pricetwo.png"
                                    width={150}
                                    height={150}
                                    alt="pricetwo"
                                    placeholder="blur"
                                    blurDataURL="/blurcardbg.webp" 
                            />
                            </div>
                                <h5 style={{fontWeight:'bold', color:'#232323'}}>Primium Plan</h5>
                                <h2 style={{fontWeight:'bold', fontSize:'60px', marginBottom:'25px'}}>
                                <sup style={{fontSize:'34px'}}>$</sup>
                                    59
                                    <sub style={{fontSize:'16px',color:'#777777', fontWeight:'normal'}}>/Monthly</sub>
                                </h2>

                                <div className={` mb-4 d-flex flex-column align-items-center justify-content-center `}>
                            <div>
                                    <div className={`d-flex`}>
                                        <div>
                                            <i className="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                        </div>
                                        <p style={{color:'#666666'}}>Unlimited install</p>   
                                    </div>

                                    <div className={`d-flex`}>
                                        <div>
                                            <i className="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                        </div>
                                        <p style={{color:'#666666'}}>Unlimited access</p>   
                                    </div>
            
                                <div className={`d-flex`}>
                                    <div>
                                        <i className="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}}>Unlimited Download</p>   
                                </div>
                            
                                <div className={`d-flex`}>
                                    <div>
                                        <i className="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}}>Life time Support</p>   
                                </div>
                            </div>
                                </div>
                                <button className={`btn rounded mb-4 ${Style.choosebtn}`}>Choose Plan</button>
                                
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                    <div className={`${Style.busiplan} text-center`}>
                        <div className={`${Style.imgDiv} m-auto mb-4`}>
                        <Image
                                src="/pricethree.png"
                                width={150}
                                height={150}
                                alt="pricethree"
                                placeholder="blur"
                                blurDataURL="/blurcardbg.webp" 
                        />
                        </div>
                            <h5 style={{fontWeight:'bold', color:'#232323'}}>Business Plan</h5>
                            <h2 style={{fontWeight:'bold', fontSize:'60px', marginBottom:'25px'}}>
                            <sup style={{fontSize:'34px'}}>$</sup>
                                98
                                <sub style={{fontSize:'16px',color:'#777777', fontWeight:'normal'}}>/Monthly</sub>
                            </h2>

                            <div className={` mb-4 d-flex flex-column align-items-center justify-content-center `}>
                        <div>
                                <div className={`d-flex`}>
                                    <div>
                                        <i className="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                </div>
                                    <p style={{color:'#666666'}}>Unlimited install</p>   
                                </div>
        
                            <div className={`d-flex`}>
                                <div>
                                    <i className="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                </div>
                                    <p style={{color:'#666666'}}>Unlimited Download</p>   
                            </div>
                        

                        
                            <div className={`d-flex`}>
                                <div>
                                    <i className="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                </div>
                                    <p style={{color:'#666666'}}>Life time Support</p>   
                            </div>
                        </div>
                            </div>
                            <button className={`btn rounded mb-4 ${Style.choosebtn}`}>Choose Plan</button>
                            
                    </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}
export default Pricing;