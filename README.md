# React template app

## Run

Installing Dependencies

```bash
npm install
```

Run dev server

```bash
npm run dev
```

Run tests

```bash
npm run test
```

Run Storybook

```bash
npm run storybook
```

### Docker

Build production

```bash
docker build -t react-template-app .
```

Run production

```bash
docker run --rm -it -p 8080:80 react-template-app
```

### Docker compose

Run production

```bash
docker-compose up -d --build react-template-app
```
