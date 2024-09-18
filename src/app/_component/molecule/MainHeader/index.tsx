'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Images } from '@globalStyles';
import { Header, Nav, NavItem } from './style';
 
const MainHeader = () => {
  return (
    <Header>
      <Image
        src={Images.Vacgom_Logo}
        alt={'홈페이지 로고'}
        width={84}
        height={24}
      />
      <Nav>
        <NavItem>
          <Link href="/">홈</Link>
        </NavItem>
        <NavItem>
          <Link href="/services">서비스 소개</Link>
        </NavItem>
        <NavItem>
          <Link href="/blog">블로그</Link>
        </NavItem>
        <NavItem>
          <Link href="/team">팀 소개</Link>
        </NavItem>
        <NavItem>
          <Link href="/recruit">팀원 모집</Link>
        </NavItem>
      </Nav>
    </Header>
  );
};

export default MainHeader;
