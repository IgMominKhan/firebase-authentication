import { useContext } from "react";
import { AuthContext } from "./Providers/Providers.jsx";
import { NavLink } from "react-router-dom";

export default function Header() {

  const {user} = useContext(AuthContext);



  return (
    <div className="navbar py-6 w-11/12 mx-auto bg-base-100">
      <div className="flex-1">
        <NavLink className="font-medium text-4xl" to='/'>Firebase authentication</NavLink>
      </div>
    { !user ? <NavLink className={({isActive})=> isActive? 'text-blue-300':''} to='/register'>Register</NavLink> :
      <NavLink  className={({isActive})=> isActive? 'text-blue-300 ml-3':'ml-3'} to='/login'>Login</NavLink>}
    </div>
  )
}
