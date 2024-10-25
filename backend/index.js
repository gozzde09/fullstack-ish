const express = require("express"),
  path = require("path");
const app = express();

app.get("/api", (_request, response) => {
  response.send({ hello: "World" });
});
// app.get("/api/:id", (_request, response) => {
//   response.send({ test: "school" });
// });

app.use(express.static(path.join(path.resolve(), "dist")));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}`);
});

const dotenv = require("dotenv"),
  { Client } = require("pg");

dotenv.config();
const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();
app.get("/api/cities", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM cities WHERE name = $1", [
    "Stockholm",
  ]);
  // const { rowsP } = await client.query(
  //   "SELECT * FROM cities WHERE population > $1"
  // );
  response.send(rows);
  console.log(rows);
});
