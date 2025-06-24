import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import AboutUs from '../components/about/AboutUs';

const AboutUsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'About Us'} />
         <AboutUs />
      </Wrapper>
   );
};

export default AboutUsMain; 