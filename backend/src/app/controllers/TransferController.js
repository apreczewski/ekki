import * as Yup from 'yup';
import Transfer from '../models/Transfer';
import Favorite from '../models/Favorite';
import User from '../models/User';
import Account from '../models/Account';

class TransferController {
  async store(request, response) {
    const schema = Yup.object().shape({
      debit: Yup.number().required(),
      credit: Yup.number().required(),
      favorite_id: Yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { debit, credit, favorite_id } = request.body;
    const favorite = await Favorite.findByPk(favorite_id);
    const user = await User.findByPk(request.userId);
    const account = await Account.findByPk(user.id);

    if (favorite.user_id !== user.id) {
      return response
        .status(400)
        .json({ error: "This account don't is your favorite." });
    }

    if (account.sum < debit) {
      return response.status(400).json({ error: 'Your balance insuficient.' });
    }

    // Atualizar o sum da conta de ambos os usuários
    // Registra no balance da conta de ambos os usuários

    const transfer = await Transfer.create({
      debit,
      credit,
      favorite_id,
    });
    return response.json({
      transfer,
    });
  }
}

export default new TransferController();
