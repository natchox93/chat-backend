export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { user, contact } = req.body;
  if (!user || !contact) return res.status(400).json({ error: 'Missing fields' });

  if (!global.users?.includes(user) || !global.users.includes(contact)) {
    return res.status(400).json({ error: 'User or contact does not exist' });
  }
  if (!global.contacts) global.contacts = {};
  if (!global.contacts[user]) global.contacts[user] = [];
  if (!global.contacts[user].includes(contact)) {
    global.contacts[user].push(contact);
  }
  res.json({ success: true, contacts: global.contacts[user] });
}
