import { FleekSdk, PersonalAccessTokenService } from "@fleek-platform/sdk";
import dotenv from "dotenv";
dotenv.config();

const pat = process.env.PAT || "";
const project_id = process.env.PROJECT_ID || "";

const patService = new PersonalAccessTokenService({
  personalAccessToken: pat,
  projectId: project_id,
});

const fleekSdk = new FleekSdk({ accessTokenService: patService });

/**
 * @param {string} filename
 * @param {Buffer} content
 */
export async function uploadFileToIPFS(filename: string, content: Buffer) {
  const result = await fleekSdk.ipfs().add({
    path: filename,
    content: content,
  });
  return result;
}

// "Make a function" ==> "Call this async function in my FF" ==> "Bundle Fleek Function" ==> "Convert function to WASM" ==> "Deploy with SGX"
