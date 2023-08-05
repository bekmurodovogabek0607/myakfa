
import styles from './style.module.scss'
import DerazaKaropka from '../DerazaKapopka/DerakaKaropka'
import Derazashisha from '../DerazaKapopka/Derazashisha'

import Pastkishisha from '../DerazaKapopka/Pastkishisha'

import DerazaPalla from '../DerazaKapopka/DerazaPalla'
import Shisha from '../DerazaKapopka/Shisha'

const Derazastyle6 = ({seerazmer,derazaColor}:
    {seerazmer:'none' | 'block',
    derazaColor: string|undefined
     shishaColor:  " rgb(143, 247, 238)" |' rgb(73, 112, 219)'|'rgb(141, 69, 2)'

    }) => {
    return (
<div className={styles['Container']}>
            <DerazaKaropka seerazmer={seerazmer} tepashisha='none' derazaColor={derazaColor}>
                <Derazashisha>

                    <Pastkishisha>
                    <Shisha shishaColor={' rgb(143, 247, 238)'} rigth={true} ><DerazaPalla shishaColor={' rgb(143, 247, 238)'} derazaColor={derazaColor} seerazmer={seerazmer} position='rigth' /></Shisha>
                        <Shisha shishaColor={' rgb(143, 247, 238)'} left={true}></Shisha>
                        <Shisha shishaColor={' rgb(143, 247, 238)'} left={true} ><DerazaPalla shishaColor={' rgb(143, 247, 238)'} derazaColor={derazaColor} seerazmer={seerazmer} position='left' /></Shisha>


                    </Pastkishisha>

                </Derazashisha>
            </DerazaKaropka>
        </div>

    )
}

export default Derazastyle6