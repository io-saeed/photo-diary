
const FetchPhotosButton=({page, dispatch, fetch, progress})=>{

    const loadMorePhotos=()=>{
        dispatch(fetch(page));
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
