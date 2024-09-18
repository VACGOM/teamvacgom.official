import styled from '@emotion/styled';

export const RecruitBoxContainer = styled.div`
  display: flex;
  min-width: 285px;
  height: 285px;
  padding: 36px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 20px;
  background: var(--Secondary, #86D37F);
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
`;

export const TeamTitle= styled.div`
  color: var(--Gray-White, #fff);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
`


export const TeamText= styled.div`
  color: var(--Gray-White, #fff);
  font-family: Montserrat;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;

`