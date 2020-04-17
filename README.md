# Introduction

URL shortener. Tech stack: nodejs, express, mongodb, mongoose

## Backend installation

1. Clone repository

```bash
git clone https://github.com/zshanabek/url-shortener
cd url-shortener
```

2. Install dependencies

```bash
npm install
```

3. Create the environment variables file. Here I past connection url to my remote mongodb database, but you can past url to your own database. Create your own remote mongodb [database](https://www.mlab.com) 
```bash
echo "MONGODB_URL='mongodb://zshanabek:132312qQ@ds241647.mlab.com:41647/nodejs-url-shortener" >> .env
echo "BASE_URL='http://localhost:5000" >> .env
echo "PORT=5000 >> .env"
```

4. Install HTTPie. It is a command line HTTP client

```bash
apt-get install httpie
brew install httpie
pip install httpie
```

5. Run server

```bash
npm start
```

6. Shorten url

```bash
http post localhost:5000/api/items url=https://google.com
```

7. Expect json response

```json
{
    "success": true,
    "url": "http://localhost:5000/api/items/HJY15wCXe"
}
```

## Frontend installation

TODO
