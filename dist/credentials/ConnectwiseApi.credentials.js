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
                displayName: 'Api Key (Base64 Encoded)',
                name: 'apiKey',
                type: 'string',
                default: '',
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
                    authorization: `={{"Basic " + $credentials.apiKey }}`,
                },
            },
        };
        this.test = {
            request: {
                baseURL: '={{$credentials?.domain}}',
                url: '/login/companyinfo/connectwise',
            },
        };
    }
}
exports.ConnectwiseApi = ConnectwiseApi;
//# sourceMappingURL=ConnectwiseApi.credentials.js.map