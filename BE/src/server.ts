import { app } from '.'
const port = parseInt(process.env.PORT) || 3030

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
