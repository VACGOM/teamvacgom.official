'use client';

import { TeamBoxContainer, TeamTitle, TeamText, ImageContainer } from './style';
import Image from 'next/image';
import Link from 'next/link';
import { Images } from '@globalStyles';


const TeamIntroBoxSecond = () => {
  return (
    <TeamBoxContainer>
      <TeamTitle>백곰 팀을<br/>소개할게요</TeamTitle>
      <ImageContainer>
        <Image
          src={Images.to_go_white}
          alt={'홈페이지 로고'}
          width={40}
          height={40}
        />
      </ImageContainer>
      <TeamText>About Us</TeamText>
    </TeamBoxContainer>
  );
};

export default TeamIntroBoxSecond;
