const User = require('../models/User');
const argon2 = require('argon2');


exports.register = async (req, res) => {
    const {
        username,
        password
    } = req.body;
    try {

        const existingUser = await User.findOne({
            where: {
                username
            }
        });
        if (existingUser) {
            return res.status(400).json({
                msg: 'User already exists'
            });
        }

        const hashedPassword = await argon2.hash(password);

        const newUser = await User.create({
            username,
            password: hashedPassword
        });

        res.status(201).json({
            msg: 'User registered successfully',
            newUser
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Server error',
            error: err
        });
    }
};


exports.login = async (req, res) => {
    const {
        username,
        password
    } = req.body;
    try {
        const user = await User.findOne({
            where: {
                username
            }
        });
        if (!user) {
            return res.status(400).json({
                msg: 'User not found'
            });
        }

        const validPassword = await argon2.verify(user.password, password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Invalid password'
            });
        }

        // Simpan userId ke dalam sesi
        req.session.userId = user.id; // {{ edit_1 }}
        req.session.save((err) => { // {{ edit_2 }}
            if (err) {
                return res.status(500).json({
                    msg: 'Server error',
                    error: err.message
                });
            }

            res.status(200).json({
                msg: 'Login successful',
                user
            });
        }); // {{ edit_2 }}
    } catch (err) {
        console.error(err); 
        res.status(500).json({
            msg: 'Server error',
            error: err.message 
        });
    }
};

exports.logout = (req, res) => {

    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                message: 'Logout failed'
            });
        }
        res.clearCookie('connect.sid');
        return res.status(200).json({
            message: 'Logged out successfully'
        });
    });
};



exports.me = async (req, res) => {
    try {
        
        const userId = req.session.userId; 

        
        if (!userId) {
            return res.status(401).json({
                msg: 'Anda harus login untuk mengakses data ini'
            });
        }

        const user = await User.findOne({
            attributes: ['username'], 
            where: {
                id: userId 
            }
        });

        if (!user) {
            return res.status(404).json({
                msg: 'User tidak ditemukan'
            });
        }

        res.status(200).json({
            msg: 'Berhasil mendapatkan data user',
            user
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            msg: 'Server error', 
            error: err.message
        });
    }
};




exports.getUser = async (req, res) => {
        const username = req.params.username; 
    try {
        const user = await User.findOne({
            where: {
                username
            }
        });

        if (!user) {
            return res.status(404).json({
                msg: 'User tidak ditemukan'
            });
        }

        res.status(200).json({
            msg: 'Berhasil mendapatkan data user',
            user
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            msg: 'Server error', 
            error: err.message
        });
    }
};


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll(); 

        res.status(200).json({
            msg: 'Berhasil mendapatkan semua data pengguna',
            users
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            msg: 'Server error', 
            error: err.message
        });
    }
};

