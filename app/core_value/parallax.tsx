'use client';

import { useEffect } from 'react';
import '@/app/ui/core_value/parallax.css';

export default function Parallax() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fadeInUp, .animate-slideInLeft, .animate-zoomIn, .animate-zoomOut');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });
  
    elements.forEach(el => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);

  return (
        <div id="parallax-world-of-ugg">
        <section>
          <div id="brand" className="title">
            {/* <h3>Ever Changing</h3> */}
            <h1>我們的核心價值</h1>
          </div>
        </section>
        <section  id="origin">
          <div className="parallax-core_value-one animate-fadeInUp">
            <h2>自主資訊系統</h2>
          </div>
        </section>
        
        <section className="section-words">
          <div id="story" className="block">
            <p>
              <span className="first-character ny">來
              </span>聊聊我們奶昔店的萬萬CRM系統。這個系統不僅幫我們管理顧客信息，還能自動處理訂單，確保每杯奶昔準時送達。它支持營銷活動，讓你隨時了解我們的最新優惠和活動。而且，數據分析功能讓我們能更好地了解經營狀況，做出明智的決策。萬萬CRM系統，讓我們互相分享流量！
            </p>
          </div>
        </section>
        
        <section>
        <div className="parallax-core_value-two animate-slideInLeft">
            <h2>我們的團隊</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            <p><span className="first-character ny">萬</span>萬的團隊如同一幅夢幻畫面，結合了來自上海的設計大師和娛樂圈的創意天才。我們的專案經理是熱愛自行車的探險家，前端工程師則是DJ兼職的音樂魔術師，擁有全能的後端工程師。基地座落在小島的美術館旁，並持續得到美國AI團隊的強力支援。這個獨特的組合，不僅打造了我們獨一無二的奶昔，更是創新和藝術的完美結晶。</p>
           </div>
        </section>

        <section  >
        <div className="parallax-core_value-three animate-zoomIn">
            <h2>我們的靈魂</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            
            <p>常說圓心代表位於我們存在最深處的核心，圓周代表我們的外部覺知。我們試著把注意力定念在擇、沖、放、裹每一個細小的支線與行動上，無思無想的從容，讓純淨的品質可以流露，我們長期聆聽自身內心的聲音，開創出荒野間靜候的小徑。一種生活的態度截然展開。</p>

          </div>

          

        </section>

        <section  >
        <div className="parallax-core_value-two animate-zoomOut">
            <h2>智能點餐AI系統</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            
            <div className="sub-title">個性化與健康關懷：以身心為友，品味生命滋養</div>
            <p>
            數據的靈魂撫育我們準確記錄每一次的選擇，儲藏每一份偏好，雕琢出專屬於個人的推薦，
            像母親般細膩地照顧你的需求，讓用餐不僅是填飽肚腹，而是調和身心、品味生活的一部
            分。</p>

            <div className="sub-title">平台整合與便利性：流動之間，重拾自由的節奏</div>
            <p>
            如活水般流動於不同平台之間，將便利與效率無縫結合。每一次簡單的點擊，都為忙碌的現代人釋放了更多光陰，用戶從瑣碎的等待中抽身，在時間的流動中重新找回自由。點單進度宛若日出的變化，每位賓客在時光流動中掌握了自身的節奏，流暢之舞讓用戶不僅感受到科技的穩定與冷靜，還能享受到那一刻的平靜與專注，去追逐真正熱愛的人事物 ─ 夢想、家人、朋友，或是探索真相以外的自我。</p>

            <div className="sub-title">生態圈與供應鏈管理：珍惜資源，如禪之和諧</div>
            <p>
            從田間到餐桌，每一份原料的旅程都經過悉心守護。供應鏈如和諧的琴弦，串聯上下游的關係，維繫品質的永恆與真誠。每一份食材不僅有它的故事，更攜帶著企業對地球的承諾，讓顧客感受到純粹與信任。</p>

            <div className="sub-title">環保與社會責任：共鳴自然，永續共生</div>
            <p>像破曉的微光，我們提前預測了可能的需求，在光景初露前完善該有的準備，減少食物浪費，質樸得珍惜每一寸物料。企業與賓客之間形成共鳴，為未來播下希望的種子，共同愛護地球的生態，讓下一代也能感受到這份誠摯與溫暖。</p>

          </div>

          

        </section>

      </div>
    );
  }