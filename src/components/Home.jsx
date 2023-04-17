import { AuthContext } from "./Providers/Providers.jsx";
import { useContext } from "react";





const Home = () => {
  
  const {user} = useContext(AuthContext); 
  
  console.log(user)


  return (
    <div>
    {user &&   <h1>{user.displayName}</h1>}
    </div>
  )
}

export default Home;
