import React from 'react'
import styles from './style.module.scss'
type ConteinerType = {

} & React.ComponentProps<'div'>
const Tepashisha = ({ children }: ConteinerType) => {
  return (
    <div className={styles['Tepashisha']}>
      <div>
        {children}
      </div>
      <div >
        <div >
          <div className={styles['RazmerolishTepa']}>

            <i className="fa-solid fa-chevron-left"></i>
            <span></span>
            <i className="fa-solid fa-chevron-right"></i>
            <input placeholder='mm' />
          </div>
        </div>



      </div>


    </div>
  )
}

export default Tepashisha