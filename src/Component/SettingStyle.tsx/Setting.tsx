type ConteinerType = {
    styles: JSX.Element
    foiz: number
    qoshimcha:number
} & React.ComponentProps<'div'>
import React, { useState } from 'react';
import { Modal } from 'antd';
import { Form, Input } from 'antd';




import Button from '../Button'
import './stylesetting.scss'
export const Setting = ({ children, ...rest }: ConteinerType) => {
    const [foiz, setfoiz] = useState<number>()
    const [qoshimcha, setqoshimcha] = useState<number>()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [form] = Form.useForm();




    return (
        <div className='SettingStyles'>
            <div>{rest.styles}</div>

            <div>
                <h5>{rest.foiz}% Tan narxga qo'shib hisoblanadi .Mehnat haqqi sifatida</h5>
                <Button handelClick={() => { showModal(); setfoiz(rest.foiz),setqoshimcha(rest.qoshimcha) }} text="Sozlash" class='BtnSucc' />
            </div>
            <Modal
                title="Mehnat haqqi"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: "none" } }}
            >
                <Form


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
                            <Button class='BtnSucc' text='Saqlash' handelClick={() => { }} />
                        </Form.Item>
                        <Form.Item >
                            <Button class='BtnErr' text='Chiqish' handelClick={() => { handleCancel() }} />
                        </Form.Item>
                    </div>


                </Form>
            </Modal>

        </div>
    )
}
