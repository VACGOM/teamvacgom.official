import { BlogApi } from '../../../../utils/blog-api'
import BlogCard from "@/app/_component/atom/BlogCard";
import {ContentContainer} from './style';
 
export default function BlogContent({ selectedCategory }) {
  const filteredBlogs = BlogApi.filter(blog => 
    selectedCategory === '전체' || blog.part === selectedCategory.toLowerCase()
  );

  return (
    <ContentContainer>
      {filteredBlogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </ContentContainer>
  );
}