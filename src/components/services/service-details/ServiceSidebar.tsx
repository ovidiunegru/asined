import { Link } from "react-router-dom";

const sidebar_list: string[] = [
  "Industrial Textile Manufacturing",
  "Plastic Molding",
];

interface SidebarProps {
  selected: string;
  onSelect: (value: string) => void;
}

const ServiceSidebar = ({ selected, onSelect }: SidebarProps) => {

  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4">
      <div className="service-sidebar">
        <aside>
          <div className="service-widget-1 mb-30">
            <h5>Main Services</h5>
            <ul>
              {sidebar_list.map((name, i) => {
                const slug = name.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={i} className={selected === name ? "active" : ""}>
                    <Link to={`/services/${slug}`} onClick={() => onSelect(name)}>
                      <span>{name}</span>
                      <span>
                        <i className="icon-arrow-right-double"></i>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="service-widget-2 mb-30">
            <figure className="w-img">
              <img
                src="/assets/imgs/asined/slide1-1-1024x683.jpg"
                alt="Asined Factory"
              />
            </figure>
            <div className="content bg-color-1 text-center">
              <div className="icon-box p-relative">
                <i className="fal fa-phone-volume"></i>
              </div>
              <h5>Need Help? Call Here</h5>
              <Link className="pt-25 pb-25 phone" to="tel:+40722411446">
                +40 722.411.446
              </Link>
              <div className="btn-box">
                <Link className="primary-btn-1 btn-hover" to="/contact">
                  GET A QUOTE &nbsp; | <i className="icon-right-arrow"></i>
                  <span
                    style={{ top: "147.172px", left: "108.5px" }}
                  ></span>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ServiceSidebar;
