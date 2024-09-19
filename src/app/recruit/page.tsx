'use client';

import * as React from 'react';

import { Container } from './style';
import Footer from '@/app/_component/molecule/Footer';
import MainHeader from '@/app/_component/molecule/MainHeader';
import RecruitMain from '@/app/recruit/_section/RecruitMain/RecruitMain';
import RecruitContent from '@/app/recruit/_section/RecruitContent/RecruitContent';

export default function Recruit() {
  return (
    <Container>
      <MainHeader />
      <RecruitMain />
      <RecruitContent />
      <Footer />
    </Container>
  );
}
