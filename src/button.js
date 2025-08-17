

export default function button ({content , children}){
    return (
    <button className="btn" onClick={ ()=> alert("hello HBABI")}>
     <span style={{color : "pink" , fontSize : "600" , paddingBottom : "20px" }}>
        {content} 
    </span>
        {children}
        </button>
    )
}