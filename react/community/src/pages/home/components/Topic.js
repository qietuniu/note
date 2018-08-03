import React, {Component} from 'react';
import { connect } from 'react-redux';
import {TopicWrapper, TopicItem, MoreTopic } from '../style';

class Topic extends Component {
	render() {
		const { topicList } = this.props;
		return (
			<TopicWrapper>
			{
				topicList.map((item) =>(
						<TopicItem key={item.get('id')}>
							<img className="topic-pic" src={item.get('imgUrl')} alt=''/>
							{item.get('title')}
						</TopicItem>
				))
			}
			<MoreTopic>			
              	更多热门专题 >
			</MoreTopic>
			</TopicWrapper>
		)
	}
}

const mapState = (state) => ({
	
	topicList: state.getIn(['home','topicList'])

})
export default connect(mapState,null)(Topic);
