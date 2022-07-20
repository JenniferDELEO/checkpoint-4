const app = require("./app");
const connection = require("./db-config");

const port = process.env.PORT || 3001;
app.set("port", port);

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log(
      "connected to database with threadId :  " + connection.threadId
    );
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
