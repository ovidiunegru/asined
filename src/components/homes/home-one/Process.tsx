interface Datatype {
   id: number;
   icon: string;
   title: string;
   desc: string;
}

const process_data: Datatype[] = [
   {
      id: 1,
      icon: "icon-dollar-tag", // TODO: Planning icon
      title: "Custom Product Design",
      desc: "We collaborate with clients to design tailored solutions using industrial textiles and plastics, ensuring every product meets the specific requirements of your industry.",
   },
   {
      id: 2,
      icon: "icon-engineer",
      title: "Precision Manufacturing",
      desc: "Our skilled engineers and craftsmen turn design concepts into reality using advanced techniques like sewing, laser cutting, and plastic injection molding for high-quality results.",
   },
   {
      id: 3,
      icon: "icon-home",//done icon
      title: "Quality Control & Delivery",
      desc: "After rigorous testing, we ensure that each product meets industrial standards before delivering it to our clients. Our commitment is to provide durable, high-performance solutions.",
   },
];

interface PropType {
   style: boolean;
}

const Process = ({ style }: PropType) => {
   return (
      <section className={`work-process-section section-space p-relative ${style ? "is-dark" : ""}`} style={{ backgroundImage: `url(${style ? "/assets/imgs/shapes/shape-51.png" : "/assets/imgs/bg/process-bg.png"})` }}>
         <div className="shape-1" style={{ backgroundImage: `url(${style ? "/assets/imgs/shapes/shape-52.png" : "/assets/imgs/bg/line.png"})` }}></div>
         <div className="small-container">
            <div className="title-box text-center mb-60 wow fadeInLeft" data-wow-delay=".5s">
               <span className="section-sub-title">Our Approach</span>
               <h3 className="section-title mt-10">Tailored Process for Textile & Plastic Solutions</h3>
            </div>
            <div className="row g-4">
               {process_data.map((item) => (
                  <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="work-process-box text-center ">
                        <div className="icon-box p-relative">
                           <i className={item.icon}></i>
                           <span>{item.id}</span>
                        </div>
                        <div className="content">
                           <h4 className="pt-25 pb-25">{item.title}</h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Process;
