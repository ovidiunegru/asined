import { Link } from "react-router-dom";
import Count from "../../common/Count";

interface DataType {
   sub_title: string;
   title: string;
   desc: string;
   feature_list: {
      id: number;
      list: string[];
   }[]
}

const about_data: DataType = {
   sub_title: "About Us",
   title: "Tradition and Innovation in Industrial Textiles & Plastics",
   desc: "Asined Automotive is a family business with tradition in the field of textile and plastics processing. We focus on designing and manufacturing a wide range of products made from industrial textile confections and plastics. Our experience and technological capabilities allow us to deliver quality, custom solutions for clients in Romania and abroad.",
   feature_list: [
      {
         id: 1,
         list: ["Industrial textile confections", "Plastics injection"],
      },
      {
         id: 2,
         list: ["Custom product design", "Quality and reliability"],
      },
   ],
}

const { sub_title, title, desc, feature_list } = about_data;

interface PropType {
   style: boolean;
}

const About = ({ style }: PropType) => {
   return (
      <section className={`about-2-section p-relative fix section-space ${style ? "bg-color-3 is-dark" : ""}`}>
         <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-30.png)` }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-31.png)` }}></div>
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div className="about-2-image-area p-relative wow fadeInLeft" data-wow-delay="500ms">
                     <figure className="main-image m-img">
                        <img src="/assets/imgs/about/masina-de-cusut_resized.jpg" alt="" />
                     </figure>
                     <div className="small-image">
                        <img src="/assets/imgs/about/modling_resized.png" alt="" />
                     </div>
                     <div className="icon-box">
                        <div className="icon">
                           <i className="icon-prize-1"></i>
                        </div>
                        <div className="content">
                           <h3 className="mb-10"><span className="counter"><Count number={30} /></span>+</h3>
                           <p>Years of Experience</p>
                        </div>
                     </div>
                     <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-29.png)` }}></div>
                  </div>
               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div className="about-2-content-area pl-50">
                     <div className="title-box mb-35 wow fadeInRight" data-wow-delay=".5s">
                        <span className="section-sub-title">{sub_title}</span>
                        <h3 className="section-title mt-10">{title}</h3>
                     </div>
                     <p style={{fontSize:'20px'}} className="mb-35">{desc}</p>
                     <div className="row mb-45">
                        {feature_list.map((item) => (
                           <div key={item.id} className="col-lg-6">
                              <ul className="list-area">
                                 {item.list.map((list, i) => (
                                    <li key={i} className="mb-10">{list}</li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                     <div className="about-2-btn-area">
                        <Link className="primary-btn-1 btn-hover" to="/about">
                           about us &nbsp; | <i className="icon-right-arrow"></i>
                           <span style={{ top: "147.172px", left: "108.5px" }}></span>
                        </Link>
                        <div className="call-us">
                           <div className="icon-1">
                              <i className="fal fa-phone-volume"></i>
                           </div>
                           <div className="content p-relative">
                              <span>Call Us Now</span>
                              <h5><Link to="tel:+40722411446">+40 722 411 446</Link></h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
