'use client';

import * as React from 'react';

import { Container } from './style';
import { Images } from '@/styles/images';
import Image from 'next/image';
import FootPrintCard from '@/app/_component/molecule/FootPrintCard';

export default function RecruitMain() {
  return (
    <Container>
      <Image src={Images.img_recruitment} alt="img_recruitment" />
      <div className="imgWrap">
        <div className="top">
          <Image src={Images.img_recruit1} alt="img_recruitment" />
          <Image src={Images.img_recruit2} alt="img_recruitment" />
        </div>
        <div className="bottom">
          <Image src={Images.img_recruit3} alt="img_recruitment" />
          <Image src={Images.img_recruit4} alt="img_recruitment" />
        </div>
      </div>
    </Container>
  );
}
