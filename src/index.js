// const http = require("http");
// const PORT =8000;

// const server = http.createServer(async (req, res) => {
//     if (req.url === "/api" && req.method === "GET"){
//         console.log("test")
//         res.writeHead(200, {"Content-Type": "application/json"})

//         res.write(
//             JSON.stringify({
//                 message: "Hi There, This is vanilla node.js API", 
//                 data:{
//                     email:"test@gmail.com", 
//                     username: "test",
//                 },
//             })
//         );
//         res.end();
//     } else {
//         res.writeHead(404, {"Content-Type": "application/json"})
//         res.end(JSON.stringify, {message: "Route not found"})
//     }

// });

// server.listen(PORT, () => {
//     console.log(`server started on port ${PORT}`);
// });


//express JS, atas basic http
const express = require("express");

// path initialize
const path =require("path");
require("dotenv").config({path: path.resolve(__dirname, "../env"),});

//port initialize
const PORT = process.env.PORT || 8000;

// variable app apply express
const app = express();

// app method want respond  to get from /api
// respond with sending "ini Express JS API" when get request from route /api
// app.get ("/api", (req,res) => {
//     res.send("Ini Express JS API")
// })

// respond with sending "ini Express JS API" when get request from route /api
app.get ("/api", function (req,res){
    res.send("Ini Express JS API")
})

app.get ("/greetings", (req,res) => {
    res.send("Halo !")
})
app.post ("/", (req,res) => {
    res.send("Home")
})


//listen when running
app.listen(PORT, () => {
    console.log(__dirname)
    console.log(`server started on port ${PORT}`);
});