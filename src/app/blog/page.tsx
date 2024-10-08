'use client';

import React, { useState } from 'react';
import MainHeader from '@/app/_component/molecule/MainHeader';
import PartNavButton from "@/app/_component/molecule/PartNavButton";
import BlogContent from "@/app/_component/temp/BlogContent";
import { Main, PageTitle, PageTitleText, Gap } from './style';
import Footer from "@/app/_component/molecule/Footer";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  return (
    <Main>
      <MainHeader />
      <PageTitle>
        <PageTitleText>Blog</PageTitleText>
        <PartNavButton selected={selectedCategory} setSelected={setSelectedCategory} />
      </PageTitle>
      <BlogContent selectedCategory={selectedCategory} />
      <Gap/>
      <Footer/>
    </Main>
  );
}
