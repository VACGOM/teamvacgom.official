'use client';

import React, { useState } from 'react';
import MainHeader from '@/app/_component/molecule/MainHeader';
import {
  Main,
  IntroContainer,
  FirstInfo,
  FirstInfoText,
  SecondInfo,
  TitleText,
  DescText,
  TextContainer,
  ImageContainer,
  ThirdInfo,
  FourInfo,
} from './style';
import Footer from '@/app/_component/molecule/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Images } from '@globalStyles';

export default function Services() {
  return (
    <Main>
      <MainHeader />
      <IntroContainer />
      <FirstInfo>
        <Image
          src={Images.small_logo}
          alt={'홈페이지 로고'}
          width={100}
          height={100}
        />
        <FirstInfoText>영유아를 위한 헬스케어 서비스</FirstInfoText>
      </FirstInfo>
      <SecondInfo>
        <TextContainer>
          <TitleText>백신</TitleText>
          <DescText>
            우리 아이의 백신 접종 내역 조회부터 <br />
            맞춤형 백신 추천 및 정보, 접종 인증서까지. <br />
            간단한 인증을 통해 자녀의 백신 접종 내역을 조회하고, <br />
            접종 시기가 다가오면 PUSH 알림을 통해 <br />
            백신 접종 일정을 리마인드해드려요. <br />
            백곰은 백신과 질병에 관한 정확한 정보를 제공해 <br />
            쉽게 백신과 질병 정보를 살펴볼 수 있어요.
          </DescText>
        </TextContainer>
        <ImageContainer>
          <Image
            src={Images.vaccine_img}
            alt={'백신 로고'}
            width={350}
            height={350}
          />
        </ImageContainer>
      </SecondInfo>
      <ThirdInfo>
        <ImageContainer>
          <Image
            src={Images.map_img}
            alt={'공동 돌보미'}
            width={350}
            height={350}
          />
        </ImageContainer>
        <TextContainer>
          <TitleText>근처 의료기관 조회</TitleText>
          <DescText>
            내 위치 기반 근처 의료기관을 조회할 수 있어요. <br />
            진료과별, 접종 가능한 백신별 의료기관을 조회하고, <br />
            진료 시간과 위치에 대한 정보를 제공해요. <br />
            번거로운 검색 없이 백곰을 통해 백신 접종이 가능한 <br />
            근처 의료기관을 손쉽게 조회해 보세요.
          </DescText>
        </TextContainer>
      </ThirdInfo>
      <FourInfo>
        <TextContainer>
          <TitleText>공동 돌보미</TitleText>
          <DescText>
            초대 코드를 통해 공동 돌보미를 등록할 수 있어요. <br />
            가족과 함께 우리 아이의 건강을 챙길 수 있는 <br />
            공동 돌봄 네트워크에 참여해 보세요.
            <br />
            자녀의 백신 접종 내역을 손쉽게 확인하고, <br />
            백신 접종 일정과 아이의 일정을 공유할 수 있어요.
            <br />
          </DescText>
        </TextContainer>
        <ImageContainer>
          <Image
            src={Images.together_img}
            alt={'공동 돌보미'}
            width={350}
            height={350}
          />
        </ImageContainer>
      </FourInfo>
      <ThirdInfo>
        <ImageContainer>
          <Image
            src={Images.calendar_img}
            alt={'공동 돌보미'}
            width={350}
            height={350}
          />
        </ImageContainer>
        <TextContainer>
          <TitleText>캘린더</TitleText>
          <DescText>
            우리 아이의 일정을 꼼꼼하게 관리할 수 있어요. <br />
            백신 접종 일정, 학교 행사 등 중요한 일정을 <br />
            놓치지 않도록 등록하고 공동 돌보미와 함께 공유해보세요.
            <br />
            캘린더에 표시된 일정은 공동 돌보미와 실시간으로 동기화되어 <br />
            바쁜 일상 속에서도 중요한 일정을 놓치지 않도록 도와드려요.
          </DescText>
        </TextContainer>
      </ThirdInfo>
      <Footer />
    </Main>
  );
}
