[Project on Heroku](https://jobify-prod-deploy.herokuapp.com/)

For launch locally:
Plese comment in 

```js
server.js
  app.use(express.static(path.resolve(__dirname, './client/build' )))

```

```js
server.js
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
  })
```

And use command 
```sh
npm start
```
It launches front-end and backend together.