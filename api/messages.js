export default function handler(req, res) {
  const { user1, user2 } = req.query;
  if (!user1 || !user2) return res.status(400).json({ error: 'Missing users' });

  const arr = global.messages || [];
  const chat = arr.filter(
    m => (m.from === user1 && m.to === user2) || (m.from === user2 && m.to === user1)
  );
  res.json({ messages: chat });
}
