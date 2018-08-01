import React from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store';

const getListArea = (show) => {
	if(show){
		return (
			<SearchInfo>
				<SearchInfoTitle>
					热门搜索
					<SearchInfoSwitch>换一批</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
				</SearchInfoList>
			</SearchInfo>			
		)
	}else{
		return null
	}
}
const Header = (props) => {
	return (
		<HeaderWrapper>
			<Logo />
			<Nav>
				<NavItem className="fl active">首页</NavItem>
				<NavItem className="fl">下载App</NavItem>
				<NavItem className="fr">登录</NavItem>
				<NavItem className="fr">
					<i className="iconfont">&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition in={props.focused}
									timeout={200}
									classNames="slide">
						<NavSearch  className={props.focused ?'focused':''} 
								onFocus={props.handleIputFocus}
								onBlur={props.handleInputBlur}></NavSearch>
					</CSSTransition>
					<i className={props.focused ?'focused iconfont':'iconfont'} >&#xe614;</i>
					{getListArea(props.focused)}
					
				</SearchWrapper>				
			</Nav>
			<Addition>
				<Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
				<Button className="reg">注册</Button>					
			</Addition>
		</HeaderWrapper>	
	);				
}
//class Header extends Component {
//	
//
//}
const mapStateToProps = (state) => {
	return {
//		focused: state.header.focused
//		focused: state.get("header").get('focused')
		focused: state.getIn(["header",'focused'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleIputFocus() {
//			const action = {
//				type: 'search_focus'
//			};
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);