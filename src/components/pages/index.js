import {useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Topics, ListCategories } from "../layouts/topics";
import { selectAllCategory } from "../../redux/category-slice";
import { unMount,selectPage } from "../../redux/gallery-slice";



const Landing =()=>{
  const allCategory = useSelector(selectAllCategory);

  const page = useSelector(selectPage);
  const dispatch= useDispatch();

   useEffect(()=>{
     if(page!==1){
        dispatch(unMount()); // to reset gallery content it has unMount
     }
   },[page,dispatch])

  return (
      <Topics>
        <ListCategories data={allCategory}/>
      </Topics>)
}

export default Landing;
