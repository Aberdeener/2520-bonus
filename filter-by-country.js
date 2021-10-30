const through = require('through2');

module.exports = {

    filterByCountry: (country) => {
        return through.obj((chunk, encoding, next) => {
            if (chunk.country == country) {
                return next(null, chunk);
            }

            next()
        });
    }

}