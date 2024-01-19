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
			baseURL: '={{"https://"+$credentials.datacentre.value+$credentials.domain',
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
						name: 'My Company',
						value: 'myCompany',
					},
				],
				default: 'myCompany',
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
						resource: ['myComapny'],
					},
				},
				options: [
					{
						name: 'Get Info',
						value: 'getInfo',
						action: 'get company information',
						description: 'Get company information',
						routing: {
							request: {
								method: 'GET',
								url: '={{ "/login/companyinfo/" + $credentials.companyName }}',
							},
						},
					},
				],
				default: 'get',
			},

			// Optional/additional fields will go here
			{
				displayName: 'Project ID',
				name: 'projectId',
				type: 'string',
				required: true,
				placeholder: 'Project ID',
				displayOptions: {
					show: {
						resource: ['projects'],
						operation: ['archive', 'unarchive'],
					},
				},
				default: '',
			},
		],
	};
}
