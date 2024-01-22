import type { ICredentialType, INodeProperties, IAuthenticateGeneric, ICredentialTestRequest } from 'n8n-workflow';
export declare class ConnectwiseApi implements ICredentialType {
    name: string;
    displayName: string;
    icon: string;
    documentationUrl: string;
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
    test: ICredentialTestRequest;
}
