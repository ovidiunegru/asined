import { Link } from "react-router-dom";

interface CategoriesProps {
  selectedCategory: number | null;
  setSelectedCategory: (category: number | null) => void;
}

interface DataType {
   id: number;
   title: string;
   count: string;
}

const cat_data: DataType[] = [
   {
      id: 1,
      title: "Industrial Textile Manufacturing",
      count: "1"
   },
   {
      id: 2,
      title: "Plastic Molding",
      count: "4"
   },
];

const Category =  ({ selectedCategory, setSelectedCategory }: CategoriesProps) => {
   const handleClick = (category: number) => {
    setSelectedCategory(category === selectedCategory ? null : category);
   };

   return (
      <div className="blog-widget-2 mb-30">
         <h5 className="blog-widget-title p-relative mb-45">Category</h5>
         <ul className="blog-categories-list">
            {cat_data.map((cat) => (
               <li key={cat.id}>
               <Link 
                 to="#"
                 onClick={() => handleClick(cat.id)}
                 className={cat.id === selectedCategory ? "selected" : ""}
               >
                     <span>{cat.title}</span>
                     <span>({cat.count})</span>
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Category
