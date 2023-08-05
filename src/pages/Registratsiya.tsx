
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { Button, Checkbox, Form, Input } from 'antd';
import './pages.scss'
import { Link, useHistory } from 'react-router-dom';
import { usePost } from '../utils/ApiQuery';
const Register = () => {
    const Registratsiya = usePost('/register')
    const Login = usePost('/login')
    const router = useHistory()
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        Registratsiya.mutate(values, {
            onSuccess: (date: any) => {
                console.log(date);
                if (date?.data == 'Please Login') {
                    toast.warning("Bu email bilan ro'yxatdan o'tilgan")
                }
                else {
                    localStorage.setItem("my-akfa-x-access-token", date?.data?.token)
                    Login.mutate({ email: values?.email, password: values?.password }, {
                        onSuccess: (dat => {
                            console.log(dat);
                            localStorage.setItem("my-akfa-x-access-token", dat?.data?.token)
                            router.push('/login')

                        }), onError: (er => {
                            console.log(er);

                        })
                    })
                }
            },
            onError: (reps: unknown) => {
                {
                    console.log(reps);

                }
            }

        })
    };

    return (
        <div className='Registratsiya'>
            <div>
                <h2>Registratsiya</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Iltimos ism familiyangizni kiriting' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Ism Familiya" />
                    </Form.Item>
                    <Form.Item
                        name="email"

                        rules={[{ required: true, message: 'Iltimos emailni kiriting' }, { type: 'email', message: 'Email xato kiritildi' }]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="tel"

                        rules={[{ required: true, message: 'Iltimos Telni kiriting' }, { len: 13, message: 'Tel nomer +998991234567 kabi' },]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Tel:" />
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
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox >Roziman</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Xizmar korsatish shartlari
                        </a>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Registratsiya
                        </Button>
                        hisobingiz bormi <Link to="/login">Kirish</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Register;