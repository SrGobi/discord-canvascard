const Canvas = require("canvas");
// Register Bold fuente
Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "Bold" });
// Registrar fuente SketchMatch
Canvas.registerFont(`${__dirname}/assets/fonts/SketchMatch.ttf`, { family: "SketchMatch" });
// Registrar fuente SketchMatch
Canvas.registerFont(`${__dirname}/assets/fonts/LuckiestGuy-Regular.ttf`, { family: "luckiest guy" });
// Registrar fuente KeepCalm
Canvas.registerFont(`${__dirname}/assets/fonts/KeepCalm-Medium.ttf`, { family: "KeepCalm" });

module.exports.Base = require('./src/greetings/Base');
module.exports.Welcome = require('./src/greetings/Welcome');
module.exports.Goodbye = require('./src/greetings/Goodbye');
module.exports.FortniteShop = require('./src/fortnite/Shop');
module.exports.FortniteStats = require('./src/fortnite/Stats');
module.exports.RankCard = require('./src/rank/Rank');
