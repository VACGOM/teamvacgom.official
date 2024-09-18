"use client";

import * as React from "react";

import { Container } from "./style";
import { Images } from "@/styles/images";
import Image from "next/image";

export default function OurValue() {
  return (
    <Container>
      <div className="title"> Our Value</div>

      <div className="valueSection">
        <div className="textWrap"></div>
      </div>
    </Container>
  );
}
