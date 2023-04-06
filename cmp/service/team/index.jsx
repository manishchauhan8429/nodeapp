import Image from 'next/image';
import Style from './team.module.css';
const Team = ()=>{
    return(
        <>
        <div className={`${Style.bgDiv}`}>
            <div className={`${Style.imgDiv}`}>
                <div className={`container `} style={{paddingTop:'220px'}}>
                    <div className={`row `}>
                        <div className={`col-md-6 py-5 px-lg-4 ${Style.sliderdiv}` }>
                            <div className={`card p-5 `} style={{background:'#0D2346', borderRadius:'30px'}}>
                                <div className={`${Style.Quotes}`}>
                                    <Image 
                                        src="/quote.png" width="90" height="60" alt="quote" />
                                </div>
                                <div className={`d-flex `}>
                                    <div className={`${Style.round} me-3`}>
                                        <Image 
                                            src="/cardimgone.jpg" width="100" height="100" alt='card1' placeholder="blur"
                                            blurDataURL="/blurcardbg.webp"  />
                                    </div>
                                    <div className={`d-flex flex-column  mb-4`}>
                                        <h5 style={{fontSize:'22px', fontWeight:'600', color:'#fff'}} className={`mt-2`}>Gavrau kumar</h5>
                                        <p style={{fontSize:'18px', fontWeight:'600', color:'#005AFF'}}>Senior Consultent</p>
                                    </div>
                                    
                                </div>
                                    <div>
                                        <p className={`${Style.paragra}`} style={{fontSize:'23px', lineHeight:'34px', color:'#cccc'}}> it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop </p>
                                    </div>
                            </div>
                        </div>
                        <div className={`col-md-6 py-5 px-4`}>
                            <div className={`card p-5 `} style={{background:'#0D2346', borderRadius:'30px'}}>
                                <div className={`${Style.Quotes}`}>
                                    <Image 
                                        src="/quote.png" width="90" height="60" alt="quote" />
                                </div>
                                <div className={`d-flex `}>
                                    <div className={`${Style.round} me-3`}>
                                        <Image 
                                             src="/cardimgtwo.jpg" width="100" height="100" alt='card1' placeholder="blur"
                                             blurDataURL="/blurcardbg.webp"  />
                                    </div>
                                    <div className={`d-flex flex-column  mb-4`}>
                                        <h5 style={{fontSize:'22px', fontWeight:'600', color:'#fff'}} className={`mt-2`}>Gavrau kumar</h5>
                                        <p style={{fontSize:'18px', fontWeight:'600', color:'#005AFF'}}>Senior Consultent</p>
                                    </div>
                                    
                                </div>
                                <div >
                                    <p className={`${Style.paragra}`} style={{fontSize:'23px', lineHeight:'34px', color:'#cccc'}}> it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop </p>
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

export default Team;