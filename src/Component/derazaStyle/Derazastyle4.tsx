
import styles from './style.module.scss'
import DerazaKaropka from '../DerazaKapopka/DerakaKaropka'
import Derazashisha from '../DerazaKapopka/Derazashisha'
import Tepashisha from '../DerazaKapopka/Tepashisha'
import Pastkishisha from '../DerazaKapopka/Pastkishisha'

import DerazaPalla from '../DerazaKapopka/DerazaPalla'
import Shisha from '../DerazaKapopka/Shisha'

const Derazastyle4 = ({seerazmer,derazaColor}:
    {seerazmer:'none' | 'block',
    derazaColor: string|undefined
     shishaColor:  " rgb(143, 247, 238)" |' rgb(73, 112, 219)'|'rgb(141, 69, 2)'

    }) => {
    return (
        <div className={styles['Container']}>
            <DerazaKaropka seerazmer={seerazmer} tepashisha='block' derazaColor={derazaColor}>
                <Derazashisha>
<Tepashisha>
    <Shisha shishaColor={' rgb(143, 247, 238)'}/>
</Tepashisha>
                    <Pastkishisha>

                    <Shisha shishaColor={' rgb(143, 247, 238)'} rigth={true}></Shisha>
                        <Shisha shishaColor={' rgb(143, 247, 238)'} left={true} ><DerazaPalla shishaColor={' rgb(143, 247, 238)'} derazaColor={derazaColor} seerazmer={seerazmer} position='rigth' /></Shisha>
                        <Shisha shishaColor={' rgb(143, 247, 238)'} left={true}></Shisha>


                    </Pastkishisha>

                </Derazashisha>
            </DerazaKaropka>
        </div>

    )
}

export default Derazastyle4