import { LeftBoxContainer, IntroTitle, VacgomText } from './style';

import { useRouter } from 'next/router';

const LeftBoxSecond = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/services');
  };

  return (
    <LeftBoxContainer onClick={handleNavigate}>
      <IntroTitle>서비스 소개</IntroTitle>
      <VacgomText>WE ARE <br/> THE TEAM, <br/> VACGOM</VacgomText>
    </LeftBoxContainer>
  );
};

export default LeftBoxSecond;
