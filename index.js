/add this to your index


client.on('messageDelete', message => {
let channel = client.channels.cache.get("915131165290147901")

const embed = new Discord.MessageEmbed()
.setTitle("message deleted")
.setDescription(`a message was deleted by: ${message.author.username}`)
 if (channel) channel.send(embed);
});
