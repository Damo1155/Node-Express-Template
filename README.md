# Project Purpose

A lightweight template for setting up the essentials when working with NodeJS in an [Express](https://www.npmjs.com/package/express) and Typescript environment.

# Useage

Under Construction

# Installation Details

- Fork this project into a new repository (NPX templating features will be added in the future)
- Adjust the following `package.json` fields in the new repository
    - `name`
    - `description`
    - `license`
    - `repository`
    - `author`
- Install all the packages using NPM or YARN
- Run the application from the new directory using NPM or YARN
    - `yarn yarn:start`
    - `npm run npm:start`
    - Feel free to rename/remove these where appropriate
- Make a test call to the `default` and `test` API to ensure the calls are working

# Future Improvements

- Tooling like DependaBot/Renovate to keep packages up to date.
- Swap to consume as an NPX/YARN template
    - [bonsaiilabs - Create NPX Starter Command](https://bonsaiilabs.com/create-npx-starter-command/)
    - [Peter Mekhaeil - Build an NPX Starter Template](https://petermekhaeil.com/how-to-build-an-npx-starter-template/)
- Integrate Nodemon for development environments.
- Remove ability to allow relative paths, ensure only absolute paths are used.
- Integrate Process ENV Constants so configuration can be managed by deployment pipelines.
- Lockdown core branches so accidental pushes cannot be committed back to this repository.
