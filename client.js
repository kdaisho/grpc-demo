const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader"); // deprecated
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const text = process.argv[2];

const client = new todoPackage.Todo(
  "localhost:5555",
  grpc.credentials.createInsecure()
);

client.createTodo(
  {
    id: -1,
    text,
  },
  (err, response) => {
    console.log("[create] 🚀", response);
  }
);

client.readTodos(null, (err, response) => {
  return;
  // response.items?.forEach(({ text }) => console.log(text));
});

const call = client.readTodosStream();
call.on("data", (item) => {
  console.log("[stream] ⚡️", item);
});
call.on("end", () => console.log("server done!"));