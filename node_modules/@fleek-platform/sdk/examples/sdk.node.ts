import { FleekSdk, PersonalAccessTokenService } from "@fleek-platform/sdk";

const personalAccessToken = '<PERSONAL_ACCESS_TOKEN>';
const projectId = '<PROJECT_ID>';

const accessTokenService = new PersonalAccessTokenService({
  personalAccessToken,
  projectId,
});

const fleekSdk = new FleekSdk({ accessTokenService });

(async () => {
  const res = await fleekSdk.projects().list();

  console.log(res);

  process.exit(0);
})();
