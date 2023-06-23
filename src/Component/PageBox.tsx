
import React from 'react'
import  './style.scss'

type PageBoxType = {
    imgSrc:string
    text: string
    link: string
    
} &   React.ComponentProps<'div'>
const PageBox = ({children, ...rest }: PageBoxType) => {
    return (
        <a href={rest.link}>
            <div className={'PageBox'}>
                <div>
                    <img src={rest.imgSrc} />
                </div>
               
              
                <h3>{rest.text}</h3>
            </div>
        </a>
    )
}

export default PageBox