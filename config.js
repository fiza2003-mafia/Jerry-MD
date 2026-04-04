const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CYPHER-X:~UEsDBBQAAAgIAKQ6hFyv0JwIVQQAAGwHAAAKAAAAY3JlZHMuanNvbpVUXZOiOBT9L3lta+QboaqrFgEVET9QEHtrHtIQIIqAScDGKf*7Fvb0zGzVzlQvTyG5uffcc87NN1BWmCIXdUD*BmqCW8hQv2RdjYAOxk2aIgIGIIEMAh2cZ8ZGsi951NqZ3FgkcAQSw3LxulgmYqbx4SmprrAN95PTM7gPQN28Fjj+Q8JIjRUHao6vCCwZxmvfCva5sR6VaOiL8vlqLbROmL9u7ch5Bvc+I8QEl5ld5+iMCCxc1K0hJp+D76wNbTdfbRVnx+Yi46tp*Xq7GFp8aIkb8N3mdvJtIprpyfgc*MvoTclfeOtcD1OUBrY7vZkklAUb58O9tpw8dd3CTUbmdp+9w6c4K1HiJKhkmHWf5n3j1odAGQqTvf9amVLRRd5xXJXDfajYaWhHHtWUfDmyUFl9kneDiJ2fhShuVukhxkumvT2Z2rW9zrUys8YyDd*4OcMXzP0KfE0+vHL6P7yPbBqOI7Utm6HSWd7LONw9hav81s7ctY*k9u3mzqjsc1bJfQ7+aB55zSo6Ep6jq723dpS8dchT1UrDzbWtFLtIy1kpJOxX3iFryJ9Qporgtx7diN2Lm8pRNJMqNeKENSVwZpDdFt9OsF7RtSoI7UEKCZzOYH4aa8t6Om9drRxqfNEkt+XtwEQLW6kW+vS4eX50dEKdkwCdvw8AQRmmjECGq7LfEyRlAGDSblFMEHvQC6berjxa2+AGw2TzxObLmRgnbSg3T5MavR5mHJ+7Bxzx0bl6BgNQkypGlKJkhimrSOchSmGGKND**joAJXpj78L15Ua8OAApJpQFZVMXFUw+ZP1xCuO4akq27crY7BeIAJ37uY0Yw2VGeyabEpI4xy0yc8go0FNYUPSjR0RQAnRGGvRjbs0q6an3x8okNJYTMADnhyQ4ATrQBFHlJEFUR7yqC6O*6JdrnxbW9ZcSMTAAxSOMl8WRzMmqKvCyLPF9ZH9w*4GwT5ggBnFBgQ7M1QIdy9FGTFPzlh0OBjYM1zB63j46+jDHO*l1NIxIsq1P0ib0vEOxNS4X8c1j11SoV*tTMbcN2jrMMcXgv5IAHcy1cDHiOs8fz7iYXSfey1Kx6+Atvh4lJWPn2lLdobTzp5NMPByveDhxecHVXs7a1aGR6pjTsZheW5ZYSrSRztJhMdmZ2XNfLUEtjtG*ih1er24RXLjj+HjK8mVxkBZK6x7dPZ1eVNsr993S4vLVBImEPUmBM2m46W7uL1VhvKk6dZoFp7gumI88e9ce42nAWP7dto+xKb4*V*hhqF6r*jfF6DH9JewV*J0oH4B7b3H3wS93v78jv5nFMQyHvCIGl5eVPdlZ03mQuRc22i3imXbZFfV86xuLRbfYGowH9*vXAagLyNKKnIEOYJmQ6lGcVE3vVadMqz8UMw3PMY1s0XdcQMqMn*7f4TOiDJ5roPOqKgsjVVDk96g1qeoZpDnQgXgu+OO2N3Nn1PWWQfYxT8Dov5nbgfs*UEsBAhQDFAAACAgApDqEXK*QnAhVBAAAbAcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAfQQAAAAA",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Jerry-MD Bot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Jerry-MD Bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Jerry-MD Bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923117298271",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*JerryMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ JerryMDOfficial ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
