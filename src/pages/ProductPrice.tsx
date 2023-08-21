import Navbar from "../Component/Navbar"
import { toast } from 'react-toastify';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space ,Typography} from 'antd';

import './pages.scss'
import { useGet, usePost } from "../utils/ApiQuery";
import { Loading } from "../Component/Loading";
import Login from "./Login";
import { useContext } from "react";
import { Context } from "../utils/Context";
const { Text } = Typography;

// interface IProduct {
//   maxanizm: { mexanizm: string; narxi: number }[],

//   pastki: { profil: string, narxi: number }[]
//   shisha: { shisha: string, narxi: number }[]
//   tor: { tor: string, narxi: number }[]
//   profil: { profil: string, kosa: number, orta: number, shitapik: number }[]
//   zamok: { zamok: string, shisha: number }[]

// }
export const ProductPrice = () => {
  const props=useContext(Context)
  const Product=useGet(['productPrice'],`/myproduct/${localStorage.getItem('my-akfa-id')}`)
  const ProductPost = usePost('/myproduct')
  


console.log(localStorage.getItem('my-akfa-x-access-token'));

  


  const onFinish = (values: any) => {
    console.log(values);
    ProductPost.mutate({
      userId: `${localStorage.getItem('my-akfa-id')}`,
      product: values
    }, {
      onSuccess: (resp => {
        console.log(resp);
        toast.success("Saqlandi")
        Product.refetch()
        

      }),
      onError: (err => {
        console.log(err);

      })
    })

  };
console.log(Product.data);

  return (
    <>
    
    {props?.User.name==''?<Login/>:  <>
      <Navbar />
      <div>
        {!Product.isSuccess?<div><Loading/><div style={{textAlign:'center',width:'100%'}}><Text  type="danger">30 SONIYADA YUKLANMASA SAHIFANI YANGILANG</Text></div></div>:
        <div>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          style={{ width: '90%', margin: "0px auto" }}


        >
          <h2>Profil</h2>
          <Form.List
            name="profil"
            initialValue={Product.data?.profil}

          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <Space key={key} style={{ display: 'flex', marginBottom: 8, flexDirection: 'column' }} align='start'>
                      <div style={{ width: '100%', display: 'flex', gap: '10px' }}>
                        <div>
                          <Form.Item
                            {...restField}
                            name={[name, 'profil']}
                            label='Profil nomi'
                            rules={[{ required: true, message: 'Profil nomini kiriting' }]}
                            style={{ width: '100%', margin: '0px auto' }}
                          >
                            <Input style={{ width: '100%' }} placeholder="Profil nomi" />
                          </Form.Item>

                          <Form.Item
                            {...restField}
                            name={[name, 'orta']}
                            label="1 metr o'rta narxi"
                            style={{ width: '100%', margin: '0px auto' }}
                            rules={[{ required: true, message: "1m o'rta narxi" }]}
                          >
                            <Input placeholder="1m kosa narxi" />
                          </Form.Item>
                        </div>
                        <div>

                          <Form.Item
                            {...restField}
                            name={[name, 'kosa']}
                            label="1 metr kosa narxi"
                            style={{ width: '100%', margin: '0px auto' }}
                            rules={[{ required: true, message: '1 m kosa narxi' }]}
                          >
                            <Input placeholder="1m kosa narxi" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, 'shitapik']}
                            label="1 m shitapik narxi"
                            style={{ width: '100%', margin: '0px auto' }}
                            rules={[{ required: true, message: '1 m shitapik narxi' }]}
                          >
                            <Input placeholder="1m shitapik narxi" />
                          </Form.Item>

                        </div>
                      </div>
                      <div>
                        <Button type='dashed' style={{ color: 'red', borderColor: 'red', }} onClick={() => remove(name)}>Ochirish</Button>

                      </div>


                    </Space>
                    <div className="Hrni">

                    </div></>

                ))}
                <Form.Item>
                  <Button type="primary" onClick={() => add()} block icon={<PlusOutlined />}>
                    Yangi profil qo'shish
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <h2>Shisha</h2>
          <Form.List
            name="shisha"
            initialValue={Product.data?.shisha}

          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align='end'>
                      <Form.Item
                        {...restField}
                        name={[name, 'shisha']}
                        label='Nomi'
                        rules={[{ required: true, message: 'Shisha nomini kiriting' }]}
                        style={{ width: '100%', margin: '0px auto' }}
                      >
                        <Input style={{ width: '100%' }} placeholder="Shisha nomi" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'narxi']}
                        label="1 m2 narxi"
                        style={{ width: '100%', margin: '0px auto' }}
                        rules={[{ required: true, message: '1m2 shisha narxi' }]}
                      >
                        <Input placeholder="1m2 narxi" />
                      </Form.Item>


                      <Button type='dashed' style={{ color: 'red', borderColor: 'red' }} onClick={() => remove(name)}>Ochirish</Button>
                    </Space>
                    <div className="Hrni">

                    </div></>

                ))}
                <Form.Item>
                  <Button type="primary" onClick={() => add()} block icon={<PlusOutlined />}>
                    Yangi shisha qo'shish
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <h2>Mexaniz</h2>
          <Form.List
            name="mexanizm"
            initialValue={Product.data?.mexanizm}

          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align='end'>
                      <Form.Item
                        {...restField}
                        name={[name, 'mexanizm']}
                        label='Nomi'
                        rules={[{ required: true, message: 'Mexanizm nomini kiriting' }]}
                        style={{ width: '100%', margin: '0px auto' }}
                      >
                        <Input style={{ width: '100%' }} placeholder="Mexanizm nomi" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'narxi']}
                        label="1 dona narxi"
                        style={{ width: '100%', margin: '0px auto' }}
                        rules={[{ required: true, message: '1 dona narxi' }]}
                      >
                        <Input placeholder="1 dona narxi" />
                      </Form.Item>


                      <Button type='dashed' style={{ color: 'red', borderColor: 'red' }} onClick={() => remove(name)}>Ochirish</Button>
                    </Space>
                    <div className="Hrni">

                    </div>
                  </>

                ))}
                <Form.Item>
                  <Button type="primary" onClick={() => add()} block icon={<PlusOutlined />}>
                    Yangi Mexanizm qo'shish
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <h2>To'r</h2>
          <Form.List
            name="tor"
            initialValue={Product.data?.tor}

          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align='end'>
                      <Form.Item
                        {...restField}
                        name={[name, 'tor']}
                        label='Nomi'
                        rules={[{ required: true, message: "To'r nomini kiriting" }]}
                        style={{ width: '100%', margin: '0px auto' }}
                      >
                        <Input style={{ width: '100%' }} placeholder="To'r nomi" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'narxi']}
                        label="1 m2 narxi"
                        style={{ width: '100%', margin: '0px auto' }}
                        rules={[{ required: true, message: '1 m kosa narxi' }]}
                      >
                        <Input placeholder="1 dona narxi" />
                      </Form.Item>


                      <Button type='dashed' style={{ color: 'red', borderColor: 'red' }} onClick={() => remove(name)}>Ochirish</Button>
                    </Space>
                    <div className="Hrni">

                    </div>
                  </>

                ))}
                <Form.Item>
                  <Button type="primary" onClick={() => add()} block icon={<PlusOutlined />}>
                    Yangi To'r qo'shish
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <h2>Zamok</h2>
          <Form.List
            name="zamok"
            initialValue={Product.data?.zamok}

          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align='end'>
                      <Form.Item
                        {...restField}
                        name={[name, 'zamok']}
                        label='Nomi'
                        rules={[{ required: true, message: 'Zamok nomini kiriting' }]}
                        style={{ width: '100%', margin: '0px auto' }}
                      >
                        <Input style={{ width: '100%' }} placeholder="Zamok nomi" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'shisha']}
                        label="1 dona narxi"
                        style={{ width: '100%', margin: '0px auto' }}
                        rules={[{ required: true, message: '1 dona narxi' }]}
                      >
                        <Input placeholder="1 dona narxi" />
                      </Form.Item>


                      <Button type='dashed' style={{ color: 'red', borderColor: 'red' }} onClick={() => remove(name)}>Ochirish</Button>

                    </Space>
                    <div className="Hrni">

                    </div>
                  </>


                ))}

                <Form.Item>
                  <Button type="primary" onClick={() => add()} block icon={<PlusOutlined />}>
                    Yangi zamok qo'shish
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <h2>Eshik pastki qismi</h2>
          <Form.List
            name="pastki"
            initialValue={Product.data?.pastki}

          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align='end'>
                      <Form.Item
                        {...restField}
                        name={[name, 'profil']}
                        label='Nomi'
                        rules={[{ required: true, message: 'Nomini kiriting' }]}
                        style={{ width: '100%', margin: '0px auto' }}
                      >
                        <Input style={{ width: '100%' }} placeholder="Profil nomi" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'narxi']}
                        label="1 m2 narxi"
                        style={{ width: '100%', margin: '0px auto' }}
                        rules={[{ required: true, message: '1 m kosa narxi' }]}
                      >
                        <Input placeholder="1m2 narxi" />
                      </Form.Item>


                      <Button type='dashed' style={{ color: 'red', borderColor: 'red' }} onClick={() => remove(name)}>Ochirish</Button>
                    </Space>
                    <div className="Hrni">

                    </div>
                  </>

                ))}
                <Form.Item>
                  <Button type="primary" onClick={() => add()} block icon={<PlusOutlined />}>
                    Yangi  qo'shish
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item>
            <Button style={{ fontSize: '18px', fontWeight: 'bold', width: '100%', padding: '10px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} type="primary" htmlType="submit">
              Saqlash
            </Button>
          </Form.Item>
        </Form></div>}
      </div>
      
        </>}</>
  
  )
}
