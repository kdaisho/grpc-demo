const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader"); // deprecated
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const server = new grpc.Server();
server.bind("0.0.0.0:5555", grpc.ServerCredentials.createInsecure());
server.addService(todoPackage.Todo.service, {
  createTodo,
  readTodos,
  readTodosStream,
});
server.start();

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
