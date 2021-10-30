const through = require('through2');
let profit = 0;

module.exports = {

    sumProfit: () => {
        return through.obj((buffer, encoding, next) => {
            profit = profit + parseFloat(buffer.profit);
            return next(null, Buffer.of(buffer));
        }, (flush) => {
            flush(null, '$' + Number.parseFloat(profit).toFixed(2).toString());
        });
    }

}