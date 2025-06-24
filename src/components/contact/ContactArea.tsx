import { Link } from "react-router-dom";
import ContactForm from "../forms/ContactForm";

interface DataType {
   id: number;
   icon: string;
   title: string;
   info: string;
   link: string;
}

const contact_data: DataType[] = [
   {
      id: 1,
      icon: "fat fa-location-dot",
      title: "Location",
      info: "Bucuresti, str. General dr Severin nr 16, sector 6, Romania",
      link: "https://maps.google.com/?q=Bucuresti,str.GeneraldrSeverinnr16,sector6",
   },
   {
      id: 2,
      icon: "fat fa-phone-volume",
      title: "Call Us",
      info: "+40 722 411 446",
      link: "tel:+40722411446",
   },
   {
      id: 3,
      icon: "fat fa-envelope",
      title: "Email",
      info: "office@asined.ro",
      link: "mailto:office@asined.ro",
   },
];

const ContactArea = () => {
   return (
      <section className="contact-page-section section-space">
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="contact-p-info-area">
                     {contact_data.map((item) => (
                        <div key={item.id} className="contact-box">
                           <div className="icon-1">
                              <i className={item.icon}></i>
                           </div>
                           <div className="info">
                              <span>{item.title}</span>
                              <h4><Link to={item.link}>{item.info}</Link></h4>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="contact-page-form-area">
                     <div className="title-box mb-40 wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title">LET'S TALK</span>
                        <h3 className="section-title mt-10">Let's Get in Touch</h3>
                     </div>
                     <div className="contact-page-form">
                        <ContactForm />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactArea
