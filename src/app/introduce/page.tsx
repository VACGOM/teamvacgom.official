"use client";

import * as React from "react";

import { Container } from "./style";
import TeamCard from "@/app/_component/molecule/TeamCard";
import { Images } from "@/styles/images";
import Image from "next/image";
import OurVision from "@/app/introduce/sections/OurVision/OurVision";
import OurValue from "@/app/introduce/sections/OurValue/OurValue";

export default function Intoduce() {
  return (
    <Container>
      <OurVision />
      <OurValue />
    </Container>
  );
}
