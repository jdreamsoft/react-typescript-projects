# MERN STACK Project

## 1. Express & MongoDB Rest API

- Create Backend Project

```
npm init
mkdir backend
npm i express dotenv mongoose colors
npm i -D nodemon
npm i express-async-handler

- jwt token
npm i bcryptjs jsonwebtoken

- run same time frontend & backend
npm i -D concurrently

```

- MongoDB Atlas Install

```
https://cloud.mongodb.com/v2#/preferences/organizations
1. signin and new organizations
2. create new project
3. build a database (free option) + Create Cluster(BcCluster)
4. Create User(mu_mern)
5. Add IP and Finish.
6. Database Deployments
- BcCluster > Coollections > Add My Own Data
- Database: mearnapp, Collections: goals
7. MongoDB Connection
- Overview > Connect > Modal: Connect using MongoDB Compass copy
- Starting MongoDB Compass and connect DB
- Overview > Connect > Modal: Connect your application > Add your connection string your application code copy
- Add MongoURI in env
```

## 2. JWT Authentication

- [Jwt Token](https://jwt.io)

```
-- JWT Token --
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c


1. Header (ALGORITHM & TOKEN TYPE)
{
  "alg": "HS256",
  "typ": "JWT"
}

2. PAYLOAD:DATA
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}

3. Verify Signature
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-256-bit-secret
) secret base64 encoded

```

- [Postman-JwtToken-Test](https://dev.to/loopdelicious/using-jwt-to-authenticate-and-authorize-requests-in-postman-3a5h)

## 3. Frontend Authentication | Redux Toolkit

- Create React Project by Redux Template

```
npx create-react-app@latest frontend --template redux
npm i react-router-dom
npm i react-icons
npm i axios react-toastify
```

## 4. Redux Goals & Deploy

- VS Extension

```
ES7+ React/Redux/React-Native snippets
Shortkey: rfce
```

- package.json

```
"proxy": "http://localhost:5000",
```

- Build

```
cd frontend && npm run build
Please run this url: http://localhost:5000
```

- Heroku

```
1. Heroku Login and Install the Windows heroku cli installer
2. Go CommandPrompt and heroku login
$ cd mearn_stack
$ heroku login // via authunticate the browser
$ heroku create mernapp-bcmaster
  Creating ⬢ mernapp-bcmaster... done
  https://mernapp-bcmaster.herokuapp.com/ | https://git.heroku.com/mernapp-bcmaster.git

3. Go Heroku Dashboard and Settings the project(mernapp-bcmaster)
- Config Vars
NODE_ENV = production
JWT_SECRET = abc123
MONGO_URI = xxxxx

4. Add package.json scripts command
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"

5. mernapp-bcmaster ⇒ Deploy
```

## Reference

- [YT-Tutorial](https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&index=1)
- [Git-Code](https://github.com/bradtraversy/mern-tutorial)
- [Redux-CreateSlice](https://zenn.dev/luvmini511/articles/819d8c7fa13101)
- [Redux-UseSelector](https://qiita.com/rh_/items/f3ad6037c13b4c9f33e1)
- [Proxy-Error](https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object)
