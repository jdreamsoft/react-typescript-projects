1. Prisma Setting
$ git clone https://github.com/prisma/prisma-examples.git
・Move typescript/graphql-auth to project folder
・Change folder name to server

$ cd server
$ npm run dev
・let's go browser open http://localhost:4000

2. Twitter Project Create
$ yarn create react-app web --template typescript
or
$ npx create-react-app web --template typescript



3. Connect Prisma to a Postgresql
・Install postgresql
https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/

・Download and install postgresql-12.10-2-windows-x64.exe and create Postgre Database with name Twitter_Clone

・Setting Postgresql in prisma
https://www.prisma.io/docs/concepts/database-connectors/postgresql

① server/prisma/.env
DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/twitter-clone"

② server/prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

③ Generate prisma module and db migration deploy
https://www.prisma.io/docs/concepts/components/prisma-migrate

$ cd server && npx prisma generate
$ npx prisma migrate dev
- with first name is equal to "first"
- db is now in sync with schema
 

4. Connect React Apollo To Prisma Backendss
https://www.apollographql.com/docs/react/get-started
$ cd web
$ yarn add @apollo/client graphql

React version 18 -> updated package.json
https://githubhot.com/repo/apollographql/apollo-client/issues/9581

※ React snippets
ES7+ React/Redux/React-Native snippets

5. react-router-dom install
```sh
yarn add react-router-dom
```
※ Switch' is not exported from 'react-router-dom'
https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom
