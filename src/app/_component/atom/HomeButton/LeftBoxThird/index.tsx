import { LeftBoxContainer, IntroTitle, VacgomText } from './style';
import {PATH} from '../../../../../routes/path'
import { useRouter } from 'next/navigation';

const LeftBoxThird = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(PATH.SERVICES);
  };

  return (
    <LeftBoxContainer onClick={handleNavigate}>
      <IntroTitle>서비스 소개</IntroTitle>
      <VacgomText>WE ARE <br/> THE TEAM, <br/> VACGOM</VacgomText>
    </LeftBoxContainer>
  );
};

export default LeftBoxThird;
