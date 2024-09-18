import { BlogApi } from '../../../../utils/blog-api'
import BlogCard from "@/app/_component/atom/BlogCard";
import {ContentContainer} from './style';
 
export default function BlogContent() {
  return (
    <ContentContainer>
      {BlogApi.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </ContentContainer>
  );
}
