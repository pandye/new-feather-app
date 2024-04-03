import { hooks } from "@feathersjs/hooks"

class EchoService {

  async create(data, params) {

    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)))
    }

    return data
  }
}

// Register hooks that run on all service methods
hooks(EchoService.prototype, [])

// Register service method specific hooks
hooks(EchoService, {
  create: []
})

// A configure function that registers the service via `app.configure`
export function echos (app) {
  app.use("echo", new EchoService())
}
