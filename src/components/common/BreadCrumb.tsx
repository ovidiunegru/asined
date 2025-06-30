import { Link } from "react-router-dom";

interface DataType {
   sub_title: string;
   title: string;
}
const BreadCrumb = ({ sub_title, title }: DataType) => {
   return (
      <div className="breadcrumb__area theme-bg-1 p-relative pt-160 pb-160">
         <div className="breadcrumb__thumb" style={{ backgroundImage: `url(/assets/imgs/resources/page-title-bg-1.png)` }} ></div>
         <div className="breadcrumb__thumb_2">
            <video 
               autoPlay 
               muted 
               loop 
               style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0
               }}
            >
               <source src="/assets/imgs/asined/breadcrumb-video.mp4" type="video/mp4" />
            </video>
         </div>
         <div className="small-container">
            <div className="row justify-content-center">
               <div className="col-xxl-12">
                  <div className="breadcrumb__wrapper p-relative">
                     <h2 className="breadcrumb__title">{sub_title}</h2>
                     <div className="breadcrumb__menu">
                        <nav>
                           <ul>
                              <li><span><Link to="/">Home</Link></span></li>
                              <li><span>{title}</span></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BreadCrumb
