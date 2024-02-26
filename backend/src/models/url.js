import { Schema, model } from 'mongoose';

const urlSchema = new Schema({
    originalUrl: String,
    id: String
});

const Url = model('Url', urlSchema);

export default Url;
