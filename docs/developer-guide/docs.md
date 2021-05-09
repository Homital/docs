# Docs

[GitHub](https://github.com/Homital/Homital.github.io)

Homital.github.io holds this documentation. It is developed with [VuePress](https://vuepress.vuejs.org/).

## Project Structure

```homital
.
├── docs
│   ├── .vuepress
│   │   └── config.js (VuePress configurations)
│   ├── guide
│   │   ├── assets (Holds static files like images)
│   │   │   └── ...
│   │   │ 
│   │   ├── developer-guide
│   │   │   └── README.md (Developer guide page source)
│   │   ├── user-guide
│   │   │   └── README.md (User guide page source)
│   │   ├── assets
│   │   └── README.md
│   │ 
│   └── README.md (Home page source)
│ 
│── .gitignore
│── .gitpod.yml
│── .travis.yml
│── package.json
│── README.md
└── yarn.lock
```

## Setup

### Local Setup

1. Install Node.js and yarn (`npm install -g yarn`)
2. Clone the repository: `git clone https://github.com/Homital/Homital.github.io.git`
3. Install dependencies: `yarn install`
4. Start a development server: `yarn docs:dev`

### Cloud Setup

It is very straight forward to edit the documentations with [Gitpod](https://gitpod.io/). Click on the following badge will open a Gitpod session, which automatically installs all dependencies and start up a development server for preview. The development server theoretically supports hot-reloading, but whether it works or not depends entirely on your luck at the time being :<

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Homital/Homital.github.io)

## Deployment

The npm script `docs:build` is used here for generating static site. Run it with `yarn docs:build` and the static files will be generated in `docs/.vuepress/dist`.

## Continuous Integration

This project uses Travis for CI. Each push to GitHub `docs` branch will trigger a build which push generated static webpage to the `master` branch. The master branch is served on GitHub Pages at [https://homital.github.io/](https://homital.github.io/).

To configure the CI process, edit `.travis.yml` file.
