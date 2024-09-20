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
    padding: 0 60px;
    max-width: 100vw;
    display: flex;
    //justify-content: center;
    gap: 40px;
    overflow-x: auto; /* 가로 스크롤 가능하도록 설정 */
    //scrollbar-width: none; /* 파이어폭스에서 스크롤바 숨기기 */
    -ms-overflow-style: none; /* IE에서 스크롤바 숨기기 */
  }
  & > .item {
    scroll-snap-type: x mandatory; /* 스크롤 스냅 적용 */
  }
  & > .item > * {
    flex-shrink: 0; /* 요소 크기가 줄어들지 않도록 */
  }

  .swiper-pagination {
    display: none; /* 슬라이드 바 숨기기 */
  }
  .swiper-wrapper {
    transition-timing-function: linear; /* 부드럽게 직선으로 움직이게 설정 */
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;
