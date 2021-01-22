import { wrapVercelHandler } from '@recap.dev/client'
import fetch from 'node-fetch'

module.exports = wrapVercelHandler(async (req, res) => {
  const response = await fetch('https://cat-fact.herokuapp.com/facts')
  const json = await response.json()

  res.status(200).send(json)
}, process.env.VERCEL_ENV + '/api/[id]')
