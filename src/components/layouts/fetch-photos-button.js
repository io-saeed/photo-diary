import PropType from "prop-types";

function FetchPhotosButton({page, dispatch, fetch, progress,id}){
    const handleClick=()=>{
        dispatch(fetch(page,id));
    }
    return(
        <div className="buttons is-centered">
            <ProgressStatus click={handleClick} loading={progress}/>
        </div>);

}

function ProgressStatus({loading,click}){

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

function LoadMoreBotton({text,click}){
  return (<button  onClick={(e)=> click()}  className="button is-primary">{text}</button>);
}
export default FetchPhotosButton;

FetchPhotosButton.propTypes = {
  page: PropType.number,
  id:PropType.string.isRequired,
  dispatch:PropType.func.isRequired,
  progress:PropType.object.isRequired,
}
