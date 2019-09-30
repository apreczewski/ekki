import React, { useState, useEffect } from 'react';

import { MdSend } from 'react-icons/md';
import api from '../../services/api';

import {
  Container,
  Content,
  ListFavorite,
  Scroll,
  Favorite,
  InfoAccount,
} from './styles';

export default function Transfer() {
  const [favorites, setFavorites] = useState([]);
  const [newFavorite, setNewFavorite] = useState('');

  useEffect(() => {
    async function loadFavorites() {
      const response = await api.get('favorites');
      setFavorites(response.data);
    }

    loadFavorites();
  }, []);

  async function handleAddFavorite() {
    await api.post('favorites', {
      cpf: newFavorite,
    });

    const response = await api.get('favorites');
    setFavorites(response.data);

    setNewFavorite('');
  }

  return (
    <Container>
      <strong>List of Users to Transfer</strong>
      <Content>
        <input
          type="value"
          placeholder="CPF"
          value={newFavorite}
          onChange={event => setNewFavorite(event.target.value)}
        />
        <button type="button" onClick={handleAddFavorite}>
          <MdSend />
        </button>
      </Content>
      <ListFavorite>
        <Scroll>
          {favorites.map(favorite => (
            <Favorite>
              <strong>A</strong>
              <InfoAccount>
                <strong>{favorite.Account.User.name}</strong>
                <div>
                  <span>{`Ag ${favorite.Account.ag}`}</span>
                  <span>{`Number ${favorite.Account.number}`}</span>
                </div>
              </InfoAccount>
            </Favorite>
          ))}
        </Scroll>
      </ListFavorite>
    </Container>
  );
}
