import styled from '@emotion/styled';

export const Container = styled.main`
  gap: 80px;
  max-width: 100%;

  padding: 120px 0;

  & > .title {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 80px;
  }
  & > .item {
    max-width: 100%;
    display: flex;
    justify-content: center;
    gap: 40px;
    overflow-x: auto; /* 가로 스크롤 가능하도록 설정 */
    scrollbar-width: none; /* 파이어폭스에서 스크롤바 숨기기 */
    -ms-overflow-style: none; /* IE에서 스크롤바 숨기기 */
  }
  & > .item {
    scroll-snap-type: x mandatory; /* 스크롤 스냅 적용 */
  }
  & > .item > * {
    scroll-snap-align: start; /* 각 아이템이 스크롤 시작 시 정렬되도록 */
    flex-shrink: 0; /* 요소 크기가 줄어들지 않도록 */
  }
`;
