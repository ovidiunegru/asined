import { Link } from "react-router-dom";

interface TagsProps {
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}

const tags: string[] = ["Correct", "Plastic", "Textile", "Sweing", "Molding", "Injection", "Test", "Waterproofing"];

const Tags = ({ selectedTag, setSelectedTag }: TagsProps) => {
  const handleClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  return (
    <div className="blog-widget-4 mb-30">
      <h5 className="blog-widget-title p-relative mb-45">Tags</h5>
      <div className="tagcloud">
        {tags.map((tag, i) => (
          <Link
            key={i}
            to="#"
            onClick={() => handleClick(tag)}
            className={tag === selectedTag ? "selected" : ""}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;
