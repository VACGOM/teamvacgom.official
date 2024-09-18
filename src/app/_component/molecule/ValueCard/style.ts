import styled from "@emotion/styled";

export const ValueCardWrap = styled.div`
  padding: 30px;
  display: flex;
  width: 100%;
  min-width: 488px;
  flex-direction: column;
  justify-content: space-between;
  max-height: 300px;
  gap: 20px;
  border-radius: 20px;
  background: #fff;
  & > .top {
    & > img {
      width: 80px;
      height: 80px;
    }
  }
  & > .bottom {
    & > .name {
      color: #191f28;
      font-family: Pretendard;
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 114.286% */
    }
    & > .detail {
      margin-top: 10px;
      color: #6b7684;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 28.8px */
    }
  }
`;
