const service = require ('../service');

async function findCapitalOfCountry(req, res, next) {
    try {
        const capital = await service.searchCapital(req.query);

        res.json(`Capital of ${req.query.country} is ${capital}`);

        return capital; 
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findCapitalOfCountry
}
