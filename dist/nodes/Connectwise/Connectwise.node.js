"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connectwise = void 0;
class Connectwise {
    constructor() {
        this.description = {
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
            properties: [
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
                        {
                            name: 'Service Ticket Notes',
                            value: 'serviceTicketNotes',
                        },
                    ],
                    default: 'companies',
                },
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
                            name: 'Get',
                            value: 'get',
                            action: 'get',
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
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: false,
                    displayOptions: {
                        show: {
                            resource: ['serviceTicketNotes'],
                        },
                    },
                    options: [
                        {
                            name: 'Get',
                            value: 'get',
                            action: 'get',
                            description: 'Get all service ticket notes',
                            routing: {
                                request: {
                                    method: 'GET',
                                },
                            },
                        },
                        {
                            name: 'Add',
                            value: 'add',
                            action: 'add',
                            description: 'Add a ticket note',
                            routing: {
                                request: {
                                    method: 'POST',
                                },
                            },
                        },
                    ],
                    default: 'get',
                },
                {
                    displayName: 'Conditions',
                    name: 'conditions',
                    type: 'string',
                    required: false,
                    placeholder: '',
                    displayOptions: {
                        show: {
                            resource: ['companies'],
                            operation: ['get'],
                        },
                    },
                    routing: {
                        request: {
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
                            operation: ['get'],
                        },
                    },
                    routing: {
                        request: {
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
                            operation: ['get'],
                        },
                    },
                    routing: {
                        request: {
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
                            operation: ['get'],
                        },
                    },
                    routing: {
                        request: {
                            qs: {
                                pageSize: '={{ $value }}',
                            },
                        },
                    },
                    default: '1000',
                },
                {
                    displayName: 'Service Ticket Id',
                    name: 'serviceTicketId',
                    type: 'number',
                    required: true,
                    placeholder: '',
                    displayOptions: {
                        show: {
                            resource: ['serviceTicketNotes'],
                            operation: ['get', 'add'],
                        },
                    },
                    routing: {
                        request: {
                            url: '=/service/tickets/{{ $value }}/notes',
                        },
                    },
                    default: '1000',
                },
                {
                    displayName: 'Internal Only',
                    name: 'internalFlag',
                    type: 'boolean',
                    description: 'Only visible for internal users',
                    displayOptions: {
                        show: {
                            resource: ['serviceTicketNotes'],
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
                    description: 'Description',
                    displayOptions: {
                        show: {
                            resource: ['serviceTicketNotes'],
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
}
exports.Connectwise = Connectwise;
//# sourceMappingURL=Connectwise.node.js.map