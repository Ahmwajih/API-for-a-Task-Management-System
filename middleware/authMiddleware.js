// creata for task middleware request method, URL, and timestamp

const impMiddleware = (req, res, next) => {
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.url);
    // console.log('Timestamp:', new Date());
    next();
    }


    // create middlewre for error handling
    const errorHandler = (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }



    module.exports = { impMiddleware, errorHandler };