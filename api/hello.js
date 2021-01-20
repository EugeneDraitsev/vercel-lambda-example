import { traceExpress, tracer, captureConsoleLogs } from '@recap.dev/client'

captureConsoleLogs()

module.exports = (req, res) => {
  tracer.setUnitName('dev-hello-function')
  let who = 'anonymous'

  if (req.body && req.body.who) {
    who = req.body.who
  } else if (req.query.who) {
    who = req.query.who
  } else if (req.cookies.who) {
    who = req.cookies.who
  }

  res.status(200).send(`Hello ${who}!`)
}
