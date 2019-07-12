import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const user = await User.create(req.body);
    return res.json(user);
  }

  async show(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }
}

export default new UserController();
