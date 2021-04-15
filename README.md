# discord-canvascord-espcord-esp

[![downloadsBadge](https://img.shields.io/npm/dt/discord-canvascord-espcord-esp?style=for-the-badge)](https://npmjs.com/discord-canvascord-espcord-esp)
[![versionBadge](https://img.shields.io/npm/v/discord-canvascord-espcord-esp?style=for-the-badge)](https://npmjs.com/discord-canvascord-espcord-esp)
[![doc](https://img.shields.io/badge/Documentation-Click%20here-blue?style=for-the-badge)](https://www.discord-canvascord-espcord-esp.net)

## Fácil de usar !!

¿Quieres desarrollar un bot de discordia utilizando la biblioteca Discord.js y quieres integrar buenas imágenes en Canvas? discord-canvascord-esp está hecho para ti! ¡Puede crear excelentes imágenes de bienvenida, imágenes de despedida y otras imágenes divertidas totalmente personalizables utilizando las muchas funciones fáciles de usar!

## Installation

```bash
$ npm install --save discord-canvascord-espcord-esp
```

## [¡Haga clic aquí para ver la documentación!](https://www.discord-canvascord-espcord-esp.net)

## Example GoodBye

```js
const Canvas = require("discord-canvascord-espcord-esp"),
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

<img src="https://i.imgur.com/gh6Yp00.png" height="250"></img>

## Ejemplo RankCard

```js
const Canvas = require("discord-canvascord-esp"),
Discord = require("discord.js");

let image = await new canvas.RankCard()
.setAddon("xp", false)
.setAddon("rank", false)
.setAvatar(message.author.avatarURL)
.setLevel(7)
.setReputation(450)
.setRankName("professional")
.setUsername("SrGobi")
.setBadge(1, "gold")
.setBadge(3, "diamond")
.setBadge(5, "silver")
.setBadge(6, "bronze")
.setBackground("https://www.site.com/background.jpg")
.toAttachment();

let attachment = new MessageAttachment(image.toBuffer(), "rank-card.png");

message.channel.send(attachment)
```

<img src="https://i.imgur.com/5L7qCkW.png" height="250"></img>

## Example Fortnite Shop

```js
const Canvas = require("discord-canvascord-esp"),
  Discord = require("discord.js");

const image = await shop
  .setToken("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
  .toAttachment();

let attachment = new Discord.Attachment(image, "FortniteShop.png");

message.channel.send(attachment);
```

<img src="https://i.imgur.com/3qO81V8.jpg" height="600"></img>

## Example Fortnite Stats

```js
const canvas = require("discord-canvascord-esp"),
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

<img src="https://i.imgur.com/xqnabX5.png" height="450"></img>

## Contribuyendo

Si tiene una solicitud para una nueva función, puede abrir un problema en Github. ¡Se agradecen las solicitudes de extracción!

## Credits

Hecho por [SrGobi](https://github.com/SrGobi) con ❤️
