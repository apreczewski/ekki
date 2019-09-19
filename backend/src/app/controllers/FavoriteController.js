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
    const account = await Account.findByPk(request.body.account_id);

    if (user.id === account.user_id) {
      return response
        .status(400)
        .json({ error: "You can't add yourself favorite." });
    }

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
    const favorite = await Favorite.findOne({
      where: {
        user_id: request.userId,
        account_id: request.body.account_id_current,
      },
    });

    if (!favorite) {
      return response
        .status(401)
        .json({ error: 'This Account is your favorited.' });
    }

    await favorite.update({
      account_id: request.body.account_id_new,
    });

    return response.json({
      favorite,
    });
  }

  async delete(request, response) {
    const user = await User.findByPk(request.userId);
    const account = await Account.findByPk(request.body.account_id);

    if (!account) {
      return response.status(400).json({ error: "This account don't exist." });
    }

    const favorite = await Favorite.findOne({
      where: {
        user_id: user.id,
        account_id: account.id,
      },
    });

    if (!favorite) {
      return response
        .status(400)
        .json({ error: "You can't delete this favorite." });
    }

    await favorite.destroy();

    return response.send();
  }
}

export default new FavoriteController();
