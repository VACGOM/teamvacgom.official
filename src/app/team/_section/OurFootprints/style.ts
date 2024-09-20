import styled from '@emotion/styled';
import { Colors } from '@/styles';

export const Container = styled.main`
  gap: 80px;
  padding: 40px;
  background: ${Colors.Gray900};
  width: 100%;
  & > .section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 120px 142px;
    gap: 80px;
    & > .title {
      color: ${Colors.White};
      text-align: center;
      font-family: Pretendard;
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 54.6px */
    }
    & > .item {
      display: flex;
      flex-direction: column;
      gap: 80px;
      //width: 996px;
    }
  }
  @media (max-width: 1000px) {
    & > .section {
      padding: 100px 20px;
        & > .item {

        }
  }
`;
