import { Link } from "react-router-dom";
import Category from "./Category";
import Tags from "./Tags";

interface BlogSidebarProps {
  setSearchQuery: (query: string) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  selectedCategory: number | null;
  setSelectedCategory:(category: number | null) => void;
}

const BlogSidebar = ({ setSearchQuery, selectedTag, setSelectedTag,selectedCategory,setSelectedCategory }: BlogSidebarProps) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4">
      <div className="blog-sidebar">
        <aside>
          <div className="blog-widget-1 mb-30">
            <h5 className="blog-widget-title p-relative mb-45">Search</h5>
            <div className="search-form p-relative">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Search here"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">
                  <i className="icon-search"></i>
                </button>
              </form>
            </div>
          </div>

          <Category
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
           />

          <Tags
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />

          <div className="service-widget-2 mb-30">
            <figure className="w-img">
              <img src="/assets/imgs/service/service-widget-1.jpg" alt="" />
            </figure>
            <div className="content bg-color-1 text-center">
              <div className="icon-box p-relative">
                <i className="fal fa-phone-volume"></i>
              </div>
              <h5>Need Help? Call Here</h5>
              <Link className="pt-25 pb-25 phone" to="tel:2085550112">+40 722 411 446</Link>
              <div className="btn-box">
                <Link className="primary-btn-1 btn-hover" to="/contact">
                  GET A QUOTE &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogSidebar;
