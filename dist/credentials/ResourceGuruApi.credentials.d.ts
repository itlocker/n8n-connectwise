import type { ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class ResourceGuruApi implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    genericAuth: boolean;
    properties: INodeProperties[];
}
