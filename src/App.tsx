import React, { useState } from 'react';
import { Layout, Col, Row, Select, Checkbox, Form, Input } from 'antd';
import logo from './logo.svg';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function App() {
  const [form] = Form.useForm();
  const [data, setData] = useState("other");
  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  //var data = { gender: "" };
  const onGenderChange = (value: string) => {
    setData(value)
  };

  return (
    <Layout>
      <Header>Config Tool</Header>
      <Content>
        <Row>
          <Col span={12}>
            <h2>Checklist</h2>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
              <Form.Item name="gender" label="Customer Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={onGenderChange}
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>
            <h2>Configuration</h2>
            <TextArea rows={4} value={JSON.stringify(data, null, 2)} contentEditable={false} />
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
