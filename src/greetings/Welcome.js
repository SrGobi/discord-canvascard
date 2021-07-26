const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.titulo = "WELCOME";
        this.subtitulo = "Descripcion personalizable!";
        this.colorTitle = "#FFFFFF";
        this.colorSubtitulo = "#5865f2";
    }
};
