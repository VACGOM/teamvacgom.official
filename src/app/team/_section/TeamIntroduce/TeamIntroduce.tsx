'use client';

import * as React from 'react';

import { Container } from './style';
import { Images } from '@/styles/images';
import Image from 'next/image';
import TeamCard from '@/app/_component/molecule/TeamCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper 기본 스타일 가져오기
import 'swiper/css/autoplay'; // autoplay 모듈용 스타일 가져오기
import { Autoplay } from 'swiper/modules';

export default function TeamIntroduce() {
  return (
    <Container>
      <div className="title">
        백곰 팀원들을 <br /> 소개합니다
      </div>
      <Swiper
        spaceBetween={40}
        slidesPerView={5}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1250: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <TeamCard
            img={Images.img_heabin}
            name={'변해빈'}
            part={{ main: 'Team Lead', sub: 'BE' }}
            link={{
              mail: 'dev.beeen@kakao.com',
              linkedIn: 'https://www.linkedin.com/in/해빈-변-95a219310',
              github: 'https://github.com/h-beeen',
              blog: 'https://velog.io/@h-beeen/kakao-X-goorm-구름톤-Univ-In-Jeju-우수상-후기',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard
            img={Images.img_yena}
            name={'전예나'}
            part={{ main: 'Designer' }}
            link={{
              mail: 'yena009@ajou.ac.kr',
              linkedIn: 'https://www.linkedin.com/in/예나-전-464517233/',
              notefolio: 'https://notefolio.net/ponyofolio',
              insta: 'https://www.instagram.com/ponyo_life_pocket/',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard
            img={Images.img_jieun}
            name={'김지은'}
            part={{ main: 'PM' }}
            link={{
              mail: 'rlawldms47@khu.ac.kr',
              linkedIn: 'https://www.linkedin.com/in/jieun-kim-55966126b/',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard
            img={Images.img_hyungju}
            name={'성형주'}
            part={{ main: 'App', sub: 'Infra' }}
            link={{
              mail: 'lehyungju@gmail.com',
              linkedIn: 'https://www.linkedin.com/in/hyungjusung/',
              github: 'https://github.com/HyungJu',
              blog: '',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard
            img={Images.img_minjeong}
            name={'김민정'}
            part={{ main: 'FE' }}
            link={{
              mail: 'orange_mj@naver.com',
              linkedIn: 'https://www.linkedin.com/in/minjeong-kim-1b7b45300/',
              github: 'https://github.com/minjeoong',
              blog: 'https://orange-mj.tistory.com/37',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard
            img={Images.img_sohyun}
            name={'오소현'}
            part={{ main: 'FE' }}
            link={{
              mail: 'osohyun0224@naver.com',
              linkedIn: 'https://www.linkedin.com/in/osohyun0224/',
              github: 'https://github.com/osohyun0224',
              blog: 'https://velog.io/@osohyun0224/posts',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
