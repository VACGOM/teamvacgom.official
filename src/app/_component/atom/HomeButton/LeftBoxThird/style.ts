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
background: var(--Gray-Gray-100, #F2F4F6);

  background-image: url("/assets/image/ico-home-left-on.svg");
  background-size: contain;
  background-position: 140px 0px;
  background-repeat: no-repeat;
  cursor:pointer;
`

export const IntroTitle= styled.div`
color: var(--Gray-Gray-700, #4E5968);
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 400;

`


export const VacgomText= styled.div`
color: var(--Gray-Gray-700, #4E5968);
font-family: Montserrat;
font-size: 56px;
font-style: normal;
font-weight: 600;
line-height: 110%; /* 61.6px */
letter-spacing: -1.68px;

`