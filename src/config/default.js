import path from 'path'
import dotenv from 'dotenv'

// load config env
let root = path.normalize(`${__dirname}/../..`)
const fileName =
  process.env.NODE_ENV === 'production'
    ? '/config-production.env'
    : '/config.env'
const configFile = `${root}${fileName}`
dotenv.config({path: configFile, silent: true})

export default {
  env: process.env.NODE_ENV || 'development',
  debug: process.env.NODE_ENV !== 'production',
  app: {
    name: process.env.APP_NAME || 'OpenSigner Bridge Server',
    host: process.env.HOST || 'localhost',
    port: parseInt(process.env.PORT || 3000, 10)
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379/0',
    prefix: process.env.REDIS_PREFIX || 'wc-bridge'
  },
  fcm: {
    url: process.env.FCM_URL || 'https://fcm.googleapis.com/fcm/send',
    apiKey: process.env.FCM_API_KEY || ''
  }
}
