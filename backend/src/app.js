import express, { json } from 'express';
import { connect } from 'mongoose';
import { nanoid as _nanoid } from 'nanoid';
import Url, { findOne } from './models/url';

const app = express();

connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(json());

app.post('/shorten', async function (req, res) {
    var originalUrl = req.body.url;
    var id = _nanoid(10);

    var url = new Url({ originalUrl: originalUrl, id: id });
    await url.save();

    res.json({ originalUrl, id });
});

app.get('/:id', async function (req, res) {
    var id = req.params.id;

    var url = await findOne({ id: id });

    if (url) {
        res.redirect(url.originalUrl);
    } else {
        res.status(404).json({ message: 'Not found' });
    }
});

app.listen(3000, function () {
    console.log('App está ouvindo na porta 3000!');
});
