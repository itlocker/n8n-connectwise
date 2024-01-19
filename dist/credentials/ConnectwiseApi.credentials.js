"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectwiseApi = void 0;
class ConnectwiseApi {
    constructor() {
        this.name = 'ConnectwiseApi';
        this.displayName = 'Connectwise API';
        this.documentationUrl = 'httpRequest';
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
                displayName: 'Datacentre',
                name: 'datacentre',
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
                description: 'Datacentre',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    authorization: '={{"Basic " + $credentials.apiKey}}',
                    clientid: '={{$credentials.clientId}}',
                    'Pagination-Type': 'Forward-Only',
                },
            },
        };
        this.test = {
            request: {
                url: '=https://{{$credentials.datacentre}}myconnectwise.net/v4_6_release/apis/3.0/company/companies',
            },
        };
    }
}
exports.ConnectwiseApi = ConnectwiseApi;
//# sourceMappingURL=ConnectwiseApi.credentials.js.map