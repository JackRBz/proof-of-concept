//////////////////////////////// Error Handlers ////////////////////////////////

exports.sendErrorGET = (res, err) => {
    console.log(err);
    res.status(500).json({
        success: false,
        error: 'GET failed. Server error. Message is: : ' + err.name + ' ' + err.message,
    });
};

exports.sendErrorPUT = (res, err) => {
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            error: err.message,
        }); // 400: client error, the client didn't send what is expected
    } else {
        res.status(500).json({
            success: false,
            error: 'PUT failed. Server error. Message is: : ' + err.name + ' ' + err.message,
        });
    }
};

exports.sendErrorDELETE = (res, err) => {
    res.status(500).json({
        success: false,
        error: 'DELETE failed. Server error. Message is: : ' + err.name + ' ' + err.message,
    });
};

exports.sendErrorPOST = (res, err) => {
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            error: err.message,
        }); // 400: client error, the client didn't send what is expected
    }
    if (err.name === 'ConflictError') {
        return res.status(409).json({
            success: false,
            error: err.message,
        }); // 409 Conflict Error
    } else {
        res.status(400).json({
            success: false,
            error: 'POST failed. Message is: ' + err.name + ' ' + err.message,
        });
    }
};

//////////////////////////////// Custom Errors ////////////////////////////////

exports.ConflictError = {
    name: 'ConflictError',
    message: 'Item already exists',
};

exports.ValidationError = {
    name: 'ValidationError',
    message: 'Invalid fields',
}; // Makeshift Error
