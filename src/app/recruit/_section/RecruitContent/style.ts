import styled from '@emotion/styled';
import { Colors } from '@/styles';

export const Container = styled.main`
  display: flex;
  gap: 73px;
  padding: 107px 0 127px;
  & > .category {
    display: flex;
    flex-direction: column;
    & > .item {
      cursor: pointer;
      display: flex;
      padding: 20px 10px;
      align-items: center;
      gap: 20px;
      align-self: stretch;
      color: var(--Gray-Gray-900, #191f28);
      opacity: 0.2;
      font-family: Montserrat;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 110%; /* 26.4px */
      &.active {
        opacity: 1 !important;
      }
    }
  }
  & > .contents {
    & > .body {
      display: flex;
      flex-direction: column;
      gap: 50px;
      width: 691px;
      padding: 50px;
      border-radius: 20px;
      border: 1px solid var(--Gray-Gray-200, #e5e8eb);
      background: var(--Gray-White, #fff);

      & > .title {
        display: flex;
        gap: 20px;
        align-items: center;

        & > span {
          color: var(--Gray-Gray-900, #191f28);
          font-family: Montserrat;
          font-size: 52px;
          font-style: normal;
          font-weight: 600;
          line-height: 110%; /* 57.2px */
        }

        & > img {
          width: 80px;
          height: 80px;
        }
      }

      & > .main {
        display: flex;
        flex-direction: column;
        gap: 40px;

        & > .item {
          display: flex;
          flex-direction: column;
          gap: 20px;

          & > .title {
            color: var(--Gray-Gray-800, #333d4b);
            /* headline/xsmall */
            font-family: Pretendard;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: 28px; /* 127.273% */
          }

          & > .con {
            color: var(--Gray-Gray-700, #4e5968);
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 25.6px */
          }
        }
        & > .button {
          display: flex;
          padding: 14px 50px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          align-self: stretch;
          border-radius: 6px;
          border: none;
          width: 100%;
          background: var(--Primary, #4196fd);
          color: var(--Gray-White, #fff);
          /* title/medium */
          font-family: Pretendard;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px; /* 150% */
        }
      }
    }
  }
`;
