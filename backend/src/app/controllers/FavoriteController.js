import Favorite from '../models/Favorite';
import User from '../models/User';
import Account from '../models/Account';

class FavoriteController {
  async index(request, response) {
    const favorites = await Favorite.findAll({
      where: {
        user_id: request.userId,
      },
    });

    return response.json(favorites);
  }

  async store(request, response) {
    const user = await User.findByPk(request.userId);
    const account = await Account.findByPk(request.params.account_id);

    const checkFavorite = await Favorite.findOne({
      where: {
        user_id: user.id,
        account_id: account.id,
      },
    });

    if (checkFavorite) {
      return response
        .status(400)
        .json({ error: 'This Account is your favorited.' });
    }

    const favorite = await Favorite.create({
      user_id: user.id,
      account_id: account.id,
    });
    return response.json({
      favorite,
    });
  }

  async update(request, response) {
    const user = await User.findByPk(request.userId);
    const account = await Account.findByPk(request.params.account_id);

    const checkFavorite = await Favorite.findOne({
      where: {
        user_id: user.id,
        account_id: account.id,
      },
    });

    if (checkFavorite) {
      return response
        .status(400)
        .json({ error: 'This Account is your favorited.' });
    }

    const favorite = await Favorite.update({
      user_id: user.id,
      account_id: account.id,
    });
    return response.json({
      favorite,
    });
  }

  async delete(request, response) {
    const user = await User.findByPk(request.userId);
    const account = await Account.findByPk(request.params.account_id);

    const favorite = await Favorite.findOne({
      where: {
        user_id: user.Id,
        account_id: account.id,
      },
    });

    await favorite.destroy();

    return response.send();
  }
}

export default new FavoriteController();
