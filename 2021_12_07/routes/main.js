// routing main /
const fs = require("fs");


module.exports = function (app) {

    function isFolder(path){
        return fs.lstatSync(path).isDirectory() && fs.existsSync(path);
    }

    // app.get('/', (req, res) => {
    //     const base = './files/';
    //     let path = '';
    //     if ('path' in req.query) {
    //         path = req.query.path;
    //     }
    //     if ( isFolder(base + path)) {
    //         // если переданный параметр - папка
    //         let files = fs.readdirSync(base+path);
    //         //res.json(files);
    //         res.json("i");
    //     }

    // });
    app.get('/', (req, res) => {
        // res.send("<html> <head>server Response</head><body><h1>1!</h1></body> </html>")
        res.sendFile(__dirname + "/htm.html")
    });
    app.get('/f.css', (req, res) => {
        // res.send("<html> <head>server Response</head><body><h1>1!</h1></body> </html>")
        res.sendFile(__dirname + "/f.css")
    });
    app.get('/java.js', (req, res) => {
        // res.send("<html> <head>server Response</head><body><h1>1!</h1></body> </html>")
        res.sendFile(__dirname + "/java.js")
    });

}
