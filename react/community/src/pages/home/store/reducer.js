import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA, ADD_ARTICLE_LIST, TOGGLE_TOP } from './constants'

const defaultState = fromJS({
	topicList: [],
	articleList:[],
	recommendList:[],
	writerList:[],
	articlePage:1,
	showScroll:false
	
});

const change_home_data = (state,action) => {
	return state.merge({
		"topicList": fromJS(action.topicList),
		"articleList": fromJS(action.articleList),
		"recommendList": fromJS(action.recommendList),
		"writerList": fromJS(action.writerList),
	});
};
const add_article_list = (state,action) => {
	return state.merge({
		"articleList": state.get('articleList').concat(action.list),
		"articlePage": action.nextPage
	})
};

export default (state = defaultState, action) => {
	switch(action.type){
		case CHANGE_HOME_DATA:
			return change_home_data(state,action);
		case ADD_ARTICLE_LIST:
			return add_article_list(state,action);
		case TOGGLE_TOP:
			return state.set("showScroll", action.isShow)
		default:
			return state
	}

}
