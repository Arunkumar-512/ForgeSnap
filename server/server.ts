import express ,{Request,Response}from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './configs/db.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import AuthRouter from './routes/AuthRoutes.js';
import ThumbnailRouter from './routes/ThumbnailRoutes.js';
import UserRouter from './routes/UserRoutes.js';



declare module 'express-session'{
    interface SessionData {
        isLoggedIn: boolean;
        userId:string;
    }
}

await connectDB();


const server = express();


const PORT =  3000;


server.use(cors({
    origin:[  'http://localhost:5173','http://localhost:3000'],
    credentials:true
}))

server.use(session({
    secret:process.env.SESSION_SECRET  as string,
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24*7}, //7days
    store: MongoStore.create({
        mongoUrl:process.env.MONGODB_URI as string,
        collectionName:'sessions'
    })
}))
server.use(express.json());


server.get('/',(req:Request,res:Response)=>{
    res.send('server is  live')
})

server.use('/api/auth',AuthRouter);
server.use('/api/thumbnail',ThumbnailRouter)
server.use('/api/user',UserRouter);

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})