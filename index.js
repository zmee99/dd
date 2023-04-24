const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('7UP اهلا بك في سيستم')
});

app.listen(3000, () => {
  console.log('7up GO GO ');
});

const Discord = require("discord.js");
const ms = require("ms");
const data = require("st.db");
const axios = require("axios");
const probot = require("probot-tax");
const { QuickDB } = require('quick.db');
const DB = new QuickDB()
const client = new Discord.Client ({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});

const { MessageActionRow , MessageButton } = require('discord.js');

const { DiscordModal,ModalBuilder,ModalField } = require ('discord-modal');
DiscordModal(client)

// تعديل 
const prefix = "-"; // البريفكس الي بدكياه  

require('events').EventEmitter.defaultMaxListeners = 9999999; // لا تلعب بالكود هذا

// تعديل 
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag} Online`);
client.user.setActivity(`here`, {type:"PLAYING"}) // حط الحالة الي بدكياه
client.user.setStatus("online"); // هنا لو عايز تغير تعيين الحاله مثال
});

// ================================================================================
// PLAYING   1
// LISTENING 2
// WATCHING  3
// COMPETING 4
// ================================================================================
// online    1
// idle      2
// dnd       3
// offline   4
// ================================================================================

process.on("uncaughtException" , error => {
return;
})

process.on("unhandledRejection" , error => {
return;
})

process.on("rejectionHandled", error => {
return;
});

// تنزل الاكواد الي تريدها هنا
// يلزم يكون اصدار 13 اهم شي عشان يشتغلو 
// سطر 73 نزل فيه اول كود وبسس









client.login(process.env.token).catch((error) => {
console.warn("\033[31m Token Invalid")
})
