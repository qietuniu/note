import * as constants  from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (list) => ({
	type:constants.CHANGE_LIST,
	list:fromJS(list),
	totalPage: Math.ceil (list.length / 10)
})

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});


export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
});

export const getList = () => {
	return (dispatch) => {
		axios.get('api/headerList.json').then((res) => {
			const data=res.data;
			if(data.success===true){
				dispatch(changeList(data.data));
			}else{
				console.log("error");
			}
		}).catch(() => {
			console.log("error");
		})
	}
};
