'use client';

import styles from './page.module.css';
import MainHeader from '@/app/_component/molecule/MainHeader';
import BlogBox from "@/app/_component/atom/HomeButton/BlogBox";
import LeftBox from "@/app/_component/atom/HomeButton/LeftBox";
import RecruitBox from "@/app/_component/atom/HomeButton/RecruitBox";
import TeamIntroBox from "@/app/_component/atom/HomeButton/TeamIntroBox";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainHeader />
      <div className={styles.content}>
        <LeftBox />
        <div className={styles.rightArea}>
          <BlogBox />
          <div className={styles.bottomRightBoxes}>
            <TeamIntroBox />
            <RecruitBox />
          </div>
        </div>
      </div>
    </main>
  );
}

