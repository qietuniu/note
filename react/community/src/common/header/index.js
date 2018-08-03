import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store';
import { Link } from 'react-router-dom';

class Header extends Component {	
	getListArea(){
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave,handleChangePage} = this.props;
		const newList = list.toJS();
		const pageList = [];
		
		if(newList.length){
			for (let i = (page-1)*10; i< page * 10 && i < newList.length; i++){
				pageList.push(
					<SearchInfoItem key={newList[i]} >{newList[i]}</SearchInfoItem>
				)
			}
		}
		
		if(focused || mouseIn){
		return (
			<SearchInfo>
				<SearchInfoTitle onMouseEnter={handleMouseEnter}
								 onMouseLeave={handleMouseLeave}>
					热门搜索
					<SearchInfoSwitch 
							onClick={() =>{ handleChangePage(page, totalPage, this.spinIcon)} }>
						<i ref={(icon) => {this.spinIcon= icon}} className="iconfont spin">&#xe851;</i>
						换一批
					</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					{pageList}
				</SearchInfoList>
			</SearchInfo>			
			)
		}else{
			return null
		}	
	}
	render() {
		const { focused, handleIputFocus, handleInputBlur, list} = this.props;
		return (
		<HeaderWrapper>
			<Link to='/'>
				<Logo />
			</Link>
			
			<Nav>
				<NavItem className="fl active">首页</NavItem>
				<NavItem className="fl">下载App</NavItem>
				<NavItem className="fr">登录</NavItem>
				<NavItem className="fr">
					<i className="iconfont">&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition in={focused}
									timeout={200}
									classNames="slide">
						<NavSearch  className={focused ?'focused':''} 
								onFocus={() => {handleIputFocus(list)}}
								onBlur={handleInputBlur}></NavSearch>
					</CSSTransition>
					<i className={focused ?'focused iconfont zoom':'iconfont zoom'} >&#xe614;</i>
					{this.getListArea()}
					
				</SearchWrapper>				
			</Nav>
			<Addition>
				<Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
				<Button className="reg">注册</Button>					
			</Addition>
		</HeaderWrapper>	
	);		
	}

}

const mapStateToProps = (state) => {
	return {
//		focused: state.header.focused
//		focused: state.get("header").get('focused')
		focused: state.getIn(["header",'focused']),
		list: state.getIn(['header','list']),
		page: state.getIn(["header",'page']),
		totalPage: state.getIn(["header",'totalPage']),
		mouseIn: state.getIn(["header",'mouseIn'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleIputFocus(list) {
//			const action = {
//				type: 'search_focus'
//			};
			if(list.size === 0){
				dispatch(actionCreators.getList());
			}			
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin){
			let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
			if(originAngle) {
				originAngle = parseInt(originAngle, 10)
			}else{
				originAngle=0;
			}
			spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
			if(page < totalPage){
				dispatch(actionCreators.changePage(page+1))
			}else{
				dispatch(actionCreators.changePage(1))
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);