import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import auth from '../../config/auth';

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      cpf: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { cpf } = request.body;

    const user = await User.findOne({ where: { cpf } });

    if (!user) {
      return response.status(401).json({ error: 'User not found' });
    }

    const { id, name } = user;

    return response.json({
      user: {
        id,
        name,
        cpf,
      },
      token: jwt.sign({ id }, auth.secret, { expiresIn: auth.expiresIn }),
    });
  }
}

export default new SessionController();
