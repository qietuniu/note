import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'; 

class Detail extends PureComponent {
    render() {
        console.log(this.props);
        const { title, content, match } = this.props;
        return(
            <DetailWrapper>
		      <Header>{title}{match.params.id}</Header>
              <Content dangerouslySetInnerHTML={{__html: content}}/>
		    </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) =>({
    title:state.getIn(["detail","title"]),
    content:state.getIn(["detail","content"])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
});

export default connect(mapState,mapDispatch)(Detail);