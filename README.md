# gRPC Demo: Todo list

When you run `client.js`, `createTodo` service (defined in `todo.proto`) adds a new todo while printing a list of todos.

## Dependencies

- [@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js)
- [@grpc/proto-loader](https://www.npmjs.com/package/@grpc/proto-loader)

## Steps to play

### Install dependencies

```
npm i
```

### Run the server

```
node server
```

### Add a todo

```
node client "read a book"
```

This adds a new todo while printing a list of todos.

## Next steps

Currently, server and client live in the same repository, and `server.js` is running on `node`.

So the next steps are;

- Putting them in separate repos while keeping the same functionalities
- Running server.js in `deno` (by either using gRPC packages for deno (they seem immature though), or using npm packages with `jspm` CDN)
- Running server.ts in `deno`
