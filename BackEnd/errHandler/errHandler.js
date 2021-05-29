function preErrHandler(req, res, next) {
    const err = new Error("Resource Not Found");
    next(err);
}

function errHandler(err, req, res, next) {
    if (err.name == 'SequelizeValidationError') {
        let errors = []
        err.errors.forEach(e=>{
            errors.push(e.message)
        })

        err.status = 400;
        err.message = errors
    } 
    
    else if (err.name == "Error"){
        err.status = 404;
    } 
    
    else {
        // err.status = 500;
        // err.message = "Internal Server Error"
    }

    console.error({
        message: err.message,
        error: err,
    });
    res.status(err.status).json({message:  err.message})
}

module.exports = {errHandler, preErrHandler}