import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { faker } from "@faker-js/faker";
import { mongoose } from "mongoose";
import { School } from "./School.js";

const app = express();
const port = 3000;
const username = "biduntawiah";
const password = "K2yoX91AI3BAJAf7";
const dbConnectionString = `mongodb+srv://${username}:${password}@cluster0.nwzweny.mongodb.net/?retryWrites=true&w=majority`;

app.use(bodyParser.json());
app.use(cors());

app.post("/search", async (req, res) => {
  const schools = await School.find();
  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().startsWith(req.body.name.toLowerCase())
  );
  res.json(filteredSchools.slice(0, 6));
});

async function main() {
  await mongoose.connect(dbConnectionString);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
