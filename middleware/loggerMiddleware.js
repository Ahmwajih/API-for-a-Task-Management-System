// Create a simple authentication middleware that checks for an API key in the request headers. If the API key exists, allow the request to proceed; otherwise, respond with an authentication error.


const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['api-key'];
    if (apiKey) {
        next();
    } else {
        res.status(401).send('Authentication Error');
    }
};



// export the middleware

module.exports = authMiddleware;
