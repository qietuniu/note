import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends Component {
    render() {
        const { login } =this.props;
        if (login) {
            return <div> 写文章</div>
        }else {
            return <Redirect to='/login'></Redirect>
        }
        
    }

}

const mapState = (state) => ({
    login: state.getIn(["login","login"])
})

export default connect(mapState,null)(Write);
