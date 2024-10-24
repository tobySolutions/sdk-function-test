// Browser
import { FleekSdk, ApplicationAccessTokenService } from "@fleek-platform/sdk/browser";

const accessTokenService = new ApplicationAccessTokenService({
  clientId: '<APPLICATION_CREDENTIAL>',
  origin: '<WHITELISTED_HOSTNAME>',
});

const fleekSdk = new FleekSdk({ accessTokenService });

const base64ToFile = (text: string, fileName: string) => {
  const encodedText = btoa(text);
  const binaryString = atob(encodedText);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
  }
  const blob = new Blob([bytes], {type: 'text/plain'});
  const file = new File([blob], fileName, {type: blob.type});
  return file;
}

const fileLike = base64ToFile("Hello world!! Hello world!! Hello world!! Hello world!! Hello world!! Hello world!!", "hello_world.txt");

export const main = async () => {
  try {
    const result = await fleekSdk.storage().uploadFile({
      file: fileLike,
    });

    return {
      status: 200,
      body: JSON.stringify(result),
      headers: { "content-type": "application/json" },
    };
  } catch (e) {
    console.error(e);
  }
};

const res = await main();

console.log(res);
