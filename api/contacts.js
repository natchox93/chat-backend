export default function handler(req, res) {
  const { user } = req.query;
  if (!user) return res.status(400).json({ error: 'Missing user' });

  const list = global.contacts?.[user] || [];
  res.json({ contacts: list });
}
