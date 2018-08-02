import React, {Component} from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

class Home extends Component {
	render() {
		return (
			<div>
				<HomeWrapper>
					<HomeLeft>
						<img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4358/a52cb0d0ef97a08087a234f4e25702b2471d49a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
						<Topic />
						<List />
					</HomeLeft>
					<HomeRight>
						<Recommend />
						<Writer />
					</HomeRight>
				</HomeWrapper>
			</div>
		)
	}
}
export default Home;
