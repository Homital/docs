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

### Architecture

::: danger
Emm of course this diagram will soon be updated
:::

![Backend](../assets/backend_diagram.png)

### Setup

Follow the steps below to set up the project on a Ubuntu server.

1. Open a shell session on the server (maybe through SSH)
2. Clone the repository: `git clone https://github.com/Homital/Homital-Core.git`
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

[![asciicast](https://asciinema.org/a/349158.svg)](https://asciinema.org/a/349158)

## Homital-App

## Homital-Lamp

## Homital-USB-Adapter

## Homital.github.io




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