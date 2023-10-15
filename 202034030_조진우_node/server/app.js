const express = require('express');
const app = express();
const port = 2020;

app.use(express.json());

app.get("/hi", (req, res) => {
    
    const responseData = {
      message: "세상아 안녕",
    };
    res.json(responseData);
  });


app.listen(port, () => {
  console.log(`서버시작 ${port}`);
})