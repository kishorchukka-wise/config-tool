export const customerModels = [{
	key: 'connected-partner',
	description: 'Connected Partner'
},
{
	key: '1pip',
	description: '1st Party Infrastructure Partner'
},
{
	key: '3pip',
	description: '3rd Party Infrastructure Partner'
},];

export const onboardingModels = [
{
	key: 'wise-kyc-redirect-with-api',
	description: 'Wise KYC - Redirect With API Pre-Upload'
},
{
	key: 'wise-kyc-single-partner-account',
	description: 'Wise KYC - Single Partner Account'
},
{
	key: 'partner-kyc-reliance',
	description: 'Partner KYC - Reliance'
},
{
	key: 'partner-kyc-outsource',
	description: 'Partner KYC - Outsource'
},
{
	key: 'partner-kyc-license',
	description: 'Partner KYC - Partner License'
},];

export const settlementInstructionModels = [
	{
		key:'transfer-by-transfer', 
		description: 'Transfer By Transfer'
	},
	{
		key:'collaterized-transfer-by-transfer', 
		description: 'Collateralized Transfer by Transfer'
	},
	{
		key:'batch-group', 
		description: 'Batch Group'
	},
	{
		key:'bulk-settlement', 
		description: 'Bulk Settlement'
	},
	{
		key:'cross-currency-bulk-settlement', 
		description: 'Cross Currency Bulk Settlement'
	},
	{
		key:'bulk-settlement-without-collaternal', 
		description: 'Bulk Settlement Without Collateral'
	},
];

export const settlementModels = [
	{
		key:'fund-from-balance', 
		description: 'Fund from Balance'
	},
	{
		key:'push', 
		description: 'Push'
	},
	{
		key:'pull', 
		description: 'Pull'
	},
];

export const spendModels = [
	{
		key:'cards-spend', 
		description: 'Card issuance'
	},
]

export const refundModels = [
	{
		key:'transfer-by-transfer-refund', 
		description: 'Transfer by Transfer'
	},
	{
		key:'net-settlement-refund', 
		description: 'Net Settlement'
	},
	{
		key:'refund-to-balance-refund', 
		description: 'Refund to Balance'
	},
];

export const customerTypes = [
	{
		key:'personal', 
		description: 'Personal'
	},
	{
		key:'business', 
		description: 'Business'
	},
]

export const transferModels = [
	{
		key:'send', 
		description: 'Send'
	},
]

export const holdModels = [
	{
		key:'balance', 
		description: 'MCA Balance Accounts'
	},
	{
		key:'bank', 
		description: 'Bank Account Details'
	},
]

export const receiveModels = [
	{
		key:'swift-receive', 
		description: 'SWIFT'
	},
	{
		key:'bank-account-details-receive', 
		description: 'Bank Account Details'
	},
	{
		key:'balance-top-up-receive', 
		description: 'Balance Top-Up'
	},
]