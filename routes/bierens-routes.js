//Import dependecies
const path = require('path');
const express = require('express');

const dialogflow = require('dialogflow-fulfillment');
const actionsOnGoogle = require('actions-on-google');

const rootDir = require('../util/path');


//Set up routes
const router = express.Router();

router.get('/',express.json(),(req,res,next)=>{
 
    // console.log(req.get("Cookie").split('=')[1]);
    res.sendFile(path.join(rootDir,'bierens-views','bierens-home.html'));
})

router.get('/bierens-kosten',(req,res,next)=>{
    if(req.get('Cookie')){
      console.log('+1');
    }
    // tabel met hoevaak een gebruiker op de pagina komt en hoelang die op een pagina heeft gezeten
    // dit kan naar een db worden weggeschreven.
    //cookie koppelen aan id
    
    res.setHeader('Set-Cookie', 'page=#kosten');
    res.sendFile(path.join(rootDir,'bierens-views','bierens-kosten.html'));

});

router.get('/bierens-aanmaning',(req,res,next)=>{

    res.setHeader('Set-Cookie', 'page=#aanmaning');
    res.sendFile(path.join(rootDir,'bierens-views','bierens-aanmaning.html'));
 });


 //Export module
 module.exports = router;