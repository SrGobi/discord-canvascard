const Canvas = require("canvas");
// Register Bold fuente
Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "Bold" });
// Registrar fuente SketchMatch
Canvas.registerFont(`${__dirname}/assets/fonts/SketchMatch.ttf`, { family: "SketchMatch" });
// Registrar fuente SketchMatch
Canvas.registerFont(`${__dirname}/assets/fonts/LuckiestGuy-Regular.ttf`, { family: "luckiest guy" });
// Registrar fuente Burbank Big Condensed Black
Canvas.registerFont(`${__dirname}/assets/fonts/Burbank Big-Condensed-Black-700.ttf`, { family: "file0" });
// Registrar fuente Roboto Black
Canvas.registerFont(`${__dirname}/assets/fonts/Roboto-Black.ttf`, { family: "Roboto Black" });
// Registrar fuente Roboto
Canvas.registerFont(`${__dirname}/assets/fonts/Roboto-Regular.ttf`, { family: "Roboto" });

module.exports.Base = require('./src/greetings/Base');
module.exports.FortniteShop = require('./src/fortnite/Shop');
module.exports.FortniteStats = require('./src/fortnite/Stats');