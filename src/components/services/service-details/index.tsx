import { useParams } from "react-router-dom";
import FooterThree from "../../../layouts/footers/FooterThree";
import HeaderThree from "../../../layouts/headers/HeaderThree";
import BreadCrumb from "../../common/BreadCrumb";
import ServiceDetailsArea from "./ServiceDetailsArea";

const serviceMap: { [key: string]: string } = {
  "industrial-textile-manufacturing": "Industrial Textile Manufacturing",
  "plastic-molding": "Plastic Molding",
};

const ServiceDetails = () => {
  const { serviceName } = useParams();
  return (
    <>
      <HeaderThree />
      <main>
        <BreadCrumb sub_title={serviceMap[serviceName?.toLowerCase() ?? ""]} title={serviceMap[serviceName?.toLowerCase() ?? ""]} />
        <ServiceDetailsArea />
      </main>
      <FooterThree />
    </>
  );
};

export default ServiceDetails;
