"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceGuruApi = void 0;
class ResourceGuruApi {
    constructor() {
        this.name = 'ResourceGuruApi';
        this.displayName = 'Resource Guru API';
        this.documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                header: {
                    'Authorization': 'Bearer ={{$credentials.apiKey}}'
                }
            },
        };
    }
}
exports.ResourceGuruApi = ResourceGuruApi;
//# sourceMappingURL=ResourceGuruApi.credentials.js.map