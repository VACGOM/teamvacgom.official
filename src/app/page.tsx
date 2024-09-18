'use client';

import styles from './page.module.css';
import MainHeader from '@/app/_component/molecule/MainHeader';

export default function Home() {
  return (
    <main className={styles.main}>
      <MainHeader />
      <div className={styles.content}>
        <div className={styles.leftBox}>
          <h1 className={styles.introTitle}>서비스 소개</h1>
          <h2 className={styles.vacgomText}>WE ARE <br/> THE TEAM , <br/> VACGOM</h2>
        </div>
        <div className={styles.rightArea}>
          <div className={styles.topRightBox}> 
            <h1 className={styles.introTitle}>블로그</h1>
          <h2 className={styles.blogText}>View our blog</h2></div>
          <div className={styles.bottomRightBoxes}>
            <div className={styles.bottomBoxLeft}><h1 className={styles.teamTitle}>팀 소개</h1>
            <h2 className={styles.teamText}>About Us</h2></div>
            <div className={styles.bottomBoxRight}><h1 className={styles.teamTitle}>팀원 모집</h1>
            <h2 className={styles.teamText}>Recruits</h2></div>
          </div>
        </div>
      </div>
    </main>
  );
}

