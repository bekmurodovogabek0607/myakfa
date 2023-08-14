
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './pages.scss'
import { Link } from 'react-router-dom';
import { usePost } from '../utils/ApiQuery';
import { toast } from 'react-toastify';
import { Context } from '../utils/Context';
import Register from './Registratsiya';
const Login = () => {
  
 
  
  const props=useContext(Context)
  const Login = usePost('/login')
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    Login.mutate(values, {
      onSuccess: (dat => {
        console.log(dat);
        if (dat?.data == 'Invalid') {
          toast.error("Email.yoki parol noto'g'ri")
        }
        else{
          console.log(dat.data);
          
          localStorage.setItem("my-akfa-x-access-token", dat?.data?.token)
          localStorage.setItem('my-akfa-tel',dat.data?.tel)
          localStorage.setItem('my-akfa-password',dat.data?.password)
          localStorage.setItem('my-akfa-id',dat.data?._id)

          props?.setUser({email:dat.data?.tel,name:dat.data?.name,id:dat.data?._id})
          
        }
        


      }), onError: (er => {
        console.log(er);

      })
    })
  };

  return (
    <>
    {localStorage.getItem("my-akfa-x-access-token")==''?<Register/>: <div className='Registratsiya'>
      <div>
        <h2>Login</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="tel"

            rules={[{ required: true, message: 'Iltimos Telefon nomerni kiriting' }, { max:13,min:13, message: '+998991234567 kabi kiriting' }]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
              <Checkbox>Meni eslab qol</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Parolni unutdim!
            </a>
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            yoki <Link to="/register">Registratsiyadan o'ting</Link>
          </Form.Item>
        </Form>
      </div>
    </div>}
    </>
   
  );
};

export default Login;