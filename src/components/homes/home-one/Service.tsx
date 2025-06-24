import { Link } from "react-router-dom"
import { useState } from "react";

interface TabData {
   icon: string;
   title: string;
}
const tab_title: TabData[] = [
   {
      icon: "icon-roof-7",
      title: "Sewing textile materials",
   },
   {
      icon: "icon-roof-2",
      title: "Laser cutting textile materials",
   },
   {
      icon: "icon-roof-8",
      title: "Ultrasonic sewing textile materials",
   },
   {
      icon: "icon-roof-4",
      title: "Plastics injection",
   },
];

interface DataType {
   id: number;
   thumb: string;
   title: string;
   desc: string;
   list: string[];
}

const service_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Sewing textile materials",
      desc: "We use different manual or mechanical procedures to make all the types of seams for the textile materials.",
      list: ["Manual and mechanical sewing", "All types of seams", "Industrial textile expertise"],
   },
   {
      id: 2,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Laser cutting textile materials",
      desc: "Laser cutting is a process without any contact between the laser cutter and material, thus precise cuts are achieved, without deforming the fabric.",
      list: ["Contactless cutting", "Precise results", "No fabric deformation"],
   },
   {
      id: 3,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Ultrasonic sewing textile materials",
      desc: "Ensure a perfect bonding (even of very thin materials), is a versatile solution, which offers strengthened seams.",
      list: ["Perfect bonding", "Versatile solution", "Strengthened seams"],
   },
   {
      id: 4,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Plastics injection",
      desc: "We have the technological capability to inject plastic parts into molds produced by customers or our own molds.",
      list: ["Plastic part injection", "Custom or own molds", "Technological expertise"],
   },
];

interface PropType {
   style: boolean;
}

const Service = ({ style }: PropType) => {

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <section className={`service-tab-section section-space bg-color-1 p-relative ${style ? "is-dark" : ""}`}>
         <div className="bg-image" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-35.png)` }}></div>
         <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-33.png)` }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-34.png)` }}></div>
         <div className="small-container">
            <div className="service-tab-title-area mb-70">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">WHAT WE DO</span>
                  <h3 className="section-title mt-10 text-white p-relative">Delivering High Quality <br />Textile & Plastic Services</h3>
               </div>
               <Link className="primary-btn-4 btn-hover mt-20" to="/services">
                  all services &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link>
            </div>

            <div className="row">
               <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="service-tab-btn-area wow fadeInLeft" data-wow-delay="500ms">
                     <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {tab_title.map((tab, index) => (
                           <li key={index} className="nav-item" role="presentation">
                              <a className={`nav-link ${activeTab === index ? "active" : ""}`} onClick={() => handleTabClick(index)} id="modified-roofing-tab" style={{ cursor: "pointer" }}>
                                 <div className="icon-box">
                                    <i className={tab.icon}></i>
                                 </div>
                                 {tab.title}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="service-tab-details-area">
                     <div className="tab-content" id="myTabContent">
                        {service_data.map((item, index) => (
                           <div key={item.id} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="modified-roofing-tab-pane">
                              <div className="service-tab-content p-relative">
                                 {!style && <div className="tab-bg-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-32.png)` }}></div>}
                                 <figure className="image p-relative">
                                    <img src={item.thumb} alt="" />
                                 </figure>
                                 <div className="content p-relative">
                                    <h4>{item.title}</h4>
                                    <p className="pt-15 pb-10">{item.desc}</p>
                                    <ul className="tab-list-content">
                                       {item.list.map((list, i) => (
                                          <li key={i}>{list}</li>
                                       ))}
                                    </ul>
                                    <Link className="primary-btn-1 btn-hover mt-20" to="/services">
                                       Read more &nbsp; | <i className="icon-right-arrow"></i>
                                       <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Service
