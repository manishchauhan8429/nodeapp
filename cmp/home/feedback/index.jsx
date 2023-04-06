import Image from 'next/image';
import Style from './feedback.module.css';
import totalData from "./feedback.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";
const FeedData =(data)=>{   
    return(
    <>
        <div className={`col-md-8 py-5 px-lg-4 text-center m-auto ${Style.sliderdiv}` }>                                                       
            <div>
                <p className={`${Style.paragra}`} >{data.allData.feed}</p>
            </div>
            <div className={`text-center py-5`}>
                <div className={`${Style.roundBox} m-auto`}>
                    <div className={`${Style.round}`}>                                        
                        <Image 
                            src={data.allData.image} 
                            width={100} 
                            height={100} 
                            alt='sliderimage'
                            placeholder="blur"
                            blurDataURL="/blurcardbg.webp"  
                        />
                    </div>
                </div>
                <div className={`d-flex flex-column  mb-4`}>
                    <h5 style={{fontSize:'22px', fontWeight:'600', color:'#fff'}} className={`mt-2`}>{data.allData.username}</h5>
                    <p style={{fontSize:'18px', fontWeight:'600', color:'#005AFF'}}>{data.allData.userpost}</p>
                </div>                                
            </div>
        </div> 
    </>
    );
}
const Feedback = ()=>{

    return(
        <>
        <div className={`${Style.bgDiv}`}>
            <div className={`${Style.imgDiv}`}>
                <div className={`container `} style={{paddingTop:'220px'}}>
                    <div className={`row `}>
                        <h2 className={`text-light text-center ${Style.allText}`}>What people say about us</h2>
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay= {{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >                           
                          {    
                            totalData.map((item,index)=>{                            
                                return (
                                    <SwiperSlide key={index}>
                                        <FeedData allData={item} />
                                    </SwiperSlide>
                                );
                            })
                          } 
                        </Swiper>               
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Feedback;