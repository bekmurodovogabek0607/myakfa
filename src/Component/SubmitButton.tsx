





// import { toast } from 'react-toastify';
import type { FormInstance } from 'antd';
import { Button, Form } from 'antd';
import React from 'react';
import { ContextType } from '../utils/Context';


import NarxHisoblash from '../utils/NarxiHisoblash';


const SubmitButton = ({ form ,props}: {form: FormInstance,props:ContextType|null}) => {
    const [submittable, setSubmittable] = React.useState(false);
    
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
        <Button onClick={()=>{
           
            props?.setONeZakaz({...props.OneZakaz,...values,soni:1,narxi:NarxHisoblash(props.OneZakaz.eni,props.OneZakaz.boyi),id: `${Math.floor(Math.random() * 100000000)}`});
           console.log(props?.OneZakaz);
            
            props?.setIsModalOpenSoni(true)
            }}  type="primary" htmlType="submit" disabled={!submittable}>
            Naxni hisonlash
        </Button>
    );
};
export default SubmitButton