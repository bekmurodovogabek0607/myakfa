
import Button from '../Component/Button';
import { Select } from 'antd';


import './pages.scss'
import { useContext, useState } from 'react';
import { Context } from '../utils/Context';
import StylesChanger from '../utils/StylesChanger';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Zakaz = () => {
    const router = useHistory()
    const props = useContext(Context)
    const color: string[] = ['rgb(219, 219, 219)', 'rgb(160, 64, 0)', 'rgb(46, 46, 46)',]
    const [DefaultProfilColor, setDefaultProfilColor] = useState<string>("rgb(219, 219, 219)")
    function AddCart() {
        props?.setONeZakaz({ ...props.OneZakaz, ZakazStyles: props.SelectDesing.styles })
        props?.setONeZakaz({ ...props.OneZakaz, ProfilColor:DefaultProfilColor })
        props?.setONeZakaz({ ...props.OneZakaz, narxi:1200000 })

        toast.success('Savatga qoshildi')
    }
    


    return (
        <div>

            <div className='Product'>
                <div className='ProductIMg'>
                    <h2>1.250.000 so'm</h2>
                    <div>
                        {StylesChanger(props?.SelectDesing.styles, DefaultProfilColor)}
                        <div className={'Razmerolishboyi'} >
                            <i className="fa-solid fa-chevron-left"></i>
                            <span></span>
                            <i className="fa-solid fa-chevron-right"></i>
                            <input placeholder='mm' />
                        </div>
                        <div className={'Razmerolish'} >
                            <i className="fa-solid fa-chevron-left"></i>
                            <span></span>
                            <i className="fa-solid fa-chevron-right"></i>
                            <input placeholder='mm' />
                        </div>
                        <div style={props?.SelectDesing.arka ? { display: 'flex' } : { display: "none" }} className={'RazmerolishTepa'} >
                            <i className="fa-solid fa-chevron-left"></i>
                            <span></span>
                            <i className="fa-solid fa-chevron-right"></i>
                            <input placeholder='mm' />
                        </div>
                        <div style={props?.SelectDesing.arka ? { display: 'flex' } : { display: "none" }} className={'RazmerolishTepas'} >
                            <i className="fa-solid fa-chevron-left"></i>
                            <span></span>
                            <i className="fa-solid fa-chevron-right"></i>
                            <input placeholder='mm' />
                        </div>
                    </div>
                    <Button class='BtnSucc' text='Dizaynini ozgartirish' handelClick={() => { router.push('/myderaza') }} />



                </div>
                <div>
                    <div className='Korinishlari'>
                        {color.map((item: string) => {
                            return (
                                <div onClick={() => { setDefaultProfilColor(item) }}>{StylesChanger(props?.SelectDesing.styles, item)}</div>
                            )
                        })}




                    </div>
                    <p>Profil turi</p>
                    <Select

                        style={{ width: '100%' }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, ProfilKompani: e }) }}
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
                    <p>Oyna</p>
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
                    <p>Oyna qavatligi</p>
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
                    <p>Mexanizm</p>
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
                </div>
                <div>

                    <p>To'r</p>
                    <Select

                        style={{ width: '100%' }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        onChange={(e) => { props?.setONeZakaz({ ...props.OneZakaz, tor: e }) }}
                        options={[
                            {
                                value: '41',
                                label: 'Yoq',
                            },
                            {
                                value: '42',
                                label: 'Bor',
                            },

                        ]}
                    />
                    <p>Oshiq moshiq (har bir palla uchun)</p>
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
                    <p>Eshik zamogi</p>
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
                    <p>Deraza tutqichi</p>
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
                    <p>Eshikni paski qismi </p>
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
                </div>


            </div>
            <div className='Zakaz'>

                <Button class='BtnSucc' text='Savatga qoshish' handelClick={() => { AddCart() }} />
                <Button class='BtnSucc' text='Buyurtma qabul qilish' handelClick={() => { }} />




            </div>
        </div>
    )
}
