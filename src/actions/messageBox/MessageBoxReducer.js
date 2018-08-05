import { TYPES } from './MessageBoxActions';

export default function MessageBoxReducer(state = {}, action) {
  switch (action.type) {
    case TYPES.Shown:
      return Object.assign(action.payload, {
        open: true
      });
    case TYPES.Hided:
      return Object.assign({}, state, {
        message: '',
        handler: undefined,
        open: false
      });
    default:
      return state;
  }
}
