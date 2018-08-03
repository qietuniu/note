import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem } from '../style';

class Writer extends PureComponent {
	render() {
		const { writerList } = this.props;
		return (			
			<WriterWrapper>
				<div className="writeHeader">
					<span>推荐作者</span>
					<div className="writerSwitch">
						<i className="iconfont spin">&#xe851;</i>
						换一批
					</div>
				</div>
				{
					writerList.map((item) =>{
						return (
							<WriterItem key = {item.get("id")}>
								<a className="avatar">
									<img src={item.get("imgUrl")} alt="" />
								</a>
								<a className="follow">
									+关注
								</a>
								<a className="name">{item.get("name")}</a>
								<p>写了{item.get("count")}字 · {item.get("fans")}喜欢</p>
							</WriterItem>
						)
					})
				}
				
				<div className="moreWriter">查看全部></div>
			</WriterWrapper>
		)
	}
}

const mapState = (state) =>({
	writerList: state.getIn(['home','writerList'])
})

export default connect(mapState,null)(Writer);
