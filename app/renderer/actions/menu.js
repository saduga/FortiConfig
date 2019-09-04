import { createAction } from 'redux-actions';

export default {
  init: createAction('MENU_INIT'),
  select: createAction('MENU_SELECT')
};
