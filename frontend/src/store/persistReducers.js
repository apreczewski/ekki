import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'bankekki',
      storage,
      whitelist: ['auth', 'user', 'account'],
    },
    reducers
  );

  return persistedReducer;
};
