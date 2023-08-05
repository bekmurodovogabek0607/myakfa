
import styles from './style.module.scss'
import DerazaKaropka from '../DerazaKapopka/DerakaKaropka'
import Derazashisha from '../DerazaKapopka/Derazashisha'

import Pastkishisha from '../DerazaKapopka/Pastkishisha'

import DerazaPalla from '../DerazaKapopka/DerazaPalla'
import Shisha from '../DerazaKapopka/Shisha'

import Derazaarka from '../DerazaKapopka/Derazaarka'
const Derazastyle11 = (
    {seerazmer,derazaColor,setPalla}:
    {seerazmer:'none' | 'block',
     derazaColor: string|undefined
     shishaColor:  " rgb(143, 247, 238)" |' rgb(73, 112, 219)'|'rgb(141, 69, 2)'
     setPalla:React.Dispatch<React.SetStateAction<number>>
    }) => {
    return (
        <div className={styles['Container']}>
             <Derazaarka derazaColor={derazaColor} shishaColor={' rgb(143, 247, 238)'} left={true}/>
            <DerazaKaropka seerazmer={seerazmer} tepashisha='none' derazaColor={derazaColor}>
                <Derazashisha>

                    <Pastkishisha>
                        <Shisha shishaColor={' rgb(143, 247, 238)'} rigth={true}></Shisha>
                        <Shisha shishaColor={' rgb(143, 247, 238)'} left={true} ><DerazaPalla setPalla={setPalla} shishaColor={' rgb(143, 247, 238)'} derazaColor={derazaColor} seerazmer={seerazmer} position='rigth' /></Shisha>
                        <Shisha shishaColor={' rgb(143, 247, 238)'} left={true}></Shisha>


                    </Pastkishisha>

                </Derazashisha>
            </DerazaKaropka>
        </div>

    )
}

export default Derazastyle11