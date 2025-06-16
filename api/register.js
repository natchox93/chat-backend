export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'No username provided' });

  if (!global.users) global.users = [];
  if (global.users.includes(username)) return res.status(400).json({ error: 'User exists' });

  global.users.push(username);
  // Init contacts
  if (!global.contacts) global.contacts = {};
  global.contacts[username] = [];
  res.json({ success: true, username });
}
