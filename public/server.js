let express = require('express'),
    app = express();

app.get('/api/test', (req, res) => {
    res.json({ name: 'hahaha' })
})

app.listen(8000);