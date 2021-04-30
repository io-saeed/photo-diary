import { useSelector } from "react-redux";
import { Topics, ListCategories } from "./topics";
import { selectAllCategory } from "../redux/category-slice";






const Landing =()=>{
  const allCategory = useSelector(selectAllCategory);

  return (
      <Topics>
        <ListCategories data={allCategory}/>
      </Topics>)
}

export default Landing;
