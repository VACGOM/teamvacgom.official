import styled from "@emotion/styled";

export const TeamCardWrap = styled.div`
  width: 317px;
  height: 500px;

  border-radius: 20px;
  border: 1px solid #e5e8eb;

  & > .top {
    & > img {
      border-radius: 20px 20px 0 0;
      overflow: hidden;
    }
  }
  & > .bottom {
    padding: 38px 30px 40px 30px;
    & > .intro {
      display: flex;
      flex-direction: row;
      gap: 10px;
      & > .name {
        color: #191f28;
        text-align: center;
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
      }
      & > .part {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        color: #4196fd;
        text-align: center;
        font-family: Pretendard;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px;
      }
    }
    & > .linkWrap {
      display: flex;
      //gap: auto;
      justify-content: space-between;
      margin-top: 14px;
      & > .link {
        display: flex;
        width: 56px;
        height: 56px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 60px;
        border: 1px solid var(--Gray-Gray-200, #e5e8eb);
      }
    }
  }
`;
