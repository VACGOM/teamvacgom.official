import React from 'react';
import { TeamCardWrap } from './style';
import Image from 'next/image';
import { Images } from '@/styles/images';

type props = {
  img: any;
  name: string;
  part?: { main: string; sub?: string };
  link?: {
    mail: string;
    linkedIn: string;
    github?: string;
    blog?: string;
    notefolio?: string;
    insta?: string;
  };
};

const TeamCard: React.FC<props> = ({
  img = Images.img_heabin,
  name = '이름',
  part = { main: '메인 파트', sub: '서브파트' },
  link = {
    mail: '',
    linkedIn: '',
    github: '',
    blog: '',
    notefolio: '',
    insta: '',
  },
}: props) => {
  return (
    <TeamCardWrap>
      <div className="top">
        <Image src={img} alt={'팀원 이미지'} height={318} width={317} />
      </div>
      <div className="bottom">
        <div className="intro">
          <div className="name">{name}</div>
          <div className="part">
            <div className="main">{part.main}</div>
            {part.sub && <div className="sub">・</div>}
            <div className="sub">{part.sub}</div>
          </div>
        </div>
        <div className="linkWrap">
          <a href={'mailto:' + link.mail} className="link">
            <Image src={Images.icon_mail} alt={'메일'} />
          </a>
          <a href={link.linkedIn} className="link">
            <Image src={Images.icon_linkedin} alt={'링크드인'} />
          </a>
          {link.notefolio && (
            <a href={link.notefolio} className="link">
              <Image src={Images.icon_notefolio} alt={'노트폴리오'} />
            </a>
          )}
          {link.github && (
            <a href={link.github} className="link">
              <Image src={Images.icon_github} alt={'깃허브'} />
            </a>
          )}
          {link.insta && (
            <a href={link.insta} className="link">
              <Image src={Images.icon_insta} alt={'인스타그램'} />
            </a>
          )}
          {link.blog && (
            <a href={link.blog} className="link">
              <Image src={Images.icon_blog} alt={'블로그'} />
            </a>
          )}
        </div>
      </div>
    </TeamCardWrap>
  );
};

export default TeamCard;
