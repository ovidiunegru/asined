import Marquee from "react-fast-marquee";

const text_slider: string[] = [
   "Banca_Transilvania_Logo",
   "CEC_Bank",
   "dacia_logo",
   "ford_logo",
   "hyundai_logo_no_bg",
   "KIA_logo3",
   "renault"
];

interface PropType {
   style: boolean;
}

const TextSlider = ({ style }: PropType) => {
   return (
      <section className={`text-slider-section section-space fix ${style ? "bg-color-1 is-dark" : ""}`}>
         <div className="title-box text-center mb-60 wow fadeInLeft" data-wow-delay=".5s">
            <span className="section-sub-title">Partners</span>
            <h3 className="section-title mt-10">Trusted by Leading Companies</h3>
         </div>
         <div className="container-fluid">
            <Marquee
               gradient={false}
               speed={40} // Adjust as needed
               pauseOnHover={true}
               loop={0} // Infinite loop
            >
               {text_slider.map((item, i) => (
                  <div key={i} className="slide-box" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "40px" }}>
                     <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 0L38.1027 21.8973L60 30L38.1027 38.1027L30 60L21.8973 38.1027L0 30L21.8973 21.8973L30 0Z" fill="#EA1826" />
                     </svg>
                     <div style={{ marginLeft: "50px" }}>
                        <img
                           width="100"
                           height="100"
                           src={`/assets/imgs/comercial-logos/${item}.png`}
                           alt={item}
                        />
                     </div>
                  </div>
               ))}
            </Marquee>
         </div>
      </section>
   );
};

export default TextSlider;
