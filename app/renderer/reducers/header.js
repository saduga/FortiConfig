import { handleActions } from 'redux-actions';
import actions from '../actions/header';

export default handleActions({
    [actions.init]: (state, action) => {
        return { ...state, ...action.payload };
    }
}, {});