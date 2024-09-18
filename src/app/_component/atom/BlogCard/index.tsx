import Image from 'next/image';
import {Card, Thumbnail, Title, ProfileRow, ProfileImageContainer, Name, Job } from './style';

export default function BlogCard({ blog }) {
  return (
    <Card>
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