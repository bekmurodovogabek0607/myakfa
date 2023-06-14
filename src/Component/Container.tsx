import React from 'react'

type ConteinerType={
    
} &React.ComponentProps<'div'>
import './style.scss'
const Container = ({children,...rest }: ConteinerType) => {
  return (
    <div  className={'Container'}>
        {children}
    </div>
    
  )
}

export default Container