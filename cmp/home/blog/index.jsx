import Style from "./blog.module.css";
import Image from 'next/image';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import Link from "next/link";
import allData from "./blog.json";

const BlogData = (data)=>{
  return(
    <>
      <Col md="4" className="pb-4">
        <div>
          <Image src={data.allItem.imagePath}
            alt="blog-pics" 
            width={352}
            height={264}
            placeholder="blur"
            blurDataURL="/blurcardbg.webp" 
          />
          <div className="py-2">
            <div className="d-flex pt-3">
              <p className="me-5" style={{fontSize:"16px",color:"#666666"}}>
                <i className="fa fa-calendar text-primary"></i> {data.allItem.date}
              </p>
              <Link href={data.allItem.userlink} passHref>
                  <a style={{fontSize:"16px",color:"#666666"}}><i className="fa fa-calendar text-primary"></i> {data.allItem.username}</a>
              </Link>
            </div>
            <Link href={data.allItem.blogLink} passHref>
              <a className={`${Style.title}`}>
                {data.allItem.title}
              </a>
            </Link>
            <p className={`${Style.subTitle} pt-3`}>{data.allItem.desc}</p>
            <Link href={data.allItem.blogLink} passHref>
              <a className={`${Style.readMore}`}>
                  READ MORE +
              </a>
            </Link>
          </div>
        </div>
      </Col> 
    </>
  );
}

const Blog = ()=>{
    const design =(
      <>
         <Container fluid className='py-5' style={{background:"#E7EDF8"}} >
            <div>
                <h4 className={`${Style.chooseh4} text-center p-0 m-0`}>                    
                  FROM THE BLOG
                </h4>
                <div  className={`text-center mb-3`}>
                    <Image 
                        src="/shape_line.png" 
                        width={35} 
                        height={10} 
                        alt="shape_line"                      
                    />
                </div>            
                <h1 className={`text-center mb-5 ${Style.chooseh1}`} style={{fontWeight:'600',fontSize:'36px'}}>Latest News & Articles
                </h1>
            </div>
            <Container>
              <Row>
                    {
                      allData.map((item,index)=>{
                        return <BlogData allItem={item} key={index}/> ;
                      })
                    }           
              </Row>
            </Container>
          </Container>
      </>
    );
    return design;
}

export default Blog;