const express = require('express');
const connectDb = require('./config/db.js')
const app = express();
const IndexRoute = require('./routes/Index')
const UrlRoute = require('./routes/Url')
//Connect to database
connectDb();

app.use(express.json());

app.use('/', IndexRoute )
app.use('/api/url', UrlRoute )

const PORT = '7777'
app.listen(PORT, console.log(`Server has been lunched on ${PORT}`));