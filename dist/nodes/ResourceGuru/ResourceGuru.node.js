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
                baseURL: 'https://api.resourceguruapp.com/v1/={{$credentials.accountId}}',
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
                            name: 'Get All Projects',
                            value: 'getAllProjects',
                        },
                    ],
                    default: 'getAllProjects',
                },
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
                                    url: '/projects',
                                },
                            },
                        },
                    ],
                    default: 'get',
                },
            ]
        };
    }
}
exports.ResourceGuru = ResourceGuru;
//# sourceMappingURL=ResourceGuru.node.js.map