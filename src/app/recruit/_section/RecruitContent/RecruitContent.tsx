'use client';

import * as React from 'react';

import { Container } from './style';
import { Images } from '@/styles/images';
import Image from 'next/image';
import FootPrintCard from '@/app/_component/molecule/FootPrintCard';
import Link from 'next/link';

export default function RecruitContent() {
  const [category, setCategory] = React.useState('Backend');

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    category: string,
  ) => {
    e.preventDefault();
    setCategory(category);
  };

  return (
    <Container>
      <div className="category">
        <a
          className={`item ${category === 'plan' ? 'active' : ''}`}
          onClick={(e) => handleClick(e, 'plan')}
        >
          <Image src={Images.plan} alt={'plan'} /> Plan
        </a>
        <a
          className={`item ${category === 'Design' ? 'active' : ''}`}
          onClick={(e) => handleClick(e, 'Design')}
        >
          <Image src={Images.Design} alt={'Design'} />
          Design
        </a>
        <a
          className={`item ${category === 'Frontend' ? 'active' : ''}`}
          onClick={(e) => handleClick(e, 'Frontend')}
        >
          <Image src={Images.Frontend} alt={'Frontend'} />
          Frontend
        </a>
        <a
          className={`item ${category === 'Backend' ? 'active' : ''}`}
          onClick={(e) => handleClick(e, 'Backend')}
        >
          <Image src={Images.Backend} alt={'Backend'} />
          Backend
        </a>
      </div>
      <div className="contents">
        <div className="body">
          <div className="title">
            <Image src={Images.img_recruit1} alt={'plan'} />
            <span>Backend</span>
          </div>
          <div className="main">
            <div className="item">
              <div className="title">
                백곰에서 함께할 백엔드 개발자를 찾습니다
              </div>
              <div className="con">
                백곰은 구름톤유니브 2기 구성원의 작은 도전으로 시작된 영유아
                백신 접종 관리 서비스입니다. 자체 구축한 스크래핑 모듈을 통해
                백신 접종 정보를 간편하게 조회하고 관리할 수 있도록 돕고
                있습니다. 이 과정에서 벚꽃톤에서 최우수상, 구름톤유니브 제주에서
                우수상을 수상하며 아이디어와 기술력을 인정받았으며, 카카오의
                지원을 통해 카카오 클라우드 k8s 환경과 AWS ECS 환경에서 서비스
                고도화를 지속적으로 진행하고 있습니다.
                <br /> <br />
                백곰은 2025년 1월 정식 서비스 오픈을 목표로 하고 있으며, 백엔드
                팀의 역량을 강화하기 위해 새로운 팀원을 모집하고 있습니다.
                기술적 성장과 장기적인 프로젝트 경험을 원하는 분들의 많은 지원
                부탁드립니다.
              </div>
            </div>
            <div className="item">
              <div className="title">백곰이 사용하는 기술</div>
              <div className="con">
                · Java/Kotlin(BE), TypeScript(스크래핑 모듈) <br />
                · Spring Framework <br />
                · MySQL, MongoDB, Redis, Spring JPA, QueryDSL <br />· k8s
                Cluster, AWS ECS, AWS Lambda, Kakao Cloud (k8s Cluster), Github
                Actions
              </div>
            </div>
            <div className="item">
              <div className="title">백곰의 마인드셋</div>
              <div className="con">
                1. 성장 마인드 <br />
                · 프로젝트 아이템에 대한 애착과 관심을 가지고, 이를 발전시키는
                과정에서 즐거움을 느끼는 분.
                <br /> · 기술적 진보를 위해 끊임없이 고민하고 더 나은 설계와
                솔루션을 제안할 수 있는 분.
                <br />
                2. 책임감과 문제 해결 능력 <br />
                · 주어진 문제를 정확히 파악하고 능동적으로 해결책을 찾는 태도. ·
                긴밀한 협업 속에서 팀과 소통하며, 문제 상황을 해결하고자 하는
                책임감 있는 분.
                <br />
                3. 혁신을 두려워하지 않는 자세 <br />· 특정 기술이나 언어,
                프레임워크의 벤더에 종속되지 않고 기술적 도전과 실험을 즐기는
                분.
              </div>
            </div>
            <div className="item">
              <div className="title">우대사항</div>
              <div className="con">
                · k8s 클러스터 환경의 프로젝트 경험이 있다면 더욱 좋아요. <br />
                · 앱스토어/플레이스토어/웹 등 실제 배포된 서비스에서 엔드유저와
                상호작용 과정을 거쳐본 경험이 있다면 더욱 좋아요.
              </div>
            </div>
            <a
              href={
                'https://docs.google.com/forms/d/1xrQF95D6yMcMsJl6OGndkpGjPQRtKs3txFLr8OGm1ic/edit?usp=forms_home&ths=true'
              }
            >
              <button className={'button'}>지원하기</button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
