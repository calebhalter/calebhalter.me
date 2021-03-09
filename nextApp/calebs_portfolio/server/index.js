const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 80
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config
// native addon works!!!!!!!!!!!!!
//const greetMod =  require('../../cpp_components/test/build/Release/greet')
const { response } = require('express')

global.FLASK_PORT = 5438

nextApp.prepare().then(() => {
    // express code here
    const app = express();

    //console.log(greetMod.greetHello())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api/components', require('./routes/index')) ;

    app.get('*', (req,res) => {
        return handle(req,res) // for all the react stuff
    })
    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })
})

