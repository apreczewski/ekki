import * as Yup from 'yup';
import Balance from '../models/Balance';

class BalanceController {
  async store(request, response) {
    const schema = Yup.object().shape({
      value: Yup.float().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const balance = await Balance.create(request.body);
    return response.json({
      balance,
    });
  }
}

export default new BalanceController();
