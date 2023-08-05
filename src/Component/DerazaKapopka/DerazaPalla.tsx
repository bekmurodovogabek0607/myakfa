import React from 'react'
import styles from './style.module.scss'
type ConteinerType = {
    position: "left" | "rigth"
    seerazmer: 'none' | 'block'
    derazaColor: string|undefined
    shishaColor:  " rgb(143, 247, 238)" |' rgb(73, 112, 219)'|'rgb(141, 69, 2)'
    setPalla:React.Dispatch<React.SetStateAction<number>>
} & React.ComponentProps<'div'>
const DerazaPalla = ({ children, ...rest }: ConteinerType) => {
    return (
        <div className={styles['Palla']} style={{backgroundColor:rest.derazaColor}}>
            <div style={{backgroundColor:rest.shishaColor}}>

            </div>
            <div style={rest.position == 'left' ? { left: "1.5px" ,backgroundColor:rest.derazaColor} : { right: "1px",backgroundColor:rest.derazaColor }} className={styles['tutqich']}>
                <div style={{backgroundColor:rest.derazaColor}}>

                </div>

            </div>
            <div style={{ display: rest.seerazmer }} >
                <div className={styles['Razmerolish']} >
                    <i className="fa-solid fa-chevron-left"></i>
                    <span></span>
                    <i className="fa-solid fa-chevron-right"></i>
                    <input onChange={(e)=>{ rest.setPalla(Number(e.target.value)) }} placeholder='mm' />
                </div>

            </div>
        </div>
    )
}

export default DerazaPalla