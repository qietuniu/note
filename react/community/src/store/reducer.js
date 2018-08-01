//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
//import headerReducer from '../common/header/store/reducer'

//export default combineReducers({
//	header: headerReducer
//})

const reducer = combineReducers({
	header: headerReducer
})

export default reducer