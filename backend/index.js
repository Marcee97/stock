import express from "express";
import cors from "cors";
import router from "./routes/router.routes.js";


console.log("iniciando servivdor")
const app = express()


app.use(cors())
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
    res.send('messi sdd')
})


app.listen(3000, () => {
    console.log('http://localhost:3000/')
})
