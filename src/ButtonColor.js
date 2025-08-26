
// BUTTON THAT CHANGES ITS COLOR WHENEVER U CLICK ON 

import { useState } from "react"


export default function ButtonColor (){
   
    const [colorlist] = useState([
  { color: "red", content: "RED" },
  { color: "pink", content: "PINK" },
  { color: "green", content: "GREEN" },
  { color: "black", content: "BLACK" },
  { color: "orange", content: "ORANGE" },
  { color: "purple", content: "PURPLE VIBES" },
  { color: "yellow", content: "SUNSHINE" },
  { color: "cyan", content: "CYAN ENERGY" },
  { color: "lime", content: "LIME POWER" },
  { color: "brown", content: "CHOCOLATE" },
  { color: "teal", content: "OCEAN TEAL" },
  { color: "magenta", content: "MAGENTA MAGIC" },
  { color: "gold", content: "GOLDEN TOUCH" },
  { color: "silver", content: "SILVER MOOD" },
  { color: "indigo", content: "INDIGO NIGHT" },
  { color: "violet", content: "VIOLET DREAM" },
  { color: "navy", content: "NAVY BLUE" },
  { color: "crimson", content: "CRIMSON RED" },
  { color: "olive", content: "OLIVE GREEN" },
  { color: "hotpink", content: "PINK " }
]);

    const[currentcontent , setcontent] = useState(" CLICK TO SWITCH COLOR :)");
    const [currentColor , setnewcolor] = useState("blue");
    const [indexofcolor , setindex] = useState(0);
    let index = indexofcolor ; 
   

     console.log(index);
    function handlecolorclick (){

        if(index <= colorlist.length - 1){
        setnewcolor(colorlist[index].color);
        setcontent(colorlist[index].content);
        index++ ; 
        setindex(index);
        }else{
        index = 0 ; 
        setindex(index); 
        setnewcolor(colorlist[index].color);
        setcontent(colorlist[index].content);
        index++ ; 
        setindex(index);
        }
    }



return (
    <>
    <button id="switch-color" style={{display:"flex" , justifyContent:"center" , margin:"250px auto" , padding:"30px" , cursor:"pointer" , transition:"0.7s" , backgroundColor: currentColor , color:"white"}} onClick={handlecolorclick}>{currentcontent}</button>
    </>
)
}