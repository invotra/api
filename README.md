## Invotra API

This repository contains OpenAPI (Swagger) definitions for Invotra API.

## API Client

The API client for JavaScript is generated automatically using [OpenAPI Generator](https://openapi-generator.tech/).
A build is ran using GitHub Actions:
- test builds are generated for PRs for testing/developing with new APIs;
- production builds are generated for releases and published at GitHub Packages private NPM repository.

### Accessing private NPM registry

In order to access package builds, please configure `yarn`/`npm` to access Invotra private registry first.

_**NOTE**: These steps are same for all private NPM packages hosted at GitHub._

1. Create a new GitHub personal access token. Open [GitHub personal access tokens page](https://github.com/settings/tokens),
click `Generate a new token`, input a token name (e.g. 'my token for NPM registry') and check `read:packages`. Do not
select any other scopes. Create a token and store it in a safe place.
2. Create an `.npmrc` file in your **home directory** with following contents, replacing `YOUR_TOKEN` with an actual
token string:
```
//npm.pkg.github.com/:_authToken=YOUR_TOKEN

```

### Using test builds

The build bot adds a PR comment with a `yarn` command once build is complete.

### Using production builds

1. Create a new `.yarnrc` file in your **project directory**:
```
"@invotra:registry" "https://npm.pkg.github.com/"

```

This will tell `yarn` where to get `@invotra/*` packages.

2. Add a project dependency:

```
yarn add @invotra/api@VERSION
```

Replace `VERSION` with the actual version string, e.g. `4.48.0`. A list of versions may be found at
[GitHub Packages](https://github.com/invotra/api/packages) page.
