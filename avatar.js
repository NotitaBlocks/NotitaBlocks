const { Client, Message, MessageEmbed } = require("discord.js");
let cooldown = new Set();

module.exports = {
    name : 'avatar',
    aliases : ['purge'],
    run : async(client, message, args) => {
            
            
            
            const espera = new MessageEmbed()
    
    .setDescription(`<a:Error:833124229930942516> ${message.author} Wait 20s to be able to write this command`)
    .setColor("RED")
    
    message.delete()
    if(cooldown.has(message.author.id)){
      message.channel.send(espera).then (msg => msg.delete({timeout: 10000}))
      
      return;
    }
    
    cooldown.add(message.author.id);
    const discord = require("discord.js");
return;
    
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, 20000);
    
    
    
    if(message.channel.id === "829185856337477682") {

            
            
            
            
      const member = message.mentions.members.first() || message.member;
      
      message.channel.send(
        new MessageEmbed()
        
        .setTitle(`${member.user.tag}'s avatar`)
        .setImage(member.user.displayAvatarURL ({dynamic: true, size: 512}))
        
        )
    }
    else {
      
      const canal = new MessageEmbed()
      .setDescription(`<a:Error:833124229930942516> Ups!, ${message.author} In this channel you cannot execute , test commands in the channel <#829185856337477682>`)
      .setColor("RANDOM")
      message.channel.send(canal).then (msg => msg.delete({timeout: 10000}))
    }
  }
}
