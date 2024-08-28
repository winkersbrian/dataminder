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

## Initialize Project

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
