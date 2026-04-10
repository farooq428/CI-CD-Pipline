import express from "express"

const app= express();


app.use(express.json());


app.get('/', (req, res) =>{
    res.json({
        "msg" : "Hellow World",
    })
}
)

app.get('/test' , (req , res) => {
    res.json(
        {
            "msg" : "Testing routes " ,
            "updates " : 'first update today '
        }
    )
})

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log(`server running on port ${PORT} `);
})