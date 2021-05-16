const Canvas = require("canvas");
const { formatVariable, applyText } = require("../../utils/functions");

/**
 * @typedef {object} CanvacardWelcomerData
 * @property {object} backgroundGlobal Datos de antecedentes de la tarjeta de rango
 * @property {"image"|"color"} [backgroundGlobal.type="color"] Tipo de fondo
 * @property {string|Buffer} [backgroundGlobal.image="#23272A"] Imagen de fondo (o color)
 */

module.exports = class Greeting {

    constructor() {
        /**
         * Datos de la tarjeta de clasificación
         * @type {CanvacardWelcomerData}
         */
        this.data = {backgroundGlobal: {type: "color",image: "#23272A"}};
        this.username = "Clyde";
        this.textDescription = "Card";
        this.guildName = "ServerName";
        this.colorTitle = "#FFFFFF";
        this.colorMemberCount = "#FFFFFF";
        this.textMemberCount = "- {count}th member !";
        this.memberCount = "0";
        this.avatar = `${__dirname}/../../assets/img/default-avatar.png`;
        this.colorCircle= "#000000";
        this.opacityBorder = "0.4";
        this.colorBorder = "#000000";
        this.colorUsername = "#FFFFFF";
        this.colorUsernameBox = "#000000";
        this.opacityUsernameBox = "0.4";
        this.discriminator = "XXXX";
        this.colorDiscriminator = "#FFFFFF";
        this.opacityDiscriminatorBox = "0.4";
        this.colorMessageBox = "#FFFFFF";
        this.opacityMessageBox = "0.4";
        this.colorDiscriminatorBox = "#000000";
        this.colorMessage = "#FFFFFF";
        this.colorHashtag = "#FFFFFF";
        this.colorBackground = "000000";
    }

    setAvatar(value) {
        this.avatar = value;
        return this;
    }
    
    setDiscriminator(value) {
        this.discriminator = value;
        return this;
    }
    
    setUsername(value) {
        this.username = value;
        return this;
    }
    
    setGuildName(value) {
        this.guildName = value;
        return this;
    }
    
    setMemberCount(value) {
        this.memberCount = value;
        return this;
    }
    
    /**
     * Establecer imagen / color de fondo
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string|Buffer} [data] Color o imagen de fondo
     */
    setBackground(type, data) {
        if (!data) throw new Error("Falta campo: datos");
        switch(type) {
            case "COLOR":
                this.data.backgroundGlobal.type = "color";
                this.data.backgroundGlobal.image = data && typeof data === "string" ? data : "#23272A";
                break;
            case "IMAGE":
                this.data.backgroundGlobal.type = "image";
                this.data.backgroundGlobal.image = data;
                break;
            default:
                throw new Error(`Tipo de fondo no admitido "${type}"`);
        }
        return this;
    }
    
    setColor(variable, value) {
        const formattedVariable = formatVariable("color", variable);
        if (this[formattedVariable]) this[formattedVariable] = value;
        return this;
    }
      
    setText(variable, value) {
        const formattedVariable = formatVariable("text", variable);
        if (this[formattedVariable]) this[formattedVariable] = value;
        return this;
    }
    
    setOpacity(variable, value) {
        const formattedVariable = formatVariable("opacity", variable);
        if (this[formattedVariable]) this[formattedVariable] = value;
        return this;
    }

    async toAttachment() {
        // Crear lienzo
        const canvas = Canvas.createCanvas(1024, 450);
        const ctx = canvas.getContext("2d");

        const guildName = this.textMessage.replace(/{server}/g, this.guildName);
        const memberCount = this.textMemberCount.replace(/{count}/g, this.memberCount);

        // Dibujar background
        ctx.fillStyle = this.colorBackground;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        let bg = null;
        if (this.data.backgroundGlobal.type === "image") bg = await Canvas.loadImage(this.data.backgroundGlobal.image);
        // crear fondo
        if (!!bg) {
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        } else {
            ctx.fillStyle = this.data.backgroundGlobal.image;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Dibujar capa
        ctx.fillStyle = this.colorBorder;
        ctx.globalAlpha = this.opacityBorder;
        ctx.fillRect(0, 0, 25, canvas.height);
        ctx.fillRect(canvas.width - 25, 0, 25, canvas.height);
        ctx.fillRect(25, 0, canvas.width - 50, 25);
        ctx.fillRect(25, canvas.height - 25, canvas.width - 50, 25);

        // Dibujar discriminador
        // Dibujar nombre de usuario
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "black";
        ctx.textAlign = "center";
        ctx.fillStyle = this.colorUsername;
        ctx.font = "30px Roboto Black";
        ctx.fillText(this.username + "#" + this.discriminator, canvas.width - 512, canvas.height - 70);

        // Dibujar el nombre del gremio
        ctx.shadowBlur = 10;
        ctx.shadowColor = "black";
        ctx.fillStyle = this.colorMessage;
        ctx.textAlign = "center";
        ctx.font = "60px Roboto Black";
        ctx.fillText(guildName, canvas.width - 512, canvas.height - 100);

        // Dibujar cuenta de miembros
        ctx.shadowBlur = 10;
        ctx.shadowColor = "black";
        ctx.fillStyle = this.colorMemberCount;
        ctx.textAlign = "start";
        ctx.font = "22px Bold";
        ctx.fillText(memberCount, 40, canvas.height - 400);

        // Dibujar Texto
        ctx.shadowBlur = 10;
        ctx.shadowColor = "black";
        ctx.fillStyle = this.colorTitle;
        ctx.textAlign = "center";
        ctx.font = "30px Roboto Black";
        ctx.fillText(this.textDescription, canvas.width - 512, canvas.height - 35);

        // Dibujar un circulo de avatar
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = this.colorCircle;
        ctx.arc(512, 170, 125, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.closePath();
        ctx.clip();

        // Dibujar Avatar
        const avatar = await Canvas.loadImage(this.avatar);
        ctx.drawImage(avatar, 387, 45, 250, 250);

        return canvas;
    }
};