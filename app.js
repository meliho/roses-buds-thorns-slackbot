const { App } = require('@slack/bolt');
require("dotenv").config();
const {User} = require('./models/user.js');

// Initializes your app with your bot token and app token
const app = new App({
  token: "xoxb-727653835412-2632751306370-iMFAxfoNtdwC8hjaPj6PK63x", //process.env.SLACK_BOT_TOKEN,
  signingSecret: "27834ac37380175591fe1838ec4cab29", //process.env.SLACK_SIGNING_SECRET,
  logLevel: "debug"
});


app.command("/rose", async ({ command, ack, say }) => {
  try {
    await ack();
    say("What's something great that happened today?");
  } catch (error) {
    console.log("err");
    console.error(error);
  }
});

app.command("/thorn", async({ command, ack, say }) => {
  try {
    await ack();
    say("What's something unfortunate that happened today?");
  } catch (error) {
    console.log("err");
    console.error(error);
  }
});

app.command("/bud", async({ command, ack, say }) => {
  try {
    await ack();
    say("What's something you are looking forward to?");
  } catch (error) {
    console.log("err");
    console.error(error);
  }
});

app.event("app_uninstalled", async ({ event, client, context }) => {
  try {
    var slackInstance = event.team_id;

    User.uninstall(slackInstance);
  } catch (error) {
    console.log("err");
    console.error(error);
  }
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3001);

  console.log('⚡️ Bolt app is running!');
})();
