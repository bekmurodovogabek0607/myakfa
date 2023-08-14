





// import { toast } from 'react-toastify';
import type { FormInstance } from 'antd';
import { Button, Form } from 'antd';
import React from 'react';
import { ContextType } from '../utils/Context';


import NarxHisoblash from '../utils/NarxiHisoblash';
import { useGet } from '../utils/ApiQuery';


const SubmitButton = ({ form, props, palla, tepa }: { form: FormInstance, props: ContextType | null, palla: number, tepa: number }) => {
    const [submittable, setSubmittable] = React.useState(false);
    const Product = useGet(['productPrice'], `/myproduct/${props?.User.id}`)
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


    return (
        <Button onClick={() => {

            props?.setONeZakaz(
                {
                    ...props.OneZakaz,
                    ...values,
                    soni: 1,
                    narxi: NarxHisoblash(
                        props.OneZakaz.ZakazStyles,
                        props.OneZakaz.eni,
                        props.OneZakaz.boyi,
                        Number(props.OneZakaz.tepaOynaBalnad),
                        Number(props.OneZakaz.DerazaPalla),
                        {
                            profil: Product.data?.profil,
                            kosa: Product.data?.kosa,
                            orta: Product.data?.orta,
                            shishaushla: Product.data?.shitapik
                        },
                        Number(props.OneZakaz.oyna),
                        Number(props.OneZakaz.MaxanizmDeraza),
                        Number(props.OneZakaz.tor),
                        Number(props.OneZakaz.eshikZamog)),
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