import jwt from 'jsonwebtoken'

export const requiresAuth = () => {
    return (req, res, next) => {
        try {
            if (!req.headers.authorization) {
                throw new Error('Missing Authorization header')
            }

            const authHeader = req.headers.authorization
            const token = authHeader.split(' ')[1]
            jwt.verify(token, process.env['JWT_SECRET_KEY']);
            return next()
        } catch (error) {
            console.error('Auth error', error)
            return res.status(401).json({message: 'Unauthorized'})
        }
    }
}
