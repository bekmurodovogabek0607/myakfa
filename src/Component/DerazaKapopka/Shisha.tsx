import React from 'react'
import styles from './style.module.scss'
type ConteinerType={
    left?:boolean,
    rigth?:boolean,
    shishaColor:  " rgb(143, 247, 238)" |' rgb(73, 112, 219)'|'rgb(141, 69, 2)'
} &React.ComponentProps<'div'>
const Shisha = ({children,...rest }: ConteinerType) => {
  return (
    <div style={{borderLeft:rest.left?"1px solid":'',borderRight:rest.rigth?'1px solid':"",backgroundColor:rest.shishaColor}} className={styles['Shisha']}>
        {children}
       
    </div>
  )
}

export default Shisha