
import { Modal } from 'antd';
import { Context } from '../utils/Context';
import { useContext ,useState} from 'react';
import StylesChanger from '../utils/StylesChanger';
import './style.scss'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
const ModalSoni = ({ DefaultProfilColor }: { DefaultProfilColor: string }) => {
    const props = useContext(Context)
    const [nimadir,setnimadir]=useState<number>(0)
const roter=useHistory()
    const handleOk = () => {


        roter.push('/cart') 
        console.log(props?.OneZakaz);
        toast.success('Saqlandi')
        props?.setONeZakaz({ProfilColor:'rgb(219, 219, 219)',id:'1',soni:1+nimadir})
        props?.setZakaz([...props.Zakaz, props.OneZakaz])
    };

    const handleCancel = () => {
        props?.setIsModalOpenSoni(false);
    };

    return (
        <>

            <Modal title="Basic Modal" open={props?.isModalOpenSoni} onOk={handleOk} onCancel={handleCancel}>
                <div className='MOdalSoni'>
                    <div>
                        {StylesChanger(props?.SelectDesing.styles, DefaultProfilColor,setnimadir,setnimadir)}
                    </div>
                    <div>
                        <h1> X {props?.OneZakaz.soni}</h1>
                    </div>

                </div>
                <h2>{props?.OneZakaz.narxi != undefined ? props?.OneZakaz.narxi * props?.OneZakaz.soni : null} so'm</h2>
                <div className='AddCopyDesing'>
                    <button onClick={() => { if (props?.OneZakaz.soni! > 1) { props?.setONeZakaz({ ...props.OneZakaz, soni: props.OneZakaz.soni - 1 }) } }}>-</button>
                    <h4>{props?.OneZakaz.soni}</h4>
                    <button onClick={() => { props?.setONeZakaz({ ...props.OneZakaz, soni: props.OneZakaz.soni + 1 }) }}>+</button>
                </div>
            </Modal>
        </>
    );
};

export default ModalSoni;