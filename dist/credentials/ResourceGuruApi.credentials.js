"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceGuruApi = void 0;
class ResourceGuruApi {
    constructor() {
        this.name = 'ResourceGuruApi';
        this.displayName = 'Resource Guru API';
        this.documentationUrl = 'httpRequest';
        this.genericAuth = true;
        this.properties = [
            {
                displayName: 'Grant Type',
                name: 'grantType',
                type: 'options',
                options: [
                    {
                        name: 'Authorization Code',
                        value: 'authorizationCode',
                    },
                    {
                        name: 'Client Credentials',
                        value: 'clientCredentials',
                    },
                    {
                        name: 'PKCE',
                        value: 'pkce',
                    },
                ],
                default: 'authorizationCode',
            },
            {
                displayName: 'Authorization URL',
                name: 'authUrl',
                type: 'string',
                displayOptions: {
                    show: {
                        grantType: ['authorizationCode', 'pkce'],
                    },
                },
                default: '',
                required: true,
            },
            {
                displayName: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'string',
                default: '',
                required: true,
            },
            {
                displayName: 'Client ID',
                name: 'clientId',
                type: 'string',
                default: '',
                required: true,
            },
            {
                displayName: 'Client Secret',
                name: 'clientSecret',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                required: true,
            },
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Auth URI Query Parameters',
                name: 'authQueryParameters',
                type: 'string',
                displayOptions: {
                    show: {
                        grantType: ['authorizationCode', 'pkce'],
                    },
                },
                default: '',
                description: 'For some services additional query parameters have to be set which can be defined here',
                placeholder: 'access_type=offline',
            },
            {
                displayName: 'Authentication',
                name: 'authentication',
                type: 'options',
                options: [
                    {
                        name: 'Body',
                        value: 'body',
                        description: 'Send credentials in body',
                    },
                    {
                        name: 'Header',
                        value: 'header',
                        description: 'Send credentials as Basic Auth header',
                    },
                ],
                default: 'header',
            },
            {
                displayName: 'Ignore SSL Issues',
                name: 'ignoreSSLIssues',
                type: 'boolean',
                default: false,
            },
        ];
    }
}
exports.ResourceGuruApi = ResourceGuruApi;
//# sourceMappingURL=ResourceGuruApi.credentials.js.map