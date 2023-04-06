import Image from 'next/image';

const Small = ()=>(
    <>
        <div className="d-flex align-items-center">
            <div className="me-1">
                <Image 
                    src="/nodewap-logo.png"
                    width={35}
                    height={35}
                    alt="nodewap-logo"
                />
            </div>
            <h5 style={{
                fontWeight: 'bold',
                fontFamily: 'aquire'
                }}>Nodewap</h5>
        </div>
    </>
);

const Large = ()=>(
    <>
        <div className="d-flex align-items-center">
            <div className="me-1">
                <Image 
                    src="/nodewap-logo.png"
                    width={50}
                    height={50}
                    alt="nodewap-logo"
                />
            </div>
            <h3 style={{
                fontWeight: 'bold',
                fontFamily: 'aquire'               
                }}>Nodewap</h3>
        </div>
    </>
);

const Logo = ({small=true})=>{
    if(small) return <Small />;
    return <Large />
}

export default Logo;