import { BlogBoxContainer, IntroTitle, BlogText ,ImageContainer} from './style';
import { PATH } from '../../../../../routes/path';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Images } from '@globalStyles';

const BlogBoxThird = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(PATH.BLOG);
  };

  return (
    <BlogBoxContainer onClick={handleNavigate}>
      <IntroTitle>블로그</IntroTitle>
      <ImageContainer>
        <Image
          src={Images.to_go_white}
          alt={'홈페이지 로고'}
          width={40}
          height={40}
        />
      </ImageContainer>
      <BlogText>View our blog</BlogText>
    </BlogBoxContainer>
  );
};

export default BlogBoxThird;
