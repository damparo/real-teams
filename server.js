const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();



app.listen(
    PORT,
    () => {
        console.log(`it's working! hello! on http://localhost:${PORT}`)
    }
);