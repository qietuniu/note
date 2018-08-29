import axios from 'axios';
import * as constants from './constants';

const changeLogin = () =>({
    type:constants.CHANGE_LOGIN,
    login:true
})

export const logout = () =>({
    type:constants.CHANGE_LOGOUT,
    login:false
})

export const login = (account, password) => {
    return(dispatch) => {
        axios.get('/api/login.json?account='+account+'&password='+password).then((res) => {
            if(res.data.success === true) {
                const result = res.data.data;
                if(result) {
                    dispatch(changeLogin());
                }else {
                    alert('登录失败！');
                }
            } else {
                console.log("error");
            }

        }).catch(() => {
            console.log("error");
        })
    }
}
