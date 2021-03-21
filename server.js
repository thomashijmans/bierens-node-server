//Import dependecies
const path = require('path');
const http  = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const dialogflow = require('dialogflow-fulfillment');
const actionsOnGoogle = require('actions-on-google');

const bierensRoutes = require('./routes/bierens-routes');


//Set up middleware
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bierensRoutes);

app.post('/', express.json(), (req,res,next)=>{
    const agent = new dialogflow.WebhookClient({
        request: req,
        response: res
    })

    function demo(agent){
        // agent.add('Welcome, I see that you are interested in sending reminders. I can help you with the format of the reminder.');
    }

    var intentMap = new Map ();
    intentMap.set('Default Welcome Intent', demo);

    agent.handleRequest(intentMap);
})

//404 route
app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'bierens-views', '404.html'));
    // res.status(404).render('404',{pageTitle: 'Page not found'});
});


//Server creation
app.listen(3000);

console.log('test github');