import React, { useState } from 'react';

import Search from '../../components/Search';
import Item from '../../components/Item';

import { Container, ListFavorite } from './styles';

export default function Transfer() {
  const [favorites, setFavorites] = useState(['teste', 'teste3']);
  const [newFavorite, setNewFavorite] = useState('');

  function AddFavorite() {
    setFavorites([...favorites, newFavorite]);
    newFavorite('');
  }

  return (
    <Container>
      <strong>List of Users to Transfer</strong>
      <Search value={newFavorite} onClick={AddFavorite} />
      <ListFavorite>
        {favorites.map(favorite => (
          <Item favorite={favorite} />
        ))}
      </ListFavorite>
    </Container>
  );
}
