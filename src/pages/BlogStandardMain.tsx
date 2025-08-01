import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import BlogStandard from '../components/blogs/blog-standard';

const BlogStandardMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Blog Posts'} />
         <BlogStandard />
      </Wrapper>
   );
};

export default BlogStandardMain;