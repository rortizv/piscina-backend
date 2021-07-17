const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


// app.get('/reservas/:id_reserva', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

require('./db');

app.use('/api', apiRouter);

app.listen(process.env.PORT, () => {
    console.log('Server running');
});