const express = require('express')
const router = express.Router()
const axios = require('axios');
const FormData = require('form-data')
const { response } = require('express');
var greetMod =  (require('../../../cpp_components/test/build/Release/greet'));
var word_transformation =  (require('../../../cpp_components/word_transformation/build/Release/word_transformation'));
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

// in every c++ component, key (string) is first parameter
// in every c++ component, reload (0 or 1, string) is second parameter

keyring=100
key=0
processes={
    "hello":{},
    "word_transformation":{}
}

router.get('/hello/:key', (req, res) => {
    reload='0';
    var d = new Date();
    currentTime = Math.floor(d.getTime() / 600);
    if (!(req.params.key in processes["hello"]) || (currentTime - processes["hello"][req.params.key] > (5 * 60))) {
        reload = '1'
    }
    processes["hello"][req.params.key] = currentTime
    console.log(processes)
    res.send(greetMod.greetHello(req.params.key.toString(), reload, "ME",))
})

router.get('/word_transformation/:key/:word1/:word2', (req, res) => {
    reload='0';
    var d = new Date();
    currentTime = Math.floor(d.getTime() / 600);
    if (!(req.params.key in processes["word_transformation"]) || (currentTime - processes["word_transformation"][req.params.key] > (5 * 60))) {
        reload = '1'
    }
    processes["word_transformation"][req.params.key] = currentTime
    console.log(processes)
    res.send(word_transformation.wordTransform(req.params.key.toString(), reload, req.params.word1, req.params.word2,))
})

router.get('/key', (req, res) => {
    key += 1;
    key = key % keyring
    res.send(key.toString())
})
router.get('/whatmykey/:key', (req,res) => {
    res.send(req.params.key)
})

// FLASK
router.post('/POS_Tagger', (req, res) => {
    $.ajax({
        url: `http://127.0.0.1:${global.FLASK_PORT}/POS_Sentence`,
        type: "POST",
        data: {
            sentence: req.body.sentence
        }
    }).then(response => {
        res.send(response)
    }).catch(error => {
        res.send(error)
    })
})

module.exports = router;