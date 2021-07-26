const Greeting = require("./Base");

module.exports = class Goodbye extends Greeting {
    constructor() {
        super();
        this.titulo = "GOODBYE";
        this.subtitulo = "Descripcion personalizable!";
        this.colorTitle = "#FFFFFF";
        this.colorSubtitulo = "#5865f2";
    }
};
