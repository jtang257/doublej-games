const express = require('express');
const cors = require('cors');

const app = express();

app.listen(7700, (request, response) => {
    console.log('The server is ready on port 7700');

})