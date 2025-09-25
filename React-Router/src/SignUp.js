

import { Link } from "react-router-dom"



export default function Signup() {
  return (
    <>
      <div>
        <form>
          <>
            <label>
              ENTER YOUR FULL NAME
            </label>
            <input placeholder="FULL NAME"></input>
          </>

          <>
            <label>
              ENTER YOUR EMAIL
            </label>
            <input placeholder="EMAIL"></input>
          </>

          <>
            <label>
              CREATE A PASSWORD
            </label>
            <input placeholder="PASSWORD"></input>
          </>

          <>
            <label>
              CONFIRM PASSWORD
            </label>
            <input placeholder="CONFIRM PASSWORD"></input>
          </>

          <button> SIGN UP </button>
        </form>
        
        <Link  to='/Login'>
        <p>already have an account? login</p>
        </Link>
      </div>
    </>
  )
}
