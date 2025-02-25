import styled from '@emotion/styled';

export const LeftBoxContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 2000px;
  background-position: center;
  min-width: 590px;
  height: 628px;
  padding: 50px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 20px;
  background: var(--Gray-Gray-100, #f2f4f6);

  background-image: url('/assets/image/img-home-left-now.png');
  background-size: contain;
  background-position: 140px 0px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const IntroTitle = styled.div`
  color: var(--Gray-Gray-700, #4e5968);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
`;

export const VacgomText = styled.div`
  color: var(--Gray-Gray-700, #4e5968);
  font-family:'Montserrat', sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
`;
