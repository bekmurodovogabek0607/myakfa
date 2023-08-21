type ConteinerType = {
    styleName: string
    styles: JSX.Element
    foiz: number
    qoshimcha: number
} & React.ComponentProps<'div'>
import React, { useContext, useState } from 'react';
import { Modal } from 'antd';
import { Form, Input } from 'antd';

import { toast } from 'react-toastify';


import Button from '../Button'
import './stylesetting.scss'
import { Context } from '../../utils/Context';
import { useGet, usePost } from '../../utils/ApiQuery'
import { Loading } from '../Loading'
export const Setting = ({ children, ...rest }: ConteinerType) => {
    const Mystyles = usePost('/mystyles')
    const MystylesDelete = usePost('/mystylesdelete')

    const GetMystyles = useGet(['mystyles'], `/mystyles/${localStorage.getItem('my-akfa-id')}`)
    console.log(GetMystyles.data);
    
    const props = useContext(Context)
    // const Bor = useState(props?.MyDerazaStyles.filter(item => item.styles == rest.styleName))
    // const [SaveDefault, setSaveDefault] = useState<boolean>(Bor[0]?.length == 0 ? true : false)
    const Total = GetMystyles.isSuccess && GetMystyles.data!=''? GetMystyles.data.total.filter((item: any) => item.style == rest.styleName)[0] : []
console.log(Total);

    const [foiz, setfoiz] = useState<number>(Total == undefined || Total.length==0? 0 : Total.foiz)
    const [qoshimcha, setqoshimcha] = useState<number>(Total == undefined || Total.length==0? 0 : Total.price)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    console.log(Total);




    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        props?.setMyDerazaStyles([...props?.MyDerazaStyles, { styles: rest.styleName, arka: false, foiz: 0, price: 0 },])
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModalDelete = () => {
        setIsModalOpenDelete(true);

    };

    const handleOkDelete = () => {
        setIsModalOpenDelete(false);
    };

    const handleCancelDelete = () => {
        setIsModalOpenDelete(false);
    };
    const [form] = Form.useForm();




    return (
        <div className='SettingStyles'>
            <div>{rest.styles}</div>

            <div>
                <h5>{Total == undefined || Total.length==0 ? "Mahsulotni qo'shish va tanlovni oshiring" : `Mehnat haqqi sifatida tan narxga- ${foiz}%. Qo'shimcha xarajatlar uchun ${qoshimcha} so'm qoshib hisoblanadi `}</h5>
                <div >
                    {
                        Total == undefined ||  Total.length==0 ?
                            <Button handelClick={() => { showModal()  }} text="+ Add" class='BtnSucc' /> :
                            <div style={{ display: "flex" }}>
                                <Button handelClick={() => { showModal() }} text="Update" class='BtnUpdate' />
                                <Button handelClick={() => { showModalDelete()}} text="Delete" class='BtnErr' />

                            </div>


                    }


                </div>

            </div>
            <Modal
                title="Mehnat haqqi"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: "none" } }}
            >
                {
                    !GetMystyles.isSuccess ? <Loading /> : <Form


                        form={form}
                        initialValues={{ layout: 'vertical' }}
                        layout={'vertical'}


                    >

                        <Form.Item label="Mehnat haqqi sifatidagi ulushni kiriting foiz(%)larda">
                            <Input value={foiz} onChange={(e) => { setfoiz(Number(e.target.value)) }} type='number' placeholder="foiz(%)" />
                        </Form.Item>
                        <Form.Item label={`Buni yasashda qancha miqdorda (puli) 'Reziana ' , ' Shrub ' kabi qo'shimcha mahsulotlar sarflanadi 'so'mda kiriting' `}>
                            <Input value={qoshimcha} onChange={(e) => { setqoshimcha(Number(e.target.value)) }} type='number' placeholder="so'm" />
                        </Form.Item>
                        <div style={{ display: "flex", width: '90%', margin: '0px auto', justifyContent: 'space-around' }}>
                            <Form.Item >
                                <Button class='BtnSucc' text='Saqlash' handelClick={() => {
                                    setIsModalOpen(false);
                                    // setSaveDefault(false)
                                    props?.setMyDerazaStyles([...props?.MyDerazaStyles, { styles: rest.styleName, arka: false, foiz: 0, price: 0 },])
                                    Mystyles.mutate({ userId: localStorage.getItem('my-akfa-id'), total: [{ style: rest.styleName, foiz: foiz, price: qoshimcha }] }, {
                                        onSuccess: (reps => {
                                            console.log(reps.data);
                                            toast.success(reps.data);
                                            GetMystyles.refetch()
                                        }),
                                        onError: (err => {
                                            console.log(err);

                                        })
                                    })

                                }} />
                            </Form.Item>
                            <Form.Item >
                                <Button class='BtnErr' text='Chiqish' handelClick={() => { handleCancel() }} />
                            </Form.Item>
                        </div>


                    </Form>
                }

            </Modal>
            <Modal
                title="O'chirish"
                open={isModalOpenDelete}
                onOk={handleOkDelete}
                onCancel={handleCancelDelete}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: "none" } }}
            >
                <Button handelClick={() => {
                    // setSaveDefault(true),
                        handleCancelDelete(),
                        MystylesDelete.mutate({ userId: localStorage.getItem('my-akfa-id'), style: Total.style }, {
                            onSuccess: (resp => {
                                console.log(resp);
                                toast.success(resp.data)
                                GetMystyles.refetch()

                            }),
                            onError: (err => {
                                toast.error('Error')
                                console.log(err);

                            })
                        })
                    props?.setMyDerazaStyles([...props.MyDerazaStyles.filter(item => item.styles != rest.styleName)])


                }} text="O'chirish" class='BtnErr' />

            </Modal>

        </div>
    )
}
