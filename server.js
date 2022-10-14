const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const port = 5555;
const server = new grpc.Server();
server.bindAsync(
  `0.0.0.0:${port}`,
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log(`Server running at ${port}`);
    server.start();
  }
);
server.addService(todoPackage.Todo.service, {
  createTodo,
  readTodos,
  readTodosStream,
});

const todos = [];
function createTodo(call, callback) {
  const todoItem = {
    id: todos.length + 1,
    text: call.request.text,
  };
  todos.push(todoItem);
  callback(null, todoItem);
}

function readTodos(call, callback) {
  callback(null, { items: todos });
}

function readTodosStream(call, callback) {
  todos.forEach((todo) => call.write(todo));
  call.end();
}
