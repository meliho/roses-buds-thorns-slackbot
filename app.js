const { App } = require('@slack/bolt');
const {User} = require('./models/user.js');

if(process.env.NODE_ENV !== 'production') {
  require("dotenv").config();
}

// Initializes your app with your bot token and app token
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
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
