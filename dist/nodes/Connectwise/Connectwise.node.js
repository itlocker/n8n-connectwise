"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connectwise = void 0;
class Connectwise {
    constructor() {
        this.description = {
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
            properties: [
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
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['serviceTicketNotes'],
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
                    placeholder: '',
                    displayOptions: {
                        show: {
                            resource: ['company', 'serviceTicketNotes'],
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
                    placeholder: '',
                    displayOptions: {
                        show: {
                            resource: ['company', 'serviceTicketNotes'],
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
                    displayName: 'Page ID',
                    name: 'pageId',
                    type: 'number',
                    placeholder: '',
                    displayOptions: {
                        show: {
                            resource: ['company', 'serviceTicketNotes'],
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
                    default: null,
                },
                {
                    displayName: 'Page Size',
                    name: 'pageSize',
                    type: 'number',
                    placeholder: '',
                    displayOptions: {
                        show: {
                            resource: ['company', 'serviceTicketNotes'],
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
                            resource: ['serviceTicketNotes'],
                            operation: ['get', 'add'],
                        },
                    },
                    routing: {
                        request: {
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