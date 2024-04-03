// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
import { feathers } from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'
import { koa, rest, bodyParser, errorHandler, cors } from '@feathersjs/koa'
import { services } from './services/index.js'

const app = koa(feathers())

// Load our app configuration (see config/ folder)
app.configure(configuration())

// Set up Koa middleware
app.use(cors())
app.use(errorHandler())
app.use(bodyParser())
app.configure(rest())

app.configure(services)

export { app }
