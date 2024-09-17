'use client'

import * as React from 'react';

import {Container} from './style';
import TeamCard from "@/app/_component/molecule/TeamCard";


export default function StoryBook() {

  return (
    <Container>
      <div className="flex">
      <TeamCard />
      </div>
    </Container>
  );
}
