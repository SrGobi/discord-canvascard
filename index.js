const Canvas = require("canvas");
// Registrar fuente Burbank Big Condensed Black
Canvas.registerFont(`${__dirname}/assets/fonts/Burbank Big-Condensed-Black-700.ttf`, { family: "Burbank Big Condensed" });
// Registrar fuente Luckiest Guy
Canvas.registerFont(`${__dirname}/assets/fonts/LuckiestGuy-Regular.ttf`, { family: "Luckiest Guy" });
// Registrar fuente Roboto-Black
Canvas.registerFont(`${__dirname}/assets/fonts/Roboto-Black.ttf`, { family: "Roboto Black" });
// Registrar fuente Roboto
Canvas.registerFont(`${__dirname}/assets/fonts/Roboto-Regular.ttf`, { family: "Roboto" });
// Register Bold fuente
Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "The Bold Font" });

module.exports.Base = require('./src/greetings/Base');
module.exports.FortniteShop = require('./src/fortnite/Shop');
module.exports.FortniteStats = require('./src/fortnite/Stats');
module.exports.formatVariable = require('./utils/functions');