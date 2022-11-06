import React, { useState } from 'react';
import { Layout, Col, Row, Select, Checkbox, Form, Input, Button, Radio, Switch, Divider, Tooltip } from 'antd';
import './App.css';
import { Config, ConfigItem } from './types';
import { customerModels, customerTypes, holdModels, onboardingModels, receiveModels, refundModels, settlementInstructionModels, settlementModels, spendModels, transferModels } from './checklistData';
import { configBlocks, getConfigBlock } from './configData';

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
  const initialConfig: Config = { partnerId: "abx", configItems: getConfigBlock('common')?.items };
  const initialEdgeAuthPolicies: string[] = getConfigBlock('common')?.policies;
  const [form] = Form.useForm();
  const [config, setConfig] = useState<Config>(initialConfig);
  const [edgeAuthPolicies, setEdgeAuthPolicies] = useState<string[]>(initialEdgeAuthPolicies);
  const [customerModel, setCustomerModel] = useState<string>('');
  const [onboardingModel, setOnboardingModel] = useState<string>('');
  const [settlementInstructionModel, setSettlementInstructionModel] = useState<string>('');
  const [settlementModel, setSettlementModel] = useState<string>('');
  const [holdModel, setHoldModel] = useState<string>('');
  const [spendModel, setSpendModel] = useState<string>('');
  const [refundModel, setRefundModel] = useState<string>('');
  const [transferModel, setTransferModel] = useState<string>('');
  const [receiveModel, setReceiveModel] = useState<string>('');

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
	setConfig(initialConfig);
	setEdgeAuthPolicies(initialEdgeAuthPolicies);
  };

  const findConfigItem = (key: string): number => {
    return config.configItems.findIndex((item: ConfigItem) => item.key == key);
  }

  const onModelChange = (value: string) => {
	const configBlock = getConfigBlock(value);
	console.log(configBlock);
	config.configItems = config.configItems.concat(configBlock.items);
	edgeAuthPolicies.concat(configBlock.policies);
    setConfig({ ...config });
	setEdgeAuthPolicies({ ...edgeAuthPolicies });
  };


  const onCustomerModelChange = (value: string) => {
	setCustomerModel(value);
	onModelChange(value);
  }

  const onOnboardingModelChange = (value: string) => {
	setOnboardingModel(value);
	onModelChange(value);
  }

  const onSettlementInstructionModelChange = (value: string) => {
	setSettlementInstructionModel(value);
	onModelChange(value);
  }

  const onSettlementModelChange = (value: string) => {
	setSettlementModel(value);
	onModelChange(value);
  }

  const onSpendModelChange = (value: string) => {
	setSpendModel(value);
	onModelChange(value);
  }

  const onHoldModelChange = (value: string) => {
	setHoldModel(value);
	onModelChange(value);
  }

  const onReceiveModelChange = (value: string) => {
	setReceiveModel(value);
	onModelChange(value);
  }

  const onRefundModelChange = (value: string) => {
	setRefundModel(value);
	onModelChange(value);
  }

  const onTransferModelChange = (value: string) => {
	setTransferModel(value);
	onModelChange(value);
  }

  const onPartnerIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    config.partnerId = inputValue;
    setConfig({ ...config });
  }

  const onPartnerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const idx = findConfigItem('name');
	config.configItems[idx].values = [inputValue];
    setConfig({ ...config });
  }

  return (
    <Layout>
      <Header>Config Tool</Header>
      <Content>
        <Row gutter={16}>
          <Col span={14}>
            <h2>Checklist</h2>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
			<Divider orientation="left">General</Divider>
              <Form.Item name="partnerId" label="Partner Id" rules={[{ required: true }]}>
				<Tooltip placement="topLeft" title='Client key configured for the partner'> 
                <Input value={config.partnerId} onChange={onPartnerIdChange} />
				</Tooltip>
              </Form.Item>
              <Form.Item name="partnerName" label="Partner Name" rules={[{ required: true }]}>
			  <Tooltip placement="topLeft" title='Contains an identifiable name for the partner. This is not the client-key'>
                <Input onChange={onPartnerNameChange}/>
				</Tooltip>
              </Form.Item>
			  <Form.Item name="show-ninjas-forbidden-contact-message" label="Can Wise contact partner’s customers directly?">
				<Switch />
			  </Form.Item>
			  <Form.Item name="show-ninjas-bank-messages" label="Show ninjas bank message?">
			  <Tooltip placement="topLeft" title='“Yes” for banks, “No” for non-banks'>
			  <Switch />
			  </Tooltip>
			</Form.Item>
			<Form.Item name="show-ninjas-forbidden-contact-message" label="Show ninjas forbidden to contact?">
				<Tooltip placement="topLeft" title='“Yes” means we can’t contact customers directly'>
			  <Switch />
			  </Tooltip>
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
				<Tooltip placement='topLeft' title='"Yes" means the client id needs to be added to dd-case. This can be done opening a PR like this one: https://github.com/transferwise/dd-case/pull/1318'>
				<Switch />
				</Tooltip>
			  </Form.Item>
			  <Form.Item name="existingUsersOnly" label="Existing users only">
				<Tooltip placement='topLeft' title='"No" means Full onboarding. Existing users only is False. To enable full onboarding (sign up via business onboarding) add clientId to ONBOARDING_ENABLED_FOR_CLIENTS list: https://github.com/transferwise/authorization-page/blob/master/src/config.js'>
				<Switch />
				</Tooltip>
			  </Form.Item>
			  <Form.Item name="branding" label="Branding. Authorization-page (frontend)">
				<Switch />
			  </Form.Item>
			  <Form.Item name="branding" label="Logo">
			  	<Tooltip placement='topLeft' title='To display partner logo in authorization-page just find a partner logo and create a PR to transferwise/static-assets repo'>
				<Switch />
				</Tooltip>
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
			<Form.Item name="transferModel" label="Transfer Model">
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
			  <Tooltip placement='topLeft' title='swift_code recipient type enabled for USD'>
			  	<Switch />
				</Tooltip>
			  </Form.Item>
			  <Form.Item name="rapida-enabled" label="Rapida enabled">
			  <Tooltip placement='topLeft' title='Always false, since to-RUB is disabled'>
			  	<Switch disabled/>
				</Tooltip>
			  </Form.Item>
			  <Form.Item name="alipay-enabled" label="Alipay enabled">
			  	<Switch />
			  </Form.Item>
			  <Form.Item name="fees-payin-invoiced" label="Zero fees">
			  <Tooltip placement='topLeft' title='Exempt pay-in fees so they can be invoiced. If the partner is sending batches from USD or CAD; at present they require the pay-in fee to be removed to avoid excessive fees. '>
			  	<Switch />
				</Tooltip>
			  </Form.Item>
			  <Form.Item name="indefinite-fixed-rate-enabled" label="Fixed-target transfers (indefinite fixed rate)">
			  	<Tooltip placement='topLeft' title='Prevent fixed target rates expiring for quotes from this partner, and also prevents regional teams from forcibly expiring these rates in an emergency.'>
			  	<Switch />
				  </Tooltip>
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
				<Tooltip placement='topLeft' title="Maximum quote's limit from CCY">
			  	<Input />
				  </Tooltip>
			  </Form.Item>
			  </div>
			  )
			}
			<Divider orientation="left">Hold Models</Divider>
			<Form.Item name="holdModel" label="Hold Model">
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
			<Form.Item name="receiveModel" label="Receive Model">
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
				<Tooltip placement='topLeft' title='The profile id money will be credited to'>
			  	<Input />
				  </Tooltip>
			  </Form.Item>
			  <Form.Item name="swift-in-bank-codes" label="SWIFT in BICs" rules={[{ required: true }]}>
				<Tooltip placement='topLeft' title='SWIFT transfers to these BICs will be credited to partner’s balance. BIC matching logic is starts with. QNTOFRPA in configuration means that transfers to QNTOFRPA and QNTOFRPAXXX will be routed to a partner.'>
			  	<Input />
				</Tooltip>
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
			  <Tooltip placement='topLeft' title='Settlement account id provided by OPS - pockit GBP example is 1277'>
			  	<Input />
				  </Tooltip>
			  </Form.Item>
			  <Form.Item name="gl-generic-account-number-ccy" label="Collateral account GL generic number" rules={[{ required: true }]}>
			  <Tooltip placement='topLeft' title='Collateral account gl generic number provided by OPS - pockit GBP example is 270690'>
			  	<Input />
				  </Tooltip>
			  </Form.Item>
			  <Form.Item name="pre-funding-rule-plus-ccy" label="Bulk settlement limits rule to PLUS (1 million) amount" rules={[{ required: true }]}>
			  <Tooltip placement='topLeft' title='Sets bulk settlement limits rule to PLUS (1 million). Limits transfers if exposure goes above (1 million) above collateral.'>
			  	<Input />
				  </Tooltip>
			  </Form.Item>
			  </div>
			  )
			}
			{settlementInstructionModel === 'cross-currency-bulk-settlement' &&
				(
					<div>
			  <Form.Item name="cross-currency-settlement-source-account-id" label="Bank account ID for settlement source currency" rules={[{ required: true }]}>
				
			  <Tooltip placement='topLeft' title='Bank account ID for cross settlement source currency (e.g. PHP). Provided by OPS.'>
			  	<Input />
				  </Tooltip>
			  </Form.Item>
			  <Form.Item name="cross-currency-settlement-target-account-id" label="Bank account ID for settlement target currency" rules={[{ required: true }]}>
			  <Tooltip placement='topLeft' title='Bank account ID for cross settlement target currency (e.g. USD). Provided by OPS.'>
			  	<Input />
				  </Tooltip>
			  </Form.Item>
			  <Form.Item name="trusted-bulk-settlement-allowed-amount-variation-percentage" label="Percentage amount used in BSS to set amountTolerance" rules={[{ required: true }]}>
			  <Tooltip placement='topLeft' title='Percentage amount used in BSS to set amountTolerance in linking hints'>
			  	<Input />
				  </Tooltip>
			  </Form.Item>
			  <Form.Item name="poo-bic" label="Payments Originating Overseas(POO) BIC" rules={[{ required: true }]}>
			  <Tooltip placement='topLeft' title='The BIC used by payout service for POO(Payments Originating Overseas). Particularly useful for partner licence model where Wise can’t use our own BIC (example partner Max from ILS).'>
			  	<Input />
				  </Tooltip>
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
			  <Divider orientation="left">Spend Models</Divider>
			  <Form.Item name="spendModel" label="Spend Model">
                <Select
                  placeholder="Select a option"
                  onChange={onSpendModelChange}
                  allowClear
                >
                  {spendModels.map(spendModel => (
            			<Option key={spendModel.key}>{spendModel.description}</Option>
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
			  <Tooltip placement='topLeft' title='Webhook URI that will be called on refund.'>
			  	<Input />
				  </Tooltip>
			  </Form.Item>
			  <Form.Item name="webhook-refunds-currency-recipient-id" label="Refund recipient ID" rules={[{ required: true }]}>
			  <Tooltip placement='topLeft' title='Refund recipient ID. Provided by Ops.'>
			  	<Input />
				  </Tooltip>
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
          <Col span={10}>
            <h2>Partner Configuration</h2>
            <TextArea rows={30} value={JSON.stringify(config, null, 2)} contentEditable={false} />
            <h2>Edge Auth Policies</h2>
            <TextArea rows={30} value={JSON.stringify(edgeAuthPolicies, null, 2)} contentEditable={false} />
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
