import axios from 'axios'
import { CHANGE_HOME_DATA } from './constants'

const changeHomeInfo = (result) => ({
	type: CHANGE_HOME_DATA,
	topicList:result.topicList,
	recommendList:result.recommendList,
	articleList:result.articleList,
	writerList:result.writerList,
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
