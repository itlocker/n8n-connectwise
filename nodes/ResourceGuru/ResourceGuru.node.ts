import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class ResourceGuru implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'Resource Guru',
		name: 'ResourceGuru',
		icon: 'file:resourceguru.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get and Set information in Resource Guru',
		defaults: {
			name: 'Resource Guru',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'ResourceGuruApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: `={{"https://api.resourceguruapp.com/v1/" + $credentials["accountId"]}}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			qs: {
				limit: 0
			}
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
						name: 'Projects',
						value: 'projects',
					},
				],
				default: 'projects',
			},
			// Operations will go here
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [
							'projects',
						],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'projects',
						description: 'Projects',
						routing: {
							request: {
								method: 'GET',
								url: '/projects',
							},
						},
					},
					{
						name: 'Update',
						value: 'update',
						action: 'projects',
						description: 'Projects',
						routing: {
							request: {
								method: 'PUT',
								url: '={{"/projects/" + $parameter["projectId"]}}',
							},
						},
					},
				],
				default: 'get',
			},

			// Optional/additional fields will go here
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				default: {},
				placeholder: 'Add Field',
				displayOptions: {
					show: {
						resource: [
							'projects',
						],
						operation: [
							'update',
						],
					},
				},
				options: [
					{
						displayName: 'Project Id',
						name: 'projectId',
						type: 'string',
						default: '',
						required: true,
						// routing: {
						// 	request: {
						// 		// You've already set up the URL. qs appends the value of the field as a query string
						// 		qs: {
						// 			date: '={{ new Date($value).toISOString().substr(0,10) }}',
						// 		},
						// 	},
						// },
					},
				],
			}
			//
		//
		]
	};
}
