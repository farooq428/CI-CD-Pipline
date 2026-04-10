import express from "express"

const app= express();


app.use(express.json());


app.get('/', (req, res) =>{
    res.json({
        "msg" : "Hellow World",
    })
}
)

const PORT = 3000;

app.listen(PORT , () => {
    console.log(`server running on port ${PORT} `);
})