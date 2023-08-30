// routes/index.js

const mainRoutes = require('./main')

module.exports = function (app) {
    mainRoutes(app);
}