import * as Yup from 'yup';
import Limit from '../models/Limit';

class LimitController {
  async index(request, response) {
    const limit = await Limit.findOne({
      where: { id: request.params.id },
    });

    if (!limit) {
      return response
        .status(400)
        .json({ error: 'This limit already exists on database!' });
    }

    return response.json({
      limit,
    });
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      value: Yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const limitExists = await Limit.findOne({
      where: { value: request.body.value },
    });

    if (limitExists) {
      return response
        .status(400)
        .json({ error: 'This value already exists on database!' });
    }

    const limit = await Limit.create(request.body);
    return response.json({
      limit,
    });
  }
}

export default new LimitController();
