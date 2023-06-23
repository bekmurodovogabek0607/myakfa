import React from 'react'
import styles from './style.module.scss'
type ConteinerType = {
    left?: boolean,
    rigth?: boolean,
    shishaColor: " rgb(143, 247, 238)" | ' rgb(73, 112, 219)' | 'rgb(141, 69, 2)'
    derazaColor: string|undefined
} & React.ComponentProps<'div'>
const Derazaarka = ({ children, ...rest }: ConteinerType) => {
    return (
        <>
            <div className={styles['arkaglavnidiv']} >
                <div className={styles['arkaaylana']} style={{backgroundColor:rest.derazaColor}} >
                    <div style={{backgroundColor:rest.shishaColor}}>

                    </div>

                </div>
                <div className={styles['arkaasos']} style={{backgroundColor:rest.derazaColor}}>
                    <div style={{backgroundColor:rest.shishaColor}}>

                    </div>
                    <span></span>
                    <span>
                       
                    </span>

                </div>
            </div>

        </>

    )
}

export default Derazaarka