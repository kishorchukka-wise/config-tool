import React, { useState } from 'react';
import { Layout, Col, Row, Select, Checkbox, Form, Input, Button, Radio, Switch, Divider } from 'antd';
import './App.css';
import { Config, ConfigItem } from './types';
import { customerModels, customerTypes, holdModels, onboardingModels, receiveModels, refundModels, settlementInstructionModels, settlementModels, transferModels } from './checklistData';

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
  const initialConfig: Config = { partnerId: "abx", configItems: [] };
  const [form] = Form.useForm();
  const [config, setConfig] = useState<Config>(initialConfig);
  const [customerModel, setCustomerModel] = useState<string>('');
  const [onboardingModel, setOnboardingModel] = useState<string>('');
  const [settlementInstructionModel, setSettlementInstructionModel] = useState<string>('');
  const [settlementModel, setSettlementModel] = useState<string>('');
  const [refundModel, setRefundModel] = useState<string>('');
  const [transferModel, setTransferModel] = useState<string>('');
  const [receiveModel, setReceiveModel] = useState<string>('');

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const findConfigItem = (key: string): number => {
    return config.configItems.findIndex((item: ConfigItem) => item.key == key);
  }

  //var data = { gender: "" };
  const onCustomerModelChange = (value: string) => {
    const idx = findConfigItem('customerModel');
    if (idx != -1) {
      config.configItems[idx].values = [value];
    } else {
      const configItem: ConfigItem = { key: '', values: [] };
      configItem.key = 'customerModel';
      configItem.values.push(value);
      config.configItems.push(configItem);
    }
    setConfig({ ...config });
	setCustomerModel(value);
  };

  const onOnboardingModelChange = (value: string) => {
    const idx = findConfigItem('onboardingModel');
    if (idx != -1) {
      config.configItems[idx].values = [value];
    } else {
      const configItem: ConfigItem = { key: '', values: [] };
      configItem.key = 'onboardingModel';
      configItem.values.push(value);
      config.configItems.push(configItem);
    }
    setConfig({ ...config });
	setOnboardingModel(value);
  };

  const onTransferModelChange = (value: string) => {
    const idx = findConfigItem('transferModel');
    if (idx != -1) {
      config.configItems[idx].values = [value];
    } else {
      const configItem: ConfigItem = { key: '', values: [] };
      configItem.key = 'transferModel';
      configItem.values.push(value);
      config.configItems.push(configItem);
    }
    setConfig({ ...config });
	setTransferModel(value);
  };

  const onHoldModelChange = (value: string) => {
    const idx = findConfigItem('holdModel');
    if (idx != -1) {
      config.configItems[idx].values = [value];
    } else {
      const configItem: ConfigItem = { key: '', values: [] };
      configItem.key = 'holdModel';
      configItem.values.push(value);
      config.configItems.push(configItem);
    }
    setConfig({ ...config });
  };

  const onReceiveModelChange = (value: string) => {
    const idx = findConfigItem('receiveModel');
    if (idx != -1) {
      config.configItems[idx].values = [value];
    } else {
      const configItem: ConfigItem = { key: '', values: [] };
      configItem.key = 'receiveModel';
      configItem.values.push(value);
      config.configItems.push(configItem);
    }
    setConfig({ ...config });
	setReceiveModel(value);
  };

  const onSettlementInstructionModelChange = (value: string) => {
    const idx = findConfigItem('settlementInstructionModel');
    if (idx != -1) {
      config.configItems[idx].values = [value];
    } else {
      const configItem: ConfigItem = { key: '', values: [] };
      configItem.key = 'settlementInstructionModel';
      configItem.values.push(value);
      config.configItems.push(configItem);
    }
    setConfig({ ...config });
	setSettlementInstructionModel(value);
  };

  const onSettlementModelChange = (value: string) => {
    const idx = findConfigItem('settlementModel');
    if (idx != -1) {
      config.configItems[idx].values = [value];
    } else {
      const configItem: ConfigItem = { key: '', values: [] };
      configItem.key = 'settlementModel';
      configItem.values.push(value);
      config.configItems.push(configItem);
    }
    setConfig({ ...config });
	setSettlementModel(value);
  };

  const onRefundModelChange = (value: string) => {
    const idx = findConfigItem('refundModel');
    if (idx != -1) {
      config.configItems[idx].values = [value];
    } else {
      const configItem: ConfigItem = { key: '', values: [] };
      configItem.key = 'refundModel';
      configItem.values.push(value);
      config.configItems.push(configItem);
    }
    setConfig({ ...config });
	setRefundModel(value);
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
          <Col span={16}>
            <h2>Checklist</h2>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
			<Divider orientation="left">General</Divider>
              <Form.Item name="partnerId" label="Partner Id" rules={[{ required: true }]}>
                <Input value={config.partnerId} onChange={onPartnerIdChange} />
              </Form.Item>
              <Form.Item name="partnerName" label="Partner Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
			  <Form.Item name="show-ninjas-forbidden-contact-message" label="Can Wise contact partner’s customers directly?">
				<Switch />
			  </Form.Item>
			  <Form.Item name="show-ninjas-bank-messages" label="Show ninjas bank message?">
			  <Switch />
			</Form.Item>
			<Form.Item name="show-ninjas-bank-messages" label="Show ninjas bank message?">
			  <Switch />
			</Form.Item>
			<Divider orientation="left">Customer Models</Divider>
              <Form.Item name="customerModel" label="Customer Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option"
                  onChange={onCustomerModelChange}
                  allowClear
                >
					{customerModels.map(customerModel => (
            			<Option key={customerModel.key}>{customerModel.description}</Option>
          			))}
                </Select>
              </Form.Item>
			  {(customerModel === 'connected-partner' || customerModel === '1pip' || customerModel == '3pip') && (
			  <Form.Item name="oauth-permitted-profile-types" label="Customer Type" rules={[{ required: true }]}>
                <Select
				  mode="multiple"
                  placeholder="Select a option"
                  onChange={onCustomerModelChange}
                  allowClear
                >
					{customerTypes.map(customerType => (
            			<Option key={customerType.key}>{customerType.description}</Option>
          			))}
                </Select>
              </Form.Item>)}
			{customerModel === 'connected-partner' &&
				(<div>
			  <Form.Item name="proactiveVerification" label="Proactive verification">
				<Switch />
			  </Form.Item>
			  <Form.Item name="existingUsersOnly" label="Existing users only">
				<Switch />
			  </Form.Item>
			  <Form.Item name="branding" label="Branding. Authorization-page (frontend)">
				<Switch />
			  </Form.Item>
			</div>
			  )
			}
			{customerModel === '3pip' &&
				(
			  <Form.Item name="3ppProfileIds" label="3PP profile IDs" rules={[{ required: true }]}>
			  	<Input value={config.partnerId} onChange={onPartnerIdChange} />
			  </Form.Item>
			  )
			}
			<Divider orientation="left">Onboarding Models</Divider>
              <Form.Item name="onboardingModel" label="Onboarding Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option"
                  onChange={onOnboardingModelChange}
                  allowClear
                >
                  {onboardingModels.map(onboardingModel => (
            			<Option key={onboardingModel.key}>{onboardingModel.description}</Option>
          			))}
                </Select>
              </Form.Item>
			  {onboardingModel === 'wise-kyc-redirect-with-api' &&
				(
					<div>
			  <Form.Item name="with-api-pre-upload" label="With API pre-upload">
			  	<Switch />
			  </Form.Item>
			  <Form.Item name="multi-user-access-disabled" label="MUA disabled">
			  	<Switch />
			  </Form.Item>
			  <Form.Item name="multiple-business-user-supported" label="Multiple business users supported">
			  	<Switch />
			  </Form.Item>
			  </div>
			  )
			}
			{(onboardingModel === 'partner-kyc-reliance' || onboardingModel === 'partner-kyc-outsource')&&
				(
					<div>
			  <Form.Item name="trusted-kyc-business" label="Bypass KYC checks for business profiles">
			  	<Switch />
			  </Form.Item>
			  <Form.Item name="trusted-kyc-personal" label="Bypass KYC checks for personal profiles">
			  	<Switch />
			  </Form.Item>
			  </div>
			  )
			}
			<Divider orientation="left">Transfer Models</Divider>
			<Form.Item name="transferModel" label="Transfer Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option"
                  onChange={onTransferModelChange}
                  allowClear
                >
                  {transferModels.map(transferModel => (
            			<Option key={transferModel.key}>{transferModel.description}</Option>
          			))}
                </Select>
              </Form.Item>
			  {(transferModel === 'send')&&
				(
					<div>
			  <Form.Item name="global_usd_enabled" label="Global USD enabled">
			  	<Switch />
			  </Form.Item>
			  <Form.Item name="rapida-enabled" label="Rapida enabled">
			  	<Switch />
			  </Form.Item>
			  <Form.Item name="alipay-enabled" label="Alipay enabled">
			  	<Switch />
			  </Form.Item>
			  <Form.Item name="fees-payin-invoiced" label="Zero fees">
			  	<Switch />
			  </Form.Item>
			  <Form.Item name="indefinite-fixed-rate-enabled" label="Fixed-target transfers (indefinite fixed rate)">
			  	<Switch />
			  </Form.Item>
			  <Form.Item name="is-partner-fee" label="Partner fee(Convenience fee)">
			  	<Switch />
			  </Form.Item>
			  <Form.Item name="custom-pricing-marker" label="Custom Pricing Marker">
			  	<Input />
			  </Form.Item>
			  <Form.Item name="is-quote-maximum-source-limit" label="Quote maximum source limit">
			  	<Switch />
			  </Form.Item>
			  <Form.Item name="quote-maximum-source-limit-ccy" label="Maximum quote's limit from CCY">
			  	<Input />
			  </Form.Item>
			  </div>
			  )
			}
			<Divider orientation="left">Hold Models</Divider>
			<Form.Item name="holdModel" label="Hold Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option"
                  onChange={onHoldModelChange}
                  allowClear
                >
                  {holdModels.map(holdModel => (
            			<Option key={holdModel.key}>{holdModel.description}</Option>
          			))}
                </Select>
              </Form.Item>
			  <Divider orientation="left">Receive Models</Divider>
			<Form.Item name="receiveModel" label="Receive Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option"
                  onChange={onReceiveModelChange}
                  allowClear
                >
                  {receiveModels.map(receiveModel => (
            			<Option key={receiveModel.key}>{receiveModel.description}</Option>
          			))}
                </Select>
              </Form.Item>
			  {receiveModel === 'swift' &&
				(
					<div>
			  <Form.Item name="profile-id" label="Profile ID" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  <Form.Item name="swift-in-bank-codes" label="SWIFT in BICs" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  </div>
			  )
			}
			{receiveModel === 'bank-account-details' &&
				(
					<div>
			  <Form.Item name="account-details-charge-fee-active" label="Charge partner a fee when creating account details">
			  	<Switch />
			  </Form.Item>
			  </div>
			  )
			}
			  <Divider orientation="left">Settlement Instruction Models</Divider>
              <Form.Item name="settlementInstructionModel" label="Settlement Instruction Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option"
                  onChange={onSettlementInstructionModelChange}
                  allowClear
                >
                  {settlementInstructionModels.map(settlementInstructionModel => (
            			<Option key={settlementInstructionModel.key}>{settlementInstructionModel.description}</Option>
          			))}
                </Select>
              </Form.Item>
			  {settlementInstructionModel === 'batch-group' &&
				(
					<div>
			  <Form.Item name="t4b-partner-batch-refund-recipient-id" label="Recipient id" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  </div>
			  )
			}
			 {settlementInstructionModel === 'bulk-settlement' &&
				(
					<div>
			  <Form.Item name="bank-account-id-ccy" label="Settlement account ID" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  <Form.Item name="gl-generic-account-number-ccy" label="Collateral account GL generic number" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  <Form.Item name="pre-funding-rule-plus-ccy" label="Bulk settlement limits rule to PLUS (1 million) amount" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  </div>
			  )
			}
			{settlementInstructionModel === 'cross-currency-bulk-settlement' &&
				(
					<div>
			  <Form.Item name="cross-currency-settlement-source-account-id" label="Bank account ID for settlement source currency" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  <Form.Item name="cross-currency-settlement-target-account-id" label="Bank account ID for settlement target currency" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  <Form.Item name="trusted-bulk-settlement-allowed-amount-variation-percentage" label="Percentage amount used in BSS to set amountTolerance" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  <Form.Item name="poo-bic" label="Payments Originating Overseas(POO) BIC" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  </div>
			  )
			}
			  <Divider orientation="left">Settlement Models</Divider>
			  <Form.Item name="settlementModel" label="Settlement Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option"
                  onChange={onSettlementModelChange}
                  allowClear
                >
                  {settlementModels.map(settlementModel => (
            			<Option key={settlementModel.key}>{settlementModel.description}</Option>
          			))}
                </Select>
              </Form.Item>
			  <Divider orientation="left">Refund Models</Divider>
			  <Form.Item name="refundModel" label="Refund Model" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option"
                  onChange={onRefundModelChange}
                  allowClear
                >
                  {refundModels.map(refundModel => (
            			<Option key={refundModel.key}>{refundModel.description}</Option>
          			))}
                </Select>
              </Form.Item>
			  {refundModel === 'net-settlement' &&
				(
					<div>
			  <Form.Item name="webhook-refunds-currency-uri" label="Webhook URI that will be called on refund" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  <Form.Item name="webhook-refunds-currency-recipient-id" label="Refund recipient ID" rules={[{ required: true }]}>
			  	<Input />
			  </Form.Item>
			  </div>
			  )
			}
			<Divider orientation="left">Other</Divider>
			<Form.Item name="webhookAuthSetup" label="Webhook auth setup">
			  	<Switch />
			  </Form.Item>

              <Form.Item {...tailLayout}>
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={8}>
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
