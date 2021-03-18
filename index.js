const express = require('express');
const app = express();
const port = 3000;
var path = require('path')
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
    res.sendFile('/views/index.html', { root: __dirname});
});

app.get('/about.html', (req, res) => {
    res.sendFile('/views/about.html', { root: __dirname });
});


app.listen(port, () => console.log(`listening on port ${port}!`))