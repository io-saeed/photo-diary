
const FetchPhotosButton=({page, dispatch, fetch, progress,id})=>{
    const handleClick=()=>{
        dispatch(fetch(page,id));
    }
    return(
        <div className="buttons is-centered">
            <ProgressStatus click={handleClick} loading={progress}/>
        </div>);

}
const ProgressStatus=({loading,click})=>{

    switch (loading.status) {
      case true:
          return (<button className="button is-primary is-loading"></button>)
      case false:
          if(loading.hasErrors){
            return(<LoadMoreBotton
                    text="Sorry,something went wrong try again"
                    click={click}/>)
          }
          return <LoadMoreBotton click={click} text="Load More"/>

      default:
          return (<button className="button is-primary is-loading"></button>);
    }


}

const LoadMoreBotton=({text,click})=>{
  return (<button  onClick={(e)=> click()}  className="button is-primary">{text}</button>);
}
export default FetchPhotosButton;
