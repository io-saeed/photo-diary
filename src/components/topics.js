import { useEffect } from "react";
import Figure from "./layouts/figure";
import { useDispatch,useSelector } from "react-redux";
import { fetchPhotoCategories,selectPage} from "../redux/category-slice";




const ListColumnPhotos =({data})=>{
  console.log(data);
   let list =
   data.map(
     (item,key)=>
     (<Figure
       key={key}
       id={item.slug}
       small={item.preview_photos[1].urls.small}
       medium={item.preview_photos[1].thumb}
       caption={item.title}/>)
   );
  return(
    <div className="columns" style={{flexDirection:"column"}}>
      {list}
    </div>
  )
}
const ListCategories=({data})=>{
  console.log(data);
  let list = data.map(
    (column,index)=>(
      <div key={index} className="column is-4">
        <ListColumnPhotos data={column}/>
      </div>
    )
  )
  return list;
}
const Topics=(props)=>{

  const dispatch = useDispatch();
  const pageNum = useSelector(selectPage);



  useEffect(()=>{
    if(pageNum===1){
      dispatch(fetchPhotoCategories());
    }
  });

  return(
    <div className="container mt-3 home">
      <div><p id="diary" className="title is-1 has-text-centered">~ Photo Dairy ~</p></div>
      <div className="columns p-4">
        {props.children}
      </div>
    </div>


  );
}
export { Topics, ListCategories };
