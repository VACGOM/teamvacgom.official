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
          <FootPrintCard
            date={'2024.03'}
            name={'2024 벚꽃톤'}
            subName={'[kakao x goorm]'}
            award={'최우수상'}
            img={Images.img_BEOTKKOTTHON}
          />
          <FootPrintCard
            date={'2024.08'}
            name={'9oormthon Univ In Jeju'}
            subName={'[kakao x goorm'}
            award={'우수상'}
            img={Images.img_JEJU}
          />
          <FootPrintCard
            date={'2024.08'}
            name={'k8s 서버 환경'}
            subName={'[kakao Cloud]'}
            img={Images.img_K8S}
          />{' '}
          <FootPrintCard
            date={'2024.08'}
            name={'사이드임팩트 참가 승인'}
            subName={'[브라이언 임팩트]'}
            img={Images.img_SIDEIMPACT}
          />
        </div>
      </div>
    </Container>
  );
}
