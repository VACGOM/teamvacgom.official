"use client";

import * as React from "react";

import { Container } from "./style";
import { Images } from "@/styles/images";
import Image from "next/image";
import ValueCard from "@/app/_component/molecule/ValueCard";

export default function OurValue() {
  return (
    <Container>
      <div className="valueSection">
        <div className="title">
          백곰이 중요하게
          <br /> 생각하는 가치
        </div>

        <div className="values">
          <ValueCard
            img={Images.img_Accessibility}
            name={"Accessibility"}
            detail={{
              top: "정보의 격차를 줄여 사회적 불평등을 해소하고,",
              mid: "모든 사람에게 동등한 기회를 제공할 수 있도록",
              bottom: "정보의 비대칭성 해소 실현을 위해 나아갑니다.",
            }}
          />
          <ValueCard
            img={Images.img_innovation}
            name={"Innovation"}
            detail={{
              top: "끊임없는 혁신을 통해 변화하는 기술 환경에 대응하고",
              mid: "기술적인 진보를 넘어 사회적 가치를 높이는 방향으로",
              bottom: "우리는 꾸준히 나아갑니다.",
            }}
          />
          <ValueCard
            img={Images.img_SocialImpact}
            name={"Social Impact"}
            detail={{
              top: "기술을 통해 사회적 가치를 향유하는",
              mid: "전 인류에게 긍정적인 서비스를 ",
              bottom: "설계합니다.",
            }}
          />
          <ValueCard
            img={Images.img_Sustainability}
            name={"Sustainbility"}
            detail={{
              top: "지속 가능한 기술과 서비스로",
              mid: "사회의  긍정적 영향을 미치며,",
              bottom: "지속가능한 비전을 갖고 발전합니다.",
            }}
          />
        </div>
      </div>
    </Container>
  );
}
