'use client';

import React from 'react';
import { useEffect } from 'react';
import '@/app/ui/roots/parallax.css';

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
            <h1>我們的緣起</h1>
          </div>
        </section>
        <section  id="origin">
          <div className="parallax-roots-one animate-fadeInUp">
            <h2>有趣的生活提案</h2>
          </div>
        </section>
        
        <section className="section-words">
          <div id="story" className="block">
            <p>
              <span className="first-character ny">因
              </span>因為想要有一個調皮, 有趣的生活提案, 
我們專注的語彙, 是品牌觀念, 美學, 科技應用, 無邊界整合能力,
我們想要藉由調皮去透露這些
讓日常的產品(奶昔, 話題性)可與消費者產生互動。
            </p>
          </div>
        </section>
        
        <section>
          <div className="parallax-roots-two animate-slideInLeft">
            <h2>擁抱世界的愛</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            <p><span className="first-character ny">萬</span>萬不僅是回憶與經驗的記錄，也是分享、對話與敞開，更是在日常生活中隨機產生的獨一無二行為藝術。一絲調皮與態度，我們的品牌願與您分享無限的樂趣和創意。我們的董事長曾遊歷世界，深諳藝術與歷史，這不僅是我們的優勢，更是我們品牌的靈感來源。這些珍貴的經歷豐富了我們的品牌理念，使科技與美學完美融合在每一個產品中。</p>
           </div>
        </section>

        <section  >
          <div className="parallax-roots-three animate-zoomIn">
            <h2>創意的本質</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            <p><span className="first-character ny">當</span>
            生活需要一點調皮的態度，我們的品牌站在這裡，帶來無限樂趣和創意。透過豐富的經驗，我們將品牌理念的獨特詮釋與科技與美學的完美融合，帶入每一個產品。讓我們的產品，像是那杯令人驚豔的奶昔，成為你生活中最亮眼的話題之一！</p>
           </div>
        </section>

      </div>
    );
  }