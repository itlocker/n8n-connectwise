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
                baseURL: '={{"https://"+$credentials.datacentre+"myconnectwise.net"}}',
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
                            name: 'My Company',
                            value: 'myCompany',
                        },
                        {
                            name: 'Companies',
                            value: 'companies',
                        },
                    ],
                    default: 'myCompany',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: false,
                    displayOptions: {
                        show: {
                            resource: ['myCompany'],
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
                                    url: '/v4_6_release/apis/3.0/company/companies',
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
            ],
        };
    }
}
exports.Connectwise = Connectwise;
//# sourceMappingURL=Connectwise.node.js.map