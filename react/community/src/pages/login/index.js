import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
//import { actionCreators } from './store';

class Login extends PureComponent {
    render() {
        const { showScroll } =this.props;
        return (
            <LoginWrapper>
                < LoginBox>
                    <Input />
                </LoginBox>
            </LoginWrapper>
        )
    }

}

const mapState = (state) => ({
   
})
const mapDispatch = (dispatch) => ({
   
})
export default connect(mapState,mapDispatch)(Login);
