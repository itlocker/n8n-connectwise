import type {
	ICredentialType,
	INodeProperties,
	IAuthenticateGeneric,
	ICredentialTestRequest,
} from 'n8n-workflow';

export class ConnectwiseApi implements ICredentialType {
	name = 'ConnectwiseApi';

	displayName = 'Connectwise API';

	documentationUrl = 'httpRequest';

	properties: INodeProperties[] = [
		{
			displayName: 'Api Key (Base64 Encoded)',
			name: 'apiKey',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Resource Location',
			name: 'resourceLocation',
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
			description: 'Resource Location',
		},
	];
	authenticate = {
		type: 'generic',
		properties: {
			// Can be body, header, or qs
			headers: {
				authorization: `={{"Basic " + $credentials.apiKey }}`,
			},
		},
	} as IAuthenticateGeneric;
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			url: '/login/companyinfo/connectwise',
		},
	};
}
