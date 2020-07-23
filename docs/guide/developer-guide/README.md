# Developer Guide

Here is the overall architecture of the Homital Project (some components are to be implemented in the future):

::: danger
Cross out non-existent parts
:::

![Architecture](../assets/architecture_diagram.png)

Currently, the Homital Project is made up of 5 main components:

- Homital-Core
  - The server-side application
- Homital-App
  - The cross-platform client app
- Homital-Lamp
  - A smart lamp
- Homital-USB-Adapter
  - A smart USB adapter
- Homital.github.io
  - This documentation

All of these components will be discussed in separate sections below.

## Homital-Core

[GitHub](https://github.com/Homital/Homital-Core)

Homital-Core is the backend of the Homital system.

### Architecture

::: danger
Emm of course this diagram will soon be updated
:::

![Backend](../assets/backend_diagram.png)

### Local Setup

Follow the steps below to set up the project on a Ubuntu server.

1. Open a shell session (maybe through SSH)
2. Make sure the following pre-requisites are installed:
  - Python 3
  - Node.js
3. Clone the repository: `git clone https://github.com/Homital/Homital-Core.git`
4. Inside the cloned folder, run `npm install` to install Node.js dependencies
3. Create a file `.env` under the root directory of the repository and add the following entries, each on a new line, following by `=<ITS_VALUE>`
  - `ACCESS_TOKEN_SECRET`
  - `REFRESH_TOKEN_SECRET`
  - `HOMITALDB_CONNECTIONSTRING`
  - `HTTPS_KEY`
  - `HTTPSCERT`
  - `NOREPLY_EMAIL_HOST`
  - `NOREPLY_EMAIL_PORT`
  - `NOREPLY_EMAIL_ADDR`
  - `NOREPLY_EMAIL_PASS`
4. To automatically pull the latest commits from GitHub, clone this repository: `git clone https://github.com/Homital/WebHook.git`
5. Open `config.py` and edit the `GIT_REPO_PATH` value so that it matches the path of the `Homital-Core` repository we just cloned
6. Install `screen`: `sudo apt update&&sudo apt install screen`
7. Start the python script `autoPull.py` in a new screen session: `screen -S webhook -dm bash -c "python <path_to_autoPull.py>"`

Watch it in a recording:

::: danger
missing `npm install`
:::

[![asciicast](https://asciinema.org/a/349158.svg)](https://asciinema.org/a/349158)

### Cloud Setup

It is possible to develop Homital-Core in the cloud using [Gitpod](https://gitpod.io/) as long as you have a stable connection.

Click on the following badge to open Homital-Core in Gitpod: [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Homital/Homital-Core)

When Gitpod opens the repository, it will automatically install Node.js dependencies, so there is no need to do `npm install`. However, you still need to create and edit the `.env` file. as seen in the last section (step3).

## Homital-App

[GitHub](https://github.com/Homital/Homital-App)

## Homital-Lamp

[GitHub](https://github.com/)

## Homital-USB-Adapter

[GitHub](https://github.com/)

## Homital.github.io

[GitHub](https://github.com/Homital/Homital.github.io)

Homital.github.io holds this documentation. It is developed with [VuePress](https://vuepress.vuejs.org/).

### Local Setup

1. Install Node.js and yarn (`npm install -g yarn`)
2. Clone the repository: `git clone https://github.com/Homital/Homital.github.io.git`
3. Install dependencies: `yarn install`
4. Start a development server: `yarn docs:dev`

### Cloud Setup

It is very straight forward to edit the documentations with [Gitpod](https://gitpod.io/). Click on the following badge will open a Gitpod session, which automatically installs all dependencies and start up a development server for preview. The development server theoretically supports hot-reloading, but whether it works or not depends entirely on your luck at the time being :<

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Homital/Homital.github.io)

## Design

### Architecture

### Backend

![Backend](../assets/backend_diagram.png)

### Mobile App

### Smart Device

![Smart Device](../assets/smart_device.png)

## Setting up

## Implementation

## Documentation

Vuepress intro, gitpod setup

## Testing

## Dev Ops

## Appendix A: Product Scope

## Appendix B: User Stories

<style>
img
{
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
img:hover
{
  -moz-transform: scale(1.05);
  -webkit-transform: scale(1.05);
  -o-transform: scale(1.05);
  transform: scale(1.05);
}
</style>