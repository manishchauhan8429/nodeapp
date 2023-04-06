import Style from './goal.module.css';
import Image from 'next/image';

const CardImg = [
    {
        id: '1',
        path: '/goalone.jpg',
        title: 'Manage it service',
        para: 'Prevailed mr tolerably discourse assurance estimable everything melancholy uncommonly solicitude inhabiting projection.'
        
    },

    {
        id: '2',
        path: '/goaltwo.jpg',
        title: 'Cyber Security',
        para: 'Prevailed mr tolerably discourse assurance estimable everything melancholy uncommonly solicitude inhabiting projection.'
        
    },

    {
        id: '3',
        path: '/goalthree.jpg',
        title: 'Manage it service',
        para: 'Prevailed mr tolerably discourse assurance estimable everything melancholy uncommonly solicitude inhabiting projection.'
        
    }
]


const Card = (data)=>{
    return(
        <>
        <div className={`col-md-4 p-3 mb-5`}>
            
            <div className={`card  ${Style.cardImg}`}>
                <div className={`${Style.opacityimg} d-flex flex-column align-items-center justify-content-center text-center`}>
                    <div className={`p-5 `}>
                        <h4 className={`${Style.cardh1} mb-4 text-white`}>{data.allData.title}</h4>
                        <p className={`text-white`}>{data.allData.para}</p>
                    </div>
                </div>
                    <Image 

                        src={data.allData.path}
                        width={352}
                        height={308}
                        alt="goal"
                        className={`${Style.cardImg} `} 
                        placeholder="blur"
                        blurDataURL="/blurcardbg.webp" 
                    />
            </div>
        </div>

        </>
    );
}

const OurGoals = ()=>{
    return(
        <>
        <div className={` py-5 ${Style.GoalCont}`}>
            <h4 className={`${Style.chooseh4} text-center p-0 m-0`}>WHY CHOOSE US</h4>
            <div  className={`text-center mb-3`}>
            <Image 
                src="/shape_line.png" 
                width={35} 
                height={10} 
                alt="shape_line"                      
            />
            </div>
            <h1 className={`text-center mb-5`} style={{fontWeight:'bold'}}>Our goal is giving best<br />
            our customers in technology</h1>    
            <div className={`container`}>
                <div className={`row`}>

                {
                    CardImg.map((items)=>{
                        return <Card allData={items} key={items.id} />
                    })
                }
                
            </div>
            </div>
        </div>
        </>
    );
}

export default OurGoals;