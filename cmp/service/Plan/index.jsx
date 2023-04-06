import Style from './plan.module.css';
import Image from 'next/image'; 

const Plan = ()=>{
    return(
        <>
        <div className={`py-5`} style={{backgroundColor:'#E7EDF8'}}>
            <div className={`container py-5`}>
                <div className={`row w-100 p-0 m-0 `}>
                    <div className={`col-md-4 mb-5 d-flex flex-column align-items-start justify-content-center `}>
                        <h6 className={`${Style.chooseh5} text-center`}>
                        <span  className={`me-3 p-0 m-0`}>
                            <Image 
                                src="/shape_line.png" 
                                width={35} 
                                height={7} 
                                alt="shape_line"                     
                            />
                        </span>
                        OUR PRICING</h6>
                        <h1 style={{fontWeight:'bold'}}>
                            Committed to giving
                            the best lowest in technology
                        </h1>
                        
                    </div>
                    <div className="col-md-4 mb-5">
                    <div className={`${Style.regplan} `}>
                            <h4 style={{fontWeight:'bold', color:'#232323'}}>Regular Plan</h4>
                            <h2 style={{fontWeight:'bold', fontSize:'60px', marginBottom:'25px'}}><sup style={{fontSize:'34px'}}>$</sup>35<sub style={{fontSize:'20px', fontWeight:'normal'}}>/Monthly</sub></h2>
                            <p style={{fontSize:'16px', lineHeigh:'28px', color:'#666666'}}>Resolve parties but why she shewing. She sang know now minute exact dear.</p>
                            <button className={`btn rounded mb-4 ${Style.choosebtn}`}>Choose Plan</button>
                            <div>
                                <div className={`d-flex`}>
                                    <div className={``}>
                                        <i class="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}}>Unlimited install</p>   
                                </div>
                            </div>

                            <div>
                                <div className={`d-flex`}>
                                    <div className={``}>
                                        <i class="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}}>Unlimited Download</p>   
                                </div>
                            </div>

                            <div>
                                <div className={`d-flex`}>
                                    <div className={``}>
                                        <i class="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}}>Life time Support</p>   
                                </div>
                            </div>

                            <div>
                                <div className={`d-flex`}>
                                    <div className={``}>
                                        <i class="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}} className={``}>Free 40 GB Linux Hosting</p>   
                                </div>
                            </div>

                            
                        </div>
                        
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className={`${Style.preplan}`}>
                            <h4 style={{fontWeight:'bold', color:'#232323'}}>Premium Plan</h4>
                            <h2 style={{fontWeight:'bold', fontSize:'60px', marginBottom:'25px'}}><sup style={{fontSize:'34px'}}>$</sup>99<sub style={{fontSize:'20px', fontWeight:'normal'}}>/monthly</sub></h2>
                            <p style={{fontSize:'16px', lineHeigh:'28px', color:'#666666'}}>Resolve parties but why she shewing. She sang know now minute exact dear.</p>
                            <button className={`btn rounded mb-4 ${Style.choosebtn}`}>Choose Plan</button>
                            <div>
                                <div className={`d-flex`}>
                                    <div className={``}>
                                        <i class="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}}>Unlimited install</p>   
                                </div>
                            </div>

                            <div>
                                <div className={`d-flex`}>
                                    <div className={``}>
                                        <i class="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}}>Unlimited Download</p>   
                                </div>
                            </div>

                            <div>
                                <div className={`d-flex`}>
                                    <div className={``}>
                                        <i class="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}}>Life time Support</p>   
                                </div>
                            </div>

                            <div>
                                <div className={`d-flex`}>
                                    <div className={``}>
                                        <i class="fa fa-check-circle me-2" style={{color:'#104CBA', fontSize:'17px'}} aria-hidden="true"></i>
                                    </div>
                                        <p style={{color:'#666666'}} className={``}>Premium 100 GB Linux Hosting</p>   
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
export default Plan;