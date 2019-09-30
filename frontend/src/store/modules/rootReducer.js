import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import account from './account/reducer';

export default combineReducers({ auth, user, account });
