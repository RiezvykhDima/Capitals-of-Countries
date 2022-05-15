const { dataBase } = require ('./model')

function searchCapital(req) {
    const detected = dataBase.find( (el) => {
        return el.country === req.country;
    }).city;

    return detected;
} 

module.exports = {
    searchCapital
}