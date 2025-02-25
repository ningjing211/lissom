
import Head from 'next/head';
import Script from 'next/script';
import Header from '@/app/ideas/header';
import Footer from '@/app/ideas/footer';
import Vision from '@/app/vision/vision';

export default function Page() {
    return (
          <> 
            <Head>
            <meta property="og:image:secure_url" content="/thumbnail-one-one.png" />
            <meta name="msapplication-TileImage" content="/thumbnail-one-one.png" />
            <link rel="icon" href="/thumbnail-one-one.png" sizes="32x32" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;800;900&display=swap" rel="stylesheet" />
            <link rel="apple-touch-icon" href="/thumbnail-one-one.png" />
            <title>Lissom</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
          <Script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          />

        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        />
          <Script
            src="/header.js"
          />
          {/* <Script
            src="https://unpkg.com/zdog@1.1.3/dist/zdog.dist.min.js"
          />*/}
          <Script
            src="/vision.js"
          /> 

          {/* <p>Dashboard Page</p> */}
          <div>
          <Header />
          <div className="md:p-6 outer-background"> 
            <Vision />
            
          </div>
          <Footer />  
          </div>
          </>
    );
  }