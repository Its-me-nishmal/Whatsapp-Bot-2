let {Module} = require('../main');
/*
Credit: souravkl11/raganork
 Module({
pattern: 'autobio ?(.*)',
fromMe: false
*/
let on_aano = false
Module({on:"text",fromMe:false},async (m)=>{
if (on_aano=== true || on_aano === null) return;
if (m.message.toLowerCase() == "autobio off") {
on_aano = null
clearInterval(bioSetter)
await m.send("_Autobio disabled. Remove plugin for completing removal process!_")
}
on_aano = true
async function setAbout(){
let status = "📆 "+new Date().toLocaleDateString()+" ⌚ "+new Date().toLocaleTimeString()+" 𝘈𝘶𝘵𝘰𝘉𝘪𝘰 ⚡"
await m.client.updateProfileStatus(status)
return "Done"
}
m.jid = m.client.user.id
await m.send("_Auto bio activated!_");
let bioSetter = setInterval(setAbout,10000)
})