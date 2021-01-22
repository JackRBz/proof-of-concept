
const checkRequiredFields = async (...args) =>{
    const reqBody = args[0];

    for(let i=1; i < args.length; i++ ){
        if(!Boolean(reqBody[args[i]])){
            // Checking for NOT FALSE, because When converted to a Boolean, a string will evaluate to false if it's empty.
            return true
        }
    }
    return false;

}

module.exports = {checkRequiredFields}