import express from 'express'
import cors from "cors";
import axios from 'axios'

const app = express()
app.use(cors());

const PORT = 4000

app.get('/', async (req, res) => {
  const {data} = await axios.get('https://uh9mp9f92g.execute-api.us-east-1.amazonaws.com/production/test-get-listings', {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
            })
            
  res.send(data.results)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})