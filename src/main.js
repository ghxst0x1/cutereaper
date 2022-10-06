require("dotenv").config();
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

const client = new Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.commandSet = [];

const handlers = fs.readdirSync(`./src/handlers`);
// for (const folder of handlers) {
//   const handler = fs
//     .readdirSync(`./src/handlers/${folder}`)
//     .filter((file) => file.endsWith(".js"));
//   for (const file of handler) {
//     require(`./handlers/${folder}/${file}`)(client);
//   }
// }
for (const file of handlers) {
  require(`./handlers/${file}`)(client);
  console.log(`${file} Loaded`);
}

client.eventhandler();
client.cmdhandler();
client.login(process.env.TOKEN);
