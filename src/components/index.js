import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchPhotoCategories,
  selectPage,
  selectAllCategory } from "../redux/category-slice";

const Figure=({small,medium,caption})=>{
  return(
    <div className="column">
      <figure className="image">
        <picture>
          <source srcSet={small} media="(max-width:800px)"/>
          <source srcSet={medium} media="(min-width:1901px)"/>
          <img src={small} alt={caption}/>
        </picture>
        <figcaption className="title has-text-centered pt-2">{ caption } </figcaption>
      </figure>
    </div>
  );
}


const ListColumnPhotos =({data})=>{
  console.log(data);
   let list =
   data.map(
     (item,key)=>
     (<Figure
       key={key}
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
const Landing=()=>{

  const dispatch = useDispatch();
  const pageNum = useSelector(selectPage);
  const allCategory = useSelector(selectAllCategory);
  console.log(allCategory);


  useEffect(()=>{
    if(pageNum===1){
      dispatch(fetchPhotoCategories());
    }
  })
  return(
    <div className="columns p-4">
      <ListCategories data={allCategory} />
    </div>

  );
}

export default Landing;
