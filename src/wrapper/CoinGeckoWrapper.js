const axios = require("axios");

var CoinGeckoWrapper = function() {
    this.getRates = async function(symbol) {
        return await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
    }
    this.getFullProfile = async function(symbol) {
        return await axios.get(`https://api.coingecko.com/api/v3/coins/${symbol}`);
    }
    this.getHighLow = async function(symbol) {
        return await axios.get(`https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=365`);
    }
}

module.exports = new CoinGeckoWrapper();