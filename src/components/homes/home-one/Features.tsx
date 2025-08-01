import { Link } from "react-router-dom";

interface DataType {
   id: number;
   icon: string;
   title: string;
   desc: string;
}

const feature_data: DataType[] = [
   {
      id: 1,
      icon: "icon-hammer", // icons specifice nu de acoperis generate pe envato sau cu ai
      title: "Expert Engineering Solutions",
      desc: "Our skilled engineers deliver innovative, high-quality custom solutions for industrial textiles and plastics, ensuring quality and precision for every project.",
   },
   {
      id: 2,
      icon: "icon-roof-5", // icons specifice nu de acoperis generate pe envato sau cu ai
      title: "High-Quality Materials",
      desc: "We use only premium, high-performance materials to craft durable, reliable products designed for protection, storage, and efficient transport of goods.",
   },
   {
      id: 3,
      icon: "icon-roof-6", // icons specifice nu de acoperis generate pe envato sau cu ai
      title: "Custom Textile Products",
      desc: "We specialize in custom textile manufacturing, delivering tailored solutions for industrial applications, including protective fabrics and gear.",
   },
   {
      id: 4,
      icon: "icon-roof-7", // icons specifice nu de acoperis generate pe envato sau cu ai
      title: "Custom Plastic Products",
      desc: "Our expertise in plastic fabrication lets us create durable, tailored products for various industries, from protective coverings to storage solutions.",
   },
]


interface PropType {
   style: boolean;
}

const Features = ({ style }: PropType) => {
   return (
      <section className={`features-section pt-80 pb-80 bg-color-1 p-relative ${style ? "is-dark" : ""}`}>
         <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-27.png)` }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-28.png)` }}></div>
         <div className="small-container">
            <div className="row g-4">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                     <div className={`features-box-area p-relative wow fadeInLeft ${style ? "bg-color-3" : ""}`} data-wow-delay="500ms">
                        <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-24.png)` }}></div>
                        <div className="shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-25.png)` }}></div>
                        <div className="shape-3" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-26.png)` }}></div>
                        <div className="icon-box">
                           <i className={item.icon}></i>
                        </div>
                        <h5 className="mt-20 mb-10"><Link to="/services">{item.title}</Link></h5>
                        <p>{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Features
