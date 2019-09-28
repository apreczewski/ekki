import React, { useState, useEffect } from 'react';

import { MdSend } from 'react-icons/md';
import Item from '../../components/Item';
import api from '../../services/api';

import { Container, ListFavorite } from './styles';

export default function Transfer() {
  const [favorites, setFavorites] = useState(['teste', 'teste3']);
  const [newFavorite, setNewFavorite] = useState('');

  useEffect(() => {
    const storageFavorite = localStorage.getItem('favorites');

    if (storageFavorite) {
      setFavorites(JSON.parse(storageFavorite));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  async function handleAddFavorite() {
    const user = await api.get(`/users/${newFavorite}`);
    // const account = await api.get(`/accounts`)
    console.log();
    // setNewFavorite(response.data);
    setFavorites([...favorites, newFavorite]);
    setNewFavorite('');
  }

  return (
    <Container>
      <strong>List of Users to Transfer</strong>
      <input
        type="value"
        placeholder="CPF"
        value={newFavorite}
        onChange={event => setNewFavorite(event.target.value)}
      />
      <button type="button" onClick={handleAddFavorite}>
        <MdSend />
      </button>
      <ListFavorite>
        {favorites.map(favorite => (
          <Item favorite={favorite} />
        ))}
      </ListFavorite>
    </Container>
  );
}
