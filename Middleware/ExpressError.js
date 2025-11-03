//lets write a custom class 
class ExpressError extends Error { //ExpressError is a custom class for errors, it could be named anything.
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;