import { Link } from "react-router-dom"

interface DataType {
   id: number,
   page: string;
   thumb?: string;
   author: string;
   date: string;
   title: string;
   desc?: string;
   col?: string;
   class?: string;
}

const blog_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      col: "col-xxl-8 col-xl-8 col-lg-12",
      thumb: "/assets/imgs/blog/blog_1_resized.jpg",
      author: "By Asined",
      date: "30 June, 2016",
      title: "Asined Automotive participates at PackExpo 2016",
      desc: "We were invited to participate with a product at PackExpo 2016 – The exhibition for the packaging industry and packaging solutions"
   },
   {
      id: 2,
      page: "home_1",
      col: "col-xxl-4 col-xl-4 col-lg-12",
      class: "d-block",
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "The story of a garment bag that circled the world",
      desc: "To our surprise, as incredible as it is true, we get at the office of the Asined Automotive company ( office@asined.ro ) a letter fascinating from a passionate Romanian about our products"
   },
]

interface PropType {
   style: boolean;
}

const Blog = ({ style }: PropType) => {
   return (
      <section className={`blog-two-section section-space ${style ? "bg-color-3 is-dark" : ""}`}>
         <div className="small-container">
            <div className="blog-two-title-area mb-60">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">LATEST blog</span>
                  <h3 className="section-title mt-10">Latest Blog Insights</h3>
               </div>
               <Link className="primary-btn-1 btn-hover" to="/blog-grid">
                  view all &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link>
            </div>
            <div className="row g-4">
               {blog_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className={item.col}>
                     <div className={`blog-style-two ${item.class}`}>
                        {item.thumb &&
                           <Link className="blog-image w-img" to="/blog-details">
                              <img src={item.thumb ? item.thumb : ""} alt="" />
                           </Link>
                        }
                        <div className="blog-content-area">
                           <div className="post-meta">
                              <span className="p-relative"><Link to="/blog-details"><i className="fal fa-user"></i>{item.author}</Link></span>
                              <span className="p-relative"><Link to="/blog-details"><i className="fal fa-calendar-alt"></i>{item.date}</Link></span>
                           </div>
                           <hr />
                           <h5 className="blog-title"><Link to="/blog-details">{item.title}</Link></h5>
                           <p className="blog-text">{item.desc}</p>
                           <Link className="primary-btn-5 btn-hover" to="/blog-details">
                              Read MORE &nbsp; | <i className="icon-right-arrow"></i>
                              <span style={{ top: "147.172px", left: "108.5px" }}></span>
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Blog
