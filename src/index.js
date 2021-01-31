import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const logMessage = "ES6 & Stimulus with Jekyll on Webpack";
console.log(logMessage)
const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))


