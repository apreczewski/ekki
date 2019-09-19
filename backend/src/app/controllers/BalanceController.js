import * as Yup from 'yup';
import Balance from '../models/Balance';

class BalanceController {
  async store(request, response) {
    const schema = Yup.object().shape({
      value: Yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const balance = await Balance.create({
      value: request.body.value,
      account_id: request.userId,
    });
    return response.json({
      balance,
    });
  }
}

export default new BalanceController();
