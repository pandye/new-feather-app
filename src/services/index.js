import { echos } from "./echo.js"

export const services = (app) => {
  // All services will be registered here
  app.configure(echos)
}