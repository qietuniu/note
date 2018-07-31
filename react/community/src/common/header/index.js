import React, { Component } from 'react';
import { 
	HeaderWrapper, Logo, Nav, NavItem, NavSearch,Addition,Button,SearchWrapper
} from './style'
class Header extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			focused: true
		}
	}
	
	render() {
		return (
			<HeaderWrapper>
{/*			<Logo href='/'/> */}
				<Logo />
				<Nav>
					<NavItem className="fl active">首页</NavItem>
					<NavItem className="fl">下载App</NavItem>
					<NavItem className="fr">登录</NavItem>
					<NavItem className="fr">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<NavSearch className={this.focused ?'focused':''}/>
						<i className={this.focused ?'focused iconfont':'iconfont'} >&#xe614;</i>
					</SearchWrapper>
					
				</Nav>
				<Addition>
					<Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
					<Button className="reg">注册</Button>					
				</Addition>
			</HeaderWrapper>
		)
	}
}

export default Header;
