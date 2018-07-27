import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
	position:relative;
	height:58px;
	border-bottom:1px solid #f0f0f0
`
export const Logo = styled.a.attrs({
	href:'/'
})`
	position:absolute;
	top:0;
	left:0;
	width:100px;
	height:56px;
	background:url(${logoPic});
	background-size:contain;
`

export const Nav = styled.div`
	width:960px;
	height:100%;
	padding-right:70px;
	box-sizing:border-box;
	margin:0 auto;	
`

export const NavItem = styled.div`
	line-height: 56px;
	padding:0 15px;
	font-size:17px;
	color:#333;
	&.fl{
		float: left;
	}
	&.fr{
		float: right;
		color:#969696;
	}
	&.active{
		color:#ea6f5a;
	}
`
export const SearchWrapper = styled.div`
	position:relative;
	float:left;	
	.iconfont {
		position:absolute;
		right:12px;
		bottom:14px;
		width:30px;
		line-height:30px;
		border-radius:15px;
		text-align:center;
		background:#999
	}
`

export const NavSearch = styled.input.attrs({
	placeholder:'搜索'
})`
	width:160px;
	height:38px;
	padding:0 20px;
	box-size:border-border
	margin:9px;
	margin-left:20px;
	border:none;
	outline:none;
	border-radius:19px;
	font-size:14px;
	background:#eee;
	&:placeholder{
		color:#999
	}
`
export const Addition = styled.div`
	position:absolute;
	right:0;
	top:0;
	width:960px;
	height:56px;	
`
export const Button = styled.div`
	float:right;	
	margin-top:9px;
	margin-right:20px;
	padding:0 20px;
	line-height:38px;
	border-radius:19px;
	border:1px solid #ec6149;
	font-size:14px;
	&.reg{
		color:#ec6149
	}
	&.writting{
		color:#fff;
		background-color:#ec6149
	}
`















