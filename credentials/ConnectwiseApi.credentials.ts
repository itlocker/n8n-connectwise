import type {
	ICredentialType,
	INodeProperties,
	IAuthenticateGeneric,
	ICredentialTestRequest,
} from 'n8n-workflow';

export class ConnectwiseApi implements ICredentialType {
	name = 'connectwiseApi';

	displayName = 'Connectwise API';

	documentationUrl = 'https://github.com/itlocker/n8n-connectwise/blob/master/README.md';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key (Base64 Encoded)',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
		{
			displayName: 'Company Name',
			name: 'companyName',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Client Id',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Datacentre',
			name: 'datacentre',
			type: 'options',
			options: [
				{
					name: 'North America',
					value: 'api-na.',
				},
				{
					name: 'Europe',
					value: 'api-eu.',
				},
			],
			default: 'api-eu.', // The initially selected option
			description: 'Datacentre',
		},
	];

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				authorization: '={{"Basic " + $credentials.apiKey}}',
				clientid: '={{$credentials.clientId}}',
				'Pagination-Type': 'Forward-Only',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			url: '=https://{{$credentials.datacentre}}myconnectwise.net/v4_6_release/apis/3.0/company/companies',
		},
	};
}
