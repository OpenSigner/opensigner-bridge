# OpenSigner bridge

Bridge server for [OpenSigner](https://github.com/opensigner) protocol.

### Setup

```bash
$ git clone git@github.com:opensigner/opensigner-bridge.git
$ cd opensigner-bridge
$ npm install

# start redis
$ redis-server
```

### Development

```bash
# create config.env and change it
$ npm run dev
```

### Production

```bash
# create config-production.env and change it
$ npm run build
$ npm start
```
