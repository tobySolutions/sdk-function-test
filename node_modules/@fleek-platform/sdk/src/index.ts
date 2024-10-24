export { FleekSdk } from './FleekSdk';
export { PersonalAccessTokenService } from './libs/AccessTokenService/PersonalAccessTokenService';
export { StaticAccessTokenService } from './libs/AccessTokenService/StaticAccessTokenService';
export { ApplicationAccessTokenService } from './libs/AccessTokenService/ApplicationAccessTokenService';
// TODO: decide what to do with createClient exposure shall it be open to users?
export { createClient } from '@fleek-platform/gql-client-utils';

export type { Application } from './clients/applications';
export type { Project } from './clients/projects';
export type { IpfsFile } from './clients/ipfs';
export type { IpnsRecord } from './clients/ipns';
export type { Site, Deployment } from './clients/sites';
export type { StoragePin } from './clients/storage';
export type { EnsRecord } from './clients/ens';
export type { PrivateGateway } from './clients/privateGateway';
export type { Domain, Zone } from './clients/domains';
export type { FleekFunction } from './clients/functions';
export type {
  ApplicationWhiteLabelDomain,
  ApplicationWhitelistDomain,
  Client,
  DomainStatus,
  FleekFunctionStatus,
} from '@fleek-platform/gql-client-utils';
export type { UploadPinResponse, UploadProgress, UploadContentOptions } from './clients/uploadProxy';
