import axios from 'axios'
import { CHANGE_HOME_DATA, ADD_ARTICLE_LIST, TOGGLE_TOP } from './constants'
import { fromJS } from 'immutable';

const changeHomeInfo = (result) => ({
	type: CHANGE_HOME_DATA,
	topicList:result.topicList,
	recommendList:result.recommendList,
	articleList:result.articleList,
	writerList:result.writerList,
})
const addHomeList = (list,nextPage) => ({
	type: ADD_ARTICLE_LIST,
	list:fromJS(list),
	nextPage
})

export const getHomeInfo = () => {
	return (dispatch) =>{
		axios.get('/api/home.json').then((res) => {		
			if(res.data.success === true){
				const result = res.data.data;
				dispatch(changeHomeInfo(result));				
			}else{
				console.log("error");
			}
			
		}).catch(()=>{
			console.log("error");
		})
	}	
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page='+page).then((res) => {		
			if(res.data.success === true){
				const result = res.data.data;
				dispatch(addHomeList(result,page+1));				
			}else{
				console.log("error");
			}
			
		}).catch(()=>{
			console.log("error");
		})
	}
}

export const toggleTop = (isShow) =>({
	type:TOGGLE_TOP,
	isShow
})
