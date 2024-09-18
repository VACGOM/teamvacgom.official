'use client';

import * as React from 'react';

import { Container } from './style';
import { Images } from '@/styles/images';
import Image from 'next/image';
import FootPrintCard from '@/app/_component/molecule/FootPrintCard';

export default function OurFootprints() {
  return (
    <Container>
      <div className="section">
        <div className="title">Our Footprints</div>
        <div className="item">
          <FootPrintCard />
        </div>
      </div>
    </Container>
  );
}
