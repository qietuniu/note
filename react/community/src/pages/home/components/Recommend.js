import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem} from '../style'

class Recommend extends PureComponent {
	render() {
		const { list } =this.props;
		
		return (
			<RecommendWrapper>
				{
					list.map((item) => {
						return (
							<RecommendItem key={item.get('id')}>
								<img className="pic" src={item.get('imgUrl')} alt=""/>
							</RecommendItem>
						)
						
					})
				}
				
			</RecommendWrapper>
		)
	}
}

const mapState = (state)=>({
	list: state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recommend);
