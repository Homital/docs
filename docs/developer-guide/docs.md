# Docs

[GitHub](https://github.com/Homital/docs)

The `docs` repository holds this documentation. It is generated using [VitePress](https://vitepress.vuejs.org/).

## Project Structure

```homital
.
├── .github
│   └── workflows
│       ├── deploy.yml
│       └── lint.yml
│ 
├── docs
│   ├── .vitepress
│   │   └── config.js (VitePress configurations)
│   │ 
│   ├── assets (Holds static files like images)
│   │   └── ...
│   │ 
│   ├── developer-guide
│   │   ├── app.md
│   │   ├── core.md
│   │   ├── docs.md
│   │   ├── index.md
│   │   ├── light.md
│   │   └── usb.md
│   │ 
│   ├── user-guide
│   │   └── index.md
│   │ 
│   └── index.md (Home page source)
│ 
│── .gitignore
│── .gitpod.yml
│── .remarkrc
│── package.json
│── README.md
└── yarn.lock
```

## Setup

### Local Setup

1. Install Node.js and yarn (`npm install -g yarn`)
2. Clone the repository: `git clone https://github.com/Homital/docs.git`
3. Install dependencies: `yarn install`
4. Start a development server: `yarn dev`

### Cloud Setup

It is very straight forward to edit the documentations with [Gitpod](https://gitpod.io/). Click on the following badge will open a Gitpod session, which automatically installs all dependencies and start up a development server for preview. The development server theoretically supports hot-reloading, but whether it works or not depends entirely on your luck at the time being :<

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Homital/docs)

## Deployment

The npm script `build` is used here for generating static site. Run it with `yarn build` and the static files will be generated in `docs/.vitepress/dist`.

## Continuous Integration

This project uses GitHub Actions for CI. Each push to GitHub `docs` branch will trigger a build which push generated static webpage to the `master` branch. The master branch is served on GitHub Pages at <https://docs.homital.ml/>.

To configure the CI process, edit `.github/workflows/deploy.yml` file.
