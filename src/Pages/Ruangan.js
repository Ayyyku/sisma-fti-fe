const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ruangan = sequelize.define('Ruangan', {
    namaRuangan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('waiting', 'approve', 'decline'),
        defaultValue: 'waiting'
    }
});

// Middleware to ensure only admin can approve
Ruangan.beforeSave((ruangan, options) => {
    if (ruangan.changed('status') && ruangan.status === 'approve' && !ruangan.isAdmin) {
        throw new Error('Only admin can approve');
    }
});

sequelize.sync()
    .then(() => {
        console.log('Ruangan model synced successfully...');
    })
    .catch((err) => {
        console.log('Sync error:', err);
    });

module.exports = Ruangan;
