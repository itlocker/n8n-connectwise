"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceGuru = void 0;
class ResourceGuru {
    constructor() {
        this.description = {
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
                    limit: 0,
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
                            name: 'Get',
                            value: 'get',
                            action: 'get all projects',
                            description: 'Get all Projects',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/projects',
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
                    placeholder: 'Project Name',
                    displayOptions: {
                        show: {
                            resource: ['projects'],
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
                    displayName: 'Notes',
                    name: 'notes',
                    type: 'string',
                    required: false,
                    placeholder: 'Project Notes',
                    displayOptions: {
                        show: {
                            resource: ['projects'],
                            operation: ['create'],
                        },
                    },
                    default: '',
                },
            ],
        };
    }
}
exports.ResourceGuru = ResourceGuru;
//# sourceMappingURL=ResourceGuru.node.js.map