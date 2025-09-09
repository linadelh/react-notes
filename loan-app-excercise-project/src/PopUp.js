

export default function PopUp({isVisible , content , id }){

  if(isVisible){
    return (
        <div id="popup">
          <div id = {id} >
             <h1>{content}</h1>
          </div>
        </div>
    )
  }else{
    return (
      <></>
    )
  }
}