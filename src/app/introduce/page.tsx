'use client';

import * as React from 'react';

import { Container } from './style';
import TeamCard from '@/app/_component/molecule/TeamCard';
import { Images } from '@/styles/images';
import Image from 'next/image';
import OurVision from '@/app/introduce/_section/OurVision/OurVision';
import OurValue from '@/app/introduce/_section/OurValue/OurValue';
import OurFootprints from '@/app/introduce/_section/OurFootprints/OurFootprints';
import TeamIntroduce from '@/app/introduce/_section/TeamIntroduce/TeamIntroduce';
import Footer from '@/app/_component/molecule/Footer';

export default function Intoduce() {
  return (
    <Container>
      <OurVision />
      <OurValue />
      <OurFootprints />
      <TeamIntroduce />
      <Footer />
    </Container>
  );
}
