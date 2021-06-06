const db = require('../utills/database');

exports.getAll = async (req, res, next) => {
    const query = `SELECT * FROM toys`;
    try {
        const [ results ] = await db.query(query);
        return res.status(200).json(results);
    } catch (error) {
        console.log(error);
    }
}