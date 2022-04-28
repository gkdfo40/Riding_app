import express from 'express'
import connect from './utils/connect'
import routes from './routes'
import config from 'config'

const app = express()
const port = config.get<number>('port')
app.use(express.json())
app.listen(port, async () => {
  console.log(`App is runnning at http://localhost:${port}`)
  await connect()
  routes(app)
})