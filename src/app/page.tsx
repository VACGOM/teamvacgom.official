'use client';

import styles from './page.module.css';
import MainHeader from '@/app/_component/molecule/MainHeader';
import BlogBox from "@/app/_component/atom/HomeButton/BlogBoxSecond";
import LeftBox from "@/app/_component/atom/HomeButton/LeftBoxSecond";
import RecruitBox from "@/app/_component/atom/HomeButton/RecruitBoxSecond";
import TeamIntroBox from "@/app/_component/atom/HomeButton/TeamIntroBoxSecond";

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

