const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.cookies.access_token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return next(res.status(401).json("No token provided"));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(res.status(403).json("Token is not vaild"));
        req.user = user;
        next();
    });
};

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(createError(403, `Role (${req.user.role}) is not allowed to access this resource`));
        }
        next();
    };
};