import React from 'react'

type ConteinerType={
    
} &React.ComponentProps<'div'>
import './style.scss'
const Container = ({children}: ConteinerType) => {
  return (
    <div  className={'Container'}>
        {children}
    </div>
    
  )
}

export default Container