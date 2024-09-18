'use client';

import {
  RecruitBoxContainer,
  TeamTitle,
  TeamText,
  ImageContainer,
} from './style';
import Image from 'next/image';
import Link from 'next/link';
import { Images } from '@globalStyles';

const RecruitBoxSecond = () => {
  return (
    <RecruitBoxContainer>
      <TeamTitle>
        백곰 팀과 <br />
        함께 나아가요
      </TeamTitle>
      <ImageContainer>
        <Image
          src={Images.to_go_white}
          alt={'홈페이지 로고'}
          width={40}
          height={40}
        />
      </ImageContainer>

      <TeamText>Recruit</TeamText>
    </RecruitBoxContainer>
  );
};

export default RecruitBoxSecond;
