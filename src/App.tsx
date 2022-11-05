import React, { useEffect, useState } from 'react';
import { Layout, Col, Row, Select, Checkbox, Form, Input, Button } from 'antd';
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

type ConfigItem = {
  name: string;
  values: string[];
}

type Config = {
  partnerId: string;
  configItems: ConfigItem[];
}

function App() {
  const initialConfig: Config = { partnerId: "abx", configItems: [] };
  const [form] = Form.useForm();
  const [config, setConfig] = useState<Config>(initialConfig);

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const findConfigItem = (name: string): number => {
    return config.configItems.findIndex(item => item.name == name);
  }

  //var data = { gender: "" };
  const onCustomerModelChange = (value: string) => {
    const idx = findConfigItem('customerModel');
    if (idx != -1) {
      config.configItems[idx].values = [value];
    } else {
      const configItem: ConfigItem = { name: '', values: [] };
      configItem.name = 'customerModel';
      configItem.values.push(value);
      config.configItems.push(configItem);
    }
    setConfig({ ...config });
  };

  const onInterfaceModelChange = (value: string) => {
    const idx = findConfigItem('interfaceModel');
    if (idx != -1) {
      config.configItems[idx].values = [value];
    } else {
      const configItem: ConfigItem = { name: '', values: [] };
      configItem.name = 'interfaceModel';
      configItem.values.push(value);
      config.configItems.push(configItem);
    }
    setConfig({ ...config });
  };

  const onLicenseModelChange = (value: string) => {
    const idx = findConfigItem('licenseModel');
    if (idx != -1) {
      config.configItems[idx].values = [value];
    } else {
      const configItem: ConfigItem = { name: '', values: [] };
      configItem.name = 'licenseModel';
      configItem.values.push(value);
      config.configItems.push(configItem);
    }
    setConfig({ ...config });
  };

  const onPartnerIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    config.partnerId = inputValue;
    setConfig({ ...config });
  }

  return (
    <Layout>
      <Header>Config Tool</Header>
      <Content>
        <Row>
          <Col span={12}>
            <h2>Checklist</h2>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
              <Form.Item name="partnerId" label="Partner Id" rules={[{ required: true }]}>
                <Input value={config.partnerId} onChange={onPartnerIdChange} />
              </Form.Item>
              <Form.Item name="partnerName" label="Partner Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="customerModel" label="Customer Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option"
                  onChange={onCustomerModelChange}
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
              <Form.Item name="interfaceModel" label="Interface Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option"
                  onChange={onInterfaceModelChange}
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
              <Form.Item name="licenseModel" label="License Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option"
                  onChange={onLicenseModelChange}
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>
            <h2>Partner Configuration</h2>
            <TextArea rows={4} value={JSON.stringify(config, null, 2)} contentEditable={false} />
            <h2>Edge Auth Policies</h2>
            <TextArea rows={4} value={JSON.stringify(config, null, 2)} contentEditable={false} />
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
