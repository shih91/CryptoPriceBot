const coins = require("../constant/coins.js");
const rates = require('../wrapper/CoinGeckoWrapper.js');
const coinResponse = require("../response/coin.js");

const getCoinPrice = async (coin) => {
    if (!coin) {
        return `Please provide a valid coin\\.`;
    }
    let id = coins.getId(coin.toLowerCase());
    if ( id != null ) {
      console.log("Looking for... " + id);
      try {
        const rate = await rates.getFullProfile(id);
        const highLow = await rates.getHighLow(id);
        return coinResponse.constructResponse(rate.data, highLow.data);
      } catch (error) {
        console.error("Error retrieving coin data:", error);
        return `An error occurred while retrieving coin data\\.`;
      }
    }
    else {
      return `Sorry, I don't know this coin\\.`
    }
}

const getMessage = async (ctx) => {
    var text = ctx.message.text.split('/');
    return await getCoinPrice(text[1].toLowerCase());
}

module.exports = { getMessage };