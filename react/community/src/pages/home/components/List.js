import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { ListWrapper, ListItem, ListInfo } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
	
	render() {
		const { articleList, getMoreList, page } = this.props;
		
		return (
			<ListWrapper>
			{
				articleList.map((item,index) => {
					return (
						<Link key = {index} to="/detail" >
							<ListItem >
								<img className="pic" src={item.get('imgUrl')} alt=''/>
								<ListInfo>
									<h3 className="title">{item.get('title')} </h3>
									<p className = "desc">{item.get('desc')} </p>
								</ListInfo>
							</ListItem>	
						</Link>
					)
				})
			}	
			<a className="load-more" onClick={() =>{getMoreList(page)}}>阅读更多</a>
			</ListWrapper>
		)
	}
}

const mapState = (state) => ({
	articleList: state.getIn(['home','articleList']),
	page: state.getIn(["home",'articlePage'])
});

const mapDispatch = (dispatch) => ({
	getMoreList(page){
		dispatch(actionCreators.getMoreList(page))
	}
})
export default connect(mapState, mapDispatch)(List);
