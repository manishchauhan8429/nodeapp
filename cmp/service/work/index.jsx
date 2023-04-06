import Style from './work.module.css';
import Image from 'next/image';
import content from './work.json';

const CardDesign = (data)=>{
    return (
        <>
            <div className={`col-md-3 `}>
                <div className={`${Style.workCard}`}>
                    <div className='d-flex flex-column justify-content-center align-items-start '>
                        <Image src={data.cardContent.path} alt="pc" width="70" height="80" className={`${Style.faIcon}`} />
                                <div className={`my-4 py-3`} style={{borderBottom:'1px solid #ccc'}}>
                                <p>{data.cardContent.description}</p>
                                </div>
                                <div className={`d-flex`}>
                                <h6 className={`mb-3 me-5`} style={{fontWeight:'bold'}}>{data.cardContent.title}</h6>
                                <i className={`${data.cardContent.icon} ${Style.arrowIcon}`}></i>
                               </div>
                    </div>
                </div>
            </div>
       </>
    );
}
const Work = ()=>{
    const design = (
        <>
            <div className={`container-fluid ${Style.workCont}`}>
                <div className={`row`}>
                    {
                        content.map((item)=>{
                            return <CardDesign cardContent={item}  key={item.id}/>;
                        })
                    }
                </div>
            </div>
              {/* start customer stisfaction coding*/}
              <div className={`container-fluid `} style={{backgroundColor:'#E7EDF8'} }>
                    <div className={`row mb-4 py-5 d-flex px-lg-4 p-2 ${Style.downdiv} `}>
                        <div className={`col-md-6 ${Style.bgdiv}` }>                           
                            <div className={`${Style.imgDiv}`}>
                                <div className={`${Style.imgOpacity}`}></div>
                                <div className={`${Style.stisfection}`}>
                                    <div className={`row h-100  d-flex align-items-center`}>
                                        <div className={`col-md-4  d-flex justify-content-end ${Style.colround}`}>
                                            <div className={`${Style.roundDiv}`}>
                                            <h1 className={`${Style.h1percent}`}>85%</h1>
                                            </div>
                                        </div>
                                        <div className={`col-md-8 text-white`}>
                                            <div className={`${Style.custdiv}`} style={{position:'relative', paddingRight:'10px'}}>
                                            <h4 style={{fontWeight:'600'}}>Customer satisfaction</h4>
                                            <p style={{lineHeight:'27px', fontWeight:'580'}}>Pointure horrible margaret 
                                             suitable he followed speedily.
                                             Indeed vanity excuse or mr lo
                                             vers of on. By offer scale an 
                                             stuff. Blush be sorry no sight sa
                                             ng lose ecstatic and properly.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        <div className={`col-md-6`}>
                            <div className={`${Style.clint}`}>
                                <div className={`${Style.clintbg}  p-5 text-white `}>
                                    <div>
                                        <h1 style={{fontWeight:'600', fontSize:'60px'}}>45K</h1>
                                        <h4 style={{fontWeight:'bold'}}>Customers worldwide</h4>
                                        <p >Mentioning horrible margaret suitable
                                             he followed speedily. Indeed vanity 
                                             excuse or mr lovers of on. By offer scale 
                                             an stuff. Blush be sorry no properly</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
            </div>       

        </>
    );
    return design;
}
export default Work;