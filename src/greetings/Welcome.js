const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.backgroundImage = `${__dirname}/../../assets/img/1px.png`;
        this.textTitle = "WELCOME";
        this.textMessage = "Welcome to {server}";
        this.colorTitle = "#03A9F4";
    }
    setBackground(value) {
        this.backgroundImage = value;
        return this;
      }
};
