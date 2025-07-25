import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Link } from "react-router-dom";
import { JSX } from 'react';

interface DataType {
   id: number;
   thumb: string;
   sub_title: string;
   title: string;
   desc: JSX.Element;
}

const banner_data: DataType[] = [
   {
      id: 1,
      thumb: "assets/imgs/banner/asined-video.mp4",
      sub_title: "WHAT WE DO",
      title: "Industrial Textile Manufacturing & Plastic Molding",
      desc: (<>Innovative manufacturing solutions designed to enhance durability, efficiency, and safety in industrial logistics and production workflows.</>),
   },
   // {
   //    id: 2,
   //    thumb: "assets/imgs/banner/asined-video.mp4",
   //    sub_title: "PLASTIC SOLUTIONS",
   //    title: "Advanced Sewing, Cutting and Injection",
   //    desc: (<>Benefit from our expertise in sewing, laser cutting, ultrasonic welding, and plastics injection for industrial applications.</>),
   // },
   // {
   //    id: 3,
   //    thumb: "assets/imgs/banner/asined-video.mp4",
   //    sub_title: "EXPERIENCE & RELIABILITY",
   //    title: "Trusted Partner for Industrial Solutions",
   //    desc: (<>With decades of experience, Asined delivers quality products and services for clients in Romania and abroad.</>),
   // },
]

const setting = {
   slidesPerView: 1,
   loop: true,
   effect: "fade",
   fadeEffect: { crossFade: true },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".banner-dot",
      clickable: true,
   },
   navigation: false,
};

const Banner = () => {
   return (
      <section className="banner-section-2 p-relative fix">
         <Swiper {...setting} modules={[Autoplay, Pagination, EffectFade]} className="swiper banner-active">
            {banner_data.map((item) => (
               <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="banner-main-2">
                     <video className="banner-video" autoPlay loop muted playsInline>
                        <source src={item.thumb} type="video/mp4" />
                        Your browser does not support the video tag.
                     </video>
                     <div className="large-container">
                        <div className="banner-area-2 p-relative z-3 wow img-custom-anim-left animated" data-wow-delay="1000ms">
                           <span className="p-relative banner-sub-title">{item.sub_title}</span>
                           <h1 className="banner-title">{item.title}</h1>
                           <p className="banner-text">{item.desc}</p>
                           <div className="banner-btn-area-2">
                              <Link className="primary-btn-1 btn-hover" to="/services">
                                 VIEW SERVICES &nbsp; | <i className="icon-right-arrow"></i>
                                 <span style={{ top: "147.172px", left: "108.5px" }}></span>
                              </Link>
                              <div className="round-image-area">
                                 <div className="image-1">
                                    <img src="/assets/imgs/banner/clients-group.png" alt="" />
                                 </div>
                              </div>
                              <h6>satisfied clients</h6>
                           </div>
                        </div>
                        <div className="socials-area">
                           <ul>
                              <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                           </ul>
                           <span>FOLLOW US</span>
                        </div>
                     </div>
                  </div>
                  <div className="shape-area-2">
                     <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-18.png)` }}></div>
                     <div className="shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-19.png)` }}></div>
                     <div className="shape-3" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-20.png)` }}></div>
                     <div className="shape-4" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-21.png)` }}></div>
                     <div className="shape-5" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-22.png)` }}></div>
                     <div className="shape-6" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-23.png)` }}></div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="banner-dot-inner">
            <div className="banner-dot"></div>
         </div>
      </section>
   )
}

export default Banner
