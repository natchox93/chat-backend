export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { from, to, message } = req.body;
  if (!from || !to || !message) return res.status(400).json({ error: 'Missing fields' });

  if (!global.messages) global.messages = [];
  global.messages.push({ from, to, message, time: Date.now() });
  res.json({ success: true });
}
