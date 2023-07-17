// Used to construct the response for a coin
var CoinResponse = function() {
    this.constructResponse = function(data, highLow) {
        const one = data.market_data.price_change_percentage_1h_in_currency.usd ?? 0;
        const twentyfour = data.market_data.price_change_percentage_24h_in_currency.usd ?? 0;
        const seven = data.market_data.price_change_percentage_7d_in_currency.usd ?? 0;
        const thirty = data.market_data.price_change_percentage_30d_in_currency.usd ?? 0;
        const oneyear = data.market_data.price_change_percentage_1y_in_currency.usd ?? 0;
        const prices = highLow.prices;
    
        // Calculate 1-year high and 1-year low
        let high1y = Math.max(...prices.map(pair => pair[1]));
        let low1y = Math.min(...prices.map(pair => pair[1]));

        high1y = high1y > 1.0 ? high1y.toFixed(2) : high1y > 0.0001 ? high1y.toFixed(4) : high1y.toFixed(8);
        low1y = low1y > 1.0 ? low1y.toFixed(2) : low1y > 0.0001 ? low1y.toFixed(4) : low1y.toFixed(8);

        const spaces = 11;
        
        return `\u0060\u0060\u0060
${data.name} | ${data.symbol.toUpperCase()}

USD: $${data.market_data.current_price.usd}
        
Price Change:
1hr:`+     one.toFixed(2).padStart(spaces-3, ' ') +`%
24hr:`+    twentyfour.toFixed(2).padStart(spaces-4, ' ') +`%
7d:`+      seven.toFixed(2).padStart(spaces-2, ' ') +`%
30d:`+     thirty.toFixed(2).padStart(spaces-3, ' ') +`%
1y:`+      oneyear.toFixed(2).padStart(spaces-2, ' ') +`%
        
Market Cap:       $`+data.market_data.market_cap.usd.toLocaleString()+`
24h Volume:       $`+data.market_data.total_volume.usd.toLocaleString()+`
1 Year High:      $`+high1y.toLocaleString()+`
1 Year Low:       $`+low1y.toLocaleString()+`
\u0060\u0060\u0060`;
    }
}

module.exports = new CoinResponse();