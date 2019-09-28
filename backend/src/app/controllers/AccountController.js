import * as Yup from 'yup';
import Account from '../models/Account';
import User from '../models/User';
import Limit from '../models/Limit';

class AccountController {
  async index(request, response) {
    const account = await Account.findOne({
      where: {
        user_id: request.params.id,
      },
    });

    if (!account) {
      return response.status(400).json({ error: 'You haved a account!' });
    }

    return response.json({
      account,
    });
  }

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
      sum: request.body.value,
      user_id: user.id,
      limit_id: request.body.limit_id,
    });
    return response.json({
      account,
    });
  }

  async update(request, response) {
    const account = await Account.findOne({
      where: {
        user_id: request.userId,
      },
    });

    const { limit_id, value } = request.body;
    const limit = await Limit.findByPk(limit_id);

    if (value < 0) {
      if (value + account.sum <= limit.value) {
        return response.status(400).json({ error: 'Your limited insuficient' });
      }

      if (account.sum <= limit.value) {
        return response.status(400).json({ error: 'Balance insuficient' });
      }

      await account.update({ sum: account.sum + value });
    }

    await account.update({ sum: account.sum + value });

    return response.json(account);
  }
}

export default new AccountController();
