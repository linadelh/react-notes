

import { Link } from "react-router-dom"


export default function Loginpage (){
    return (
        <>
        
        <div>
            <form>
                <>
                <label>
                    ENTER YOUR USER NAME
                </label>
                <input placeholder="USER NAME"></input>
                </>

                <>
                <label>
                    ENTER YOUR PASSWORD
                </label>
                <input placeholder="PASSWORD"></input>

                 <Link to='/Welcome'>
                <button> SUBMIT </button>
                </Link>
                </>
            </form>
            

            <Link to='/SignUp'>
            <p>register now ?</p>
            </Link>
           
        </div>
        
        
        </>
    )
}