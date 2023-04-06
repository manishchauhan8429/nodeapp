import Layout from '../../cmp/layout';
import Slug from "../../cmp/blog/slug/";
import Head from 'next/head';
const Blog = () =>{
    return (
        <>
        <Layout>
            <Head>
              <title>Nodewap - It And Software Company In Bengaluru</title>
              <meta 
                name="description" 
                content="web developer, digital marketing,cloud service, ott software development, mobile app development, ui & ux design, web and application, best web disigner and developer" />
                <meta name="keywords" 
                content="IT company,IT Services Company,it consulting companies,top it companies,it outsourcing companies,indian it,stericycle shred it,atos it solutions,best it companies,it startup,it global,biggest it companies,largest it companies,top 10 it companies,webdevlopment,full stack developer,front end devlopment, back end devlopment, web devlopment, webdevelopment company, python web development, php development, web desigh and devlopment, backend developer,full stack web develpment,web application, laravel, development,ui devlopment,website,website design,website builder, web design, making a website, free website builder, free website, website creator, free website creator, wix website, useless web, websites, squarespace pricing, website google, user testing, web hosting, best website builder, website hosting, free website maker, ecommerce website, wesite maker,wordpress website wordpress website builder, how to make website, how to build website, how to create a website, built website in 5 minutes, coding, coding ninja, world best website, mobile app development, app devlopment, adroid app development, how to make apps, how to learn coding, where to learn coding,  ott software development, ott, ott platefrom development, cloud service,best website development in company in bihar" />
                <meta name="author" content="Nodewap" />
            </Head>
             <Slug />
        </Layout>     
        </>
    );
} 
export default Blog;