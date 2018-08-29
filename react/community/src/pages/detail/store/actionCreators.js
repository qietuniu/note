import axios from 'axios'
import * as constants from './constants'


const changeDetail = (title,content) => ({
    type:constants.CHANGE_DETAIL,
    title,
    content
})
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then((res) => {     
            if(res.data.success === true){
                const result = res.data.data;
                dispatch(changeDetail(result.title,result.content));               
            }else{
                console.log("error");
            }
            
        }).catch(()=>{
            console.log("error");
        })
    }
}
