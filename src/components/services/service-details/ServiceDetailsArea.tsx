import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServiceSidebar from "./ServiceSidebar";

interface DataType {
  title_1: string;
  title_2: string;
  desc_1: string;
  desc_2: string;
  desc_3: string;
  desc_4: string;
  list: string[];
  image: string;
  images?: string[]; // Optional array for multiple images
}

const services: { [key: string]: DataType } = {
  "Industrial Textile Manufacturing": {
    title_1: "Our Textile Services",
    title_2: "Main Textile Service Areas",
    desc_1: "We use various manual and mechanical procedures to make all types of seams for textile materials.",
    desc_2: "Laser cutting ensures precise cuts without deforming the fabric, using no-contact technology.",
    desc_3: "Ultrasonic sewing ensures perfect bonding of even thin materials, offering strength and versatility.",
    desc_4: "We support every textile production phase, from cutting to sewing, to custom finishing.",
    list: [
      "Sewing textile materials",
      "Laser cutting textile materials",
      "Ultrasonic bonding",
    ],
    image: "/assets/imgs/service/750x479textile.png",
    images: [
      "/assets/imgs/service/750x479textile2.png",
      "/assets/imgs/service/750x479textile4.png",
      "/assets/imgs/service/750x479textile.png",
      "/assets/imgs/service/750x479textile3.png",
    ],
  },
  "Plastic Molding": {
    title_1: "Our Plastic Molding Services",
    title_2: "Main Plastic Processing Areas",
    desc_1: "We use modern injection molding technology to create durable and precise plastic parts.",
    desc_2: "Our machines are capable of working with a wide variety of materials, suited for industrial use.",
    desc_3: "We can handle both customer-provided molds and develop custom molds in-house.",
    desc_4: "Every plastic part is produced under strict quality control to ensure durability and function.",
    list: [
      "Plastic part injection",
      "Custom mold development",
      "High-volume production",
    ],
    image: "/assets/imgs/service/750x479plasticmolding.png",
    images: [
      "/assets/imgs/service/750x479plasticmolding.png",
      "/assets/imgs/service/750x479plasticmolding2.png",
      "/assets/imgs/service/750x479plasticmolding3.png",
      "/assets/imgs/service/750x479plasticmolding4.png",
    ],
  },
};

const serviceMap: { [key: string]: string } = {
  "industrial-textile-manufacturing": "Industrial Textile Manufacturing",
  "plastic-molding": "Plastic Molding",
};

const ServiceDetailsArea = () => {
  const { serviceName } = useParams<{ serviceName: string }>();

  const [selectedService, setSelectedService] = useState<string>("Industrial Textile Manufacturing");

  useEffect(() => {
    if (serviceName && serviceMap[serviceName.toLowerCase()]) {
      setSelectedService(serviceMap[serviceName.toLowerCase()]);
    }
  }, [serviceName]);

  const {
    title_1,
    title_2,
    desc_1,
    desc_2,
    desc_3,
    desc_4,
    list,
    image,
    images,
  } = services[selectedService];

  // Use images array if available, otherwise fall back to single image
  const serviceImages = images || [image, image, image, image];

  return (
    <section className="service-details-page section-space">
      <div className="small-container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="service-details-page-content">
              <figure className="w-img">
                <img src={serviceImages[2]} alt="" />
              </figure>
              <h3 className="service-details-title mt-45 mb-25">{title_1}</h3>
              <p className="mb-25">{desc_1}</p>
              <p className="mb-35">{desc_2}</p>
              <div className="row">
                <div className="col-lg-6">
                  <figure className="w-img">
                    <img src={serviceImages[0]} alt="" />
                  </figure>
                </div>
                <div className="col-lg-6">
                  <figure className="w-img">
                    <img src={serviceImages[1]} alt="" />
                  </figure>
                </div>
              </div>
              <p className="mt-25 mb-35">{desc_3}</p>
              <h4>{title_2}</h4>
              <p className="mt-25 mb-35">{desc_4}</p>
              <div className="row">
                <div className="col-lg-7">
                  <figure className="w-img">
                    <img src={serviceImages[3]} alt="" />
                  </figure>
                </div>
                <div className="col-lg-5">
                  <ul className="service-details-page-list pt-20 pb-10">
                    {list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ServiceSidebar selected={selectedService} onSelect={setSelectedService} />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsArea;
