const Discord = require('discord.js');

module.exports = (client, guild, message) => {



    let channel = client.channels.cache.get("your channel ID");
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`New server added!`)
    .setColor(`#19ec1d`)
    .setDescription(`Name & Id: **${guild.name}(\`${guild.id})\`**\nTotal Users: **${guild.memberCount}**\nOwner: **${guild.owner}**
    Total servers :${client.guilds.cache.size}`)
    .setThumbnail(guild.iconURL());
     if (channel) channel.send(embed);
  } 
