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
			baseURL: 'https://api.resourceguruapp.com',
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
						name: 'Get All Projects',
						value: 'getAllProjects',
					},
				],
				default: 'getAllProjects',
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
							'getAllProjects',
						],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get All Projects',
						description: 'Get all projects',
						routing: {
							request: {
								method: 'GET',
								url: '/v1/matrixit/projects',
							},
						},
					},
					{
						name: 'Get 2',
						value: 'get2',
						action: 'Get All Projects 2',
						description: 'Get all projects 2',
						routing: {
							request: {
								method: 'GET',
								url: 'https://api.resourceguruapp.com/v1/matrixit/projects',
							},
						},
					},
				],
				default: 'get',
			},

			// Optional/additional fields will go here
			//
		//
		]
	};
}
