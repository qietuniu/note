import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA } from './constants'

const defaultState = fromJS({
	topicList: [],
	articleList:[],
	recommendList:[],
	writerList:[]
	
});

export default (state = defaultState, action) => {
	switch(action.type){
		case CHANGE_HOME_DATA:
			return state.merge({
				"topicList":fromJS(action.topicList),
				"articleList":fromJS(action.articleList),
				"recommendList":fromJS(action.recommendList),
				"writerList":fromJS(action.writerList),
			})
		default:
			return state
	}

}
