import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';

const server = express();


server.use(sassMiddleware({
    src: path.join(__dirname,'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/',(req,res)=>{
    res.render('index',{
        content  :"hello express from <em>ejs</em>"
    });

});

server.use('/api',apiRouter);

server.use(express.static('public'))


server.listen(config.port, () =>{
    console.info('Express listenning on port ', config.port);
    
});