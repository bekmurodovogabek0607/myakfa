





// import { toast } from 'react-toastify';
import type { FormInstance } from 'antd';
import { Button, Form } from 'antd';
import React from 'react';
import { ContextType } from '../utils/Context';


import NarxHisoblash from '../utils/NarxiHisoblash';
import { useGet } from '../utils/ApiQuery';
import IProduct from '../pages/Zakaz';
const Creator = (profil: string|undefined, data: IProduct) => {
    const Profil = data.profil.filter(item => item.profil == profil)[0]
    return {
        profil: Profil.profil,
        kosa: Profil.kosa,
        orta: Profil.orta,
        shishaushla: Profil.shitapik

    }
}

const SubmitButton = ({ form, props, palla, tepa }: { form: FormInstance, props: ContextType | null, palla: number, tepa: number }) => {
    const [submittable, setSubmittable] = React.useState(false);
    const Product = useGet(['productPrice'], `/myproduct/${localStorage.getItem('my-akfa-id')}`)
    const GetMystyles = useGet(['mystyles'], `/mystyles/${localStorage.getItem('my-akfa-id')}`)
    // Watch all values
    const values = Form.useWatch([], form);

    React.useEffect(() => {
        form.validateFields({ validateOnly: true }).then(
            () => {
                setSubmittable(true);
            },
            () => {
                setSubmittable(false);
            },
        );
    }, [values]);
  function CreatorPrice(style:string|undefined):{foiz:number,price:number}{
    if(style==undefined) return {foiz:0,price:0}
    return GetMystyles.data?.total.filter((item:any)=>item.style==style)[0]
  }

    return (
        <Button onClick={() => {
            console.log(Product);

            console.log(props?.OneZakaz.tepaOynaBalnad);
            props?.setONeZakaz(
                {
                    ...props.OneZakaz,
                    ...values,
                    soni: 1,
                    narxi: Math.floor(NarxHisoblash(
                        props.OneZakaz.ZakazStyles,
                        props.OneZakaz.eni,
                        props.OneZakaz.boyi,
                        props.OneZakaz.arkaBalandligi==undefined?40: props.OneZakaz.arkaBalandligi,
                        props.OneZakaz.DerazaPalla==undefined?0:props.OneZakaz.DerazaPalla,
                        Creator(props.OneZakaz.ProfilKompani,Product.data),
                        Number(props.OneZakaz.oyna),
                        Number(props.OneZakaz.MaxanizmDeraza),
                        Number(props.OneZakaz.tor),
                        Number(props.OneZakaz.eshikZamog),
                        Number(props.OneZakaz.oynaQavat),
                        CreatorPrice(props.OneZakaz.ZakazStyles),
                        props.OneZakaz.arkaBalandligi==undefined?40:props.OneZakaz.arkaBalandligi,
                        props.OneZakaz.akraasos==undefined?0:props.OneZakaz.akraasos,


                    )),
                    id: `${Math.floor(Math.random() * 100000000)}`,
                    DerazaPalla: palla,
                    tepaOynaBalnad: tepa
                });
            console.log(props?.OneZakaz);

            props?.setIsModalOpenSoni(true)
        }} type="primary" htmlType="submit" disabled={!submittable}>
            Narxni hisonlash
        </Button>
    );
};
export default SubmitButton