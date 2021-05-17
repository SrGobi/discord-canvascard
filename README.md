# discord-canvascard

[![downloadsBadge](https://img.shields.io/npm/dt/discord-canvascard?style=for-the-badge)](https://npmjs.com/discord-canvascard)
[![versionBadge](https://img.shields.io/npm/v/discord-canvascard?style=for-the-badge)](https://npmjs.com/discord-canvascard)
[![doc](https://img.shields.io/badge/Documentation-Click%20here-blue?style=for-the-badge)](https://www.discord-canvascard.net)

## Fácil de usar !!

¿Quieres desarrollar un bot de discordia utilizando la biblioteca Discord.js y quieres integrar buenas imágenes en Canvas? discord-canvascard está hecho para ti! ¡Puede crear excelentes imágenes de bienvenida, imágenes de despedida y otras imágenes divertidas totalmente personalizables utilizando las muchas funciones fáciles de usar!

## Installation

```bash
$ npm install --save discord-canvascard
```

## [¡Haga clic aquí para ver la documentación!](https://www.discord-canvascard.net)

## Example GoodBye

```js
const Canvas = require("discord-canvascard"),
  Discord = require("discord.js");

const image = await new Canvas.Goodbye()
  .setUsername("SrGobi")
  .setDiscriminator("5100")
  .setMemberCount("140")
  .setGuildName("Server DEV")
  .setAvatar("https://www.site.com/avatar.jpg")
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://site.com/background.jpg")
  .toAttachment();

const attachment = new Discord.Attachment(image.toBuffer(), "goodbye-image.png");

message.channel.send(attachment);
```

<img src="https://i.imgur.com/pXk92QL.jpg" height="250"></img>

## Example Fortnite Shop

```js
const Canvas = require("discord-canvascard"),
  Discord = require("discord.js");

const image = await shop
  .setToken("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
  .toAttachment();

let attachment = new Discord.Attachment(image, "FortniteShop.png");

message.channel.send(attachment);
```

<img src="https://i.imgur.com/POzfGl4.png" height="600"></img>

## Example Fortnite Stats

```js
const canvas = require("discord-canvascard"),
  stats = new canvas.FortniteStats();
  
const user = "BLDSrGobi",
  platform = "pc";
  
let image = await stats
  .setToken("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
  .setUser(user)
  .setPlatform(platform)
  .toAttachment();

if (platform !== "pc" && platform !== "xbl" && platform !== "psn") return message.channel.send("Ingrese una plataforma válida")
if (!image) return message.channel.send("Usuario no encontrado")

let attachment = new Discord.Attachment(image.toBuffer(), "FortniteStats.png");

message.channel.send(attachment);
```

<img src="https://i.imgur.com/AzvrLi8.png" height="450"></img>

## Contribuyendo

Si tiene una solicitud para una nueva función, puede abrir un problema en Github. ¡Se agradecen las solicitudes de extracción!

## Credits

Created by [SrGobi](https://github.com/SrGobi) con ❤️# discord-canvascard
