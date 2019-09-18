import * as Yup from 'yup';
import Account from '../models/Account';
import User from '../models/User';

class AccountController {
  async store(request, response) {
    const user = await User.findByPk(request.userId);

    const checkUserAccount = await Account.findOne({
      where: {
        user_id: user.id,
      },
    });

    if (checkUserAccount) {
      return response.status(400).json({ error: 'You haved a account!' });
    }

    const schema = Yup.object().shape({
      limit_id: Yup.number().required(),
      ag: Yup.string().required(),
      number: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const account = await Account.create({
      ag: request.body.ag,
      number: request.body.number,
      user_id: user.id,
      limit_id: request.body.limit_id,
    });
    return response.json({
      account,
    });
  }
}

export default new AccountController();