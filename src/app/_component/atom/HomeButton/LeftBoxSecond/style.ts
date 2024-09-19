import styled from '@emotion/styled';

export const LeftBoxContainer= styled.div`
  display: flex;
  width: 100%;
  min-width: 590px;
  height: 628px;
  padding: 50px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid rgba(65, 150, 253, 0.2);
  background: var(--Primary, #4196FD);
  background-image: url('/assets/image/img-home-left-now.png');
  background-size: contain;
  background-position: 140px 0px;
  background-repeat: no-repeat;
  cursor:pointer;
`

export const IntroTitle= styled.div`
color: var(--Gray-White, #FFF);
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 400;

`


export const VacgomText= styled.div`
color: var(--Gray-White, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 56px;
font-style: normal;
font-weight: 600;
line-height: 110%; /* 61.6px */
letter-spacing: -1.68px;

`