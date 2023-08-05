import { useContext } from 'react';

import { Modal } from 'antd';
import { Context } from '../utils/Context';
import type { FormInstance } from 'antd';
import { Button, Form, Input, Space } from 'antd';
import React from 'react';

const SubmitButton = ({ form }: { form: FormInstance }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    );
  }, [values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

const ModalPage = () => {
  const props = useContext(Context)
  const [form] = Form.useForm();

  const handleOk = () => {
    props?.setIsModalOpen(false);
  };

  const handleCancel = () => {
    props?.setIsModalOpen(false);
  };
  return (
    <>

      <Modal title="Buyurtma" open={props?.isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ style: { display: 'none' } }} cancelButtonProps={{ style: { display: 'none' } }}>
        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
          <Form.Item name="name" label="Ism familiya" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Telefon nomer" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="location" label="Manzil" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Space>
              <SubmitButton form={form} />
              <Button type="primary" danger onClick={handleCancel}>Close</Button>
             

            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalPage;