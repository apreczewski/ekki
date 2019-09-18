import * as Yup from 'yup';
import Transfer from '../models/Transfer';

class TransferController {
  async store(request, response) {
    const schema = Yup.object().shape({
      debit: Yup.float().required(),
      credit: Yup.float().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const transfer = await Transfer.create({
      debit: request.body.debit,
      credit: request.body.credit,
      favorite_id: request.body.favorite_id,
    });
    return response.json({
      transfer,
    });
  }
}

export default new TransferController();
