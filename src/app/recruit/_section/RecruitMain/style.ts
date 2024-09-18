import styled from '@emotion/styled';
import { Colors } from '@/styles';

export const Container = styled.main`
  display: flex;
  gap: 73px;
  padding: 107px 0 127px;
  & > .imgWrap {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: fit-content;
    width: 387px;
    position: relative;
    & > .top {
      display: flex;
      gap: 43px;
      left: -120px;
      top: 37px;
      position: absolute;
    }
    & > .bottom {
      position: absolute;
      bottom: 0;
      display: flex;
      gap: 43px;
    }
  }
`;
