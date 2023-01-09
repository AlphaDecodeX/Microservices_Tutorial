const express = require("express");
const app = express();

const port = 8082;
app.get("/payment-list", (req,res)=>{
    let response = {
        data: {
            item: [
                {
                    id: 1,
                    name: 'Payment-1'
                },
                {
                    id: 2,
                    name: 'Payment-2'
                }
            ]
        }
    };
    res.status(200).json(response);
});

app.get("/", (req,res)=>{
    res.send("Payment called");
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
})