const express = require("express");
const app = express();
const port = 3000;

app.get("/",(rep,res) =>{
    // 文字列の返却
    res.send('Hello World!');
    console.log('access');
});

app.listen(port, () => {
    console.log('listening at http://localhost:' + port);
});