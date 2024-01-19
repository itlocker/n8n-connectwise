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
                baseURL: '={{"https://"+$credentials.test+"myconnectwise.net"}}',
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