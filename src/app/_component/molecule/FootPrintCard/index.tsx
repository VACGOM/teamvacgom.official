import React from 'react';
import { FootPrintCardWrap } from './style';
import Image from 'next/image';
import { Images } from '@/styles/images';
import Link from 'next/link';

type props = {
  img: any;
  name: string;
  date: string;
  subName: string;
  award?: string;
  moreLink: string;
};

const FootPrintCard: React.FC<props> = ({
  img = Images.img_heabin,
  name = '이름',
  date = '2024.03',
  subName = '[kakao X goorm]',
  award,
  moreLink = '/',
}: props) => {
  return (
    <FootPrintCardWrap>
      <div className="left">
        <div className="top">
          <div className="date" >{date}</div>
          <div className="namediv">
            <div className="name">{name}</div>
            <div className="subName">{subName}</div>
          </div>
          <div className="award">{award && award}</div>
        </div>
        {/* <div className="bottom">
          <Link className="more" href={moreLink}>
            More
          </Link>
        </div> */}
      </div>
      <div className="right">
        <Image src={img} alt="img" width={600} height={380} />
      </div>
    </FootPrintCardWrap>
  );
};

export default FootPrintCard;
