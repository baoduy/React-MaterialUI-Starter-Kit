import {
  TYPES
} from './UserActions';
import {
  Merge
} from '../../commons/commonFuncs';
import {
  isArray
} from 'lodash';
// const getUser = makeAsyncReducer(getUserById, {
//   defaultData: {}
// });
// const getUsers = makeAsyncReducer(getAllUsers, {
//   defaultData: []
// });
// export default composeReducers({
//   UserById: getUser,
//   AllUsers: getUsers
// });
//export default getUsers;
export default (state = {
  data: []
}, action) => {
  switch (action.type) {
    case TYPES.GetAllUsers:
      return { ...state,
        data: [...action.payload]
      };
    case TYPES.SaveUser:
      return { ...state,
        data: Merge(state.data, isArray(action.payload) ? action.payload : [action.payload])
      };
    case TYPES.DeleteUser:
      const oldUsers = [...state.data];
      return {
        ...state,
        data: oldUsers.filter(i => i.id !== action.payload)
      };
    default:
      return state;
  }
};