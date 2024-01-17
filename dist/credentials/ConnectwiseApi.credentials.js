"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectwiseApi = void 0;
class ConnectwiseApi {
    constructor() {
        this.name = 'ConnectwiseApi';
        this.displayName = 'Connectwise API';
        this.documentationUrl = 'httpRequest';
        this.domain = 'myconnectwise.net';
        this.properties = [
            {
                displayName: 'API Key (Base64 Encoded)',
                name: 'apiKey',
                type: 'string',
                default: '',
                required: true,
            },
            {
                displayName: 'Company Name',
                name: 'companyName',
                type: 'string',
                default: '',
                required: true,
            },
            {
                displayName: 'Client Id',
                name: 'clientId',
                type: 'string',
                default: '',
                required: true,
            },
            {
                displayName: 'Domain',
                name: 'domain',
                type: 'string',
                default: '={{$credentials.resourceLocation}}{{$credentials.domain}}/login/companyinfo/{{ $credentials.companyName }}',
                required: true,
            },
            {
                displayName: 'Resource Location',
                name: 'resourceLocation',
                type: 'options',
                options: [
                    {
                        name: 'North America',
                        value: 'api-na.',
                    },
                    {
                        name: 'Europe',
                        value: 'api-eu.',
                    },
                ],
                default: 'api-eu.',
                description: 'Resource Location',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    authorization: '=Basic {{ $credentials.apiKey }}',
                    clientid: '={{$credentials.clientId}}',
                    'Pagination-Type': 'Forward-Only',
                },
            },
        };
        this.test = {
            request: {
                baseURL: '={{$credentials.resourceLocation}}{{$credentials.domain}}',
                url: '=/login/companyinfo/{{ $credentials.companyName }}',
            },
        };
    }
}
exports.ConnectwiseApi = ConnectwiseApi;
//# sourceMappingURL=ConnectwiseApi.credentials.js.map