const Ruangan = require('../models/Ruangan');

// Get all Ruangan
exports.getAllRuangan = async (req, res) => {
    try {
        const ruangan = await Ruangan.findAll();
        res.status(200).json(ruangan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Ruangan by ID
exports.getRuanganById = async (req, res) => {
    try {
        const ruangan = await Ruangan.findByPk(req.params.id);
        if (ruangan) {
            res.status(200).json(ruangan);
        } else {
            res.status(404).json({ message: 'Ruangan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new Ruangan
exports.createRuangan = async (req, res) => {
    try {
        const ruangan = await Ruangan.create(req.body);
        res.status(201).json(ruangan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Ruangan
exports.updateRuangan = async (req, res) => {
    try {
        const ruangan = await Ruangan.findByPk(req.params.id);
        if (ruangan) {
            const { time, ...updateData } = req.body; // Exclude time from update data
            await ruangan.update(updateData);
            res.status(200).json(ruangan);
        } else {
            res.status(404).json({ message: 'Ruangan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Ruangan
exports.deleteRuangan = async (req, res) => {
    try {
        const ruangan = await Ruangan.findByPk(req.params.id);
        if (ruangan) {
            await ruangan.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Ruangan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
