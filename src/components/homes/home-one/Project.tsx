import { useEffect, useState, useRef } from 'react';
import { Autoplay,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import project_data from '../../../data/ProjectData';

const setting = {
   slidesPerView: 4,
   loop: true,
   spaceBetween: 30,
   // autoplay: {
   //    delay: 3000,
   //    disableOnInteraction: false,
   // },
   pagination: false,
   navigation: true,
   breakpoints: {
      '1400': {
         slidesPerView: 4,
      },
      '1200': {
         slidesPerView: 3,
      },
      '768': {
         slidesPerView: 2,
      },
      '0': {
         slidesPerView: 1,
      },
   },
};

const convertToEmbedURL = (url: string) => {
   const videoId = url.split("youtu.be/")[1]?.split("?")[0];
   return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`;
};

interface PropType {
   style: boolean;
}

const Project = ({ style }: PropType) => {
   const swiperRef = useRef<HTMLDivElement | null>(null);  // Reference to the Swiper container
   const [iframeWidth, setIframeWidth] = useState<number>(550);  // Default width
   const [iframeHeight, setIframeHeight] = useState<number>(iframeWidth * 9 / 16);  // 16:9 aspect ratio

   // Set iframe width based on viewport
   useEffect(() => {
      const updateIframeSize = () => {
         const containerWidth = swiperRef.current?.clientWidth || 0;  // Get the width of the Swiper container
         const slideWidth = containerWidth / 4.3;  // Adjust width for 4 items per row
         setIframeWidth(slideWidth);
         setIframeHeight(slideWidth * 9 / 10);  // Maintain 16:9 aspect ratio
      };

      updateIframeSize();

      // Resize the iframe on window resize
      window.addEventListener('resize', updateIframeSize);

      // Cleanup the event listener
      return () => {
         window.removeEventListener('resize', updateIframeSize);
      };
   }, []);

   return (
      <section className={`project-slider-two-section section-space-bottom p-relative fix ${style ? "bg-color-1 is-dark" : ""}`}>
         <div className="bg-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-37.png)` }}></div>
         <div className="small-container">
            <div className="project-two-title-area mb-60">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">portfolio</span>
                  <h3 className="section-title mt-10">Our Latest Projects</h3>
               </div>
               <Link className="primary-btn-1 btn-hover" to="/projects">
                  all PROJECTS &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link>
            </div>
         </div>
         <div className="container-fluid">
            <Swiper {...setting} modules={[Autoplay,Navigation]} className="swiper project-active-1" pagination={{ clickable: true }}>
               {project_data.filter((items) => items.page === "home_1").map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="project-slider-two-box p-relative">
                        <figure>
                           <iframe
                              width={iframeWidth}
                              height={iframeHeight}
                              src={convertToEmbedURL(item.thumb)}
                              title="YouTube video"
                              frameBorder="0"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen>
                           </iframe>
                        </figure>
                        <div className="content">
                           <div className="inner-box">
                              <span>{item.sub_title}</span>
                              <h5><Link to="/projects">{item.title}</Link></h5>
                           </div>
                           <Link className="icon-1" to="/projects">
                              <i className="icon-arrow-up"></i>
                           </Link>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
};

export default Project;
