import React from "react";
import { ValueCardWrap } from "./style";
import Image from "next/image";
import { Images } from "@/styles/images";

type props = {
  img: string;
  name: string;
  detail: {
    top: string;
    mid: string;
    bottom: string;
  };
};

const ValueCard: React.FC<props> = ({
  img = Images.img_heabin,
  name = "이름",
  detail = { top: "", mid: "", bottom: "" },
}: props) => {
  return (
    <ValueCardWrap>
      <div className="top">
        <Image src={img} alt={"value 이미지"} />
      </div>
      <div className="bottom">
        <div className="name">{name}</div>
        <div className="detail">
          {detail.top}
          <br />
          {detail.mid}
          <br />
          {detail.bottom}
        </div>
      </div>
    </ValueCardWrap>
  );
};

export default ValueCard;
