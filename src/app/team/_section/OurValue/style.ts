import styled from '@emotion/styled';

export const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  background: #f2f4f6;
  width: 100%;
  padding: 140px 20px;
  & > .valueSection {
    width: 100%;
    max-width: 996px;
    height: 100%;
    //max-height: 774px;
    & > .title {
      color: #191f28;
      font-family: Pretendard;
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 54.6px */
      margin-bottom: 50px;
    }
    & > .values {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      @media (max-width: 1000px) {
        & > div {
          width: 92vw;
        }
        grid-template-columns: 1fr;
      }
    }
  }
  @media (max-width: 1000px) {
    padding: 100px 30px;
      & > .valueSection {

      }
`;
