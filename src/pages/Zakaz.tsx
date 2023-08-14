

import { Select } from 'antd';


import './pages.scss'
import { useContext, useState } from 'react';
import { Context } from '../utils/Context';
import StylesChanger from '../utils/StylesChanger';
import { useHistory } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import type { FormInstance } from 'antd';
import { Button, Form, Space } from 'antd';
// import React from 'react';

import SubmitButton from '../Component/SubmitButton';
import ModalSoni from '../Component/ModalSoni';
import Navbar from '../Component/Navbar';
import { useGet } from '../utils/ApiQuery';
import { Loading } from '../Component/Loading';
import Login from './Login';
import { NoProduct } from '../Component/NoProduct';

interface IProduct {
    maxanizm: { mexanizm: string; narxi: number }[],

    pastki: { profil: string, narxi: number }[]
    shisha: { shisha: string, narxi: number }[]
    tor: { tor: string, narxi: number }[]
    profil: { profil: string, kosa: number, orta: number, shitapik: number }[]
    zamok: { zamok: string, narxi: number }[]

}
export const Zakaz = () => {
        const props = useContext(Context)
        const Product = useGet(['productPrice'], `/myproduct/${props?.User.id}`)
    const router = useHistory()

    const color: string[] = ['rgb(219, 219, 219)', 'rgb(160, 64, 0)', 'rgb(46, 46, 46)',]
    const [form] = Form.useForm();
    const [palla, setPalla] = useState<number>(0)
    const [tepa, setTepa] = useState<number>(0)

    const [DefaultProfilColor, setDefaultProfilColor] = useState<string>("rgb(219, 219, 219)")

    const ValueCreator = (name: string, Product: IProduct): { value: string | number, label: string }[] => {
        let result: { value: string | number, label: string }[] = []
        console.log(Product);
        
        if (name == 'profil') {
            for (let i = 0; i < Product.profil.length; i++) {
                result.push({ label: Product.profil[i].profil, value: Product.profil[i].profil })
            }
            return result
        }
        // if (name == 'mexanizm') {
        //     for (let i = 0; i < Product?.maxanizm.length; i++) {
        //         result.push({ label: Product.maxanizm[i].mexanizm, value: Product.maxanizm[i].narxi })
        //     }
        //     return result
        // }
        if (name == 'pastki') {
            for (let i = 0; i < Product.pastki.length; i++) {
                result.push({ label: Product.pastki[i].profil, value: Product.pastki[i].narxi })
            }
            return result
        }
        if (name == 'shisha') {
            for (let i = 0; i < Product.shisha.length; i++) {
                result.push({ label: Product.shisha[i].shisha, value: Product.shisha[i].narxi })
            }
            return result
        }
        if (name == 'tor') {
            for (let i = 0; i < Product.tor.length; i++) {
                result.push({ label: Product.tor[i].tor, value: Product.tor[i].narxi })
            }
            return result
        }
        if (name == 'zamok') {
            for (let i = 0; i < Product.zamok.length; i++) {
                result.push({ label: Product.zamok[i].zamok, value: String(Product.zamok[i].narxi) })
            }
            return result
        }

        else return result
    }


    // function AddCart() {
    //     props?.setONeZakaz({ ...props.OneZakaz, ProfilColor: 'rgb(219, 219, 219)' })
    //     props?.setONeZakaz({ ...props.OneZakaz, narxi: 1200000 })
    //     toast.success('Savatga qoshildi')
    //     props?.setZakaz([...props.Zakaz, props.OneZakaz])
    // }








    return (
        <>
         {props?.User.name==''?<Login/>:    <>
            <Navbar />
            <div>


                <div id='style' className='Product'>
                    <div className='ProductIMg'>
                        <h2> </h2>
                        <div>
                            {StylesChanger(props?.SelectDesing.styles, DefaultProfilColor, setPalla, setTepa)}
                            <div className={'Razmerolishboyi'} >
                                <i className="fa-solid fa-chevron-left"></i>
                                <span></span>
                                <i className="fa-solid fa-chevron-right"></i>
                                <input type='number' onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, boyi: Number(e.target.value) }) }} placeholder='mm' />
                            </div>
                            <div className={'Razmerolish'} >
                                <i className="fa-solid fa-chevron-left"></i>
                                <span></span>
                                <i className="fa-solid fa-chevron-right"></i>
                                <input type='number' onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, eni: Number(e.target.value) }) }} placeholder='mm' />
                            </div>
                            <div style={props?.SelectDesing.arka ? { display: 'flex' } : { display: "none" }} className={'RazmerolishTepa'} >
                                <i className="fa-solid fa-chevron-left"></i>
                                <span></span>
                                <i className="fa-solid fa-chevron-right"></i>
                                <input type='number' onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, akraasos: Number(e.target.value) }) }} placeholder='mm' />
                            </div>
                            <div style={props?.SelectDesing.arka ? { display: 'flex' } : { display: "none" }} className={'RazmerolishTepas'} >
                                <i className="fa-solid fa-chevron-left"></i>
                                <span></span>
                                <i className="fa-solid fa-chevron-right"></i>
                                <input type='number' onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, arkaBalandligi: Number(e.target.value) }) }} placeholder='mm' />
                            </div>
                        </div>



                    </div>
                    <div>
                        <div className='Korinishlari'>
                            {color.map((item: string) => {
                                return (
                                    <div onClick={() => {
                                        setDefaultProfilColor(item)
                                        props?.setONeZakaz({ ...props.OneZakaz, ProfilColor: item })
                                    }}>{StylesChanger(props?.SelectDesing.styles, item, setPalla, setTepa)}</div>
                                )
                            })}




                        </div>
                        {
                            !Product.isSuccess ?
                                <Loading/> :
                                Product.data=='no date'?<NoProduct/>:
                                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">

                                    
                                    <Form.Item name="ProfilKompani" label="Profil turi" rules={[{ required: true }]}>
                                        <Select

                                            style={{ width: '100%' }}
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, ProfilKompani: e }) }}
                                            value={props?.OneZakaz.ProfilKompani}
                                            options={ValueCreator('profil', Product.data)}
                                        />
                                    </Form.Item>
                                    <Form.Item name="oyna" label="Shisha" rules={[{ required: true }]}>
                                        <Select

                                            style={{ width: '100%' }}
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, oyna: e }) }}
                                            options={ValueCreator('shisha', Product.data)}
                                        />
                                    </Form.Item>
                                    <Form.Item name="oynaQavat" label="Shisha qavatliligi" rules={[{ required: true }]}>
                                        <Select

                                            style={{ width: '100%' }}
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, oynaQavat: e }) }}
                                            options={[
                                                { value: 1, label: "1 X" },
                                                { value: 2, label: "2 X" },

                                            ]}
                                        />
                                    </Form.Item>
                                    <Form.Item name="MaxanizmDeraza" label="Mexaniz" rules={[{ required: true }]}>
                                        <Select

                                            style={{ width: '100%' }}
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, MaxanizmDeraza: e }) }}
                                            options={[
                                                { value: 0, label: "Yo'q" },
                                                ...ValueCreator('mexanizm', Product.data)
                                            ]
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item name="tor" label="To'r" rules={[{ required: true }]}>
                                        <Select

                                            style={{ width: '100%' }}
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, oshiqmoshiq: e }) }}
                                            options={[
                                                { value: 0, label: "Yo'q" },
                                                ...ValueCreator('tor', Product.data)
                                            ]
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item name="eshikZamog" label="Zamog" rules={[{ required: true }]}>
                                        <Select

                                            style={{ width: '100%' }}
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, eshikZamog: e }) }}
                                            options={ValueCreator('zamok', Product.data)}
                                        />
                                    </Form.Item>
                                    <Form.Item name="oshiqmoshiq" label="Oshiq moshiq(Har bir palla uchun)" rules={[{ required: true }]}>
                                        <Select

                                            style={{ width: '100%' }}
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, derazaTutuqich: e }) }}
                                            options={[

                                                { value: 2, label: "2 X" },
                                                { value: 3, label: "3 X" },
                                                { value: 4, label: "4 X" },

                                                { value: 5, label: "5 X" },

                                                { value: 6, label: "6 X" }


                                            ]}
                                        />
                                    </Form.Item>

                                    <Form.Item name="EshikPastkiQism" label="eshik pastiki qismi" rules={[{ required: true }]}>
                                        <Select

                                            style={{ width: '100%' }}
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, EshikPastkiQism: e }) }}
                                            options={ValueCreator('pastki', Product.data)}
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Space>
                                            <SubmitButton tepa={tepa} palla={palla} props={props} form={form} />
                                            <Button type="primary" danger onClick={() => { router.push('/') }}>Bekor qilish</Button>


                                        </Space>
                                    </Form.Item>
                                </Form>
                        }



                    </div>



                </div>
                {/* <div className='Zakaz'>

                <Button class='BtnSucc' text='Savatga qoshish' handelClick={() => { AddCart() }} />
                <Button class='BtnSucc' text='Buyurtma qabul qilish' handelClick={() => { props?.setIsModalOpen(true) }} />




            </div> */}
                <ModalSoni DefaultProfilColor={DefaultProfilColor} />
            </div></>
}
        </>
    
    )
}
