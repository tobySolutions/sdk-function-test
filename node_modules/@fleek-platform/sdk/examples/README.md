# Examples

Use the instructions to learn how to utilize the examples for @fleek-platform/sdk.

## Install

In order to run the examples, you'll have to install the dependencies. 

Use the command:

```
pnpm i
```

## Setup

Create the required tokens, used in the sdk example files. There are a few options: the [Client/Browser](#clientbrowser), [Server/NodeJs](#servernodejs) and [Fleek Functions](#fleek-functions). The NodeJs version uses `fs` and other features which's only available server-side, e.g. you don't have `fs` in browsers.

### Client/Browser

1) Access the Fleek Dashboard

2) Select a project

3) Open settings

4) Create a new Application Credential

```sh
client...xxx
```

5) Run the example file:

```sh
bun run sdk.browser.ts
```

### Server/NodeJs

Create the Personal Access Token via the @fleek-platform/cli:

1) Switch to a project

```sh
fleek projects switch
```

2) Copy the Project ID

```sh
fleek projects list
```

```sh
cm...xxx
```

3) Generate a Personal Access token

```sh
fleek pat create
```

```sh
pat...xxx
```

4) Update the file with the personal access token and project id

5) Execute

```sh
bun run sdk.node.ts
```

## Run the examples

The examples are written in Typescript. For simplicity, we use [Bun](https://bun.sh) runtime to execute them. If you much prefer, you can transpile it or use [ts-node](https://www.npmjs.com/package/ts-node).


### Browser

The `sdk.browser.ts` creates a "File" like and uploads the file to IPFS via the Fleek-Platform Storage.

```sh
bun run sdk.browser.ts
```

You should receive the following response:

```sh
{
  status: 200,
  body: "{\"pin\":{\"cid\":\"bafkreidcsutfxvgni25nv7wfky2tcu2v43fz7k6nxro56gzcljphbj62ie\",\"size\":179},\"duplicate\":true}",
  headers: {
    "content-type": "application/json",
  },
}
```

### Server

The `sdk.node.ts` get's a list of projects from the user account.

```sh
bun run sdk.node.ts
```

If you have a list of projects, the response should be similar to:

```js
[
  {
    id: "cm0dq1r4u0000y4w4t2t7o8k6",
    name: "28aug2k24-1137",
    avatar: null,
    backupStorageOnArweave: false,
    backupStorageOnFilecoin: true,
    createdAt: "2024-08-28T10:37:02.238Z",
  }, {
    id: "cm0dpiiit0009y48rd3qemo5s",
    name: "28aug2k241122",
    avatar: null,
    backupStorageOnArweave: false,
    backupStorageOnFilecoin: true,
    createdAt: "2024-08-28T10:22:04.613Z",
  },
  ...
]
```

⚠️ Warn: The example above contains a `...` omitting other items for brevity, e.g. the original response is much larger as the user account for this example contains several projects.

### Fleek Functions

1) Create a Fleek Function by:

```sh
fleek functions create --name <NAME>
```

2) Deploy a Fleek Function by its name and source file

```sh
fleek functions deploy \
  --name <NAME> \
  --path ~/some/path/my-first-function.js
```

You should receive a response similar to:

```sh
> You can call this Fleek Function by making a request to the following URL
🔗 https://<FLEEK-FUNCTION-NAME>.functions.on-fleek.app
> You can also call this Fleek Network URL directly for increased performance (please keep in mind you will not be able to deactivate this link)
🔗 https://fleek-test.network/services/1/ipfs/<CID>
```

3) Call the function via HTTP

Use the Fleek Platform gateway:

```sh
curl -X GET https://<FLEEK-FUNCTION-NAME>.functions.on-fleek.app
```

Alternatively, use the Fleek Network URL:

```sh
curl -X GET https://fleek-test.network/services/1/ipfs/<CID>
```
