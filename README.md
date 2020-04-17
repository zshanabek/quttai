# Introduction

URL shortener. Tech stack: nodejs, express, mongodb, mongoose

## Backend installation

1. Clone repository

```bash
git clone https://github.com/zshanabek/quttai
cd quttai
```

2. Install dependencies

```bash
npm install
```

3. Create the environment variables file. Here I pasted connection url to my remote database, but you can past your database's url. Create a remote mongodb database [here](https://www.mlab.com)

```bash
echo "BASE_URL='http://localhost:5000" >> .env
echo "PORT=5000" >> .env
echo "MONGODB_URL='mongodb://zshanabek:132312qQ@ds241647.mlab.com:41647/nodejs-url-shortener" >> .env
```

4. Install HTTPie. It is a command line HTTP client

```bash
apt-get install httpie
```

5. Run server

```bash
npm start
```

6. Shorten long url

```bash
http post localhost:5000/api/items url=https://twitter.com/theshanabek/status/1180694065014349825
```

7. Expect short url in response and then past it somewhere

```json
{
    "success": true,
    "url": "http://localhost:5000/api/items/HJY15wCXe"
}
```

## Frontend installation

TODO
