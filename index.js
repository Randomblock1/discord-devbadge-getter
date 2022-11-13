const applicationId = "PASTE_ID_HERE";
const token = "PASTE_TOKEN_HERE";
// CHANGE THE VALUES ABOVE THIS LINE
// MAKE SURE TO ENCLOSE THEM IN QUOTATION MARKS
// DON'T CHANGE ANYTHING BELOW THIS LINE

if (token.length !== 72 || applicationId.length !== 19) {
  console.log('Invalid token or application ID.\n' + 
  'Please visit https://discord.com/developers/applications and copy the values from there.');
  process.exit(1);
}

const { Events, REST, Routes, Client, GatewayIntentBits, } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(token).then(_ => {
  rest.put(Routes.applicationCommands(client.user.id), {
    body: [
      {
        name: "continue",
        description: "One step closer to the badge!",
      },
    ],
  });
});

const rest = new REST({ version: "10" }).setToken(token);

async function reply(interaction) {
  return interaction.reply(
    "Next Step: Visit https://discord.com/developers/active-developer\n" +
    "If that's not working, please wait 24 hours and try again."
  );
}

client.on(Events.InteractionCreate, (interaction) => {
  reply(interaction);
});

console.log("Almost there! Don't close the bot just yet!");
console.log(`Next Step: Visit https://discord.com/oauth2/authorize?client_id=${applicationId}&scope=applications.commands&permissions=2147502080`);
