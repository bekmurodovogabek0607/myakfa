import { Link } from "react-router-dom"
import Button from "./Button"

export const NoProduct = () => {
  return (
    <div style={{width:'100%',display:"flex",alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <h3 style={{color:'red'}}>No product</h3>
      <Link to={'/setting/productprice'}><Button style={{width:'100%'}} text="Add product" class='BtnSucc' handelClick={()=>{}} /></Link>  
    </div>
  )
}
