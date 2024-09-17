"use client";

import * as React from "react";

import { Container } from "./style";
import { Images } from "@/styles/images";
import Image from "next/image";

export default function OurVision() {
  return (
    <Container>
      <Image src={Images.img_introVecgom} alt="팀소개백곰이미지" />
      <div className="visionSection">
        <div className="textWrap">
          <div className="title"> Our Vision</div>
          <div className="text">
            <div className="tap">
              '기술 발전의 속도와 정보의 격차를 줄이는 것', 백곰이 생각하는 가장
              중요한 가치입니다.
            </div>
            <div className="tap">
              기술의 빠른 진보를 통해 우리는 많은 이점을 누릴 수 있게 되었지만
              <br />
              그와 함께 정보의 비대칭성이 심화되고 있으며, 이러한 격차는 디지털
              소외를 비롯한 다양한 문제를 야기하고 있습니다.
              <br />
              백곰은 기술의 발전 속에 소외되는 사람이 없도록 최첨단 기술을
              활용하여 모든 사람이 양질의 정보에
              <br />
              언제든 접근할 수 있는 세상을 만들고자 합니다.
            </div>
            <div className="tap">
              백곰의 가치는 단순한 기술 발전에 그치지 않습니다.
              <br />
              우리는 기술을 통해 모든 사람에게 평등한 기회를 제공하고,
              궁극적으로는 더 나은 세상을 만드는 데 있습니다.
              <br />
              백곰의 목표는 우리가 가장 잘하는 것을 통해 사회적 가치를 창출하고,
              <br />
              이를 통해 세상에 긍정적인 영향을 미치는 것입니다.
            </div>
          </div>
        </div>
        <Image src={Images.img_vecgomFace} alt="img_vecgomFace" />
      </div>
    </Container>
  );
}
