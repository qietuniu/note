import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, DownLoad } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';

class Home extends Component {
	render() {
		return (
			<div>
				<HomeWrapper>
					<HomeLeft>
						<img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4358/a52cb0d0ef97a08087a234f4e25702b2471d49a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=''/>
						<Topic />
						<List />
					</HomeLeft>
					<HomeRight>
						<Recommend />
						<DownLoad>
							<img className="qrCode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=''/>
							<div className="info">
								<p className="title">下载简书手机App></p>
								<p className="subTitle">随时随地发现和创作内容</p>
							</div>
						</DownLoad>
						<Writer />
					</HomeRight>
				</HomeWrapper>
			</div>
		)
	}
	
	componentDidMount() {
		this.props.changeHomeData();
	}
}

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	}
})
export default connect(null,mapDispatch)(Home);
