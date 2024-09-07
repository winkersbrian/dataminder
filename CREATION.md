# CREATION

The steps used to create this project.

## Install Docker

I used [directions on installing Docker on Ubuntu 24](https://linuxiac.com/how-to-install-docker-on-ubuntu-24-04-lts/)

## Initialize Project

This ensures you cam immediately start committing to an upstream.

Options: 

1. Use one of the free Git providers. 
2. Self-host a shared git repo on your teams local machines.

This project uses GitHub.

## Install Node LTS

```sh
 curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

```sh
source ~/.bashrc
```

```sh
nvm install --lts
```

## Install pnpm

```sh
corepack enable
corepack prepare pnpm@latest --activate
```

## Initialize the root NPM Project

```sh
pnpm init
```

## Define JavaScript environment

```sh
npm pkg set engines.node=">=20.17.0"  // the current LTS version
npm pkg set type="module"
```

## Don't commit everything to the repo

```sh
echo -e "node_modules" > .gitignore
```

## Maintain consistency

### Code Formattting

Use Prettier

```sh
pnpm add -D prettier
echo '{\n  "singleQuote": true\n}' > .prettierrc.json
echo -e "coverage\npublic\ndist\npnpm-lock.yaml\npnpm-workspace. yaml" > .prettierignore
```

## Create Project Documentation

Create VitePress projects in `/docs/`.

```sh
pnpm add -D vitepress
```




