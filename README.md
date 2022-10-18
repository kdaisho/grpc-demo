# gRPC Demo - Todo list

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

| Task | Status | Repository |
| ---- | ------ | ---------- |
| Putting server and client in separate repos while keeping the same functionalities | Done | [grpc-demo-v2-server](https://github.com/kdaisho/grpc-demo-v2-server), [grpc-demo-v2-client](https://github.com/kdaisho/grpc-demo-v2-client) |
| Running server.js on deno using a third-party gRPC library | Done | [grpc-demo-v3-server](https://github.com/kdaisho/grpc-demo-v3-server), [grpc-demo-v3-client](https://github.com/kdaisho/grpc-demo-v3-client) |
| Replace REST APIs with RPC for both [hello-deno](https://github.com/kdaisho/hello-deno) & [hello-svelte](https://github.com/kdaisho/hello-svelte) | To do | N/A |
