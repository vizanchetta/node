// All of our work, in some shape or form will revolve around server setup. 

const http = require('http')

const server = http.createServer((req, res) => {
if (req.url === '/') {
  res.end('Welcome to our home page');
}
if (req.url === '/about') {
  res.end("Pagina de about!")
}

res.end(`
  <h1> Ooops! </h1>
  <p> We can't seem to find the page you're looking for.</p>
  <a href="/"> back home </a> `)
})

server.listen(5000);