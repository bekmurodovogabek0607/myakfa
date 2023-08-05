

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

// const SubmitButton = ({ form ,handelClick}: { form: FormInstance,handelClick:()=>void}) => {
//     const [submittable, setSubmittable] = React.useState(false);

//     // Watch all values
//     const values = Form.useWatch([], form);

//     React.useEffect(() => {
//         form.validateFields({ validateOnly: true }).then(
//             () => {
//                 setSubmittable(true);
//             },
//             () => {
//                 setSubmittable(false);
//             },
//         );
//     }, [values]);


//     return (
//         <Button onClick={handelClick}  type="primary" htmlType="submit" disabled={!submittable}>
//             Add to Card
//         </Button>
//     );
// };
export const Zakaz = () => {
    const router = useHistory()
    const props = useContext(Context)
    const color: string[] = ['rgb(219, 219, 219)', 'rgb(160, 64, 0)', 'rgb(46, 46, 46)',]
    const [form] = Form.useForm();

    const [DefaultProfilColor, setDefaultProfilColor] = useState<string>("rgb(219, 219, 219)")



    // function AddCart() {
    //     props?.setONeZakaz({ ...props.OneZakaz, ProfilColor: 'rgb(219, 219, 219)' })
    //     props?.setONeZakaz({ ...props.OneZakaz, narxi: 1200000 })
    //     toast.success('Savatga qoshildi')
    //     props?.setZakaz([...props.Zakaz, props.OneZakaz])
    // }







    return (
        <div>

            <div id='style' className='Product'>
                <div className='ProductIMg'>
                    <h2> </h2>
                    <div>
                        {StylesChanger(props?.SelectDesing.styles, DefaultProfilColor)}
                        <div className={'Razmerolishboyi'} >
                            <i className="fa-solid fa-chevron-left"></i>
                            <span></span>
                            <i className="fa-solid fa-chevron-right"></i>
                            <input type='number' onChange={(e)=>{props?.setONeZakaz({...props.OneZakaz,boyi:Number(e.target.value)})}} placeholder='mm' />
                        </div>
                        <div className={'Razmerolish'} >
                            <i className="fa-solid fa-chevron-left"></i>
                            <span></span>
                            <i className="fa-solid fa-chevron-right"></i>
                            <input type='number' onChange={(e)=>{props?.setONeZakaz({...props.OneZakaz,eni:Number(e.target.value)})}} placeholder='mm' />
                        </div>
                        <div style={props?.SelectDesing.arka ? { display: 'flex' } : { display: "none" }} className={'RazmerolishTepa'} >
                            <i className="fa-solid fa-chevron-left"></i>
                            <span></span>
                            <i className="fa-solid fa-chevron-right"></i>
                            <input type='number' onChange={(e)=>{props?.setONeZakaz({...props.OneZakaz,akraasos:Number(e.target.value)})}} placeholder='mm' />
                        </div>
                        <div style={props?.SelectDesing.arka ? { display: 'flex' } : { display: "none" }} className={'RazmerolishTepas'} >
                            <i className="fa-solid fa-chevron-left"></i>
                            <span></span>
                            <i className="fa-solid fa-chevron-right"></i>
                            <input type='number' onChange={(e)=>{props?.setONeZakaz({...props.OneZakaz,arkaBalandligi:Number(e.target.value)})}} placeholder='mm' />
                        </div>
                    </div>


                    <Button type="primary" htmlType="submit" onClick={() => { router.push('/myderaza') }}>
                        Dizaynini ozgartirish
                    </Button>
                </div>
                <div>
                    <div className='Korinishlari'>
                        {color.map((item: string) => {
                            return (
                                <div onClick={() => {
                                    setDefaultProfilColor(item)
                                    props?.setONeZakaz({ ...props.OneZakaz, ProfilColor: item })
                                }}>{StylesChanger(props?.SelectDesing.styles, item)}</div>
                            )
                        })}




                    </div>
                    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                        <Form.Item name="ProfilKompani" label="Profil turi" rules={[{ required: true }]}>
                            <Select

                                style={{ width: '100%' }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, ProfilKompani: e }) }}
                                value={props?.OneZakaz.ProfilKompani}
                                options={[
                                    {
                                        value: '1',
                                        label: 'Alubest Melall',
                                    },
                                    {
                                        value: '2',
                                        label: 'Alubest plasmass',
                                    },
                                    {
                                        value: '3',
                                        label: 'Akfa Melall',
                                    },
                                    {
                                        value: '4',
                                        label: 'Akfa plasmass',
                                    },
                                    {
                                        value: '5',
                                        label: 'AluText Melall',
                                    },
                                    {
                                        value: '6',
                                        label: 'AluText plasmass',
                                    },

                                ]}
                            />
                        </Form.Item>
                        <Form.Item name="oyna" label="oyna" rules={[{ required: true }]}>
                            <Select

                                style={{ width: '100%' }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, oyna: e }) }}
                                options={[
                                    {
                                        value: '11',
                                        label: 'Shaffof oddiy',
                                    },
                                    {
                                        value: '12',
                                        label: 'Yodivi',
                                    },
                                    {
                                        value: '13',
                                        label: 'Yodivi gulli',
                                    },

                                ]}
                            />
                        </Form.Item>
                        <Form.Item name="oynaQavat" label="oyna qavatliligi" rules={[{ required: true }]}>
                            <Select

                                style={{ width: '100%' }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, oynaQavat: e }) }}
                                options={[
                                    {
                                        value: '21',
                                        label: '1x',
                                    },
                                    {
                                        value: '22',
                                        label: '2x',
                                    },

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
                                    {
                                        value: '31',
                                        label: 'Yoq',
                                    },
                                    {
                                        value: '32',
                                        label: 'Bor',
                                    },

                                ]}
                            />
                        </Form.Item>
                        <Form.Item name="tor" label="Tor" rules={[{ required: true }]}>
                            <Select

                                style={{ width: '100%' }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, oshiqmoshiq: e }) }}
                                options={[
                                    {
                                        value: '51',
                                        label: '2x tadan',
                                    },
                                    {
                                        value: '52',
                                        label: '3x tadan',
                                    },
                                    {
                                        value: '53',
                                        label: '4x tadan',
                                    },
                                    {
                                        value: '54',
                                        label: '5x tadan',
                                    },

                                ]}
                            />
                        </Form.Item>
                        <Form.Item name="eshikZamog" label="eshik zamogi" rules={[{ required: true }]}>
                            <Select

                                style={{ width: '100%' }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, eshikZamog: e }) }}
                                options={[
                                    {
                                        value: '61',
                                        label: '2x tadan',
                                    },
                                    {
                                        value: '62',
                                        label: '3x tadan',
                                    },
                                    {
                                        value: '63',
                                        label: '4x tadan',
                                    },
                                    {
                                        value: '64',
                                        label: '5x tadan',
                                    },

                                ]}
                            />
                        </Form.Item>
                        <Form.Item name="oshiqmoshiq" label="oshiq moshiq" rules={[{ required: true }]}>
                            <Select

                                style={{ width: '100%' }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, derazaTutuqich: e }) }}
                                options={[
                                    {
                                        value: '71',
                                        label: '2x tadan',
                                    },
                                    {
                                        value: '72',
                                        label: '3x tadan',
                                    },
                                    {
                                        value: '73',
                                        label: '4x tadan',
                                    },
                                    {
                                        value: '74',
                                        label: '5x tadan',
                                    },

                                ]}
                            />
                        </Form.Item>
                        <Form.Item name="derazaTutuqich" label="Deraza tutqichi" rules={[{ required: true }]}>
                            <Select

                                style={{ width: '100%' }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, EshikPastkiQism: e }) }}
                                options={[
                                    {
                                        value: '81',
                                        label: '2x tadan',
                                    },
                                    {
                                        value: '82',
                                        label: '3x tadan',
                                    },
                                    {
                                        value: '83',
                                        label: '4x tadan',
                                    },
                                    {
                                        value: '84',
                                        label: '5x tadan',
                                    },

                                ]}
                            />
                        </Form.Item>
                        <Form.Item name="EshikPastkiQism" label="eshik pastiki qismi" rules={[{ required: true }]}>
                            <Select

                                style={{ width: '100%' }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, EshikPastkiQism: e }) }}
                                options={[
                                    {
                                        value: '8d1',
                                        label: '2x tadan',
                                    },
                                    {
                                        value: '8d2',
                                        label: '3x tadan',
                                    },
                                    {
                                        value: 'd83',
                                        label: '4x tadan',
                                    },
                                    {
                                        value: '8d4',
                                        label: '5x tadan',
                                    },

                                ]}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Space>
                                <SubmitButton  props={props} form={form}  />
                                <Button type="primary" danger  onClick={()=>{router.push('/')}}>Bekor qilish</Button>


                            </Space>
                        </Form.Item>
                    </Form>


                </div>



            </div>
            {/* <div className='Zakaz'>

                <Button class='BtnSucc' text='Savatga qoshish' handelClick={() => { AddCart() }} />
                <Button class='BtnSucc' text='Buyurtma qabul qilish' handelClick={() => { props?.setIsModalOpen(true) }} />




            </div> */}
            <ModalSoni DefaultProfilColor={DefaultProfilColor}/>
        </div>
    )
}
