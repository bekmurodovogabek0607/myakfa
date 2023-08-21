
import { PhoneOutlined, LockOutlined,LoadingOutlined } from '@ant-design/icons';

import { useState } from 'react'
// import { useContext } from 'react';
import { Button, Form, Input } from 'antd';
import './pages.scss'
import { Link, useHistory } from 'react-router-dom';
import { usePost } from '../utils/ApiQuery';
import { toast } from 'react-toastify';
// import { Context } from '../utils/Context';
import Register from './Registratsiya';
const ForgatPassword = () => {

    const [Forget, setForget] = useState(true)
    const [NewPassword, setNewPassword] = useState(false)
    const [LoadingForget,setLodingForget]=useState(false)
    const [Tel, setTel] = useState<object>()
    // const props = useContext(Context)
    const router = useHistory()
    const Login = usePost('/forget')
    const ChechVerif = usePost('/checkverif')
    const ChangePassword = usePost('/changepassword')


    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        setLodingForget(true)
        Forget ?
            Login.mutate(values, {
                onSuccess: (dat => {
                    console.log(dat);
                    if (dat?.data == 'Please Login') {
                        toast.warn("Bu raqamga Account ochilmagan")
                        setLodingForget(false)
                    }
                    else {
                        //   console.log(dat.data);

                        //   localStorage.setItem("my-akfa-x-access-token", dat?.data?.token)
                        //   localStorage.setItem('my-akfa-tel',dat.data?.tel)
                        //   localStorage.setItem('my-akfa-password',dat.data?.password)
                        //   localStorage.setItem('my-akfa-id',dat.data?._id)

                        //   props?.setUser({email:dat.data?.tel,name:dat.data?.name,id:dat.data?._id})
                        setTel({tel:values.mobile})
                        setForget(false)
                        setLodingForget(false)

                    }



                }), onError: (er => {
                    console.log(er);

                })
            }) :
            !NewPassword?
            ChechVerif.mutate({ ...values, ...Tel }, {
                onSuccess: (data => {
                    if (data.data == 'ok') {
                        setNewPassword(true)
                        setLodingForget(false)
                    }
                    if(data.data=='Invalit Password'){
                        toast.error('Parol xato')
                        setLodingForget(false)
                    }
                }),
                onError: (err => {
                    console.log(err);

                })
            }):
            ChangePassword.mutate({...values,...Tel},{
                onSuccess:(data=>{
                   if(data.data=='updated'){
                    toast.success("Parol o'zgartirildi")
                    setLodingForget(false)
                    router.push('/')
                   }
                    
                }),
                onError:(err=>{
                    console.log(err);
                    
                })
                
            })

    };

    return (
        <>
            {localStorage.getItem("my-akfa-x-access-token") == '' ? <Register /> : <div className='Registratsiya'>
                <div>
                    <h2>{Forget ? 'Forget Password' :NewPassword? "Yangi parol yarating":"Telefonizga SMS jo'natdik"}</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        {
                            Forget ?
                                <Form.Item
                                    name="mobile"

                                    rules={[{ required: true, message: 'Iltimos Telefon nomerni kiriting' }, { max: 13, min: 13, message: '+998991234567 kabi kiriting' }]}
                                >
                                    <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Tel:+998991234567" />
                                </Form.Item> :

                                NewPassword?
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Iltimos parolni kiriting' }]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Yangi parol"
                                    />
                                </Form.Item>:
                                <Form.Item
                                    name="verif"
                                    rules={[{ required: true, message: 'Iltimos parolni kiriting' }]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="SMS parol"
                                    />
                                </Form.Item>
                        }


                        <Form.Item>
                            <Link className="login-form-forgot" to="/">
                                Login
                            </Link>
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit" className="login-form-button" disabled={LoadingForget}>
                               {LoadingForget?<LoadingOutlined/>:'Yuborish'} 
                            </Button>

                            yoki <Link to="/register">Registratsiyadan o'ting</Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>}
        </>

    );
};

export default ForgatPassword;