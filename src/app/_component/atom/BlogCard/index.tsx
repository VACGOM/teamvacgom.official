import Image from 'next/image';
import {Card, Thumbnail, Title, ProfileRow, ProfileImageContainer, Name, Job } from './style';

export default function BlogCard({ blog }) {
  const handleCardClick = () => {
    window.open(blog.url, '_blank');
  };

  return (
    <Card onClick={handleCardClick}>
      <Thumbnail>
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
        />
      </Thumbnail>
      <Title>{blog.title}</Title>
      <ProfileRow>
        <ProfileImageContainer>
          <Image
            src={blog.profile}
            alt={blog.editor}
            width={24}
            height={24}
            layout="fixed"
          />
        </ProfileImageContainer>
        <Name>{blog.editor}</Name>
        <Job>{blog.job}</Job>
      </ProfileRow>
    </Card>
  );
}