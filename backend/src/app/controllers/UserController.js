import * as Yup from 'yup';
import User from '../models/User';
import Account from '../models/Account';

class UserController {
  async index(request, response) {
    const user = await User.findOne({
      where: { id: request.userId },
    });

    if (!user) {
      return response
        .status(400)
        .json({ error: 'User already exists on database!' });
    }

    return response.json({
      user,
    });
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      phone: Yup.string(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({
      where: { cpf: request.body.cpf },
    });

    if (userExists) {
      return response
        .status(400)
        .json({ error: 'CPF already exists on database!' });
    }

    const user = await User.create(request.body);

    const account = await Account.create({
      ag: '0001',
      number: String(Math.floor(Math.random() * 100000) * 1),
      sum: 1000,
      user_id: user.id,
      limit_id: 1,
    });

    return response.json({
      user,
      account,
    });
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = request.body;

    const user = await User.findByPk(request.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return response.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return response.status(401).json({ error: 'Password does not mach' });
    }

    const { id, name, provider } = await user.update(request.body);

    return response.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
