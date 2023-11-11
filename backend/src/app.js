import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import initializePassport from './config/passport.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import router from './routers/index.routes.js';
import {__dirname} from "./utils.js";

const whitelist = ["http://127.0.0.1:5173", "http://localhost:5173"];

const corsOptions = {
 origin:function(origin,callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback (null,true)
 }else {
    callback(new Error ("Acceso denegado"))
 }
 }
}

const app = express();
const PORT = process.env.PORT || 8081


//BDD
mongoose.connect(process.env.MONGO_URL)
    .then(async () => {
        console.log('BDD conectada')
    })
    .catch(() => console.log('Error en conexion a BDD'))


const httpServer = app.listen(PORT, () => {
    try {
        console.log(`Listening to the port ${PORT}\nAcceder a:`);
        console.log(`\t1). http://localhost:${PORT}/api/products`)
        console.log(`\t2). http://localhost:${PORT}/api/carts`);
        console.log(`\t3). http://localhost:${PORT}/api/users`);
    }
    catch (err) {
        console.log(err);
    }
});



app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser (process.env.SIGNED_COOKIE));
app.use (session({
    store: MongoStore.create ({
        mongoUrl: process.env.MONGO_URL,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedtopology:true
        },
        ttl: 60
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

initializePassport ()
app.use(passport.initialize())
app.use(passport.session())


//Routes

app.use ('/', router)

