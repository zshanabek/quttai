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

3. Run server

```bash
npm start
```

4. Get todos

```bash
http post localhost:5000/api/items url=https://google.com
```

Expect json response:

```json
{
    "success": true,
    "url": "http://localhost:5000/api/items/HJY15wCXe"
}
```

## Frontend installation

TODO
