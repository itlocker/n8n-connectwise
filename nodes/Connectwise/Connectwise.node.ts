import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Connectwise implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'Connectwise',
		name: 'Connectwise',
		icon: 'file:connectwise.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get and Set information in Connectwise',
		defaults: {
			name: 'Connectwise',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'ConnectwiseApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{"https://"+$credentials.datacentre+"myconnectwise.net/v4_6_release/apis/3.0"}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		//
		properties: [
			// Resources and operations will go here
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Companies',
						value: 'companies',
					},
				],
				default: 'companies',
			},
			// Operations will go here
			// Projects
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: false,
				displayOptions: {
					show: {
						resource: ['companies'],
					},
				},
				options: [
					{
						name: 'Get All Companies',
						value: 'getAllCompanies',
						action: 'get all companies',
						description: 'Get all companies',
						routing: {
							request: {
								method: 'GET',
								url: '/company/companies',
							},
						},
					},
				],
				default: 'getAllCompanies',
			},

			// Optional/additional fields will go here
			{
				displayName: 'Conditions',
				name: 'conditions',
				type: 'string',
				required: false,
				placeholder: '',
				displayOptions: {
					show: {
						resource: ['companies'],
						operation: ['getAllCompanies'],
					},
				},
				routing: {
					request: {
						// You've already set up the URL. qs appends the value of the field as a query string
						qs: {
							conditions: '={{ $value }}',
						},
					},
				},
				default: '',
			},
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				required: false,
				placeholder: '',
				displayOptions: {
					show: {
						resource: ['companies'],
						operation: ['getAllCompanies'],
					},
				},
				routing: {
					request: {
						// You've already set up the URL. qs appends the value of the field as a query string
						qs: {
							fields: '={{ $value }}',
						},
					},
				},
				default: '',
			},
			{
				displayName: 'Page Id',
				name: 'pageId',
				type: 'number',
				required: false,
				placeholder: '',
				displayOptions: {
					show: {
						resource: ['companies'],
						operation: ['getAllCompanies'],
					},
				},
				routing: {
					request: {
						// You've already set up the URL. qs appends the value of the field as a query string
						qs: {
							pageId: '={{ $value }}',
						},
					},
				},
				default: '0',
			},
			{
				displayName: 'Page Size',
				name: 'pageSize',
				type: 'number',
				required: false,
				placeholder: '',
				displayOptions: {
					show: {
						resource: ['companies'],
						operation: ['getAllCompanies'],
					},
				},
				routing: {
					request: {
						// You've already set up the URL. qs appends the value of the field as a query string
						qs: {
							pageSize: '={{ $value }}',
						},
					},
				},
				default: '1000',
			},
		],
	};
}
