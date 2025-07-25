import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import BlogSidebar from "../blog-sidebar";
import blog_data from "../../../data/BlogData";

const BlogArea = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  // Filter blog data by page, search, and tag
  const filteredBlog = blog_data
    .filter((item) => item.page === "inner_1")
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((item) =>
      selectedTag ? item.tags?.includes(selectedTag.toLowerCase()) : true
    )
    .filter((item) =>
      selectedCategory ? item.category === selectedCategory : true
    );

  // Reset pagination when search or tag changes
  useEffect(() => {
    setItemOffset(0);
  }, [searchQuery, selectedTag]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredBlog.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredBlog.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredBlog.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="blog-standard-page section-space">
      <div className="small-container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            {currentItems.map((item) => (
              <div
                key={`${item.page}-${item.id}`}
                className="blog-style-one blog-style-one-space"
              >
                <Link className="blog-image w-img" to="/blog-details">
                  <img src={item.thumb || ""} alt={item.title} />
                </Link>
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="p-relative">
                      <Link to="/blog-details">
                        <i className="fal fa-user"></i> {item.author}
                      </Link>
                    </span>
                    <span className="p-relative">
                      <Link to="/blog-details">
                        <i className="fal fa-calendar-alt"></i> {item.date}
                      </Link>
                    </span>
                  </div>
                  <hr />
                  <h5 className="blog-title mb-30">
                    <Link to="/blog-details">{item.title}</Link>
                  </h5>
                  {item.desc && <p className="mb-35">{item.desc}</p>}
                  <div className="blog-link">
                    <Link
                      className="primary-btn-5 btn-hover"
                      to="/blog-details"
                    >
                      Read MORE &nbsp; |{" "}
                      <i className="icon-right-arrow"></i>
                      <span
                        style={{ top: "147.172px", left: "108.5px" }}
                      ></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="row">
              <div className="col-xxl-12">
                <div className="pagination__wrapper mt-50">
                  <div className="bd-basic__pagination d-flex align-items-center justify-content-center">
                    <nav>
                      <ReactPaginate
                        className="pagination"
                        breakLabel="..."
                        nextLabel={<i className="far fa-arrow-right"></i>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel={<i className="far fa-arrow-left"></i>}
                        renderOnZeroPageCount={null}
                      />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pass state handlers to sidebar */}
          <BlogSidebar
            setSearchQuery={setSearchQuery}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
