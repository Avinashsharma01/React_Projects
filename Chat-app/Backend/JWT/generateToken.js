import jwt from 'jsonwebtoken';

const generateToken = (user, res) => {
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: '10d',
    });

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600000,
        sameSite: 'none',
    });


};

export default generateToken;