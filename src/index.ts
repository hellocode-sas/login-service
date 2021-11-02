import { LoginServiceImpl } from './services/impl/login-service-impl';
import { UserMemoryRepository } from './repository/impl/user-memory-repository';

import express from "express";
import {LoginController} from './controller/login-controler';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port =  process.env.PORT || 8080; // default port to listen

 
const repository= new UserMemoryRepository();
const loginService = new LoginServiceImpl(repository);
const loginController= new LoginController(loginService);
loginController.initRoutes(app);

// default route
app.get( "/", ( req, res ) => {
    res.json( {message: "Hello world!" , success: true}).status(200);
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

