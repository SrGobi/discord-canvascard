# discord-canvascard

[![downloadsBadge](https://img.shields.io/npm/dt/discord-canvascard?style=for-the-badge)](https://npmjs.com/discord-canvascard)
[![versionBadge](https://img.shields.io/npm/v/discord-canvascard?style=for-the-badge)](https://npmjs.com/discord-canvascard)
[![doc](https://img.shields.io/badge/Documentation-Click%20here-blue?style=for-the-badge)](https://discord-canvascard.srgobi.com)

## Fácil de usar !!

¿Quieres desarrollar un bot de discordia utilizando la biblioteca Discord.js y quieres integrar buenas imágenes en Canvas? discord-canvascard está hecho para ti! ¡Puede crear excelentes imágenes de bienvenida, imágenes de despedida y otras imágenes divertidas totalmente personalizables utilizando las muchas funciones fáciles de usar!

## Installation

```bash
$ npm install --save discord-canvascard
```

## [¡Haga clic aquí para ver la documentación!](https://discord-canvascard.srgobi.com)

## Example GoodBye

```js
const Discord = require("discord.js");
const Canvas = require("discord-canvascard");

const image = await new Canvas.Goodbye()
  .setAvatar("https://www.site.com/avatar.jpg")
  .setTitulo("GOODBYE")
  .setSubtitulo("Descripcion personalizable!")
  .setColorTitulo("#FFFFFF")
  .setColorSubtitulo("#5865f2")
  .setColorCircle("#FFFFFF")
  .setColorBorder("#000000")
  .setOpacityBorder("0.4")
  .setBackground("https://site.com/background.jpg")
  .toAttachment();

const attachment = new Discord.Attachment(image.toBuffer(), "goodbye-image.png");

message.channel.send({ files: [attachment] });
```

<img src="https://i.imgur.com/pXk92QL.jpg" height="250"></img>

## Example Fortnite Shop

```js
const Discord = require("discord.js");
const Canvas = require("discord-canvascard");

const image = await new Canvas.FortniteShop()
  .setToken("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
  .toAttachment();

let attachment = new Discord.Attachment(image, "FortniteShop.png");

message.channel.send({ files: [attachment] });
```

<img src="https://i.imgur.com/POzfGl4.png" height="600"></img>

## Example Fortnite Stats

```js
const Discord = require("discord.js");
const Canvas = require("discord-canvascard");

const user = "BLDSrGobi",
  platform = "pc";
let image = await new Canvas.FortniteStats()
  .setToken("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
  .setUser(user)
  .setPlatform(platform)
  .toAttachment();

if (platform !== "pc" && platform !== "xbl" && platform !== "psn") return message.channel.send("Ingrese una plataforma válida")
if (!image) return message.channel.send("Usuario no encontrado")

let attachment = new Discord.Attachment(image.toBuffer(), "FortniteStats.png");

message.channel.send({ files: [attachment] });
```

<img src="https://i.imgur.com/AzvrLi8.png" height="450"></img>

## Contribuyendo

Si tiene una solicitud para una nueva función, puede abrir un problema en Github. ¡Se agradecen las solicitudes de extracción!

## Credits

Created by [SrGobi](https://github.com/SrGobi) con ❤️# discord-canvascard
