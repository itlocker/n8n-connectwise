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
                baseURL: `={{"https://" + $credentials.resouceLocation + "myconnectwise.net/" }}`,
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
                            name: 'Projects',
                            value: 'projects',
                        },
                        {
                            name: 'Clients',
                            value: 'clients',
                        },
                    ],
                    default: 'projects',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: false,
                    displayOptions: {
                        show: {
                            resource: ['projects'],
                        },
                    },
                    options: [
                        {
                            name: 'Get Active',
                            value: 'getActive',
                            action: 'get active projects',
                            description: 'Get Active Projects',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/projects',
                                },
                            },
                        },
                        {
                            name: 'Get Archived',
                            value: 'getArchived',
                            action: 'get archived projects',
                            description: 'Get Archived Projects',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/projects/archived',
                                },
                            },
                        },
                        {
                            name: 'Create',
                            value: 'create',
                            action: 'create a project',
                            description: 'Create a Project',
                            routing: {
                                request: {
                                    method: 'POST',
                                    url: '/projects',
                                    body: {
                                        name: '={{$parameter.name}}',
                                        project_code: '={{$parameter.projectCode}}',
                                        client_id: '={{$parameter.clientId}}',
                                        notes: '={{$parameter.notes}}',
                                    },
                                },
                            },
                        },
                        {
                            name: 'Archive',
                            value: 'archive',
                            action: 'archive a project',
                            description: 'Archive a Project',
                            routing: {
                                request: {
                                    method: 'PUT',
                                    url: '=/projects/{{$parameter.projectId}}',
                                    body: {
                                        archived: true,
                                    },
                                },
                            },
                        },
                        {
                            name: 'Unarchive',
                            value: 'unarchive',
                            action: 'unarchive a project',
                            description: 'Unarchive a Project',
                            routing: {
                                request: {
                                    method: 'PUT',
                                    url: '=/projects/{{$parameter.projectId}}',
                                    body: {
                                        archived: false,
                                    },
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
                            resource: ['clients'],
                        },
                    },
                    options: [
                        {
                            name: 'Get Active',
                            value: 'getActive',
                            action: 'get active clients',
                            description: 'Get Active Clients',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/clients',
                                },
                            },
                        },
                        {
                            name: 'Get Archived',
                            value: 'getArchived',
                            action: 'get archived clients',
                            description: 'Get Archived Clients',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/clients/archived',
                                },
                            },
                        },
                        {
                            name: 'Create',
                            value: 'create',
                            action: 'create a client',
                            description: 'Create a Client',
                            routing: {
                                request: {
                                    method: 'POST',
                                    url: '/clients',
                                    body: {
                                        name: '={{$parameter.name}}',
                                        notes: '={{$parameter.notes}}',
                                    },
                                },
                            },
                        },
                        {
                            name: 'Archive',
                            value: 'archive',
                            action: 'archive a Client',
                            description: 'Archive a Client',
                            routing: {
                                request: {
                                    method: 'PUT',
                                    url: '=/clients/{{$parameter.projectId}}',
                                    body: {
                                        archived: true,
                                    },
                                },
                            },
                        },
                        {
                            name: 'Unarchive',
                            value: 'unarchive',
                            action: 'unarchive a client',
                            description: 'Unarchive a Client',
                            routing: {
                                request: {
                                    method: 'PUT',
                                    url: '=/clients/{{$parameter.projectId}}',
                                    body: {
                                        archived: false,
                                    },
                                },
                            },
                        },
                    ],
                    default: 'get',
                },
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
                {
                    displayName: 'Name',
                    name: 'name',
                    type: 'string',
                    required: true,
                    placeholder: 'Name',
                    displayOptions: {
                        show: {
                            resource: ['projects', 'clients'],
                            operation: ['create'],
                        },
                    },
                    default: '',
                },
                {
                    displayName: 'Project Code',
                    name: 'projectCode',
                    type: 'string',
                    required: false,
                    placeholder: 'Project Code',
                    displayOptions: {
                        show: {
                            resource: ['projects'],
                            operation: ['create'],
                        },
                    },
                    default: '',
                },
                {
                    displayName: 'Client ID',
                    name: 'clientId',
                    type: 'string',
                    required: true,
                    placeholder: 'Client ID',
                    displayOptions: {
                        show: {
                            resource: ['projects'],
                            operation: ['create'],
                        },
                    },
                    default: '',
                },
                {
                    displayName: 'Client ID',
                    name: 'clientId',
                    type: 'string',
                    required: true,
                    placeholder: 'Client ID',
                    displayOptions: {
                        show: {
                            resource: ['clients'],
                            operation: ['archive', 'unarchive'],
                        },
                    },
                    default: '',
                },
                {
                    displayName: 'Notes',
                    name: 'notes',
                    type: 'string',
                    required: false,
                    placeholder: 'Notes',
                    displayOptions: {
                        show: {
                            resource: ['projects', 'clients'],
                            operation: ['create'],
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