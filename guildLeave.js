const Discord = require('discord.js');

module.exports = (client, guild, message) => {

 

  
    let channel = client.channels.cache.get("channel ID")
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`Left Server!`)
    .setColor(`#19ec1d`)
    .setDescription(`Name & Id: **${guild.name}(\`${guild.id})\`**\nTotal Users: **${guild.memberCount}**\nOwner: **${guild.owner}**`)
    .setThumbnail(guild.iconURL());
     if (channel) channel.send(embed);
    
  } 
