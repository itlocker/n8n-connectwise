import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class ResourceGuruApi implements ICredentialType {
	name = 'ResourceGuruApi';

	displayName = 'Resource Guru API';

	extends = ['oAuth2Api'];

	documentationUrl = 'httpRequest';

	properties: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://api.resourceguruapp.com/oauth/authorize',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://api.resourceguruapp.com/oauth/token',
			required: true,
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			displayOptions: {
				show: {
					grantType: ['authorizationCode', 'pkce'],
				},
			},
			default: '',
			description:
				'For some services additional query parameters have to be set which can be defined here',
			placeholder: 'access_type=offline',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'header',
		},
		{
			displayName: 'Ignore SSL Issues',
			name: 'ignoreSSLIssues',
			type: 'boolean',
			default: true,
		},
	];
}
