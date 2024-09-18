'use client';

import MainHeader from '@/app/_component/molecule/MainHeader';
import { Main, PageTitle, PageTitleText } from './style';
import PartNavButton from "@/app/_component/molecule/PartNavButton";
import BlogContent from "@/app/_component/temp/BlogContent";
export default function Blog() {
  return (
    <Main>
      <MainHeader />
      <PageTitle>
        <PageTitleText>Blog</PageTitleText>
        <PartNavButton/>
      </PageTitle>
      <BlogContent/>
    </Main>
  );
}
