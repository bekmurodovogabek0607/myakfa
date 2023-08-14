
import { LockOutlined, UserOutlined, LoadingOutlined, PhoneOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { Button, Checkbox, Form, Input } from 'antd';

import './pages.scss'
import { Link, useHistory } from 'react-router-dom';
import { usePost } from '../utils/ApiQuery';
import { useContext, useState } from 'react';
import { Context } from '../utils/Context';

const Register = () => {
    const [RegisterChecd, setRegisterChecd] = useState(false)
    const [RegisterValue, setRegisterValue] = useState<object>()
    const [LoadinRegister, setLoadingRegister] = useState(false)
    const props = useContext(Context)
    const Registratsiya = usePost('/register')
    const SendSMS = usePost('/send')


    // const Login = usePost('/login')
    const router = useHistory()
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        console.log(RegisterValue);

        setLoadingRegister(true)
        if (RegisterChecd) {
            Registratsiya.mutate({ ...values, ...RegisterValue }, {
                onSuccess: (date: any) => {
                    console.log(date);
                    if (date?.data == 'Please Login') {
                        toast.warning("Bu email bilan ro'yxatdan o'tilgan")
                        setLoadingRegister(false)
                    }
                    else {
                        if (date?.data == 'Invalit Password') {
                            toast.warning("Parol xato")
                            setLoadingRegister(false)
                        }
                        else {
                            localStorage.setItem("my-akfa-x-access-token", date?.data?.token)
                            props?.setUser({ email: date.data?.tel, name: date.data?.name, id: date.data?._id })
                            setLoadingRegister(false)
                            router.push('/')

                        }

                    }
                },
                onError: (reps: unknown) => {
                    {
                        console.log(reps);

                    }
                }

            })
        }
        else {
            setRegisterValue({ ...values })
            SendSMS.mutate({ mobile: values.tel.slice(1, 13) }, {
                onSuccess: (date: any) => {
                    console.log(date);
                    if (date?.data == 'Jonatildi') {
                        setRegisterChecd(true)
                        setLoadingRegister(false)
                    }
                    else if (date?.data == 'userBor') {
                        toast.warning("Bu Telefon ro'yxatdan o'tgan")
                        setLoadingRegister(false)
                    }
                    else {
                        toast.error('Texnik nosozlik +998 99 385 77 59 ga murojat qiling')
                    }
                },
                onError: (reps: unknown) => {
                    {
                        console.log(reps);

                    }
                }

            })
        }


    };

    return (
        <><div className='Registratsiya'>
            <div>
                <h2>{RegisterChecd ? "Telefonizga SMS jo'natdik" : 'Registratsiya'}</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    {
                        RegisterChecd ? <div>

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
                        </div> : <div>
                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: 'Iltimos ism familiyangizni kiriting' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Ism Familiya" />
                            </Form.Item>


                            <Form.Item
                                name="tel"

                                rules={[{ required: true, message: 'Iltimos Telni kiriting' }, { len: 13, message: 'Tel nomer +998991234567 kabi' },]}
                            >
                                <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Tel:" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Iltimos parolni kiriting' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                        </div>
                    }




                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox checked={true} >Roziman</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Xizmar korsatish shartlari
                        </a>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" className="login-form-button" disabled={LoadinRegister}>
                            {RegisterChecd ? "Parolni jo'natish" : LoadinRegister ? <LoadingOutlined /> : "Registratsiya"}
                        </Button>
                        hisobingiz bormi <Link to="/login">Kirish</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>

        </>

    );
};

export default Register;