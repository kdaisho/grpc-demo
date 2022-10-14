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

| Task                                                                                                                                  | Status      | Repository                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Putting server and client in separate repos while keeping the same functionalities                                                    | Done        | [grpc-demo-v2-server](https://github.com/kdaisho/grpc-demo-v2-server), [grpc-demo-v2-client](https://github.com/kdaisho/grpc-demo-v2-client) |
| Running server.js in `deno` by either using gRPC packages for deno (they seem immature though), or using npm packages with `jspm` CDN | In progress | N/A                                                                                                                                          |
| Running server.ts in `deno`                                                                                                           | To do       | N/A                                                                                                                                          |
