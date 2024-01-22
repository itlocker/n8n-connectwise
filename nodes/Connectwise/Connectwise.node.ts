import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Connectwise implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'Connectwise',
		name: 'connectwise',
		icon: 'file:connectwise.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get and Set information in Connectwise',
		defaults: {
			name: 'connectwise',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'connectwiseApi',
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
			// Resources
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Company',
						value: 'company',
					},
					{
						name: 'Service Ticket Note',
						value: 'serviceTicketNote',
					},
				],
				default: 'company',
			},

			// Resource Operations
			// Companies
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['company'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get',
						description: 'Get all companies',
						routing: {
							request: {
								method: 'GET',
								url: '/company/companies',
							},
						},
					},
				],
				default: 'get',
			},

			// Ticket Notes
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['serviceTicketNote'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get',
						description: 'Get all service ticket notes',
						routing: {
							request: {
								method: 'GET',
								url: '/service/tickets/',
							},
						},
					},
					{
						name: 'Add',
						value: 'add',
						action: 'Add',
						description: 'Add a ticket note',
						routing: {
							request: {
								method: 'POST',
								url: '/service/tickets/',
							},
						},
					},
				],
				default: 'get',
			},

			// Operations Optional & Additional Fields
			{
				displayName: 'Conditions',
				name: 'conditions',
				type: 'string',
				placeholder: '',
				displayOptions: {
					show: {
						resource: ['company', 'serviceTicketNote'],
						operation: ['get'],
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
				placeholder: '',
				displayOptions: {
					show: {
						resource: ['company', 'serviceTicketNote'],
						operation: ['get'],
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
				displayName: 'Page ID',
				name: 'pageId',
				type: 'number',
				placeholder: '',
				displayOptions: {
					show: {
						resource: ['company', 'serviceTicketNote'],
						operation: ['get'],
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
				default: null,
			},
			{
				displayName: 'Page Size',
				name: 'pageSize',
				type: 'number',
				placeholder: '',
				displayOptions: {
					show: {
						resource: ['company', 'serviceTicketNote'],
						operation: ['get'],
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
				default: 1000,
			},
			{
				displayName: 'Service Ticket ID',
				name: 'serviceTicketId',
				type: 'number',
				required: true,
				placeholder: '',
				displayOptions: {
					show: {
						resource: ['serviceTicketNote'],
						operation: ['get', 'add'],
					},
				},
				routing: {
					request: {
						// You've already set up the URL. qs appends the value of the field as a query string
						url: '=/service/tickets/{{ $value }}/notes',
					},
				},
				default: null,
			},
			{
				displayName: 'Internal Only',
				name: 'internalFlag',
				type: 'boolean',
				description: 'Whether it is visible only to internal users',
				displayOptions: {
					show: {
						resource: ['serviceTicketNote'],
						operation: ['add'],
					},
				},
				routing: {
					request: {
						body: {
							internalFlag: '{{ $value }}',
						},
					},
				},
				default: true,
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				required: true,
				typeOptions: {
					rows: 4,
				},
				displayOptions: {
					show: {
						resource: ['serviceTicketNote'],
						operation: ['add'],
					},
				},
				routing: {
					request: {
						body: {
							text: '{{ $value }}',
						},
					},
				},
				default: '',
			},
		],
	};
}
