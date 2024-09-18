'use client';

import styles from './page.module.css';
import MainHeader from '@/app/_component/molecule/MainHeader';

export default function Home() {
  return (
    <main className={styles.main}>
      <MainHeader />
    </main>
  );
}
