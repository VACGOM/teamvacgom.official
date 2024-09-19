import styled from '@emotion/styled';

export const Main = styled.div`
  display: flex;
  padding-bottom: 40px;
  flex-direction: column;
  align-items: center;
`;

export const IntroContainer = styled.div`
  border-radius: 20px;
  margin-left: 40px;
  margin-right: 40px;
  height: 628px;
  background-image: url('/assets/image/img-intro-services-new.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: calc(100% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FirstInfo = styled.div`
  display: flex;
  padding: 60px 142px 100px 142px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  align-self: stretch;
`;

export const FirstInfoText = styled.div`
  color: var(--Gray-Gray-900, #191f28);
  font-family: Pretendard;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
`;

export const SecondInfo = styled.div`
  display: flex;
  height: 530px;
  padding: 100px 142px;
  align-items: center;
  gap: 80px;
  align-self: stretch;
  background: var(--Primary-Light, #F4FAFE);

`;

export const ThirdInfo = styled.div`
  display: flex;
  height: 530px;
  padding: 100px 142px;
  align-items: center;
  gap: 80px;
  align-self: stretch;

`;


export const FourInfo = styled.div`
  display: flex;
  height: 530px;
  padding: 100px 142px;
  align-items: center;
  gap: 80px;
  align-self: stretch;
  background: var(--Gray-Gray-50, #F9FAFB);

`;


export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 30px;
  display: flex;
  flex: 1 0 0;
`;

export const TitleText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  align-items: left;
`;

export const DescText = styled.div`
  color: var(--Gray-Gray-800, #333d4b);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 350px;
  align-items: center;
  flex: 1 0 0;
`;
