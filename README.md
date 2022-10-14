# gRPC Demo: Todo list

This is a demo that utilizes gRPC clients for Node.js.
When `client.js` is ran, `createTodo` service is triggered then a todo gets created.

- @grpc/grpc-js
- @grpc/proto-loader

## How to run

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
