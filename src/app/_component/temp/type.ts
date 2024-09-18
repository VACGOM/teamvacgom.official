import { StaticImageData } from 'next/image';

export interface BlogType {
  id: number;
  part: string;
  thumbnail: string | StaticImageData;
  title: string;
  profile: string | StaticImageData;
  editor: string;
  job: string;
  url: string;
}

interface BlogCardProps {
  blog: BlogType;
}
