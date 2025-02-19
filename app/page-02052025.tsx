
import Head from 'next/head';
import Script from 'next/script';
import Video from '@/app/origin/video';
import Header from '@/app/ideas/header';
import Intro from '@/app/ideas/intro';
import NumberShows from '@/app/ideas/number_shows';
import Wall from '@/app/ideas/wall';
import Items from '@/app/item/item';
import Featured from '@/app/ideas/featured';
import Footer from '@/app/ideas/footer';


export default function Page() {
    return (
          <>
            <Head>
            {/* <meta property="og:image:secure_url" content="https://www.oneone.global/thumbnail-one-one.png" /> */}
            <meta name="msapplication-TileImage" content="https://www.oneone.global/thumbnail-one-one.png" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="www.oneone.global"></meta>
            <meta property="og:url" content="https://www.oneone.global/"></meta>
            <meta property="og:image" content="https://www.oneone.global/link-thumbnail.png"></meta>
            <meta property="og:image:width" content="1200"></meta>
            <meta property="og:image:height" content="600"></meta>
            <meta property="og:locale" content="zh_TW"></meta>
            <meta name="description" content="每一杯奶昔都是調皮的小精靈，帶著獨特風味和趣味，準備驚喜你味蕾。萬萬不僅僅是一個名字，而是一種生活態度。每個細節都灑滿美學追求，從店內設計到產品包裝，每一吋都展現我們對生活的熱愛。"></meta>
            <link rel="icon" href="https://www.oneone.global/thumbnail-one-one.png" sizes="32x32" />
            <link rel="apple-touch-icon" href="https://www.oneone.global/thumbnail-one-one.png" />
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

        {/* <Script 
            src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"
        /> */}

        <Script 
            src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
        />

          {/* <Script
            src="https://unpkg.com/zdog@1.1.3/dist/zdog.dist.min.js"
          /> */}
          {/* <Script 
            src="/waypoints.js"
          /> */}
          
          {/* <Script
            src="/number_shows.js"
          /> */}
          <Script
            src="/wall.js"
          />
          <Script
            src="/header.js"
          />
          <div>
          <Header />
          <Video />
          <div className="front-page-div p-6">
            
            
            <Intro />
            <Wall />
            {/* <NumberShows /> */}
            {/* <Items /> */}
            <Featured />
            
          </div>
          <Footer />

          </div>
          </>
    );
  }