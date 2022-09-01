import dbConnect from "./dbConnect.js";

export async function createUser(req, res) {
  const { email, password } = req.body;
  const db = dbConnect();
  const user = await db.collection('users').add({ email, password })
    .catch(err => res.status(500).send(err));
  // now we create a token here...
  res.send({ token: user.id });
}