'use client';

import '@/app/ui/news/parallax.css';

import React from 'react';
import { useEffect } from 'react';


export default function Parallax() {
  return (
    <div className="outer-box">
    {/* Container for all sliders, and pagination */}
    <main className="sliders-outer-box">
      {/* Here will be injected sliders for images, numbers, titles and links */}
      {/* Simple pagination for the slider */}
      <ul className="pagination">
        <li className="pagination__item">
          <a className="pagination__button" />
        </li>
        <li className="pagination__item">
          <a className="pagination__button" />
        </li>
        <li className="pagination__item">
          <a className="pagination__button" />
        </li>
        {/* <li className="pagination__item">
          <a className="pagination__button" />
        </li> */}
      </ul>
    </main>
    <div className="mobile-slider-outer-box">
      <ul className="m">
          <li className="m__item">
            <div className="m-title-wrap">
              <div className="m-number">01</div>
              <div className="m-item-title">Like My Style?</div>
            </div>
            <a href ="/flip/01" className="m-item-one">
            </a>
            <a href="/flip/01" className="m-read-news-btn">Read News</a>
          </li>
          <li className="m__item">
          <div className="m-title-wrap">
          <div className="m-number">02</div>
          <div className="m-item-title">Culture Importer</div>
          </div>
            <a href ="/flip/02" className="m-item-two">
            </a>
            <a href="/flip/02" className="m-read-news-btn">Read News</a>
          </li>
          <li className="m__item">
          <div className="m-title-wrap">
          <div className="m-number">03</div>
          <div className="m-item-title">Why Innovation?</div>
          </div>
            <a href ="/flip/03" className="m-item-three">
            </a>
            <a href="/flip/03" className="m-read-news-btn">Read News</a>
          </li>
        </ul>
    </div>
  </div>
    );
  }

  