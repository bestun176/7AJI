const express = require("express");

const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {

  res.send(new Date());

});

const Discord = require('discord.js');

const client = new Discord.Client();

const cmd = require("node-cmd");

const ms = require("ms");

const fs = require('fs');

const ytdl = require("ytdl-core");

const canvas = require("canvas");

const convert = require("hh-mm-ss")

const fetchVideoInfo = require("youtube-info");

const simpleytapi = require('simple-youtube-api')

const util = require("util")

const gif = require("gif-search");

const jimp = require("jimp");

const guild = require('guild');

const hastebins = require('hastebin-gen');

const getYoutubeID = require('get-youtube-id');

const pretty = require("pretty-ms");

const moment = require('moment');

const request = require('request');

const dateFormat = require('dateformat');

const prefix = "b!" //prefix e bot dabni 

const developers = "627387357976592395" // id  acwnte xot dabni

client.on("ready", () => {
  
console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  ); ///ByEMPRATOR
  let statuses = [
    
    `b!help || kurd security || invite server`,
    `𝚂𝚃𝙰𝙵{𝚈} 7𝙰𝙹𝙸`,
  ];


setInterval(function() {

let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];

client.user.setActivity(STREAMING, {

type: "playing",

url: "https://www.twitch.tv/SYSETEM"

});

}, 3000);

});

////////

client.on('typingStart', (ch, user) => {
      if(user.presence.status === 'offline') {

          ch.send(`${user}(:  :blush:    دەستەکەو کەشف بوو ئەوە خۆت ۆفلاین ئەکەی خێرا خۆت ۆنلاین کە`)    //lera chiw pe xosha bele
          .then(msg => {
              msg.delete(10000)
          })
      }
  })

////////

////////

client.on('message', message => {

 

     if (message.content.startsWith("b!bans")) {

 

         message.guild.fetchBans()

 

         .then(bans => message.channel.send(`${bans.size} کەس باندە لەسێرڤەر 💔 `))

 

   .catch(console.error);

 

 }

 

 });

 

////////

////////

client.on('message', message => {

 

if(message.content.includes("@everyone")){

if(!message.member.hasPermission('KICK_MEMBERS')){

message.delete(); 

message.reply("ئێمە ستافی کاک حاجین زۆرت ماوە دووبارە ئێڤریوەن لێبەی گوت خوارد 😂😈")

}

 

}

 

});

 

 

client.on('message', message => {

 

if(message.content.includes("@everyone@everyone")){

if(!message.member.hasPermission('KICK_MEMBERS')){

message.delete(); 

message.reply("ئێمە ستافی کاک حاجین زۆرت ماوە دووبارە ئێڤریوەن لێبەی گوت خوارد 😂😈")

}

 

}

 

});

////////

////////

client.on("guildCreate", guild => {

 

  console.log(` کاک حاجی ! ${guild.name} owner ${guild.owner.user.username}!`)

 

 });

 client.on('message', message => {

      if(message.content === prefix + "close") {

                     if(!message.channel.guild) return message.reply('** سەرکەوتونەبوو **');

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ڕۆڵی نیە بۆئەم ئیشە__**');

 

               message.channel.overwritePermissions(message.guild.id, {

 

             SEND_MESSAGES: false

 

               }).then(() => {

 

                   message.reply("**__قفڵکرا  __ ✅ **")

 

               });

 

                 }

 

     if(message.content === prefix + "open") {

 

                         if(!message.channel.guild) return message.reply('** سەرکەوتوبوو **');

 

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('rolet niya')

 

               message.channel.overwritePermissions(message.guild.id, {

 

             SEND_MESSAGES: true

 

               }).then(() => {

 

                   message.reply("**__کرایەوە__✅**")

 

               });

 

     }

 

 });

 

////////

////////

client.on('message', message => {

    if (message.content.startsWith("b!avatar")) {

        var mentionned = message.mentions.users.first();

    var x5bzm;

      if(mentionned){

          var x5bzm = mentionned;

      } else {

          var x5bzm = message.author;

 

      }

        const embed = new Discord.RichEmbed()

        .setColor("RANDOM")

        .setImage(`${x5bzm.avatarURL}`)

      message.channel.sendEmbed(embed);

    }

});

////////

////////

client.on("guildMemberAdd", member => {

  let channel = member.guild.channels.find("name", "𝕎𝔼𝕃ℂ𝕆𝕄𝔼");

  let memberavatar = member.user.avatarURL;

  if (!channel) return;

  let embed = new Discord.RichEmbed()

    .setColor("RANDOM")

    .setThumbnail(memberavatar)

    .addField(" > :bust_in_silhouette: | ناوی مێمبەر : ", `${member}`)

    .addField(" > :hibiscus:| بەخێربێیت 😍",`, `)

    .addField(" > :id:| ئایدی میمبەر :", "**[" + `${member.id}` + "]**")

    .addField(" > :family_mwgb:⎮ تۆ کەسی ژمارە", `${member.guild.memberCount}`)

    .addField(" >  ⎮ناوی سێرڤەر", `${member.guild.name}`, true)

    .setFooter(`${member.guild.name}`)
 
    .setImage("https://cdn.discordapp.com/attachments/720348008751038488/749045892845273108/image0.gif")

    .setTimestamp();

  channel.sendEmbed(embed);

});

////////

////////

client.on("guildMemberRemove", member => {

  let channel = member.guild.channels.find("name", "𝕃𝔼𝔽𝕋");

  let memberavatar = member.user.avatarURL;

  if (!channel) return;

  let embed = new Discord.RichEmbed()

    .setColor("RANDOM")

    .setThumbnail(memberavatar)

    .addField("ناوی مێمبەر:", `${member}`)

    .addField("لێفتی کرد لە سێرڤەر")

    .addField(" ئێ لۆ کاکە لۆ  ")

    .addField("ژمارەی مێمبەری سێرڤەر", `${member.guild.memberCount}` + " کەس")

    .setFooter(`${member.guild.name}`)

    .setImage("https://cdn.discordapp.com/attachments/735170525327785995/742553053189636126/giphy.gif")

    .setTimestamp();

  channel.sendEmbed(embed);

  

  

});

////////

////////

client.on("message", message => {

if (message.content === "b!invite") {

if (!message.channel.guild)

return message.reply(

"Please Do not type bot commands in bot private chat"

);

let embed = new Discord.RichEmbed()

.setColor("GREEN")

.setTitle("=-->   کلیک لێرەبکە بۆئەوەی بۆتەکە جۆینی سێرڤەرت بکەم    <--=")

.setURL(

"https://discord.com/api/oauth2/authorize?client_id=738164262903611462&permissions=8&scope=bot"

) // Type Your Link here after ''

.setImage(

"https://cdn.discordapp.com/attachments/735170525327785995/742574076895428690/20200811_054343.gif"

)
.setFooter("ᵏᵃᵏ7aji", message.author.avatarURL);

message.channel.sendEmbed(embed);

}

});


////////

////////

client.on("message", message => {

if (message.content.split(" ")[0].toLowerCase() === "b!clear") {

const word = message.content;

const number = word.slice(7, word.length);

const int = Number(number);

if (!message.member.hasPermission("MANAGE_MESSAGES")) {

return message.channel.send(

"تۆ ناتوانیت ئەم فرمانە ئەنجەم بدەیت `MANAGE_MESSAGE`گەواد چونکە ڕۆڵەکەی تۆ ئەمەی پێ نیە "

);

}

if (int >= 101) {

return message.channel.send(

"بۆتەکە توانایی نیەلە 100چات زیاتر بسڕێتەوە"

);

}

if (!message.member.hasPermission("MANAGE_MESSAGES")) {

return message.channel.send(

"ناتوانى "

);

}

if (int == "1000") {

return message.channel.send("supply A Number to Delete");

} else if (isNaN(int)) {

return message.reply("Must be a number");

}

message.channel.bulkDelete(int).then(() => {

return message.channel

.send(`Cleared ${int} messages.`)

.then(m => m.delete(5000));

});

}

});

////////

////////

client.on("message", zaid => {

if (zaid.content === "b!bot") {

const bot = new Discord.RichEmbed()

.setAuthor(client.user.username, client.user.avatarURL)

.setColor("#00000")

.addField(

"**____خێرای خەتەکەت____**: ",

` ${Date.now() - zaid.createdTimestamp}` + "__ __ ",

true

)

.addField("**__سێرڤەرەکان__** : ", `→ ${client.guilds.size}`, true)

.addField("**__چەناڵەکەن__** : ", `→ ${client.channels.size} `, true)

.addField("**__میمبەرەکان__** : ", `→ ${client.users.size} `, true)

.addField("**__ناوی بۆتەکە__** : ", `→ ${client.user.tag} `, true)

.addField("**دروست کەری بۆتەکە** : ", `→ <@627387357976592395>`,

)

.setFooter(zaid.author.username, zaid.author.avatarURL);

zaid.channel.send(bot);

}

});

////////

////////

client.on('message', message => {

    if (message.content === "b!server") {

        if (!message.channel.guild) return

        var verificationLevel = message.guild.verificationLevel;

        const verificationLevels = ['None','Low','Meduim','High','Extreme'];

        var Y1 = message.guild.createdAt.getFullYear() - 2000

        var M2 = message.guild.createdAt.getMonth()

        var D3 = message.guild.createdAt.getDate()

        const xNiTRoZ = new Discord.RichEmbed()

         .setAuthor(message.author.username , message.author.avatarURL)

         .setColor('RANDOM')

         .setTimestamp()

         .setTitle(message.guild.name,message.guild.iconURL)

         .addField(':id: ئایدی سێرڤەر',`${message.guild.id}`,true)

         .addField(':date: کاتی درووستبوون',D3 + '.' + M2 + '.' + Y1,true)            

         .addField(':crown: ئۆنەری سێرڤەر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)            

         .addField(':busts_in_silhouette: ژمارەی مێمبەر ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)

         .addField(':speech_balloon: کەناڵ' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)

         .addField(':earth_asia: دەوڵەت',message.guild.region)

         .addField(':ribbon: ئیمۆجی سێرڤەر',`${message.guild.emojis.size}`,true)

         .addField(':construction: لیڤڵ',`${verificationLevels[message.guild.verificationLevel]}`,true)

         .addField(':closed_lock_with_key: ڕۆڵس  '+message.guild.roles.size+' ','Type `a!role` To See The Server Roles!')

         .setImage(

"https://cdn.discordapp.com/attachments/735170525327785995/742574076895428690/20200811_054343.gif"

)

         message.channel.send({embed:xNiTRoZ});

     }

    });

////////

////////

client.on('message', message => {

    if(message.content == 'b!member') {

    const embed = new Discord.RichEmbed()

    .setDescription(`**میمبەرەکانی سێرڤەر 🔋

:green_heart: onlina kan ${message.guild.members.filter(m=>m.presence.status == 'online').size}

:heart:mash xulakan       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}

:yellow_heart: idla kan      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   

:black_heart: offline   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 

:blue_heart:   ژمارەی هەموو میمبەرەکان    ${message.guild.memberCount}**`) 

  

         message.channel.send({embed});

 

    }

  });

////////

////////

client.on('message', message => {

    if (message.content === "b!role") {

        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')

        const embed = new Discord.RichEmbed()

        .setColor('RANDOM')

        .addField('ڕۆڵی سێرڤەر:',`**[${roles}]**`)

        message.channel.sendEmbed(embed);

    }

});

////////

////////

client.on('message', message => {

    if (message.content === "b!help") {

        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')

        const embed = new Discord.RichEmbed()

        .setColor('RANDOM') 

        .addField('b!sbot--بۆ زانیاری بۆتەکە لەچەند سێرڤەرە')

        

        .addField('b!clear--بۆ سڕینەوەی چات ')

        

        .addField('b!role-- بۆ زانیاری ڕۆڵ لەسێرڤەرەکەت')

        

        .addField('b!member--بۆ زانیاری میمبەر لەسێرڤەر  ')

        

        .addField('b!antibot on--بۆ ڕێگەکردنی بۆت بۆ سێرڤەر')

        

        .addField('b!antibot off--بۆ ڕێگە پێدانی بۆت بۆ سێرڤەر')

        

        .addField('b!invite--بۆ ئینڤایت کردنی بۆتەکە')

        

        .addField('b!help--بۆ زانیاری بۆتەکە')

        

        .addField('b!bans--بۆ زانیاری باندەکان لەسێرڤەرت')

        

        .addField('b!close--بۆ داخستنی چەناڵ')

        

        .addField('b!open--بۆ کردنەوەی چات')

        

        .addField('b!bc-- بۆ ڕیکلام کردن لەسێرڤەرەکەت بە بۆت')

        

        .addField('ofline--ئەگەر کەسێ خۆی ئۆڵاین کە ئەم بۆتە دەری دەخا')

        

        .addField('anti everyone--ئەمەش بەکاردی بۆ ئێڤریەوەن هەرکەسێ ئێڤری وەن لێدا ڕەشی دەکاتەوە')

        

        .addField('𝕃𝔼𝔽𝕋  -بەم جۆرە بنوسە لێفت بەشی لێفت کاردەکا')

        

        .addField('𝕎𝔼𝕃ℂ𝕆𝕄𝔼--بەم جۆرە بنوسە وێڵکەم بەشی وێڵکەم کاردەکا')



        .addField('b!role--بۆ زانیاری ڕۆڵ')
        

        .addField('b!server--بۆزانینی سێرڤەرەکەت')
        
        

        .addField('b!bot--بۆ زانیاری بۆتەکە لەچەند سێرڤەرە')

        .addField('BY 𝚔𝚊𝚔7aji⚜ & 7aji⚜')


        .setImage(

"https://cdn.discordapp.com/attachments/752982478897152121/755103333626282155/20200914_192921.gif"

)
        message.channel.sendEmbed(embed);

    }

        

    

});

////////

////////


////////

////////

 

 

///////kak7aji//////

client.on('message', message => {

  if(!message.channel.guild) return;

if(message.content.startsWith('b!bc')) {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

let copy = "By kak7aji & 7aji";

let request = `Requested By ${message.author.username}`;

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**   دەتەوێ ئەم نامەیە بنێری
نامەکە ئەمەیە☜︎︎︎ :** \` ${args}\``).then(msg => {

msg.react('✅')

.then(() => msg.react('❌'))

.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });

let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

reaction1.on("collect", r => {

message.channel.send(`☑ |   ${message.guild.members.size}  بەسەرکەوتوویی نێردرا `).then(m => m.delete(5000));

message.guild.members.forEach(m => {

var bc = new

Discord.RichEmbed()

.setColor('RANDOM')

.setTitle(':mega: ڕیکلام')

.addField('> سێرڤەر <', message.guild.name)

.addField('> نێردرا لەلایەن <', message.author.username)

.addField('<📨>   <📨> ',args)

.setImage('https://cdn.discordapp.com/attachments/703243461079597138/708070790079184957/image0.gif')

.setThumbnail('https://cdn.discordapp.com/attachments/703243461079597138/707245934530003328/3301a13ac3fcadfba8ccb2d6682e7701.gif')

.setFooter(copy, client.user.avatarURL);

m.send({ embed: bc })

msg.delete();

})

})

reaction2.on("collect", r => {

message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));

msg.delete();

})

})

}

})

////////

////////




client.on("message", async message => {
  if (message.author.id !== "627387357976592395") return;
  if (message.content === admin + "restart") {
    await cmd.run("refresh");
    await message.channel.send("Done,");
  }
});
///By Emprator//
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.split(" ")[0].toLowerCase() === prefix + "dayxa") {
    if (!message.channel.guild) return;

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message
        .reply("You Need ADMINISTRATOR Permission")
        .then(message => message.delete(5000));
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        const e = new Discord.RichEmbed()
          .setAuthor(
            "__***✅🗝بەسەرکەوتویی داخرا***__" + message.author.username
          )
          .setColor("#36393e");

        message.channel.send(e);
      });
  }
  if (message.content.split(" ")[0].toLowerCase() === prefix + "bekarawa") {
    if (!message.channel.guild) return;

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message
        .reply("You Need ADMINISTRATOR Permission")
        .then(message => message.delete(5000));
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        const e = new Discord.RichEmbed()
          .setAuthor("__***بەسەرکەوتویی کرایەوە***__" + message.author.username)
          .setColor("#36393e");

        message.channel.send(e);
      });
  }
});

client.on("message", message => {
  if (message.content.split(" ")[0].toLowerCase() === prefix + "clear") {
    const word = message.content;
    const number = word.slice(7, word.length);
    const int = Number(number);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "i need to be given Manage Messages permissions to use this command "
      );
    }
    if (int >= 101) {
      return message.channel.send(
        "The max number of messages you can delete is 100"
      );
    }
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "Looks like you dont have the permissions to do that"
      );
    }
    if (int == "") {
      return message.channel.send("supply A Number to Delete");
    } else if (isNaN(int)) {
      return message.reply("Must be a number");
    }
    message.channel.bulkDelete(int).then(() => {
      return message.channel
        .send(`Cleared ${int} messages.`)
        .then(m => m.delete(5000));
    });
  }
});
// ------------ = [Voice Commands] = ------------
//////////By Emprator//////////
//=============================== - [ Security ] - ===================================

var config = {
  events: [
    {
      type: "CHANNEL_CREATE",
      logType: "CHANNEL_CREATE",
      limit: 1,
      delay: 5000
    },
    {
      type: "CHANNEL_DELETE",
      logType: "CHANNEL_DELETE",
      limit: 1,
      delay: 5000
    },
    {
      type: "GUILD_MEMBER_REMOVE",
      logType: "MEMBER_KICK",
      limit: 1,
      delay: 5000
    },
    { type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 1, delay: 5000 },
    {
      type: "GUILD_ROLE_CREATE",
      logType: "ROLE_CREATE",
      limit: 1,
      delay: 5000
    },
    { type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 1, delay: 5000 }
  ]
};
client.on("error", e => console.error(e));
client.on("raw", packet => {
  let { t, d } = packet,
    type = t,
    { guild_id } = (d = d || {});
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild
    .fetchAuditLogs({ limit: 1, type: event.logType })
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild
        .fetchAuditLogs({ type: event.logType, user: executor })
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (
              entry.createdTimestamp > client.startedTimestamp &&
              !client.captures.includes(index)
            )
              uses += 1;
          });
          setTimeout(() => {
            client.captures[index] = index;
          }, event.delay || 2000);
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type
            });
          }
        })
        .catch(console.error);
    })
    .catch(console.error);
});

client.on("reachLimit", limit => {
  let log = limit.guild.channels.find(channel => channel.name === "logs");
  const loghack = new Discord.RichEmbed()
    .setAuthor(`${limit.user.tag}`, limit.user.avatarURL)
    .setColor("#36393e")
    .setDescription(
      ` ${limit.user.username}  ___*** ئەم کەسە هەوڵی داوە دەستکاری سێرڤەر بکات ڕۆڵی  لێکرایەوە سەیری بەشی لۆگ بکا تاکو بزانیت چی کردوە***___  `
    )
    .setTimestamp();
  log.send(loghack);
  limit.guild.owner.send(
    limit.user.username +
      "___** ئەم کەسە هەوڵی داوە دەستکاری سێرڤەر بکات ڕۆڵی لێکرایەوە سەیری بەشی لۆگ بکە بزانە چی کردوە**___"
  );
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id).catch(log.send);
  });
});

//=============================== - [ log ] - ===================================

client.on("guildCreate", guild => {
  var gimg;
  var gname;
  var gmemb;
  var groles;

  gname = guild.name;
  gimg = guild.iconURL;
  gmemb = guild.members.size;
  groles = guild.roles.map(r => {
    return r.name;
  });
  let channel = client.channels.get("711860003937714176");
  if (!channel) return;
  const e = new Discord.RichEmbed()
    .setColor("#36393e")
    .addField("Bot Joined Guild : ", `${guild.name}`)
    .addField("Guild id : ", `${guild.id}`)
    .addField("Guild UserCount : ", (gmemb = guild.members.size))
    .addField("Guild Owner : ", guild.owner)
    .setThumbnail(gimg)
    .setTimestamp();
  channel.send(e);
});
///emprator//
client.on("guildDelete", guild => {
  var gimg;
  var gname;
  var gmemb;
  var groles;

  gname = guild.name;
  gimg = guild.iconURL;
  gmemb = guild.members.size;
  groles = guild.roles.map(r => {
    return r.name;
  });
  let channel = client.channels.get("711860003937714176");
  if (!channel) return;
  const e = new Discord.RichEmbed()
    .setColor("#36393e")
    .addField("Bot Left Guild : ", `${guild.name}`)
    .addField("Guild id : ", `${guild.id}`)
    .addField("Guild UserCount : ", (gmemb = guild.members.size))
    .addField("Guild Owner : ", guild.owner)
    .setThumbnail(gimg)
    .setTimestamp();
  channel.send(e);
});

client.on("voiceStateUpdate", (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find("name", "logs");
  if (!ch) return;

  oldM.guild.fetchAuditLogs().then(logs => {
    let user = logs.entries.first().executor.username;

    if (m1 === false && m2 === true) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user} میوتی فۆیس کرا     ${newM} `)
        .setColor("#36393e")
        .setTimestamp();
      ch.send(embed);
    }
    if (m1 === true && m2 === false) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user}  میوتی ڤۆیسی کرایەوە  ${newM} `)
        .setColor("#36393e")
        .setTimestamp();
      ch.send(embed);
    }
    if (d1 === false && d2 === true) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user}  دیفێندی ڤۆیس کرا    ${newM}`)
        .setColor("#36393e")
        .setTimestamp();

      ch.send(embed);
    }
    if (d1 === true && d2 === false) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user}   دیڤێندی ڤۆیسی لابرا   ${newM}`)
        .setColor("#36393e")
        .setTimestamp();

      ch.send(embed);
    }
  });
});

client.on("messageUpdate", (message, newMessage) => {
  if (message.content === newMessage.content) return;
  if (
    !message ||
    !message.id ||
    !message.content ||
    !message.guild ||
    message.author.bot
  )
    return;
  const channel = message.guild.channels.find("name", "logs");
  if (!channel) return;

  let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setTitle(" دەسکاری کردنی مەسج  :  ")
    .addField("پێش دەسکاری کردن ", `${message.cleanContent}`)
    .addField(" دوای دەسکاری کردن   ", `${newMessage.cleanContent}`)
    .addField("  لەچەناڵی  ", `<#${message.channel.id}>`)
    .addField("  لەلایەن ", `<@${message.author.id}> `)
    .setColor("#36393e")
    .setTimestamp();
  channel.send({ embed: embed });
});

client.on("guildMemberAdd", member => {
  if (!member || !member.id || !member.guild) return;
  const guild = member.guild;

  const channel = member.guild.channels.find("name", "logs");
  if (!channel) return;
  let memberavatar = member.user.avatarURL;
  const fromNow = moment(member.user.createdTimestamp).fromNow();
  const isNew = new Date() - member.user.createdTimestamp < 900000 ? "🆕" : "";

  let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.avatarURL)
    .setColor("#36393e")
    .setDescription(` <@${member.user.id}> هاتە ناو سێرڤەر `)
    .setTimestamp();
  channel.send({ embed: embed });
});

client.on("guildMemberRemove", member => {
  if (!member || !member.id || !member.guild) return;
  const guild = member.guild;

  const channel = member.guild.channels.find("name", "logs");
  if (!channel) return;
  let memberavatar = member.user.avatarURL;
  const fromNow = moment(member.joinedTimestamp).fromNow();

  let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.avatarURL)
    .setColor("#36393e")
    .setDescription(` <@${member.user.id}>  دەرچو لە سێرڤەر  `)
    .setTimestamp();
  channel.send({ embed: embed });
});

client.on("messageDelete", message => {
  if (
    !message ||
    !message.id ||
    !message.content ||
    !message.guild ||
    message.author.bot
  )
    return;
  const channel = message.guild.channels.find("name", "logs");
  if (!channel) return;

  let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setTitle("سڕینەوەی نامە  :   ")
    .addField(" نامە  ", `${message.cleanContent}`)
    .addField("   لە چەناڵی  ", `<#${message.channel.id}>`)
    .addField("  لەلایەن ", `<@${message.author.id}> `)
    .setColor("#36393e")
    .setTimestamp();
  channel.send({ embed: embed });
});

client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild
      .fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = role.guild.channels.find("name", "logs");
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor("#36393e")
            .setTitle("سڕینەوەی ڕۆڵ ")
            .addField(" ناوی ڕۆڵی سڕاوە   ", role.name, true)
            .addField("  ئایدی ڕۆڵ ", role.id, true)
            .addField(" ڕەنگی ڕۆڵ  ", role.hexColor, true)
            .addField(" لەلایەن ", exec, true)
            .setColor("#36393e")
            .setTimestamp();

          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

client.on("roleCreate", role => {
  client.setTimeout(() => {
    role.guild
      .fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = role.guild.channels.find("name", "logs");
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle("ڕۆڵ دروست کردن    ")
            .addField("  ناوی ڕۆڵ  ", role.name, true)
            .addField("  ئایدی ڕۆڵ ", role.id, true)
            .addField("  ڕەنگی ڕۆڵ ", role.hexColor, true)
            .addField(" لەلایەن ", exec, true)
            .setColor("#36393e")
            .setTimestamp();

          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild
      .fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find("name", "logs");
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
            let embed = new Discord.RichEmbed()
              .setAuthor("باند کراو :  ")
              .setColor("#36393e")
              .setThumbnail(myUser.avatarURL)
              .addField("   ", `**${myUser.username}**`, true)
              .addField("   ", `**${exec}**`, true)
              .setFooter(myUser.username, myUser.avatarURL)
              .setTimestamp();
            log.send(embed).catch(e => {
              console.log(e);
            });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

client.on("guildBanRemove", (guild, member) => {
  client.setTimeout(() => {
    guild
      .fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find("name", "logs");
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
            let embed = new Discord.RichEmbed()
              .setAuthor("     ")
              .setColor("#36393e")
              .setThumbnail(myUser.avatarURL)
              .addField("   ", `**${myUser.username}**`, true)
              .addField("   ", `**${exec}**`, true)
              .setFooter(myUser.username, myUser.avatarURL)
              .setTimestamp();
            log.send(embed).catch(e => {
              console.log(e);
            });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

const db = require("quick.db"); // npm i quick.db

client.on("message", async message => {
  const prefix = "b!"; //comand

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  let antibot = await db.fetch(`antibot_${message.guild.id}`);
  if (antibot === null) antibot = "off";

  if (cmd === "antibot") {
    if (!message.guild.member(message.author).hasPermission("Owner"))
      return message.reply(`Only ADMINISTRATOR can use this command`);
    if (!args[0])
      return message.reply(
        `___***دەتەوێت بۆت بێتە ژوروە یان نەیەت؟***___ \`off / on\``
      );

    if (args[0] === "on") {
      db.set(`antibot_${message.guild.id}`, "on");
      message.reply(`__***ئێستا بۆت ناتوانێ جۆینی سێرڤەر بکات***__`);
    }

    if (args[0] === "off") {
      db.set(`antibot_${message.guild.id}`, "off");
      message.reply(`___***ئێستا بۆت دەتوانێ جۆینی سێرڤەر بکات***__`);
    }
  }
});
client.on("guildMemberAdd", async member => {
  let antibot = await db.fetch(`antibot_${member.guild.id}`);
  if (antibot === "on") {
    if (member.user.bot) member.kick("Anti bot is on !");
  }

  let channel = member.guild.channels.find("name", "logs");

  if (channel) {
    let embed = new Discord.RichEmbed().setTitle(`  (Member join)`)
      .setDescription(`
        ** Mmember Name: ** ${member.user.username}
        ** Mmeber ID: ** ${member.id}`);

    channel.send(embed);
  }
  member.guild.owner.send(embed);
});

client.on("message", message => {
  if (message.content == prefix + "bot") {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle("``INFO Bot`` ")
        .addField(
          "``My Ping``",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField(
          "``RAM Usage``",
          `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`,
          true
        )
        .addField("``servers``", [client.guilds.size], true)
        .addField("``channels``", `[ ${client.channels.size} ]`, true)
        .addField("``Users``", `[ ${client.users.size} ]`, true)
        .addField("``My Name``", `[ ${client.user.tag} ]`, true)
        .addField("``My ID``", `[ ${client.user.id} ]`, true)
        .addField("``My Prefix``", `[ t! ]`, true)
        .addField("``My Language``", `[ Java Script ]`, true)
        .setFooter("By | emprator ")
    });
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "slaw") {
    message.channel.send("Slaw baxer bey");
    message.channel.sendFile("");
  }
});



client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  // +say
  if (command === "say") {
    if (!message.channel.guild)
      return message.channel
        .send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("ببورە ئەم دەسەڵاتەت نیە ADMINISTRATOR");
    message.delete();
    message.channel.sendMessage(args.join(" "));
  }

  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("ببورە ئەم دەسەڵاتەت نیە MANAGE_MESSAGES");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    message.channel.sendEmbed(say);
    message.delete();
  }
});

client.on("message", async message => {
  var prefix = "b!"; // البرفكس
  if (message.content.includes("discord.gg")) {
    if (message.member.hasPermission("MANAGE_MASSAGES")) return;
    if (!message.channel.guild) return;
    message.delete();
  }
});


client.login("NzM4MTY0MjYyOTAzNjExNDYy.XyH7Cg.sBdwUb3E0Cp7el7cVVFANnRq7Z4");//tokne bot dabne

////////


client.login("NzM4MTY0MjYyOTAzNjExNDYy.XyH7Cg.sBdwUb3E0Cp7el7cVVFANnRq7Z4");//tokne bot dabne