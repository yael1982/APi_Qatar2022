const { tokenVerify } = require("../utils/handlerJWT");
const isAuth = async(req, res, next) => {
    if (!req.headers.authorization) {
        let error = new Error("No token provided");
        error.status = 403;
        return next(error);
    }
    const token = req.headers.authorization.split(" ").pop();
    const isValidToken = await tokenVerify(token);
    if (isValidToken instanceof Error) {
        let error = new Error("Invalid or Expired Token")
        error.status = 403;
        return next(error);
    }
    req.token = isValidToken;
    next();
};
module.exports = isAuth;
