const jwt = require('jsonwebtoken')
const TOKEN_SECRET = 'Secret token'

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')

    if(!token) {
        return res.status(401).json({succes: false, error: 'Access denied!' })
    }

    try {
        const verified = jwt.verify(token, TOKEN_SECRET)
        req.user = verified
        req.email = verified.email
        next();
    }catch (error) {
        res.status(400).json({success: false, error: 'Invalid token!'})
    }
}

module.exports = {
    verifyToken,
    TOKEN_SECRET
};