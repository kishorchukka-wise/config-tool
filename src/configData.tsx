import { ConfigBlock } from "./types";

export const getConfigBlock = (type: string):ConfigBlock => {
	const configBlock = configBlocks.find(item => {
		return item.type == type
 	});
	if(configBlock == undefined) {
		return {type: 'undefined', items: [], policies: []};
	}
	return configBlock;
}

export const configBlocks: ConfigBlock[] = [{
	type: 'common',
	items: [
		{
			key: 'name',
			values: ['abc']
		},
		{
			key: 'show-ninjas-bank-messages',
			values: ['false']
		},
		{
			key: 'show-ninjas-forbidden-contact-message',
			values: ['false']
		}
	],
	policies: [
		"users:get",
		"profiles:list",
		"profiles:get",
	]
},
{
	type: 'connected-partner',
	items: [
		{
			key: 'oauth-permitted-profile-types',
			values: ['personal']
		},
		{
			key: 'policy-check-enabled',
			values: ['true']
		},
		{
			key: 'email-mark-as-verified',
			values: ['false']
		}
	],
	policies: []
},
{
	type: '1pip',
	items: [
		{
			key: 'oauth-permitted-profile-types',
			values: ['personal']
		},
	],
	policies: []
},
{
	type: '3pip',
	items: [
		{
			key: 'oauth-permitted-profile-types',
			values: ['personal']
		},
		{
			key: 'third-party-payments-enabled',
			values: ['true']
		},
		{
			key: '3pp-profile-ids',
			values: []
		},
		{
			key: 'profile-id',
			values: []
		}
	],
	policies: [
		"quotes:create",
		"quotes:get",
		"quotes:getPayInMethods",
		"quotes:createTemporary",
		"quotes:getRequirements",
		"recipients:create",
		"recipients:get",
		"transfers:getIssues",
		"transfers:cancel",
		"transfers:get",
		"transfers:list",
		"deliveryEstimates:get",
		"thirdPartyPayment:create",
		"thirdPartyPayment:get",
		"transfers:fund",
	]
},
{
	type: 'wise-kyc-redirect-with-api',
	items: [
		{
			key: 'multiple-business-user-supported',
			values: ['true']
		},
		{
			key: 'multi-user-access-disabled',
			values: ['true']
		},
	],
	policies: [
		"verificationStatus:read",
	]
},
{
	type: 'partner-kyc-reliance',
	items: [
		{
			key: 'trusted-kyc-business',
			values: ['true']
		},
		{
			key: 'trusted-kyc-personal',
			values: ['true']
		},
		{
			key: 'evidence-types',
			values: []
		},
		{
			key: 'send-nbb-email-notifications',
			values: ['true']
		},
	],
	policies: [
		"profiles:create",
		"profiles:update",
		"profiles:createVerificationDocuments",
		"addresses:getRequirements",
		"addresses:refreshRequirements",
		"addresses:create",
		"addresses:get",
		"directors:get",
		"directors:create",
		"directors:update",
		"directors:delete",
		"shareholders:get",
		"shareholders:associate",
		"shareholders:update",
		"profileUpdateWindow:create",
		"profileUpdateWindow:delete",
	]
},
{
	type: 'partner-kyc-outsource',
	items: [
		{
			key: 'trusted-kyc-business',
			values: ['true']
		},
		{
			key: 'trusted-kyc-personal',
			values: ['true']
		},
		{
			key: 'evidence-types',
			values: []
		},
	],
	policies: [
		"profiles:create",
		"profiles:update",
		"profiles:createVerificationDocuments",
		"addresses:getRequirements",
		"addresses:refreshRequirements",
		"addresses:create",
		"addresses:get",
		"directors:get",
		"directors:create",
		"directors:update",
		"directors:delete",
		"shareholders:get",
		"shareholders:associate",
		"shareholders:update",
		"profileUpdateWindow:create",
		"profileUpdateWindow:delete",
	]
},
{
	type: 'partner-kyc-license',
	items: [
		{
			key: 'kyc-partner-licence',
			values: ['true']
		},
	],
	policies: [
		"profiles:create",
		"profiles:update",
		"profiles:createVerificationDocuments",
		"addresses:getRequirements",
		"addresses:refreshRequirements",
		"addresses:create",
		"addresses:get",
		"directors:get",
		"directors:create",
		"directors:update",
		"directors:delete",
		"shareholders:get",
		"shareholders:associate",
		"shareholders:update",
		"profileUpdateWindow:create",
		"profileUpdateWindow:delete",
		"partnerLicenceTransfer:create",
	]
},
{
	type: 'send',
	items: [
		{
			key: 'global_usd_enabled',
			values: ['true']
		},
		{
			key: 'rapida-enabled',
			values: ['false']
		},
		{
			key: 'fees-payin-invoiced',
			values: ['false']
		},
		{
			key: 'indefinite-fixed-rate-enabled',
			values: ['false']
		},
		{
			key: 'quote-maximum-source-limit-{CCY}', //CCY to replace with source currency?
			values: ['0']
		},
		{
			key: 'custom-pricing-marker',
			values: ['false']
		},
	],
	policies: [
		"quotes:create",
		"quotes:get",
		"quotes:getPayInMethods",
		"quotes:createTemporary",
		"quotes:getRequirements",
		"recipients:create",
		"recipients:get",
		"transfers:create",
		"transfers:getIssues",
		"transfers:cancel",
		"transfers:get",
		"transfers:list",
		"deliveryEstimates:get",
	]
},
{
	type: 'balance',
	items: [
		{
			key: '2fa-required-during-onboarding',
			values: ['true']
		},
	],
	policies: [
		"borderlessAccounts:search",
		"borderlessAccounts:getBalances",
		"borderlessAccounts:getStatements",
	]
},
{
	type: 'bank',
	items: [
	],
	policies: [
		"bankDetailsOrder:createOrder",
		"bankDetailsOrder:getOrders",
		"borderlessAccounts:getBalances",
		"borderlessAccounts:openBalance",
		"bankDetailsDepositAccount:get",
	]
},
{
	type: 'swift-receive',
	items: [
		{
			key: 'swift-receive-profile-id',
			values: []
		},
		{
			key: 'swift-in-bank-codes',
			values: []
		},
		{
			key: 'swift-in',
			values: ['true']
		},
		{
			key: 'profile-id', //populate with value of swift-receive-profile-id
			values: []
		},
		{
			key: 'policy-check-enabled',
			values: ['true']
		},
	],
	policies: [
	]
},
{
	type: 'bank-account-details-receive',
	items: [
		{
			key: 'account-details-charge-fee-active',
			values: ['true']
		},
	],
	policies: [
	]
},
{
	type: 'balance-top-up-receive',
	items: [
	],
	policies: [
	]
},
{
	type: 'transfer-by-transfer',
	items: [
	],
	policies: [
	]
},
{
	type: 'collaterized-transfer-by-transfer',
	items: [
		{
			key: 'tx-pre-funding-enabled',
			values: ['true']
		},
	],
	policies: [
	]
},
{
	type: 'batch-group',
	items: [
		{
			key: 't4b-partner-batch-refund',
			values: ['true']
		},
		{
			key: 't4b-partner-batch-refund-recipient-id',
			values: []
		},
	],
	policies: [
		"batchGroup:read",
		"batchGroup:create",
		"batchGroup:update",
		"batchGroup:createTransfer",
	]
},
{
	type: 'bulk-settlement',
	items: [
		{
			key: 'bulk-pre-funding-enabled',
			values: ['true']
		},
		{
			key: 'preferred-funding-type',
			values: ['TRUSTED_PRE_FUND_BULK'],
		},
		{
			key: 'bank-account-id-{ccy}',
			values: [],
		},
		{
			key: 'gl-generic-account-number-{ccy}',
			values: [],
		},
		{
			key: 'pre-funding-rule-plus-{ccy}',
			values: [],
		},
		{
			key: 'bank-enum',
			values: [],
		},
	],
	policies: [
	]
},
{
	type: 'cross-currency-bulk-settlement',
	items: [
		{
			key: 'bulk-pre-funding-enabled',
			values: ['true']
		},
		{
			key: 'cross-currency-settlement',
			values: ['true']
		},
		{
			key: 'cross-currency-settlement-source-account-id',
			values: [],
		},
		{
			key: 'cross-currency-settlement-target-account-id',
			values: [],
		},
		{
			key: 'trusted-bulk-settlement-allowed-amount-variation-percentage',
			values: [],
		},
		{
			key: 'poo-bic',
			values: [],
		},
	],
	policies: [
	]
},
{
	type: 'bulk-settlement-without-collaternal',
	items: [
		{
			key: 'bulk-pre-funding-enabled',
			values: ['true']
		},
		{
			key: 'preferred-funding-type',
			values: ['TRUSTED_PRE_FUND_BULK'],
		},
		{
			key: 'bank-enum',
			values: [],
		},
	],
	policies: [
	]
},
{
	type: 'fund-from-balance',
	items: [
	],
	policies: [
		"borderlessAccounts:getBalances",
		"groups:borderlessAccounts:getBalances",
		"transfers:fund",
	]
},
{
	type: 'push',
	items: [
	],
	policies: [
	]
},
{
	type: 'pull',
	items: [
		{
			key: 'reserve-balance-for-northam-dd-chargeback',
			values: ['true']
		},
		{
			key: 'ach-risk-delay-type', //Defines a delay after which a payin is confirmed. INSTANT, T0, T1, NSF_SAFE
			values: [],
		},
		{
			key: 'skip-direct-debit-checks', //	Allow to skip direct debit checks like limits and fraud prediction
			values: ['true'],
		},
		{
			key: 'can-skip-direct-debit-account-verification', //Allow to skip direct debit account verification
			values: ['true']
		},
		{
			key: 'settlement-ach-account-id',
			values: [],
		},
		{
			key: 'prioritise-refund-recipient',
			values: ['false'],
		},
		{
			key: 'reserve-balance-for-northam-dd-chargeback', //Reserve balance when a chargeback occurs for CAD/USD direct debit. #northam-dev can help if needed.
			values: ['false'],
		},
	],
	policies: [
		"directDebitAccount:create",
		"directDebitAccounts:list",
		"transfers:fund",
	]
},
{
	type: 'cards-spend',
	items: [
	],
	policies: [
		"cardsAPI:getCards",
		"cardsAPI:getCardOrder",
		"cardsAPI:orderCard",
		"cardsAPI:getAvailability",
		"cardsAPI:manageSpendingLimits",
		"cardsAPI:viewSpendingLimits",
		"cardsAPI:getTransactions",
		"cardsAPI:manageControls",
		"cardsAPI:createDispute",
	]
},
{
	type: 'transfer-by-transfer-refund',
	items: [
	],
	policies: [
	]
},
{
	type: 'net-settlement-refund',
	items: [
		{
			key: 'webhook-refunds-{currency}',
			values: ['true']
		},
		{
			key: 'webhook-refunds-[currency]-uri', 
			values: [],
		},
		{
			key: 'webhook-refunds-[currency]-recipient-id',
			values: [],
		},
	],
	policies: []
},
]