import styled from "@emotion/styled";

export const Container = styled.main`
  height: 1054px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  background: #f2f4f6;
  width: 100%;
  & > .valueSection {
    width: 996px;
    height: 774px;
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
    }
  }
`;
