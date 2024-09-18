'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import MainHeader from '@/app/_component/molecule/MainHeader';
import BlogBox from "@/app/_component/atom/HomeButton/BlogBoxSecond";
import LeftBox from "@/app/_component/atom/HomeButton/LeftBoxSecond";
import RecruitBox from "@/app/_component/atom/HomeButton/RecruitBoxSecond";
import TeamIntroBox from "@/app/_component/atom/HomeButton/TeamIntroBoxSecond";


import BlogBoxSecond from "@/app/_component/atom/HomeButton/BlogBoxThird";
import LeftBoxSecond from "@/app/_component/atom/HomeButton/LeftBoxThird";


export default function Home() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <MainHeader />
      <div className={styles.content}>
        {showSecond ? <LeftBoxSecond /> : <LeftBox />}
        <div className={styles.rightArea}>
          {showSecond ? <BlogBoxSecond /> : <BlogBox />}
          <div className={styles.bottomRightBoxes}>
            <TeamIntroBox />
            <RecruitBox />
          </div>
        </div>
      </div>
    </main>
  );
}