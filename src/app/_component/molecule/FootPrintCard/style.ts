import styled from '@emotion/styled';

export const ImageContainer = styled.div<{ hasWhiteBg: boolean }>`
  position: relative;
  width: 600px;
  height: 380px;
  background-color: ${({ hasWhiteBg }) =>
    hasWhiteBg ? '#fff' : 'transparent'}; /* 조건부로 흰색 배경 적용 */

  /* Image를 잘 맞추기 위한 추가 스타일 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FootPrintCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  width: 100%;

  & > .left {
    margin: 20px 0;
    & > .top {
      display: flex;
      gap: 24px;
      flex-direction: column;
      & > .date {
        color: rgba(107, 118, 132, 1);
        align-self: start;
        font-family: 'Montserrat', sans-serif;
        font-display: swap;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
      }
      & > .namediv {
        & > .name {
          color: rgba(255, 255, 255, 1);
          font-size: 28px;
          font-weight: 700;
          line-height: 1.3;
          font-family: 'Pretendard', sans-serif;
        }
        & > .subName {
          color: rgba(209, 214, 219, 1);
          font-size: 18px;
          font-weight: 400;
          line-height: 1;
          margin-top: 6px;
          font-family: 'Pretendard', sans-serif;
        }
      }
      & > .award {
        color: rgba(65, 150, 253, 1);
        font-size: 28px;
        font-weight: 500;
        line-height: 1.3;
        font-family: 'Pretendard', sans-serif;
      }
    }
    & > .bottom {
      & > .more {
        display: block;
        width: 87px;
        align-self: start;
        border-radius: 10px;
        margin-top: 103px;
        gap: 10px;
        color: rgba(229, 232, 235, 1);
        white-space: nowrap;
        padding: 14px 20px;
        font-family: 'Pretendard', sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.3;
        border: 1px solid rgba(78, 89, 104, 1);
        background-color: unset;
        @media (max-width: 991px) {
          margin-top: 40px;
          white-space: initial;
        }
      }
    }
  }
  & > .right {
    & > img {
      border-radius: 10px;
      overflow: hidden;
      object-fit: cover;
    }
  }
`;
