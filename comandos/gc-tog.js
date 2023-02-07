let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*▪𝐁𝐨𝐭𝐉𝐞𝐧𝐧𝐱𝐓𝐚𝐭𝐢:* ${pesan}`
let teks = `*⺀𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀 𝐃𝐄 𝐁𝐨𝐭𝐉𝐞𝐧𝐧𝐱𝐓𝐚𝐭𝐢⺀*\n\n▪ ${oi}\n\n▪ *𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐠𝐞𝐧𝐞𝐫𝐚𝐥:*\n`
for (let mem of participants) {
teks += `┣✉️ @${mem.id.split('@')[0]}\n`}
teks += `└𝐉𝐞𝐧𝐧𝐱𝐓𝐚𝐭𝐢`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
