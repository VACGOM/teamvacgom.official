import { BlogBoxContainer, IntroTitle, BlogText } from './style';

import { useRouter } from 'next/router';

const BlogBoxSecond = () => {
  const router = useRouter(); 

  const handleNavigate = () => {
    router.push('/blog');
  };

  return (
    <BlogBoxContainer onClick={handleNavigate}>
      <IntroTitle>블로그</IntroTitle>
      <BlogText>View our blog</BlogText>
    </BlogBoxContainer>
  );
};

export default BlogBoxSecond;
