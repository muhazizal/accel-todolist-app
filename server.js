import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import express from 'express'

const server = express()

server.get('/ssr-example', (_req, res) => {
  const app = createSSRApp({
    data() {
      return {
        name: 'Muhamad Aziz Al-asaad'
      }
    },
    template: `
      <h1>{{ name }}</h1>
    `
  })

  renderToString(app).then((html) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Vue SSR Example</title>
        </head>
        <body>
          <div id="app">${html}</div>
        </body>
      </html>
    `)
  })
})

server.listen(3333, () => {
  console.log('Hello World')
})
