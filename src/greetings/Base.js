const Canvas = require("canvas");
const { formatVariable, applyText } = require("../../utils/functions");

module.exports = class Greeting {

    constructor() {
        this.username = "Clyde";
        this.textDescription = "Card";
        this.guildName = "ServerName";
        this.colorTitle = "#FFFFFF";
        this.colorMemberCount = "#FFFFFF";
        this.textMemberCount = "- {count}th member !";
        this.memberCount = "0";
        this.backgroundImage = `${__dirname}/../../assets/img/1px.png`;
        this.avatar = `${__dirname}/../../assets/img/default-avatar.png`;
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
    
    setBackground(value) {
        this.backgroundImage = value;
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
        let background = await Canvas.loadImage(this.backgroundImage);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

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
        ctx.strokeStyle = this.colorAvatar;
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