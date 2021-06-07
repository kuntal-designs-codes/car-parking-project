import express from 'express';
import dotenv from 'dotenv';
import rateLimiterUsingThirdParty from "../middlewares/rateLimitter";
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

import router from './api';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(rateLimiterUsingThirdParty);

app.use('/api', router);

// Creating Server at port 4000

app.listen( process.env.PORT , () => {
    console.log(`Server start sucessfully at port ${process.env.PORT}`);
})

//Database connect
mongoose.connect(process.env.MOGODB_ATLAS_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("connected", function() {
    console.log("connected to MongoDB");
});