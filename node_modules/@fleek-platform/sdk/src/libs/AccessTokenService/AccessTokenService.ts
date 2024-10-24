export abstract class AccessTokenService {
  abstract getAccessToken: () => Promise<string>;
}
