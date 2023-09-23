# Coding Languages Manager

A simple programming language manager using React JS + NextJS + TailwindCSS.

This is a project created to apply the docker concepts studied during the FIAP Pós-tech

## Language and Tools

<p align="left"> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>

## Additional Libraries

- shadcn/ui
- prisma
- zod

## Demo

![Demo](https://github.com/samirelhassann/coding-languages-manager/assets/91634008/d009514b-8bbb-4c61-a10d-08fba61b0975)

## Usage 

### Docker compose

The image from the project is on docker hub, you can find it running
```bash
docker pull samirelhassan/coding-language-manager:latest
```

To run using docker-compose-yml, create this the file and paste this code:
```yaml
version: '3'

services:
  web:
    image: samirelhassan/coding-language-manager:latest
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgresql://prisma:password@db:5432/mydb?schema=public
    networks:  
      - mynetwork

  db:
    image: postgres:13
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: prisma
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:  
      - mynetwork

volumes:
  postgres_data:

networks: 
  mynetwork:
    driver: bridge
```

Then just run
```bash
doccker compose up -d
```

### Local

1. Run the docker compose to create the postgres container
```bash
yarn install
```

2. Update the schema database
```bash
yarn prisma generate && yarn prisma migrate dev
```

3. Run the application 
```bash
yarn dev
```
