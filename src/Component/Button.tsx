import React from 'react'
type ButtonBox = {
    text?:string
    handelClick:()=>void
    class?:'BtnSucc'|'BtnErr'|'BtnDanger'|'BtnUpdate'
} & React.ComponentProps<'button'>
import './style.scss'


const ButtonDefaultStyle={
    minWidth: "100px",
    padding: "10px 15px",
    borderRadius: "10px",
    fontSize: "13px",
    fontWeight: "500",
    border: "1px solid",
    cursor: "pointer",
   
}
const Button = ({...rest}:ButtonBox) => {
  return (
    <button onClick={rest.handelClick} style={ButtonDefaultStyle} className={`${rest.class}`}>{rest.text}</button>
  )
}

export default Button