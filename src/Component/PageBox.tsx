
import React from 'react'
import  './style.scss'
import { Link } from 'react-router-dom'

type PageBoxType = {
    imgSrc:string
    text: string
    link: string
    
} &   React.ComponentProps<'div'>
const PageBox = ({children, ...rest }: PageBoxType) => {
    return (
        <Link to={rest.link}>
            <div className={'PageBox'}>
                <div>
                    <img src={rest.imgSrc} />
                </div>
               
              
                <h3>{rest.text}</h3>
            </div>
        </Link>
    )
}

export default PageBox