const coins = require('../assets/coins.json');

class Coins {
    invoke() {
        this.map = new Map();
        this.coinsId = new Map();
        console.log("Populating coins map...");
        for ( var i = 0; i < coins.length; i++ ) {
            this.map.set(coins[i].id, coins[i].symbol);
            this.coinsId.set(coins[i].symbol, coins[i].id);
        }
        console.log("Coins map populated. Size: " + this.map.size);
    };

    isId(id) {
        return this.map.has(id);
    }

    getId(symbol) {
        if ( this.isId(symbol) ) {
            return symbol.toLowerCase();
        }
        else {
            return this.coinsId.get(symbol)? this.coinsId.get(symbol) : null;
        }
    }
}

module.exports = new Coins();