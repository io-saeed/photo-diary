
const FetchPhotosButton=({page, dispatch, fetch, progress,id})=>{

    const loadMorePhotos=()=>{
        dispatch(fetch(page,id));
    }
    return(
            <div className="buttons is-centered">
                  { progress ?
                  (<button className="button is-primary is-loading"></button>) :
                   <button  onClick={(e)=> loadMorePhotos()}  className="button is-primary">Load More</button>
                  }
             </div>
           );

}

export default FetchPhotosButton;
