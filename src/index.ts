import express from "express"
import { Person } from "./person";

const app = express();
const port = parseInt(process.env.PORT ?? "8080", 10)

app.get("/", (_req, res) => {
    res.send({ "status": "hello world!!!!", "foo": "bar" })
})

const person = new Person("asd", "fgh")
app.listen(port, () => {
    console.log(`Application listening in port ${port}`)
})

