import { useParams } from "react-router-dom";
import Wrapper from "../layouts/Wrapper";
import SEO from "../components/SEO";
import ServiceDetails from "../components/services/service-details";

const serviceMap: { [key: string]: string } = {
  "industrial-textile-manufacturing": "Industrial Textile Manufacturing",
  "plastic-molding": "Plastic Molding",
};

const ServiceDetailsMain = () => {
  const { serviceName } = useParams();

  return (
    <Wrapper>
      <SEO pageTitle={serviceMap[serviceName?.toLowerCase() ?? ""]} />
      <ServiceDetails />
    </Wrapper>
  );
};

export default ServiceDetailsMain;
