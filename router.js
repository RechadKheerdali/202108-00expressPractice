const iKexpressRoute = require('express').Router();

iKexpressRoute.get('/', (req, res) => {
    res.send('iK access from /api/');
});

iKexpressRoute.get('/pathname1', (req, res) => {
    res.send('iK access from /api/pathname1');
});

iKexpressRoute.get('/pathname2', (req, res) => {
    res.send('iK access from /api/pathname2');
});

// Error page if url path not found. This should be last otherwise it will null the other middlewares and routes
iKexpressRoute.use((req, res) => {
    res.status(404);
    res.send('path not found')
})

module.exports = iKexpressRoute