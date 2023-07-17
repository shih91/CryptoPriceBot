const MenuOption = require("../constant/MenuOptions");

// Services
const coinPriceService = require('../services/CoinPriceService.js');
const helpService = require('../services/HelpService.js');
const pingService = require('../services/PingService.js');

const getService = (menuOption) => {
    switch (menuOption.toUpperCase()) {
        case MenuOption.HELP:
            return helpService;
        case MenuOption.PING:
            return pingService;
        default:
            return coinPriceService;
    }
}   

module.exports = { getService };