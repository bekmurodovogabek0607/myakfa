
import Login from "../pages/Login"
import Register from "../pages/Registratsiya"

const token =localStorage.getItem("my-akfa-x-access-token")


export default function ProtectedRoute():JSX.Element {
   
    if(token=='' || token==undefined) return  <Register/>
    else return <Login/>
}

