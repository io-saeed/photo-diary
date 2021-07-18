import { useEffect } from "react";
import PropType from "prop-types";
import Figure from "./figure";
import { useDispatch,useSelector } from "react-redux";
import { fetchPhotoCategories,selectPage} from "../../redux/category-slice";


const ListColumnPhotos =({data})=>{

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

ListColumnPhotos.propType ={
  data:PropType.array.isRequired
}


const ListCategories=({data})=>{

  const list = data.map(
    (column,index)=>(
      <div key={index} className="column is-4">
        <ListColumnPhotos data={column}/>
      </div>
    )
  )
  return list;
}


ListCategories.propType ={
  data:PropType.array.isRequired
}

const Topics=(props)=>{

  const dispatch = useDispatch();
  const pageNum = useSelector(selectPage);

  useEffect(()=>{
    if(pageNum===1){
      dispatch(fetchPhotoCategories());
    }
  },[pageNum,dispatch]);

  return(
    <div className="container mt-3 home">
      <div><p id="" className="title is-1 has-text-centered diary-title">~ Photo Diary ~</p></div>
      <div className="columns p-4">
        {props.children}
      </div>
    </div>


  );
}
export { Topics, ListCategories };
