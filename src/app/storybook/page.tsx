"use client";

import * as React from "react";

import { Container } from "./style";
import TeamCard from "@/app/_component/molecule/TeamCard";
import { Images } from "@/styles/images";

export default function StoryBook() {
  return (
    <Container>
      <div className="flex">
        <TeamCard
          img={Images.img_heabin}
          name={"변해빈"}
          part={{ main: "Team Lead", sub: "BE" }}
        />
        <TeamCard
          img={Images.img_yena}
          name={"전예나"}
          part={{ main: "Designer" }}
        />
        <TeamCard
          img={Images.img_jieun}
          name={"김지은"}
          part={{ main: "PM" }}
        />{" "}
        <TeamCard
          img={Images.img_hyungju}
          name={"성형주"}
          part={{ main: "App", sub: "Infra" }}
        />
        <TeamCard
          img={Images.img_minjeong}
          name={"김민정"}
          part={{ main: "FE" }}
        />
        <TeamCard
          img={Images.img_sohyun}
          name={"오소현"}
          part={{ main: "FE" }}
        />
      </div>
    </Container>
  );
}
