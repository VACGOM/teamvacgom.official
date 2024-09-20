import styled from '@emotion/styled';

export const FootPrintCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  //align-items: flex-start;
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
        font-family:'Montserrat', sans-serif;,
      }
      & > .namediv {
        & > .name {
          color: rgba(255, 255, 255, 1);
          font-size: 28px;
          font-weight: 700;
          line-height: 1.3;
        }
        & > .subName {
          color: rgba(209, 214, 219, 1);
          font-size: 18px;
          font-weight: 400;
          line-height: 1;
          margin-top: 6px;
        }
      }
      & > .award {
        color: rgba(65, 150, 253, 1);
        font-size: 28px;
        font-weight: 500;
        line-height: 1.3;
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
        font:
          500 20px/1.3 Pretendard,
          sans-serif;
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
